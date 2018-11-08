import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import injectSheet from 'react-jss';

import timelineContainerStyle from '../../assets/jss/components/timeline/timelineContainerStyle';

class TimelineContainer extends React.Component {

    render() {
        const {
            classes,
            children,
            className
        } = this.props;

        return (
            <div className={classNames(className, classes.container)}>
                {children}
            </div>
        );
    }
}

TimelineContainer.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
};

export default injectSheet(timelineContainerStyle)(TimelineContainer);
