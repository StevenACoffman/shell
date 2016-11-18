import React from 'react';
import Thesis from '../components/thesis.jsx';
import AddSection from '../components/add_section.jsx';
import SectionList from '../components/section_list.jsx';
import CitationFormat from './citationFormat.jsx';

export default class OutlineContainer extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <CitationFormat />
        </div>
        <div className="row">
          <div className="small-12 columns">
            <Thesis />
            <SectionList />
            <AddSection />
          </div>
        </div>
      </div>
    );
  }
}
