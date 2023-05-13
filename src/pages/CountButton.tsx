import { useState } from 'react';

const CountButton = () => {
    const [count, setCount] = useState<number>(0);

    function handleClick(){
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    )
  }

const MyApp = () => {
    return (
        <div>
        <h1>Counters that update separately</h1>
        <CountButton />
        <CountButton />
        </div>
    );
}
export default MyApp
  
  
  
  
  
  
  