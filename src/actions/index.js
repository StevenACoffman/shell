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

export const moveSectionUp = (sectionId) => ({
  type: 'MOVE_SECTION_UP',
  sectionId
});

export const moveSectionDown = (sectionId) => ({
  type: 'MOVE_SECTION_DOWN',
  sectionId
});
export const deleteSection = (id) => ({
    type: 'DELETE_SECTION',
    id
  }); 
