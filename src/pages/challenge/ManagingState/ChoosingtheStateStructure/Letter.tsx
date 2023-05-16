interface LetterProps {
    letter: LetterType;
    isHighlighted: boolean;
    onHover: (letter: LetterType) => void;
    onToggleStar: (letter: LetterType) => void;
  }

interface LetterType {
    subject: string;
    isStarred: boolean;
  }

  const Letter: React.FC<LetterProps> = ({
    letter,
    isHighlighted,
    onHover,
    onToggleStar,
  }) => {
    return (
      <li
        className={isHighlighted ? 'highlighted' : ''}
        onFocus={() => {
          onHover(letter);
        }}
        onPointerMove={() => {
          onHover(letter);
        }}
      >
        <button
          onClick={() => {
            onToggleStar(letter);
          }}
        >
          {letter.isStarred ? 'Unstar' : 'Star'}
        </button>
        {letter.subject}
      </li>
    );
  };
  
  export default Letter;
  