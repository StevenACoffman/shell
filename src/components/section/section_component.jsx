import React from "react";
import SectionName from "./name_component.jsx";
import SectionNotes from "./notes_component.jsx";
import Citations from "./citations_component.jsx";
import SectionButtons from "./buttons_component.jsx";
import AddCitations from "./add_citations_component.jsx";

class SectionComponent extends React.Component {
    render() {
        const { id, name, notes, citations, canMoveSectionUp, canMoveSectionDown, listItems, selectedListItems } = this.props;
        return (
            <div className="row">
                <div className="small-9 columns">
                    <SectionName sectionId={id} name={name} nameId={`name_${id}`} />
                    <SectionNotes sectionId={id} notes={notes} notesId={`notes_${id}`} />
                    <div>
                        <Citations sectionId={id} citations={citations} citationsId={`citations_${id}`} />
                    </div>
                    <AddCitations
                        sectionId={id}
                        selectedListItems={selectedListItems}
                        listItems={listItems}
                        />
                </div>
                <div className="small-3 columns">
                    <SectionButtons
                        sectionId={id}
                        canMoveSectionUp={canMoveSectionUp}
                        canMoveSectionDown={canMoveSectionDown}
                        />
                </div>
            </div>
        );
    }
}

SectionComponent.propTypes = {
    name: React.PropTypes.string.isRequired,
    notes: React.PropTypes.string.isRequired,
    citations: React.PropTypes.array.isRequired,
    canMoveSectionUp: React.PropTypes.bool.isRequired,
    canMoveSectionDown: React.PropTypes.bool.isRequired,
    selectedListItems: React.PropTypes.array.isRequired,
    id: React.PropTypes.number.isRequired,
    listItems: React.PropTypes.array.isRequired
};

export default SectionComponent;
