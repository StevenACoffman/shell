/*eslint no-console: "off"*/

export const getUserId = () => {
    const outlineUserDataElement = document.getElementById("outline-user-data");
    let userId;
    if (outlineUserDataElement && outlineUserDataElement.textContent) {
        try {
            const outlineUserData = JSON.parse(outlineUserDataElement.textContent);
            if (outlineUserData) {
                userId=outlineUserData.myjstor_userid;
            }
        } catch (e) {
            console.error(e);
        }
    }
    return userId;
};

export const getListIdFromLocation = () => {
    return window.location.search.split("?listId=").pop() || window.location.pathname.split("/myjstor/outline/").pop().replace("/", "") || undefined;
};

export const getOutLineInitialData = () => {
    const outlineInitialDataElement = document.getElementById("outline-initial-data");
    let initialData=null;
    if (outlineInitialDataElement && outlineInitialDataElement.textContent) {
        try {
            initialData = JSON.parse(outlineInitialDataElement.textContent);
        } catch (e) {
            console.error(e);
        }
    }
    return initialData;
};
