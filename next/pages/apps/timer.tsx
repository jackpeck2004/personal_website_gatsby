import React from 'react';
import Layout from '../../components/layout';

const Timer: React.FC = () => {
  const [startTimer, setStartTimer] = React.useState<boolean>(false);
  const [time, setTime] = React.useState<number>(80);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (startTimer) {
        setTime(time - 1);
        console.log(time);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  const minutes: number = time >= 60 ? Math.floor(time / 60) : 0;
  const seconds: number = time - minutes * 60;

  return (
    <Layout>
      <article className="min-h-screen container mx-auto">
        <p>
          {minutes} {minutes > 1 ? 'minutes' : 'minute'} and <br />
          {seconds} {seconds > 1 ? 'seconds' : 'seconds'}
        </p>
        <button
          onClick={() => {
            setStartTimer(!startTimer);
          }}
        >
          Toggle
        </button>
      </article>
    </Layout>
  );
};

export default Timer;
