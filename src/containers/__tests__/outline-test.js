import React from "react";
import OutlineComponent from "../outline_container.jsx";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);
const store = mockStore({
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
        listItems: []
    }
});

it("renders correctly", () => {
    const tree = renderer.create(
    <Provider store={store}>
      <OutlineComponent/>
    </Provider>
  ).toJSON();
    expect(tree).toMatchSnapshot();
});
