import React, { Component } from 'react';

import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Container from './Container/Container';
import Notification from './Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = event => {
    const type = event.target.textContent;
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => acc + item);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    let statistics = (
      <Section tittle="Statistics">
        <Notification message="There is no feedback" />
      </Section>
    );

    if (totalFeedback > 0) {
      statistics = (
        <Section tittle="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={totalFeedback}
            positiveFeedbackPercentage={positiveFeedbackPercentage}
          />
        </Section>
      );
    }
    return (
      <Container>
        <Section tittle="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        {statistics}
      </Container>
    );
  }
}
