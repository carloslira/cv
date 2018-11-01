import React from 'react';
import PropTypes from 'prop-types';

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

import headerStyle from '../assets/jss/components/headerStyle';

class Header extends React.Component {

    render() {
        const {
            classes
        } = this.props;

        return (
            <NamespacesConsumer>
                {(t, { i18n }) =>
                    <div className={classes.container}>
                        <Grid fluid>
                            <Row>
                                <Col xs={12}>
                                    <SocialMedias />
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
    classes: PropTypes.object.isRequired
};

export default injectSheet(headerStyle)(Header);
