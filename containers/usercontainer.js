import React from 'react';
import {connect} from 'react-redux';
import Home from '../components/user';

import {
  fetchUserAction,
  fetchSuccessAction,
  fetchFaildAction,
} from '../actions/index';
const mapStateToProps = state => {
  return {
    user: state.userReduces,
  };
};

const mapDispatchToProps = dispatchEvent => {
  return {
    onFetchUser: () => {
      dispatchEvent(fetchUserAction());
    },
  };
};
const UserConTaiNer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
export default UserConTaiNer;
