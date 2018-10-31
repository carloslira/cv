import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';

import {
	Row,
	Col,
	Grid,
	getRowProps,
	getColumnProps
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

		console.log(getRowProps(this.props));
		console.log(getColumnProps(this.props));

		return (
			<Grid fluid className={classes.grid}>
				<Row center="xs" middle="md" className={classes.row}>
					<Col xs={12} sm={12} md={3} mdOffset={2} lg={3} lgOffset={2} xl={2} xlOffset={2}>
						<img src={photo} className={classes.photo} />
					</Col>
					<Col xs={12} sm={12} md={5} lg={5} xl={6}>
						<P className={classes.name}>
							Carlos Lira
						</P>
						<P className={classes.role}>
							Software developer at <b>CoinWISE</b>
						</P>
						<P className={classes.location}>
							<MapMarkerIcon className={classes.mapMarkerIcon} />
							Recife, PE, Brasil
						</P>
					</Col>
				</Row>
			</Grid>
		);
	}
}

Header.propTypes = {
	classes: PropTypes.object.isRequired
};

export default injectSheet(headerStyle)(Header);
