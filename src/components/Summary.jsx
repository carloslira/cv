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

import P from './P';

import placeholder from '../assets/img/placeholder.png';

import summaryStyle from '../assets/jss/components/summaryStyle';

class Summary extends React.Component {

    render() {
        const {
            classes,
            className
        } = this.props;

        return (
            <NamespacesConsumer>
                {(t, { i18n }) =>
                    <div className={classNames(className, classes.container)}>
                        <div className={classes.photoOutline} />
                        <img src={placeholder} className={classes.photo} alt="" />
                        <Grid fluid>
                            <Row center="xs">
                                <Col xs={12}>
                                    <P className={classes.name}>
                                        Carlos Lira
                                    </P>
                                </Col>
                                <Col xs={12}>
                                    <P className={classes.role}>
                                        {t('summary.role')}
                                    </P>
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                }
            </NamespacesConsumer>
        );
    }
}

Summary.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired
};

export default injectSheet(summaryStyle)(Summary);
