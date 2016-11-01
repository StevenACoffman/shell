/*jshint esnext:true */
import fetch from 'isomorphic-fetch';

export const changeThesis = (text) => ({
  type: 'CHANGE_THESIS',
  text
});

export const addCitation = (sectionId, text='') => ({
  type: 'ADD_CITATION',
  sectionId,
  text
});

export const deleteCitation = (sectionId, citationIndex) => ({
  type: 'DELETE_CITATION',
  sectionId,
  citationIndex
});

export const addSection = (sectionId) => ({
  type: 'ADD_SECTION',
  sectionId
});

export const moveSectionUp = (sectionId) => ({
  type: 'MOVE_SECTION_UP',
  sectionId
});

export const moveSectionDown = (sectionId) => ({
  type: 'MOVE_SECTION_DOWN',
  sectionId
});

export const modifySectionName = (sectionId, name) => ({
  type: 'MODIFY_SECTION_NAME',
  sectionId,
  name
});

export const modifySectionNotes = (sectionId, notes) => ({
  type: 'MODIFY_SECTION_NOTES',
  sectionId,
  notes
});

export const deleteSection = (sectionId) => ({
  type: 'DELETE_SECTION',
  sectionId
});

export function changeCitationFormat(citationStyle) {
  return {type: 'CHANGE_CITATION_FORMAT', citationStyle};
}

function requestCitationFormat(doi, citationStyle) {
  return {type: 'REQUEST_CITATION_FORMAT', doi, citationStyle};
}

function receiveCitationFormat(doi, json) {
  return {type: 'RECEIVE_CITATION_FORMAT', doi, citationStyle: json.citation_style, text: json.citation};
}

export function fetchCitationFormatIfNeeded(listItem, citationStyle) {
  return (dispatch, getState) => {
    if (shouldFetchCitationFormat(listItem, citationStyle)) {
      return dispatch(fetchCitationFormat(listItem, citationStyle))
    }
  };
}

export function fetchCitationFormat(listItem, citationStyle = 'mla') {
  return dispatch => {
    dispatch(requestCitationFormat(listItem, citationStyle))
    return fetch(`/citation/${citationStyle}/${listItem.doi}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    }).then(json => dispatch(receiveCitationFormat(listItem.doi, json)));
  }
}

function shouldFetchCitationFormat(listItem, citationStyle) {
  if (!listItem || listItem.isFetching) {
    return false;
  } else if (listItem.doi) {
    return typeof listItem[citationStyle] === 'undefined';
  } else {
    return false;
  }
}
