/*eslint no-console: "off"*/
import fetch from "isomorphic-fetch";
import * as actionTypes from "./actionTypes";

export const toggleCitationModal = (sectionId, isOpen) => ({
    type: actionTypes.TOGGLE_CITATION_MODAL,
    sectionId,
    isOpen
});

export const selectListItem = (sectionId, listItemIndex) => ({
    type: actionTypes.SELECT_LIST_ITEM,
    sectionId,
    listItemIndex
});

export const unselectListItem = (sectionId, listItemIndex) => ({
    type: actionTypes.UNSELECT_LIST_ITEM,
    sectionId,
    listItemIndex
});

export const selectAllListItems = (sectionId, listItems) => ({
    type: actionTypes.SELECT_ALL_LIST_ITEMS,
    sectionId,
    listItems
});

export const changeThesis = (text) => ({
    type: actionTypes.CHANGE_THESIS,
    text
});

export const addCitations = (sectionId, citations = []) => ({
    type: actionTypes.ADD_CITATIONS,
    sectionId,
    citations
});

export const clearSelectedListItems = (sectionId) => ({
    type: actionTypes.CLEAR_SELECTED_LIST_ITEMS,
    sectionId
});

export const deleteCitation = (sectionId, citationIndex) => ({
    type: actionTypes.DELETE_CITATION,
    sectionId,
    citationIndex
});

export const addSection = () => ({
    type: actionTypes.ADD_SECTION,
});

export const moveSectionUp = (sectionId) => ({
    type: actionTypes.MOVE_SECTION_UP,
    sectionId
});

export const moveSectionDown = (sectionId) => ({
    type: actionTypes.MOVE_SECTION_DOWN,
    sectionId
});

export const modifySectionName = (sectionId, name) => ({
    type: actionTypes.MODIFY_SECTION_NAME,
    sectionId,
    name
});

export const modifySectionNotes = (sectionId, notes) => ({
    type: actionTypes.MODIFY_SECTION_NOTES,
    sectionId,
    notes
});

export const deleteSection = (sectionId) => ({
    type: actionTypes.DELETE_SECTION,
    sectionId
});

function requestListItems(listId) {
    return {type: actionTypes.REQUEST_LIST_ITEMS, listId};
}

function receiveListItems(items, dispatch) {
    items.map(listItem => dispatch(fetchCitationFormatIfNeeded(listItem, "mla")));
    return {type: actionTypes.FETCH_LIST_ITEMS, items};
}

