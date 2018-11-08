import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import injectSheet from 'react-jss';

import {
    Row,
    Col,
    Grid
} from 'react-flexbox-grid';

import TimelineElement from '../components/Timeline/TimelineElement';
import TimelineContainer from '../components/Timeline/TimelineContainer';

import experiencesStyle from '../assets/jss/sections/experiencesStyle';

class Experiences extends React.Component {

    render() {
        const {
            classes,
            className
        } = this.props;

        return (
            <Grid fluid className={className}>
                <Row>
                    <Col xs={12}>
                        <TimelineContainer>
                            <TimelineElement side="left" />
                            <TimelineElement side="right" />
                            <TimelineElement side="left" />
                            <TimelineElement side="right" />
                            <TimelineElement side="left" />
                            <TimelineElement side="right" />
                        </TimelineContainer>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

Experiences.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired
};

export default injectSheet(experiencesStyle)(Experiences);
