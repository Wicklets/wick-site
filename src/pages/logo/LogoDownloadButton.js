import React from 'react';

import '../../scss_styles/LogoPage.scss';
import { saveAs } from 'file-saver';

class LogoDownloadButton extends React.Component {
    
    downloadPackage = () => {
        fetch(this.props.downloadLink)
        .then(res => res.blob())
        .then(blob => saveAs(blob, this.props.fileName))
        .catch(error => {console.error(error)});
    }

    render () {
        return (
            <div className="logo-download-button">
                <div className="logo-download-image-container">
                    <img className="logo-image" src={this.props.imgSrc} />
                </div>
                <div onClick={this.downloadPackage} className="logo-download-interactor">
                    {this.props.text}
                </div>
            </div>
        );
    }
}

export default LogoDownloadButton