import React, { Component } from 'react';
import PropTypes from 'prop-types';

const CLASS_NAME = 'pp-btn';

class Button extends Component {
  state = {
    size: 'pp-btn',
  };

  static propTypes = {
    value: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['sm', 'lg']),
    title: PropTypes.string,
    color: PropTypes.string,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
  }

  render() {
    const { value, size, title, color, loading, disabled } = this.props;
    const className = !size ? CLASS_NAME : `${CLASS_NAME}-${size} ${CLASS_NAME}-${color}`;

    if (loading) {
      return <a href="#button" title={title} tabIndex="0" className={className + ' pp-ico-loading'} />;
    } else if (disabled) {
      return (
        <a href="#button" title={title} tabIndex="0" className={className + ' pp-disabled'}>
          {value}
        </a>
      );
    }

    return (
      <a href="#button" title={title} tabIndex="0" className={className}>
        {value}
      </a>
    );
  }
}

export default Button;
