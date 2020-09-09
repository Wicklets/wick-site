
import './toggle_button.scss';
import React, {Component} from 'react';

class ToggleButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isToggled: false,
            classNames: "tag-button toggle-button-off"
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state => ({
          isToggled: !state.isToggled,
          classNames: (state.classNames == 'tag-button toggle-button-off') ? 'tag-button toggle-button-on' : 'tag-button toggle-button-off'
        }));
    }

    render(){
        return (
            <button class={this.state.classNames} type="button" onClick={this.handleClick}>
                {this.props.children}
            </button>
        );
    }
}

export default ToggleButton