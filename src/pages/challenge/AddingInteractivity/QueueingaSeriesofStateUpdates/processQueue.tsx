const getFinalState = (baseState: any, queue: any) => {
    let finalState = baseState;
  
    for (let update of queue) {
      if (typeof update === 'function') {
        // Apply the updater function.
        finalState = update(finalState);
      } else {
        // Replace the next state.
        finalState = update;
      }
    }
  
    return finalState;
}

export default getFinalState;
  