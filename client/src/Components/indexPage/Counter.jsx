import { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

function NumbersCounter({finalNumber}) {
  const [count, setCount] = useState(0);
  const countUpRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (countUpRef.current) {
      countUpRef.current.update(count);
    }
  }, [count]);

  return (
    <div >
      <CountUp
        start={0}
        end={finalNumber}
        duration={2.5}
        separator=","
        className='text-5xl font-bold text-blue-gray-900'
        ref={countUpRef}
      />
    </div>
  );
}

export default NumbersCounter;
