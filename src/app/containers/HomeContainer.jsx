import React from 'react';
import {connect} from 'react-redux'
import Home from '/@/app/components/Home/Home';

const mapStateToProps = (state) => {
  return state;
}

export const HomeContainer = connect(
  mapStateToProps,
)(Home);

export default HomeContainer;
