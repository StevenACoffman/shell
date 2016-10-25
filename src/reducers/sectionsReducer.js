// jshint ignore: start
// above comment is because old jshint (2.8) does not understand default arguments until 2.91+

import citationsReducer from './citationsReducer';

const defaultSectionFactory = () => ({
    name: '',
    notes: '',
    citations: [],
    canMoveSectionUp: false,
    canMoveSectionDown: false
  });

const sectionReducer = (state = defaultSectionFactory(), action) => {
  switch (action.type) {
    case 'ADD_CITATION':
      return Object.assign({}, state, {
        citations: citationsReducer(state.citations, action)
      });
    case 'MODIFY_SECTION_NAME':
      return Object.assign({}, state, {
        name: action.name
      });
    case 'MODIFY_SECTION_NOTES':
      return Object.assign({}, state, {
        notes: action.notes
      });
    default:
      return state
  }
}

const updateSections = sections => sections
  .map((section, index, theSections) => Object.assign({}, section,
    {
      canMoveSectionUp: theSections.length > 1 && index !== 0,
      canMoveSectionDown: theSections.length > 1 && index !== theSections.length - 1
    })
  );

const swapSectionsItem = (sections, sourceId, targetId) => {
  if (targetId >= 0 && targetId < sections.length) {
    [sections[sourceId], sections[targetId]] = [sections[targetId], sections[sourceId]];
  }
  return sections;
}

const sectionsReducer = (state = [defaultSectionFactory()], action) => {
  switch (action.type) {
    case 'ADD_SECTION':
      return updateSections([
        ...state,
        defaultSectionFactory()
      ]);
    case 'MOVE_SECTION_UP':
      return updateSections(swapSectionsItem(
        state.slice(),
        action.sectionId,
        action.sectionId - 1
      ));
    case 'MOVE_SECTION_DOWN':
      return updateSections(swapSectionsItem(
        state.slice(),
        action.sectionId,
        action.sectionId + 1
      ));
    case 'DELETE_SECTION':
      return updateSections(state
        .filter((section, index) => (action.sectionId !== index)));
    default:
      return state
        .map((section, index) => action.sectionId === index ? sectionReducer(section, action) : section);
  }
};

export default sectionsReducer;
