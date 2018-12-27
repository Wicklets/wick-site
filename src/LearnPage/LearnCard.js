/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    LearnCard.js

    Component to display examples/tutorials on the learn page
*/

import React, {Fragment} from 'react';

import {Row, Col} from 'reactstrap';
import {Card, CardBody, CardTitle, CardImgOverlay} from 'reactstrap';
import {Button} from 'reactstrap';
import Img from 'react-image';
import ResponsiveEmbed from 'react-responsive-embed';

import dropdownopen from '../Images/DropdownArrow/dropdownopen.svg';
import dropdownclose from '../Images/DropdownArrow/dropdownclose.svg';

import '../scss_styles/LearnCard.scss';

const LearnCard = ({title, body, image, link, launchEditor, useImage, useButtonRow, displayContent, toggleDisplayContent, onMouseEnter, onMouseLeave, overlayDisplayClass}) => (
    <Fragment>
        <Row className="Wick-row">
            <Col sm="12">
                <Card className="LearnCard-titleCard" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={toggleDisplayContent}>
                    <CardBody>
                        <div className="LearnCard-titleContainer">
                            <CardTitle className="LearnCard-title">
                                {title}
                            </CardTitle>
                            <Img src={(displayContent ? dropdownclose : dropdownopen)} className="rotateIn animated LearnCard-dropdown" />
                        </div>
                    </CardBody>
                    <CardImgOverlay className={overlayDisplayClass} />
                </Card>
            </Col>
        </Row>
        {displayContent && (
            <Fragment>
                <Row className="zoomInDown animated LearnCard-contentRow Wick-row">
                    <Col sm="6">
                    <div className="LearnCard-contentContainer">
                        <div>{body}</div>
                        {!useButtonRow && (
                            <Button
                                className="LearnCard-editorButton"
                                color="info"
                                block
                                size="lg"
                                onClick={launchEditor}
                            >
                                Try it Yourself!
                            </Button>
                        )}
                        </div>
                    </Col>
                    <Col sm="6">
                        {(useImage ?
                            <Img src={image} className="LearnCard-image" /> :
                            <ResponsiveEmbed src={link} ratio="16:9" />
                        )}
                    </Col>
                </Row>
                {useButtonRow && (
                    <Row className="zoomInDown animated LearnCard-editorButtonRow">
                        <Col xs="12">
                            <Button
                                color="info"
                                block
                                onClick={launchEditor}
                            >
                                Try it Yourself!
                            </Button>
                        </Col>
                    </Row>
                )}
            </Fragment>
        )}
    </Fragment>
);

export default LearnCard;