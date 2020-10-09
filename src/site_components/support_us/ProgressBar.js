import React, {Component} from 'react';
import './SupportUs.scss';


class ProgressBar extends Component {
    //width, percent
    constructor(props) {
        super(props);

        this.state = {
            progressPercent: 0
        }
    }

    componentDidMount() {
        this.setState({progressPercent: this.props.percent});
    }

    render(){
        return (
            <div className="support-us-progress-bar">
                <div style={{ width: this.state.progressPercent +'%' }} id={this.props.type+"-progress"} />
            </div>
        );
    }
}

export default ProgressBar;