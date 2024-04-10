/* eslint-disable react/prop-types */
// import React from 'react';
// import PropTypes from 'prop-types';

// const Page = ({page = 10}) => { //默认值
//     return (
//         <div>
//             props的默认值:{page}
//         </div>
//     );
// };

// Page.propTypes = {
    
// };

// export default Page;


import { Component } from 'react'

export default class Page extends Component {
    static defaultProps = {
        page: 10 //默认值
    }

  render() {
    return (
      <div>
        props的默认值:{this.props.page}
      </div>
    )
  }
}
