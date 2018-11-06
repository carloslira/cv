import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import classNames from 'classnames';

import timelineStyle from '../assets/jss/components/timelineStyle';

class Timeline extends React.Component {

    render() {
        const {
            classes,
            className
        } = this.props;

        return (
            <div className={classNames(className, classes.timeline)}>
                <div className={classNames(classes.container, classes.left)}>
                    <div className={classes.content}>
                        <h2>2017</h2>
                        <p>Lorem ipsum..</p>
                    </div>
                </div>
                <div className={classNames(classes.container, classes.right)}>
                    <div className={classes.content}>
                        <h2>2016</h2>
                        <p>Lorem ipsum..</p>
                    </div>
                </div>
            </div>
        );
    }
}

Timeline.propTypes = {
    classes: PropTypes.object.isRequired
};

export default injectSheet(timelineStyle)(Timeline);
