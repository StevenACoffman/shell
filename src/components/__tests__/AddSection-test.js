import React from "react";
import AddSection from "../AddSection.jsx";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import {initializeState} from "../../containers/__tests__/outline-test.js";

const mockStore = configureStore([]);
const store = mockStore(initializeState());

it("renders correctly", () => {
    const tree = renderer.create(
        <Provider store={store}>
            <AddSection/>
        </Provider>
  ).toJSON();
    expect(tree).toMatchSnapshot();
});
