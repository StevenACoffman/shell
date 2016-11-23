import React, { PropTypes } from "react";
import SectionName from "./name_component.jsx";
import SectionNotes from "./notes_component.jsx";
import Citations from "./citations_component.jsx";
import SectionButtons from "./buttons_component.jsx";
import AddCitations from "./add_citations_component.jsx";

class SectionComponent extends React.Component {
    render() {
        const { id, name, notes, canMoveSectionUp, canMoveSectionDown } = this.props;
        return (
            <div className="row">
                <div className="small-9 columns">
                    <SectionName sectionId={id} name={name} nameId={`name_${id}`} />
                    <SectionNotes sectionId={id} notes={notes} notesId={`notes_${id}`} />
                    <div>
                        <Citations sectionId={id} />
                    </div>
                    <AddCitations sectionId={id} />
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
    name: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
    canMoveSectionUp: PropTypes.bool.isRequired,
    canMoveSectionDown: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
};

export default SectionComponent;
