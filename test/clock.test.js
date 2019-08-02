// enzyme
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import { shallow } from "enzyme";
// component
import Clock from "../src/clock";
// expect
import chai from "chai";
var expect = chai.expect;
// react
import React from "react";

describe("enzyme+mocha", function() {
  const wrapper = shallow(<Clock />);
  it("test of find", function() {
    expect(wrapper.find(".test")).to.have.lengthOf(1);
  });
  it("test of text", function() {
    expect(wrapper.find(".test").text()).to.equal("this is a test");
  });
});
