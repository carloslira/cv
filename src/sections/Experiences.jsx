import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import injectSheet from 'react-jss';

import {
    NamespacesConsumer
} from 'react-i18next';

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
            <NamespacesConsumer>
                {(t, { i18n }) =>
                    <Grid fluid className={className}>
                        <Row center="xs">
                            <Col xs={12} md={8}>
                                <TimelineContainer>
                                    <TimelineElement side="left" since={2017} until={'Present'} role={'Development Team Leader'} companyLink="https://coinwise.io/" companyName="CoinWISE" description={t('experiences.coinwise')} />
                                    <TimelineElement side="right" since={2014} until={2017} role={'Software Engineer'} companyLink="https://www.pitang.com/" companyName="Pitang Agile IT" description={t('experiences.pitang2')} />
                                    <TimelineElement side="left" since={2014} until={2014} role={'Intern'} companyLink="https://www.pitang.com/" companyName="Pitang Agile IT" description={t('experiences.pitang1')} />
                                    <TimelineElement side="right" since={2013} until={2014} role={'Intern'} companyLink="http://www.vianaemoura.com.br/" companyName="Viana & Moura" description={t('experiences.viana&moura')} />
                                </TimelineContainer>
                            </Col>
                        </Row>
                    </Grid>
                }
            </NamespacesConsumer>
        );
    }
}

Experiences.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired
};

export default injectSheet(experiencesStyle)(Experiences);
