import * as actionTypes from "../actions/actionTypes";
import sectionReducer from "./sectionReducer";

const updateSections = sections => sections
  .map((section, index, theSections) => ({
      ...section,
      canMoveSectionUp: theSections.length > 1 && index !== 0,
      canMoveSectionDown: theSections.length > 1 && index !== theSections.length - 1,
      selectedListItems: []
  }));

const swapSectionsItem = (sections, sourceId, targetId) => {
    if (targetId >= 0 && targetId < sections.length) {
        [sections[sourceId], sections[targetId]] = [sections[targetId], sections[sourceId]];
    }
    return sections;
};

const sectionsReducer = (state = [undefined], action) => {
    switch (action.type) {
    case actionTypes.ADD_SECTION:
        return updateSections([
            ...state,
            {
                name: "",
                notes: "",
                citations: []
            }
        ]);
    case actionTypes.MOVE_SECTION_UP:
        return updateSections(swapSectionsItem(
        state.slice(),
        action.sectionId,
        action.sectionId - 1
      ));
    case actionTypes.MOVE_SECTION_DOWN:
        return updateSections(swapSectionsItem(
        state.slice(),
        action.sectionId,
        action.sectionId + 1
      ));
    case actionTypes.DELETE_SECTION:
        return updateSections(state
        .filter((section, index) => (action.sectionId !== index)));
    default:
        return state
        .map((section, index) => {
            if (action.sectionId === undefined || action.sectionId === index) {
                return sectionReducer(section, action);
            }
            return section;
        });
    }
};

export { updateSections };
export default sectionsReducer;
