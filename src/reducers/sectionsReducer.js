// jshint ignore: start
// above comment is because old jshint (2.8) does not understand default arguments until 2.91+

import sectionReducer from "./sectionReducer.js";


const updateSections = sections => sections
  .map((section, index, theSections) => ({
      ...section,
      canMoveSectionUp: theSections.length > 1 && index !== 0,
      canMoveSectionDown: theSections.length > 1 && index !== theSections.length - 1,
      selectedListItems: []
  })
  );

const swapSectionsItem = (sections, sourceId, targetId) => {
    if (targetId >= 0 && targetId < sections.length) {
        [sections[sourceId], sections[targetId]] = [sections[targetId], sections[sourceId]];
    }
    return sections;
};

const sectionsReducer = (state = [undefined], action) => {
    switch (action.type) {
    case "ADD_SECTION":
        return updateSections([
            ...state,
            {
                name: "",
                notes: "",
                citations: []
            }
        ]);
    case "MOVE_SECTION_UP":
        return updateSections(swapSectionsItem(
        state.slice(),
        action.sectionId,
        action.sectionId - 1
      ));
    case "MOVE_SECTION_DOWN":
        return updateSections(swapSectionsItem(
        state.slice(),
        action.sectionId,
        action.sectionId + 1
      ));
    case "DELETE_SECTION":
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
