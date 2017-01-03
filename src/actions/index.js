/*eslint no-console: "off"*/
// @flow

import fetch from "isomorphic-fetch";
import * as actionTypes from "./actionTypes";

type Action = Object;
type Dispatch = (action: Action) => void;

export const toggleCitationModal = (sectionId: number, isOpen:boolean) => ({
    type: actionTypes.TOGGLE_CITATION_MODAL,
    sectionId,
    isOpen
});

export const toggleDeleteSectionModal = (sectionId: number, isOpen:boolean) => ({
    type: actionTypes.TOGGLE_DELETE_SECTION_MODAL,
    sectionId,
    isOpen
});

export const selectListItem = (sectionId: number, listItemIndex: number) => ({
    type: actionTypes.SELECT_LIST_ITEM,
    sectionId,
    listItemIndex
});

export const unselectListItem = (sectionId: number, listItemIndex: number) => ({
    type: actionTypes.UNSELECT_LIST_ITEM,
    sectionId,
    listItemIndex
});

export const selectAllListItems = (sectionId: number, listItems: Array<mixed>) => ({
    type: actionTypes.SELECT_ALL_LIST_ITEMS,
    sectionId,
    listItems
});

export const changeThesis = (text: string) => ({
    type: actionTypes.CHANGE_THESIS,
    text
});

export const addCitations = (sectionId: number, citations: Array<mixed> = []) => ({
    type: actionTypes.ADD_CITATIONS,
    sectionId,
    citations
});

export const clearSelectedListItems = (sectionId: number) => ({
    type: actionTypes.CLEAR_SELECTED_LIST_ITEMS,
    sectionId
});

export const deleteCitation = (sectionId: number, citationIndex: number) => ({
    type: actionTypes.DELETE_CITATION,
    sectionId,
    citationIndex
});

export const addSection = () => ({
    type: actionTypes.ADD_SECTION,
});

export const moveSectionUp = (sectionId: number) => ({
    type: actionTypes.MOVE_SECTION_UP,
    sectionId
});

export const moveSectionDown = (sectionId: number) => ({
    type: actionTypes.MOVE_SECTION_DOWN,
    sectionId
});

export const modifySectionName = (sectionId: number, name: string) => ({
    type: actionTypes.MODIFY_SECTION_NAME,
    sectionId,
    name
});

export const modifySectionNotes = (sectionId: number, notes: Array<mixed>) => ({
    type: actionTypes.MODIFY_SECTION_NOTES,
    sectionId,
    notes
});

export const deleteSection = (sectionId: number) => ({
    type: actionTypes.DELETE_SECTION,
    sectionId
});

function requestListItems(listId: string) {
    return {type: actionTypes.REQUEST_LIST_ITEMS, listId};
}

function receiveListItems(items) {
    return (dispatch: Dispatch, getState: Function) => {
        const {list} = getState();
        const {citationStyle} = list;

        items.map(listItem => dispatch(fetchCitationFormatIfNeeded(listItem, citationStyle || "mla")));
        dispatch({type: actionTypes.RECEIVE_LIST_ITEMS, items});
    };
}

