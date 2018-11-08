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

import SocialMedias from './SocialMedias';
import LanguagePicker from './LanguagePicker';

import headerStyle from '../assets/jss/components/headerStyle';

class Header extends React.Component {

    render() {
        const {
            classes,
            className
        } = this.props;

        return (
            <NamespacesConsumer>
                {(t, { i18n }) =>
                    <div className={classNames(className, classes.container)}>
                        <Grid fluid>
                            <Row>
                                <Col xs={8}>
                                    <SocialMedias />
                                </Col>
                                <Col xs={4}>
                                    <LanguagePicker />
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                }
            </NamespacesConsumer>
        );
    }
}

Header.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired
};

export default injectSheet(headerStyle)(Header);
