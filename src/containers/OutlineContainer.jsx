import React, { Component } from "react";
import Thesis from "../components/Thesis.jsx";
import AddSection from "../components/AddSection.jsx";
import SectionList from "../components/SectionList.jsx";
import SaveOutline from "../components/SaveOutline.jsx";
import DownloadOutline from "../components/DownloadOutline.jsx";
import CitationFormat from "./CitationFormat.jsx";


export default class OutlineContainer extends Component {
    render() {
        return (
            <div>
                <div className="button-flex-row">
                    <DownloadOutline />
                    <CitationFormat />
                    <SaveOutline />
                </div>
              <hr/>
                <div className="row">
                    <div className="columns">
                        <Thesis />
                        <SectionList />
                        <hr/>
                        <AddSection />
                    </div>
                </div>
            </div>
        );
    }
}
