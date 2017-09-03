import React from 'react';
import Root from '../containers/meta_tags';


const pages = [PageOne, PageTwo];

export default class Meta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: null
    };
  }


  render() {
    const Page = typeof this.state.page === 'number' && pages[ this.state.page ];

    return (
      <Root>
        { Page ? <Page /> : <h2>We are at the root</h2> }
        <hr />
       
      </Root>
    );
  }
}