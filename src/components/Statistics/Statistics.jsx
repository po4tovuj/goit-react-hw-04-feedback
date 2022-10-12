import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemLabel } from './Statistics.styled';

export const Statistics = props => {
  return (
    <List>
      {Object.keys(props).map(label => (
        <ListItem key={label}>
          <ListItemLabel>{label}: </ListItemLabel>
          <span>{props[label]}</span>
        </ListItem>
      ))}
    </List>
  );
};
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};
export class OldStatistics extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: '',
  };
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.string,
  };
  render() {
    return (
      <List>
        {Object.keys(this.props).map(label => (
          <ListItem key={label}>
            <ListItemLabel>{label}: </ListItemLabel>
            <span>{this.props[label]}</span>
          </ListItem>
        ))}
      </List>
    );
  }
}
