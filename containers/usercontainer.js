import {connect} from 'react-redux';
import Home from '../components/user';
import {
  addUserAction,
  fetchUsersAction,
  fetchSuccessAction,
  fetchFailedAction,
} from '../actions/index';
import {useState} from 'react';
import userReducers from '../reducers';
const mapSateToProps = state => {
  return {
    user: state.userReducers,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchUsersAction: () => {
      dispatch(fetchUsersAction());
    },
    onAddUsers: newUser => {
      dispatch(addUserAction(newUser));
    },
  };
};
const UserContainer = connect(
  mapSateToProps,
  mapDispatchToProps,
)(Home);
export default UserContainer;
