import { useState } from 'react';

export default function RequestTracker() {
  const [pending, setPending] = useState<number>(0);
  const [completed, setCompleted] = useState<number>(0);

  async function handleClick(): Promise<void> {
    setPending(p => p + 1);
    await delay(3000);
    setPending(p => p - 1);
    setCompleted(c => c + 1);
  }

  return (
    <>
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick}>
        Buy     
      </button>
    </>
  );
}

function delay(ms : number) : Promise<void>{
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
