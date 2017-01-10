import React from "react";
import OutlineContainer from "../OutlineContainer.jsx";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

export const initializeState = () => ({
    thesis: {thesis_value:""},
    sections: [{
        id:0,
        name: "",
        notes: "",
        citations: [],
        canMoveSectionUp: false,
        canMoveSectionDown: false,
        selectedListItems: []
    }],
    list: {
        citationStyle: "",
        listId: 1,
        listItems: []
    },
    outlineState: { isPristine: true },
    userId: "mockuser"
});

const store = mockStore(initializeState());

it("renders correctly", () => {
    const tree = renderer.create(
        <Provider store={store}>
            <OutlineContainer/>
        </Provider>
  ).toJSON();
    expect(tree).toMatchSnapshot();
});
