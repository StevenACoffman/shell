import React from "react";
import CitationFormat from "../CitationFormat.jsx";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import {initializeState} from "./outline-test.js";

const mockStore = configureStore([]);
const store = mockStore(initializeState());

it("renders correctly", () => {
    const tree = renderer.create(
        <Provider store={store}>
            <CitationFormat/>
        </Provider>
  ).toJSON();
    expect(tree).toMatchSnapshot();
});
