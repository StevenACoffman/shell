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

export const addSection = (sectionId) => ({
  type: 'ADD_SECTION',
  sectionId
});

export const moveSectionUp = (sectionId) => ({
  type: 'MOVE_SECTION_UP',
  sectionId
});

export const moveSectionDown = (sectionId) => ({
  type: 'MOVE_SECTION_DOWN',
  sectionId
});

export const modifySectionName = (sectionId, name) => {
  console.log(`modifySectionName called with sectionId:${sectionId} and name: ${name}`);
  return({
  type: 'MODIFY_SECTION_NAME',
  sectionId,
  name
})
};

export const modifySectionNotes = (sectionId, notes) => ({
  type: 'MODIFY_SECTION_NOTES',
  sectionId,
  notes
});

export const deleteSection = (sectionId) => ({
  type: 'DELETE_SECTION',
  sectionId
});