export function fetchListItems(listId) {
    return dispatch => {
        const url = `/myjstor/mylists/list/${listId}/items/`;
        dispatch(requestListItems(listId));
        return fetch(url, {
            method: "GET",
            credentials: "include",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then(response => {
            if (!response.ok) {
                console.error(response.statusText);
            }
            return response.json();
        }, error => console.error(error))
            .then(data => dispatch(receiveListItems(data.items || [], dispatch)),
            error => console.error(error));
    };
}
export function changeCitationFormat(citationStyle) {
    return {type: actionTypes.CHANGE_CITATION_FORMAT, citationStyle};
}

function requestCitationFormat(doi, citationStyle) {
    return {type: actionTypes.REQUEST_CITATION_FORMAT, doi, citationStyle};
}

function receiveCitationFormat(doi, json) {
    return {type: actionTypes.RECEIVE_CITATION_FORMAT, doi, citationStyle: json.citation_style, text: json.citation};
}

const fetchCitationFormat = (listItem, citationStyle) => (dispatch) => {
    dispatch(requestCitationFormat(listItem, citationStyle));
    return fetch(`/citation/${citationStyle}/${listItem.doi}`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then(response => {
        if (!response.ok) {
            console.error(response.statusText);
        }
        return response.json();
    }, error => console.error(error))
        .then(json => dispatch(receiveCitationFormat(listItem.doi, json)), error => console.error(error));
};

export function requestChangedCitationFormat(nextCitationStyle) {
    return (dispatch, getState) => {
        const {list} = getState();
        const {listItems} = list;
        listItems.forEach(listItem => {
            if (shouldFetchCitationFormat(listItem, nextCitationStyle)) {
                dispatch(fetchCitationFormat(listItem, nextCitationStyle));
            }
        });
        dispatch(changeCitationFormat(nextCitationStyle));
    };
}
export function shouldFetchCitationFormat(listItem, citationStyle) {
    if (!listItem) {
        return false;
    } else if (listItem.doi) {
        return [undefined, "Loading Formatted Citation"].includes(listItem[citationStyle]);
    } else {
        return false;
    }
}

export function fetchCitationFormatIfNeeded(listItem, citationStyle) {
    return (dispatch, getState) => {
        if (shouldFetchCitationFormat(listItem, citationStyle)) {
            return dispatch(fetchCitationFormat(listItem, citationStyle));
        }
    };
}

export const getCookie = (cookieName, allCookies) => {
    let parts = `; ${allCookies}`.match(`;\\s*${cookieName}=([^;]+)`);
    return parts ? parts[1] : "";
};

export const downloadOutline = (outlineId) => {
    const link = document.createElement("a");
    link.href = `/myjstor/outline/${outlineId}/download`;
    //check for HTML5 download attribute support
    if (link.download !== undefined) {
        //Set HTML5 download attribute. This will prevent file from opening if supported.
        link.download = "outline.txt";
    }
    document.body.appendChild(link); 

    //Dispatching (not redux) click event.
    if (document.createEvent) {
        const e = document.createEvent("MouseEvents");
        e.initEvent("click", true, true);
        link.dispatchEvent(e);
        document.body.removeChild(link);
        return true;
    }

    return {type: actionTypes.DOWNLOAD_OUTLINE, outlineId};
};

export const prepareToSaveOutline = (outlineState) => {
    const sections = outlineState.sections.map(section => {
        const {name, notes, citations} = section;
        return {name, citations, notes};
    });
    const filteredListItems = outlineState.list.listItems
            .map((listItem) => ({
                doi: listItem.doi,
                author: listItem.author,
                title: listItem.title,
                citation_line: listItem.citation_line
            }));
    const cleanList = {
        listItems: filteredListItems,
        citationStyle: outlineState.list.citationStyle,
        listId: outlineState.list.listId
    };
    const outlineData = JSON.stringify({
        outline_body: {
            thesis: outlineState.thesis.thesis_value,
            sections: sections,
            list: cleanList
        },
        list_id: outlineState.list.listId
    });
    const url = "/myjstor/outline/save/";
    const crsfToken = getCookie("csrftoken", document.cookie);
    const outlineId = outlineState.list.listId;
    return {url, crsfToken, outlineData, outlineId};
};
export const  requestSave = () => ({type: actionTypes.SAVE_REQUESTED});
export const  requestSaveAndThenDownload = () => ({type: actionTypes.SAVE_AND_THEN_DOWNLOAD});

export const fetchSaveOutline = () => (
    (dispatch, getState) => {
        dispatch(requestSave());
        const outlineState = getState();
        const {url, crsfToken, outlineData} = prepareToSaveOutline(outlineState);

        return fetch(url, {
            method: "POST",
            credentials: "include",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "X-CSRFToken": crsfToken
            },
            body: outlineData
        }).then(response => {
            if (!response.ok) {
                console.error(response.statusText);
            }
            return response.json();
        }, error => console.error(error)).then(response => {
            if (response.success) {
                dispatch({type: actionTypes.OUTLINE_SAVED});
                return true;
            }
        }); 
    });

export const fetchSaveAndThenDownload = () => (
    (dispatch, getState) => {
        dispatch(requestSaveAndThenDownload());
        const outlineState = getState();
        const {url, crsfToken, outlineData, outlineId} = prepareToSaveOutline(outlineState);
       
        return fetch(url, {
            method: "POST",
            credentials: "include",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "X-CSRFToken": crsfToken
            },
            body: outlineData
        }).then(response => {
            if (!response.ok) {
                console.error(response.statusText);
            }
            return response.json();
        }, error => console.error(error)).then(response => {
            if (response.success) {
                dispatch({type: actionTypes.OUTLINE_SAVED});
                dispatch(downloadOutline(outlineId));
            }
        }); 
    });



