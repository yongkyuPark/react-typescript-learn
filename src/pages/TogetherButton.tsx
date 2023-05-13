import { useState } from 'react';

type ButtonProps = {
  count: number,
  onClick: () => void
}

const MyApp = () => {
    const [count, setCount] = useState<number>(0);

    function handleClick(){
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Counters that update together</h1>
            <MyButton count={count} onClick={handleClick} />
            <MyButton count={count} onClick={handleClick} />
        </div>
    )
}

const MyButton = ({count, onClick} : ButtonProps) => {
    return(
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    )
}
export default MyApp;