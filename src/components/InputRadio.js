import React from 'react';
import '../stylesheets/Design.scss';

class InputRadio extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (ev) => {
    const data = {
      name: this.props.name,
      value: ev.target.value,
    };
    console.log('me han seleccionado desde InputRadio', data);
    this.props.handleInput(data);
  };

  render() {
    return (
      <div>
        <label className={this.props.classLabel} htmlFor={this.props.id}>
          <input
            className={this.props.classInput}
            id={this.props.id}
            type='radio'
            value={this.props.value}
            name={this.props.name}
            checked={this.props.checked}
            onChange={this.handleChange}
          />
          <div className={this.props.colorA}></div>
          <div className={this.props.colorB}></div>
          <div className={this.props.colorC}></div>
        </label>
      </div>
    );
  }
}

export default InputRadio;
