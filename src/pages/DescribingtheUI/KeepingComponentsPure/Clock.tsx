interface ClockProps {
    time: Date;
    }

export default function Clock({ time } : ClockProps) {
    let hours = time.getHours();
    let className: string;
    if (hours >= 0 && hours <= 6) {
      className = 'night';
    } else {
      className = 'day';
    }
    return (
      <h1 className={className}>
        {time.toLocaleTimeString()}
      </h1>
    );
  }
  