export function fetchListItems(listId: string) {
    return (dispatch: Dispatch) => {
        const url = `/myjstor/mylists/list/${listId}/items/`;
        
        fetch(url, {
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
            .then(data => {
                dispatch(receiveListItems(data.items || []));
            },
            error => console.error(error));
        dispatch(requestListItems(listId));    
    };
}

export function changeCitationFormat(citationStyle: string) {
    return {type: actionTypes.CHANGE_CITATION_FORMAT, citationStyle};
}

function requestCitationFormat(doi, citationStyle) {
    return {type: actionTypes.REQUEST_CITATION_FORMAT, doi, citationStyle};
}

function receiveCitationFormat(doi, json) {
    return {type: actionTypes.RECEIVE_CITATION_FORMAT, doi, citationStyle: json.citation_style, formattedCitation: json.citation};
}

export const getCookie = (cookieName: string, allCookies :string) => {
    let parts = `; ${allCookies}`.match(`;\\s*${cookieName}=([^;]+)`);
    return parts ? parts[1] : "";
};
export const  requestCaptainsLog = (eventType: string) => ({type: actionTypes.REQUEST_CAPTAINS_LOG, eventType});

//eventType = "save_outline" for example
export const fetchCaptainsLog = (eventType: string) => (
    (dispatch: Dispatch, getState: Function) => {
        const outlineState = getState();
        const url = "/capns_log/";
        const crsfToken = getCookie("csrftoken", document.cookie);
        const outlineId = outlineState.list.listId;
        const userId = outlineState.userId;
        const captainsLogMessage = {
            uuid: getCookie("UUID", document.cookie),
            engagement_kpi_v1: true,
            myjstor_userid: userId,
            mylists_list_id: outlineId,
            event_type: eventType
        };
        const params = {message: JSON.stringify(captainsLogMessage)};
        const searchParams = Object.keys(params).map((key) => {
            return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
        }).join("&");

        dispatch(requestCaptainsLog(eventType)); 
        return fetch(url, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "X-Requested-With": "XMLHttpRequest"
            },
            body: searchParams
        }).then(response => {
            if (!response.ok) {
                console.error(response.statusText);
            }
            return response.json();
        }, error => console.error(error)).then(response => {
            if (response.success) {
                return true;
            }
        });
   
    });

const fetchCitationFormat = (listItem: Object, citationStyle: string) => (dispatch: Dispatch) => {
    fetch(`/citation/${citationStyle}/${listItem.doi}`, {
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
    dispatch(requestCitationFormat(listItem, citationStyle));
};

export function requestChangedCitationFormat(nextCitationStyle:string) {
    return (dispatch: Dispatch, getState: Function) => {
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

export function shouldFetchCitationFormat(listItem:Object, citationStyle: string) {
    if (listItem && listItem.doi) {
        return [undefined, "Loading Formatted Citation"].includes(listItem[citationStyle]);
    } else {
        return false;
    }
}

export function fetchCitationFormatIfNeeded(listItem:Object, citationStyle: string) {
    return (dispatch: Dispatch, getState: Function) => {
        if (shouldFetchCitationFormat(listItem, citationStyle)) {
            dispatch(fetchCitationFormat(listItem, citationStyle));
        }
    };
}

export const downloadOutline = (outlineId: number) => {
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
        const syntheticEvent = document.createEvent("MouseEvents");
        syntheticEvent.initEvent("click", true, true);
        link.dispatchEvent(syntheticEvent);
        document.body.removeChild(link);
    }

    return {type: actionTypes.DOWNLOAD_OUTLINE, outlineId};
};

export const prepareToSaveOutline = (outlineState: Object) => {
    const sections = outlineState.sections.map(section => {
        const {name, notes, citations} = section;
        return {name, citations, notes};
    });
    const filteredListItems = outlineState.list.listItems
            .map((listItem) => ({
                doi: listItem.doi,
                author: listItem.author,
                title: listItem.title,
                citation_line: listItem.citation_line,
                formattedCitation: listItem.formattedCitation
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
export const  requestSave = () => ({type: actionTypes.REQUEST_SAVE});
export const  requestSaveAndThenDownload = () => ({type: actionTypes.REQUEST_SAVE_AND_THEN_DOWNLOAD});

export const fetchSaveOutline = () => (
    (dispatch: Dispatch, getState: Function) => {
        const outlineState = getState();
        const {url, crsfToken, outlineData} = prepareToSaveOutline(outlineState);
        dispatch(requestSave()); 
        dispatch(fetchCaptainsLog("save_outline"));
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
    (dispatch: Dispatch, getState: Function) => {
        const outlineState = getState();
        const {url, crsfToken, outlineData, outlineId} = prepareToSaveOutline(outlineState);
       
        fetch(url, {
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
        dispatch(requestSaveAndThenDownload());
    });
