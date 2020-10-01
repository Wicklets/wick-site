/*
    Alex Yixuan Xu (ayxx@nyu.edu)
    WickEditor Website
    WickReferenceModal.js

    Component for Reference Modals
*/

import React from 'react';
import ResponsiveEmbed from 'react-responsive-embed';

import { Modal, ModalHeader, ModalBody} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { saveAs } from 'file-saver';

import './WickReferenceModal.scss';

// code snippet
var CodeMirror = require('react-codemirror');
require('codemirror/mode/javascript/javascript.js');
require('codemirror/lib/codemirror.css');
require('codemirror/theme/monokai.css');

let downloadLink = (link, fileName) => {
    let url = process.env.PUBLIC_URL + link;

    // ES6
    fetch(url)
    .then(res => res.blob())
    .then(blob => saveAs(blob, fileName))
    .catch(error => {console.error(error)});
}

let openInEditor = (link) => {
    window.open(link);
}

const WickReferenceModal = ({referenceData, onClick, isModalOpen}) => {
    //let embed = '/examples/'+ referenceData.exampleName + "/index.html") : referenceData.embed;
    //let download = '/examples/' + referenceData.exampleName + '.wick') : null;

    let numberText = "";
    let titleText = "";

    let fileName = "";
    let embed = null;
    let download = null;
    let openLink = null;

    let descriptionText = "";

    let code = ""
    // let updateCode = (newCode) => {
    //     code = newCode;
    // }

    let syntaxDislay = [];
    let syntaxText = "";

    let parameterDisplay = [];
    
    if (referenceData && JSON.stringify(referenceData) !== '{}'){
        console.log(referenceData)
        numberText = referenceData.group + " Reference Item";
        titleText = ("deprecated" in referenceData) ? referenceData.name + " [deprecated]" : referenceData.name;

        if (referenceData.group === "Script"){
            fileName = referenceData.name.replace(/[()]/g, '').replace(/\s+/g, '') + "-script";
        }
        else {
            fileName = referenceData.name.replace(/[()]/g, '').replace(/\s+/g, '');
        }
        embed = "/examples/reference-"+fileName+".html";
        download = "/examples/reference-"+fileName+".wick";
        openLink = `https://editor.wickeditor.com/?example=reference-${fileName}.wick`;

        descriptionText = referenceData.type + ". " + referenceData.description;

        code = referenceData.snippet;

        syntaxText = referenceData.syntax;

        if (syntaxText){
            syntaxDislay.push(<h3 class="WickReferenceModal-subheader">Syntax</h3>);
            syntaxDislay.push(<p class="WickReferenceModal-syntax">{syntaxText}</p>);
        }

        for (let i=0; i<referenceData.parameters.length; i++){
            
            let typeText = "{";
            // go through each type for each parameter
            for (let j=0; j<referenceData.parameters[i].type.length; j++){
                if (j === referenceData.parameters[i].type.length-1){
                    typeText += referenceData.parameters[i].type[j].name + "}";
                }
                else{
                    typeText += referenceData.parameters[i].type[j].name + " || ";
                }
            }
            parameterDisplay.push(<div><p class="WickReferenceModal-parameter-name">{referenceData.parameters[i].name}</p><p class="WickReferenceModal-parameter-type">{typeText}</p></div>);
            for (let k=0; k<referenceData.parameters[i].type.length; k++){
                parameterDisplay.push(<p class="WickReferenceModal-parameter-description">{referenceData.parameters[i].type[k].name + " : " + referenceData.parameters[i].type[k].description}</p>);
            }
        }
    }

    referenceData = referenceData || {};
    
    return (
    <Modal
        role="dialog"
        aria-modal="true"
        className="WickReferenceModal-container"
        isOpen={isModalOpen}
        toggle={onClick}
        size="lg"
    >
        <ModalHeader className="WickReferenceModal-header"> 
            <p className="WickReferenceModal-number">{numberText}</p>
            <div className="WickReferenceModal-underline" />
            <h2 className="WickReferenceModal-title">{titleText}</h2>
            <button className="WickReferenceModal-close close" onClick={onClick}>X</button>
        </ModalHeader>
        <ModalBody className="WickReferenceModal-body">
            <Container>
                <Row>
                    <Col>
                        <div className="WickReferenceModal-embed">
                            <ResponsiveEmbed tabindex="0" src={embed} ratio="3:2" />
                        </div>
                        <button onClick={() => {downloadLink(download, referenceData.exampleName + '.wick')}}
                        class = "WickReferenceModal-button WickReferenceModal-download">Download Example</button>
                        <button onClick={() => {openInEditor(openLink)}}
                        class = "WickReferenceModal-button WickReferenceModal-open">Open in Editor</button>
                    </Col>
                    <Col>
                        <h3 class="WickReferenceModal-subheader">Description</h3>
                        <p class="WickReferenceModal-description">
                            <i>{`${referenceData.type}: `}</i>
                            
                            {referenceData.description}
                            
                        </p>

                        <div>{syntaxDislay}</div>
                        <div class="WickReferenceModal-parameters">{parameterDisplay}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {(referenceData && JSON.stringify(referenceData) !== '{}' && "deprecated" in referenceData) 
                        && <p class="WickReferenceModal-note">{referenceData.deprecated}</p>}

                        <h3 class="WickReferenceModal-subheader">Code Snippet</h3>
                        <CodeMirror class="WickReferenceModal-code" value={code} options={{mode:"javascript", lineNumbers: true, readOnly: true, theme: "monokai", lineWrapping: true, scrollbarStyle: "null"}}/>

                    </Col>
                </Row>
            </Container>
        </ModalBody>
    </Modal>
)};

export default WickReferenceModal;