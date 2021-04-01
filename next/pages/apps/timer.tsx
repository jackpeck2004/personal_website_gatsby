import React from 'react';
import Layout from '../../components/layout';

const Timer: React.FC = () => {
  const [startTimer, setStartTimer] = React.useState<boolean>(false);
  const [time, setTime] = React.useState<number>(10);

  React.useEffect(() => {
    console.log(startTimer);
  }, [startTimer]);

  let interval;

  if (startTimer && time >= 0) {
    interval = setInterval(() => {
      setTime(time - 1);
    }, 1000);
  }

  if (!startTimer || time == 0) {
    clearInterval(interval);
  }

  return (
    <Layout>
      <article className="min-h-screen container mx-auto">
        <p>{time}</p>
        <button
          onClick={() => {
            setStartTimer(!startTimer);
          }}
        >
          {startTimer ? 'Pause' : 'Start'}
        </button>
      </article>
    </Layout>
  );
};

export default Timer;
