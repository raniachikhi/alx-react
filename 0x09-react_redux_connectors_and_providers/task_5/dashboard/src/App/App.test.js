/**
 * @jest-environment jsdom
 */
import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { shallow, mount } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import { AppContext, user, logOut } from "./AppContext";
import { fromJS } from "immutable";
import { createStore } from "redux";
import uiReducer from "../reducers/uiReducer";

describe('App Test', () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    const store = createStore(uiReducer);
    wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>)
  });

  it('Renders App Component without crashing', () => {
    expect(wrapper.exists());
  });

  it('App component contains the Notification Component', () => {
    expect(wrapper.find("Notifications")).toHaveLength(1);
  });

  it('App component contains the Header Component', () => {
    expect(wrapper.find("Header")).toHaveLength(1);
  });

  it('App component contains the Login Component', () => {
    expect(wrapper.find("Login")).toHaveLength(1);
  });

  it('App component contains the Footer Component', () => {
    expect(wrapper.find("Footer")).toHaveLength(1);
  });

  it('test to check that CourseList is not displayed inside App', () => {
    expect(wrapper.find("CourseList")).toHaveLength(0);
  });

});


describe("<App />", () => {
  it("mapStateToProps returns the right object when the user Login", () => {
    let state = fromJS({
      isUserLoggedIn: true,
    });

    const result = mapStateToProps(state);

    expect(result).toEqual({ isLoggedIn: true })
  })
})
