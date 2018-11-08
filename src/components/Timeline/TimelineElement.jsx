import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import injectSheet from 'react-jss';

import CalendarIcon from 'mdi-react/CalendarIcon';

import timelineElementStyle from '../../assets/jss/components/timeline/timelineElementStyle';

class TimelineElement extends React.Component {

    render() {
        const {
            side,
            classes,
            className,
        } = this.props;

        return (
            <div className={classNames(className, classes.container, classes[side])}>
                <div className={classes.content}>
                    <h2><CalendarIcon />2016</h2>
                    <p>Lorem ipsum..</p>
                </div>
            </div>
        );
    }
}

TimelineElement.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
    side: PropTypes.oneOf(['left', 'right']).isRequired
};

export default injectSheet(timelineElementStyle)(TimelineElement);
