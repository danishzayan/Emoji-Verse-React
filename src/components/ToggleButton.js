import React, { Component } from "react";
import Switch from "react-switch";

class ToggleButton extends Component {
  constructor() {
    super();
    this.state =
      localStorage.getItem("theme") === "dark"
        ? { checked: true }
        : { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });

    this.props.toggleTheme(
      localStorage.getItem("theme") === "dark" ? "light" : "dark"
    );
  }

  render() {
    return (
      <label className="mt-5">
        <Switch
          offColor="#000"
          onColor="#000"
          offHandleColor="#fff"
          onHandleColor="#fff"
          onChange={this.handleChange}
          checked={this.state.checked}
        />
      </label>
    );
  }
}

export default ToggleButton;
