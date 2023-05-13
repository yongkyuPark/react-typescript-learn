interface ClockProps {
    color : string;
    time : string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Clock: React.FC<ClockProps> = (props) => {
    return (
      <h1 style={{ color: props.color }}>
        {props.time}
      </h1>
    );
};

export default Clock;

