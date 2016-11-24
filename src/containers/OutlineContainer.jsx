import React, { Component } from "react";
import Thesis from "../components/Thesis.jsx";
import AddSection from "../components/AddSection.jsx";
import SectionList from "../components/SectionList.jsx";
import CitationFormat from "./CitationFormat.jsx";

export default class OutlineContainer extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <CitationFormat />
                </div>
                <div className="row">
                    <div className="small-12 columns">
                        <Thesis />
                        <SectionList />
                        <AddSection />
                    </div>
                </div>
            </div>
        );
    }
}
