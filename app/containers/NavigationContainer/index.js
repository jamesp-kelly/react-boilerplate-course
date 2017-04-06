/*
 *
 * NavigationContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectNavigationContainer from './selectors';
import Navigation from '../../components/Navigation';

export class NavigationContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Navigation {...this.props} /> //pass all props from container to component 
    );
  }
}

const mapStateToProps = selectNavigationContainer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
