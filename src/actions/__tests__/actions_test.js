
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import * as actions from "..";
import * as actionTypes from "../actionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("getCookie", () => {

    const cookies = "foo=bar; baz=qux;";
    it("should return the correct cookie value when cookie is present", () => {
        expect(actions.getCookie("foo", cookies)).toEqual("bar");
        expect(actions.getCookie("baz", cookies)).toEqual("qux");
    });

    it("should return an empty string when cookie is not present", () => {
        expect(actions.getCookie("corge", cookies)).toEqual("");
    });
});

describe("fetchSaveOutline", () => {
    pit("should trigger a saveOutline action", () => {
        const mockState = { sections: [], thesis: {}, list: {listItems: []} };
        const dispatch = jest.fn();
        const getState = jest.fn().mockReturnValue(mockState);
        const fn = actions.fetchSaveOutline();

        expect(fn).toBeInstanceOf(Function);

        fn(dispatch, getState);

        expect(getState).toHaveBeenCalled();
    });

    pit("should trigger a post request using 'fetch'", () => {
        const mockState = { sections: [], thesis: {}, list: {listItems: []} };
        const store = mockStore(mockState);
        const expectedActions = [{type: actionTypes.REQUEST_SAVE}, {type: actionTypes.OUTLINE_SAVED}];

        store.dispatch(actions.fetchSaveOutline())
            .then((result) => {
                expect(store.getActions()).toEqual(expectedActions);
            })
            .catch((reason) => {throw new Error(`SaveOutline failed in test because ${reason}`);});
    });
});


describe("shouldFetchCitationFormat", () => {
    it("returns false when listItem is undefined", () => {
        expect(actions.shouldFetchCitationFormat(undefined, "mla")).toBe(false);
    });

    it("returns false when listItem is fetching", () => {
        const listItem = { isFectching: true };
        expect(actions.shouldFetchCitationFormat(listItem, "mla")).toBe(false);
    });

    it("returns true when citation style is not set on list item", () => {
        const listItem = { doi: "10.20/304050", isFetching: false };
        expect(actions.shouldFetchCitationFormat(listItem, "mla")).toBe(true);
    });

    it("returns true when citation style is already set on list item", () => {
        const listItem = { doi: "10.20/304050", isFetching: false, citationStyle: "mla" };
        expect(actions.shouldFetchCitationFormat(listItem, "apa")).toBe(true);
    });
});

describe("deleteSection", () => {
    it("returns the expected action type and sectionId when called", () => {
        const receivedValue = actions.deleteSection(1);
        expect(receivedValue.sectionId).toBe(1);
        expect(receivedValue.type).toBe("DELETE_SECTION");
    });
});