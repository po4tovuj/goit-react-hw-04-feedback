import React, { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section';
import { Notification } from 'components/Notifications/Notifications';
import { Container } from './App.styled';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedBackOptions';
import { useState } from 'react';
// import { useEffect } from 'react';
const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};
const OPTIONS = ['good', 'neutral', 'bad'];
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const handleLeaveFeedback = e => {
    const { name } = e.currentTarget;

    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      default:
        setBad(state => state + 1);

        break;
    }
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={OPTIONS}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {good + bad + neutral ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={good + bad + neutral}
            positivePercentage={
              ((good * 100) / (good + bad + neutral)).toFixed(2) + '%'
            }
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};
export class AppOld extends Component {
  state = {
    ...INITIAL_STATE,
  };
  countTotalFeedback = () =>
    Object.values(this.state).reduce((total, i) => total + i, 0);
  countPositiveFeedbackPercentage = () => {
    const posititve = this.state.good;
    const total = this.countTotalFeedback();
    return ((posititve * 100) / total).toFixed(2) + '%';
  };
  handleLeaveFeedback = e => {
    const { name } = e.currentTarget;
    this.setState(state => ({ [name]: state[name] + 1 }));
  };
  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={OPTIONS}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
// exp
