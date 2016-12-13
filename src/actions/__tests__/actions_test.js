
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import * as actions from "..";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Get Cookie", () => {

    const cookies = "foo=bar; baz=qux;";
    it("should return the correct cookie value when cookie is present", () => {
        expect(actions.getCookie("foo", cookies)).toEqual("bar");
        expect(actions.getCookie("baz", cookies)).toEqual("qux");
    });

    it("should return an empty string when cookie is not present", () => {
        expect(actions.getCookie("corge", cookies)).toEqual("");
    });
});

describe("Save Outline", () => {
    pit("should trigger a saveOutline action", () => {
        const mockState = { sections: [], thesis: {}, list: {} };
        const dispatch = jest.fn();
        const getState = jest.fn().mockReturnValue(mockState);
        const fn = actions.saveOutline();

        expect(fn).toBeInstanceOf(Function);

        fn(dispatch, getState);

        expect(getState).toHaveBeenCalled();
    });

    pit("should trigger a post request using 'fetch'", () => {
        const mockState = { sections: [], thesis: {}, list: {} };
        const store = mockStore(mockState);

        store.dispatch(actions.saveOutline())
            .then(() => {
                const expectedActions = store.getActions();
                expect(expectedActions.length).toBe(1);
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