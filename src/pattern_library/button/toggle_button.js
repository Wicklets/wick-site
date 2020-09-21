
import './toggle_button.scss';
import React, {Component} from 'react';

let classNames = require('classnames');

class ToggleButton extends Component {
    render(){
        return (
            <button 
            onClick={this.props.toggle}
            className={classNames("tag-button", {"toggle-button-on": this.props.toggled, "toggle-button-off": !this.props.toggled})}>
                {this.props.tag}
            </button>
        );
    }
}

export default ToggleButton