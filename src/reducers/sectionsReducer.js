// jshint ignore: start
// above comment is because old jshint (2.8) does not understand default arguments until 2.91+

import citationsReducer from './citationsReducer';

const sectionReducer = (state = {}, action) => {
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

const defaultSectionFactory = () =>{
  const newSection = ({
    name: '',
    notes: '',
    citations: [],
    canMoveSectionUp: false,
    canMoveSectionDown: false
  })
  //console.log(newSection);
  return newSection};

const updateSections = sections => {
  const sectionsLength = sections.length;
  return sections.map((section, index) => {
    section.canMoveSectionUp = sectionsLength > 1 && index !== 0;
    section.canMoveSectionDown = sectionsLength > 1 && index !== sectionsLength - 1;
    return section;
  });
}

const swapSectionsItem = (sections, sourceId, targetId) => {
  if (targetId >= 0 && targetId < sections.length) {
    console.log("Before Swap:");
    console.log(sections);
    [sections[sourceId], sections[targetId]] = [sections[targetId], sections[sourceId]];
    console.log("After Swap:");
    console.log(sections);
  }
  return sections;
}

const sectionsReducer = (state = [defaultSectionFactory()], action) => {
  switch (action.type) {
    case 'ADD_SECTION':
      console.log(`ADD_SECTION CALLED WITH SECTION_ID: ${action.sectionId}`);
      console.log(state);
      const suchNewState = [
        ...state,
        defaultSectionFactory()
      ];
      console.log("SuchNewState:");
      console.log(suchNewState);
      const evenNewerState = updateSections(suchNewState);
      console.log("EvenNewerState");
      console.log(evenNewerState);
      return evenNewerState;
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
      console.log(state);
      const newState = state
        .filter((section, index) => (action.sectionId !== index))
        .map(
          (section) => Object.assign({},section)
        );
      console.log(newState);
      return newState;
    case 'ADD_CITATION':
      return state
        .map((section, index) => action.sectionId === index ? sectionReducer(section, action) : section)
    case 'MODIFY_SECTION_NAME':
      return state
        .map((section,index) => action.sectionId === index ? sectionReducer(section, action) : section)
    case 'MODIFY_SECTION_NOTES':
      return state
        .map((section,index) => action.sectionId === index ? sectionReducer(section, action) : section)
    default:
      return state;
  }
};

export default sectionsReducer;
