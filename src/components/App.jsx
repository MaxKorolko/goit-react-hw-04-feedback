import { useState } from 'react';

import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Container from './Container/Container';
import Notification from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const leaveFeedback = event => {
    const type = event.target.textContent;
    if (type === 'good') {
      return setGood(prev => prev + 1);
    }
    if (type === 'neutral') {
      return setNeutral(prev => prev + 1);
    }
    if (type === 'bad') {
      setBad(prev => prev + 1);
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100);

  let statistics = (
    <Section tittle="Statistics">
      <Notification message="There is no feedback" />
    </Section>
  );

  if (countTotalFeedback() > 0) {
    statistics = (
      <Section tittle="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={countTotalFeedback()}
          positiveFeedbackPercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  }
  return (
    <Container>
      <Section tittle="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={leaveFeedback} />
      </Section>
      {statistics}
    </Container>
  );
}
