import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  alert: PropTypes.instanceOf(Object)
};

const defaultProps = {
  alert: {
    message: ''
  }
};

const StatefulAlerts = props => {
  const { alert } = props;

  return <div data-sn="alerts">{alert.message}</div>;
};

StatefulAlerts.propTypes = propTypes;
StatefulAlerts.defaultProps = defaultProps;
export default StatefulAlerts;
