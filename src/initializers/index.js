/*eslint no-console: "off"*/
// @flow
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

export const getOutLineInitialData = () => {
    const outlineInitialDataElement = document.getElementById("outline-initial-data");
    let initialData;
    if (outlineInitialDataElement && outlineInitialDataElement.textContent) {
        try {
            initialData = JSON.parse(outlineInitialDataElement.textContent);
        } catch (e) {
            console.error(e);
        }
    }
    return initialData;
};

