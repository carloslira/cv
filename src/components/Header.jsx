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

import MapMarkerIcon from 'mdi-react/MapMarkerIcon';

import P from './P';

import photo from '../assets/img/photo.jpg';

import headerStyle from '../assets/jss/components/headerStyle';

class Header extends React.Component {

    render() {
        const {
            classes
        } = this.props;

        return (
            <NamespacesConsumer>
                {(t, { i18n }) =>
                    <Grid fluid className={classes.grid}>
                        <Row center="xs" middle="md" className={classes.row}>
                            <Col xs={12} md={3} mdOffset={2}>
                                <img src={photo} className={classes.photo} alt="" />
                            </Col>
                            <Col xs={12} md={5}>
                                <P className={classes.name}>
                                    Carlos Lira
								</P>
                                <P className={classes.role}>
                                    {t('header.role')} <b>CoinWISE</b>
                                </P>
                                <P className={classes.location}>
                                    <MapMarkerIcon className={classes.mapMarkerIcon} />
                                    {t('header.location')}
								</P>
                            </Col>
                        </Row>
                    </Grid>
                }
            </NamespacesConsumer>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
};

export default injectSheet(headerStyle)(Header);
