import outlineReducer from "../outlineReducer";
import { ADD_SECTION, OUTLINE_SAVED, SELECT_LIST_ITEM } from "../../actions/actionTypes";

describe("Outline Reducer",() => {
    it("should return the correct initial state", () => {
        expect(outlineReducer(undefined, {})).toEqual({ isPristine: true });
    });

    it("should set 'isPristine' to false on state when a dirty action is dispatched on a clean state", () => {
        const state = { isPristine: true };
        const action = { type: ADD_SECTION };
        expect(outlineReducer(state, action)).toEqual({ isPristine: false });
    });

    it("should set 'isPristine' to true when OUTLINE_SAVED action is dispatched", () => {
        const state = { isPristine: false };
        const action = { type: OUTLINE_SAVED };
        expect(outlineReducer(state, action)).toEqual({ isPristine: true });
    });

    it("should return state as is when neither a dirty action nor OUTLINE_SAVED action is dispatched", () => {
        const action = { type: SELECT_LIST_ITEM };
        expect(outlineReducer({ isPristine: false }, action)).toEqual({ isPristine: false });
        expect(outlineReducer({ isPristine: true }, action)).toEqual({ isPristine: true });
    });
});