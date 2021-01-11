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
    let numberText = "";
    let titleText = "";

    let fileName = "";
    let embed = null;
    let download = null;
    let openLink = null;

    let simpleSnippet = "";
    let advSnippet = "";
    // let updateCode = (newCode) => {
    //     code = newCode;
    // }

    let syntaxDislay = [];
    let syntaxText = "";

    let parameterDisplay = [];
    let parameterDisplayStyled = [];
    
    // when an individual reference item is selected
    if (referenceData && JSON.stringify(referenceData) !== '{}'){
        // group name
        numberText = referenceData.group + " Reference Item";
        // individual reference name / when deprecated, add [deprecated] to the end
        titleText = ("deprecated" in referenceData) ? referenceData.name + " [deprecated]" : referenceData.name;

        // setting the file names for embed and download
        // when it's in script group, attach "-script" to file name
        if (referenceData.group === "Script"){
            fileName = referenceData.name.replace(/[()]/g, '').replace(/\s+/g, '') + "-script";
        }
        else {
            fileName = referenceData.name.replace(/[()]/g, '').replace(/\s+/g, '');
        }
        // set file links for embed, download and open in editor
        embed = "/examples/reference-"+fileName+".html";
        download = "/examples/reference-"+fileName+".wick";
        openLink = `https://www.wickeditor.com/editor/?example=reference-${fileName}.wick`;

        // set simple and advanced snippet
        if (Array.isArray(referenceData.snippet)){
            simpleSnippet = referenceData.snippet[0];
            advSnippet = referenceData.snippet[1];
        }
        else {
            simpleSnippet = referenceData.snippet;
        }

        // set snytax text
        syntaxText = referenceData.syntax;
        if (syntaxText){
            syntaxDislay.push(<h3 className="WickReferenceModal-subheader">Syntax</h3>);
            syntaxDislay.push(<p className="WickReferenceModal-syntax">{syntaxText}</p>);
        }

        // set parameters text
        if (referenceData.parameters.length > 0){
            parameterDisplay.push(<h3 className="WickReferenceModal-subheader">Parameters</h3>);

            // iterate through each parameter
            for (let i=0; i<referenceData.parameters.length; i++){
            
                let typeText = "{";
                // go through each type for each parameter
                for (let j=0; j<referenceData.parameters[i].type.length; j++){
                    if (j === referenceData.parameters[i].type.length-1){
                        typeText += referenceData.parameters[i].type[j].name + "}";
                        // mark if optional
                        if ("optional" in referenceData.parameters[i]){
                            typeText += "(optional)";
                        }   
                    }
                    else{
                        typeText += referenceData.parameters[i].type[j].name + " || ";
                    }
                }
                parameterDisplay.push(<Row>
                    <Col xs="4" sm="4" md="2">
                        <p className="WickReferenceModal-parameter-name">{referenceData.parameters[i].name}</p>
                    </Col>
                    <Col xs="8" sm="8" md="10">
                        <p className="WickReferenceModal-parameter-type">{typeText}</p>
                    </Col></Row>);

                for (let k=0; k<referenceData.parameters[i].type.length; k++){
                    parameterDisplay.push(<Row>
                        <Col sm="12" md={{ size: 11, offset: 2}}>
                            <p className="WickReferenceModal-parameter-description">
                                {(referenceData.parameters[i].type.length === 1) ? 
                                referenceData.parameters[i].type[k].description :
                                referenceData.parameters[i].type[k].name + " : " + referenceData.parameters[i].type[k].description}
                            </p>
                        </Col></Row>);
                }
                if (i !== referenceData.parameters.length-1){
                    parameterDisplay.push(<Row><Col><p className="WickReferenceModal-parameter-spacing"></p></Col></Row>)
                } 
            } // end of each parameter

            parameterDisplayStyled.push(<Row className="WickReferenceModal-pararow"><Col sm="12" md="12"><div className="WickReferenceModal-parameters">{parameterDisplay}</div></Col></Row>)
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
                    <Col sm="12" md="6">
                        <div className="WickReferenceModal-embed">
                            <ResponsiveEmbed tabindex="0" src={embed} ratio="3:2" />
                        </div>
                        <button onClick={() => {downloadLink(download, `${referenceData.exampleName || referenceData.name}.wick`)}}
                        class = "WickReferenceModal-button WickReferenceModal-download">Download Example</button>
                        <button onClick={() => {openInEditor(openLink)}}
                        class = "WickReferenceModal-button WickReferenceModal-open">Open in Editor</button>
                    </Col>
                    <Col sm="12" md="6">
                        {/* note for deprecation */}
                        {(referenceData && JSON.stringify(referenceData) !== '{}' && "deprecated" in referenceData) 
                        && <p className="WickReferenceModal-note">{referenceData.deprecated}</p>}
                        {/* description */}
                        <h3 className="WickReferenceModal-subheader">Description</h3>
                        <p className="WickReferenceModal-description">
                            <i>{`${referenceData.type}: `}</i>
                            {referenceData.description}
                        </p>

                        {(syntaxText) && <div className="WickReferenceModal-syntaxblock">{syntaxDislay}</div>}
                    </Col>
                </Row>
                <Row className="WickReferenceModal-coderow">
                    <Col sm="12" md="12">
                        <h3 className="WickReferenceModal-subheader">Simple Code Snippet</h3>
                        <CodeMirror className="WickReferenceModal-code" value={simpleSnippet} options={{mode:"javascript", lineNumbers: true, readOnly: true, theme: "monokai", lineWrapping: true, scrollbarStyle: "null", screenReaderLabel: "simple code snippet"}}/>
                    </Col>
                </Row>
                {parameterDisplayStyled}
                {(advSnippet) && <Row className="WickReferenceModal-coderow">
                                    <Col sm="12" md="12">
                                        <h3 className="WickReferenceModal-subheader">Advanced Code Snippet</h3>
                                        <CodeMirror className="WickReferenceModal-code" value={advSnippet} options={{mode:"javascript", lineNumbers: true, readOnly: true, theme: "monokai", lineWrapping: true, scrollbarStyle: "null", screenReaderLabel: "advanced code snippet"}}/>
                                    </Col>
                                </Row>}
            </Container>
        </ModalBody>
    </Modal>
)};

export default WickReferenceModal;