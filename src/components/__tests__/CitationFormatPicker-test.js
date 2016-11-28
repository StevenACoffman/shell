import React from "react";
import CitationFormatPicker from "../CitationFormatPicker.jsx";
import renderer from "react-test-renderer";

it("renders correctly", () => {
    const tree = renderer.create(
        <CitationFormatPicker id="citation-format-picker"
                value={""}
                onChange={() => false}
                options={[]}/>
  ).toJSON();
    expect(tree).toMatchSnapshot();
});
