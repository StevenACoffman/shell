/*eslint no-console: "off"*/
import fetch from "isomorphic-fetch";

export const toggleCitationModal = (sectionId, isOpen) => ({
    type: "TOGGLE_CITATION_MODAL",
    sectionId,
    isOpen
});

export const selectListItem = (sectionId, listItemIndex) => ({
    type: "SELECT_LIST_ITEM",
    sectionId,
    listItemIndex
});

export const unselectListItem = (sectionId, listItemIndex) => ({
    type: "UNSELECT_LIST_ITEM",
    sectionId,
    listItemIndex
});

export const selectAllListItems = (sectionId, listItems) => ({
    type: "SELECT_ALL_LIST_ITEMS",
    sectionId,
    listItems
});

export const changeThesis = (text) => ({
    type: "CHANGE_THESIS",
    text
});

export const addCitations = (sectionId, citations = []) => ({
    type: "ADD_CITATIONS",
    sectionId,
    citations
});

export const clearSelectedListItems = (sectionId) => ({
    type: "CLEAR_SELECTED_LIST_ITEMS",
    sectionId
});

export const deleteCitation = (sectionId, citationIndex) => ({
    type: "DELETE_CITATION",
    sectionId,
    citationIndex
});

export const addSection = () => ({
    type: "ADD_SECTION",
});

export const moveSectionUp = (sectionId) => ({
    type: "MOVE_SECTION_UP",
    sectionId
});

export const moveSectionDown = (sectionId) => ({
    type: "MOVE_SECTION_DOWN",
    sectionId
});

export const modifySectionName = (sectionId, name) => ({
    type: "MODIFY_SECTION_NAME",
    sectionId,
    name
});

export const modifySectionNotes = (sectionId, notes) => ({
    type: "MODIFY_SECTION_NOTES",
    sectionId,
    notes
});

export const deleteSection = (sectionId) => ({
    type: "DELETE_SECTION",
    sectionId
});

export function requestChangedCitationFormat(nextCitationStyle) {
    return (dispatch, getState) => {
        const { list } = getState();
        const { listItems } = list;
        listItems.forEach(listItem => {
            if (shouldFetchCitationFormat(listItem, nextCitationStyle)) {
                actuallyFetchCitationFormat(listItem, nextCitationStyle, dispatch);
            }
        });
        dispatch(changeCitationFormat(nextCitationStyle));
    };
}

export function changeCitationFormat(citationStyle) {
    return {type: "CHANGE_CITATION_FORMAT", citationStyle};
}

function requestCitationFormat(doi, citationStyle) {
    return {type: "REQUEST_CITATION_FORMAT", doi, citationStyle};
}

function receiveCitationFormat(doi, json) {
    return {type: "RECEIVE_CITATION_FORMAT", doi, citationStyle: json.citation_style, text: json.citation};
}

function requestListItems(listId) {
    return {type: "REQUEST_LIST_ITEMS", listId};
}

function receiveListItems(items, dispatch) {
    items.map(listItem => dispatch(fetchCitationFormatIfNeeded(listItem,"mla")));
    return {type: "FETCH_LIST_ITEMS", items};
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

function actuallyFetchCitationFormat(listItem, citationStyle, dispatch) {
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
}

export function fetchCitationFormat(listItem, citationStyle) {
    return dispatch => {
        actuallyFetchCitationFormat(listItem, citationStyle, dispatch);
    };
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

export const saveOutline = () => {
    return (dispatch, getState) => {
        dispatch({ type: "SAVE_OUTLINE_REQUESTED" });
        const outlineState = getState();

        const sections = outlineState.sections.map(section => {
            const { name, notes, citations } = section;
            return { name, citations, notes };
        });
        const outlineData = JSON.stringify({
            outline_body: {
                thesis: outlineState.thesis.thesis_value,
                sections: sections
            },
            list_id: outlineState.list.listId
        });
        const url = "/myjstor/outline/save/";
        const allCookies = document.cookie;
        return fetch(url, {
            method: "POST",
            credentials: "include",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "X-CSRFToken": getCookie("csrftoken", allCookies)
            },
            body: outlineData
        }).then(response => {
            if (!response.ok) {
                console.error(response.statusText);
            }
            return response.json();
        }, error => console.error(error));
    };
};
