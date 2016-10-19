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
