// jshint ignore: start
// above comment is because old jshint (2.8) does not understand default arguments until 2.91+

import citationsReducer from './citationsReducer';

const sectionReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CITATION':
      if (state.id !== action.sectionId) {
        return state
      }

      return Object.assign({}, state, {
        citations: citationsReducer(state.citations, action)
      });
    default:
      return state
  }
}

const defaultSectionFactory = (id) =>({
    id,
    name: '',
    notes: '',
    citations: [],
    canMoveSectionUp: false,
    canMoveSectionDown: false,
    canDeleteSection: false
});

const updateSections = sections => {
  const sectionsLength = sections.length;
  return sections.map((section, index) => {
    section.canMoveSectionUp = sectionsLength > 1 && index !== 0;
    section.canMoveSectionDown = sectionsLength > 1 && index !== sectionsLength - 1;
    section.canDeleteSection = sectionsLength > 1;
    return section;
  });
}

const swapSectionsItem = (sections, oldIndex, newIndex) => {
  if (newIndex < sections.length && newIndex >= 0) {
    [sections[oldIndex], sections[newIndex]] = [sections[newIndex], sections[oldIndex]];
  }
  return sections
}

const sectionsReducer = (state = [defaultSectionFactory(0)], action) => {
  switch (action.type) {
    case 'ADD_SECTION':
      return updateSections([
        ...state,
        defaultSectionFactory(action.id, state.length)
      ]);
    case 'MOVE_SECTION_UP':
      return updateSections(swapSectionsItem(
        state.slice(),
        action.sectionIndex,
        action.sectionIndex - 1
      ));
    case 'MOVE_SECTION_DOWN':
      return updateSections(swapSectionsItem(
        state.slice(),
        action.sectionIndex,
        action.sectionIndex + 1
      ));
    case 'ADD_CITATION':
      return state.map(section =>
        sectionReducer(section, action)
      )
    default:
      return state;
  }
};

export default sectionsReducer;
