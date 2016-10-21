/*jshint esnext:true */

export const changeThesis = (text) => ({
  type: 'CHANGE_THESIS',
  text
});

export const addCitation = (sectionId, citationId, text='') => ({
  type: 'ADD_CITATION',
  sectionId,
  citationId,
  text
});

export const addSection = (id) => ({
  type: 'ADD_SECTION',
  id
});

export const moveSectionUp = (sectionIndex) => ({
  type: 'MOVE_SECTION_UP',
  sectionIndex
});

export const moveSectionDown = (sectionIndex) => ({
  type: 'MOVE_SECTION_DOWN',
  sectionIndex
});

export const deleteSection = (id) => ({
  type: 'DELETE_SECTION',
  id
});