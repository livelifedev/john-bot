// bot greets
// user types
// filter to keywords to give response
// watch for user input before returning answer
// cancel return if user begins typing again within timeframe
// add buffer ... rather than returning instant answer
// track response by id if it has already been used in session
// last resort response when all responses have been used and reset
import { useState } from 'react';
import styles from './chat.module.css';

const botResponses = {
  random: [
    'Yeah, you do suck!',
    'Sometimes you may need a platypus to eat a giraffe',
    'Do you want my advice?',
  ],
  general: ['Yeah, I fully agree!', 'Just do it!'],
  generalKey: ["The sky is what's up!"],
};

const messages = [
  'Hey JohnBot, how are you?',
  "It smells like success in here, doesn't it?",
  'what is it',
];

export default function Chat() {
  const [chatInput, setChatInput] = useState('');

  return (
    <div className={styles.mainContainer}>
      <main className={styles.main}>
        {messages.map((x) => (
          <div className={styles.chatItemWrapper}>
            <p className={styles.chatItem}>{x}</p>
          </div>
        ))}
      </main>

      <div className={styles.typeBox}>
        <form onSubmit={() => {}}>
          <input
            type="text"
            placeholder="Talk to me."
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
