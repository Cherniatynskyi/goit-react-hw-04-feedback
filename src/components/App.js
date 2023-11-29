import { useState} from "react";
import { Statistics } from "./Feedback/Statistics/Statistics";
import { FeedbackOptions } from "./Feedback/FeedbackOptions/FeedbackOptions";
import { Section } from "./Feedback/Section/Section";
import { NotificationMessage } from "./Feedback/NotificationMessage/NotificationMessage";

function App (){
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const optionsArray = ['good', 'neutral', 'bad']

    const countTotalFeedback = () => {
        const total = good + neutral + bad
        return total
    }

    const countPositiveFeedbackPercentage = () => {
        const prs = good / (good + neutral + bad) * 100
        if (prs) {
            return `${Math.round(prs)}%`
        }
        return  'No positive feedbacks'
    }
  
    const handleFeedback = (evt) => {
      const name = evt.target.id

      switch (name) {
        case 'good':
          setGood(prevState => prevState + 1)
          break;
        case 'neutral':
          setNeutral(prevState => prevState + 1)
          break;
        case 'bad':
          setBad(prevState => prevState + 1)
          break;
        default:
          console.log("error")
          break;
      }
    }


    return (
      <>
        <Section title='Leave feedback'>
          <FeedbackOptions onLeaveFeedback={handleFeedback} options={optionsArray} />
        </Section>
        <Section title='Leave feedback'>
          {countTotalFeedback() > 0 ?
            <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} /> :
            <NotificationMessage message={'There is no feedback'} />}
        </Section>
        
      </>
  )
}

export default App;
