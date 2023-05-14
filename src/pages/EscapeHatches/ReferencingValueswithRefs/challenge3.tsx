import { useRef } from 'react';

interface DebouncedButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

function DebouncedButton({ onClick, children }: DebouncedButtonProps) {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
    return (
      <button
        onClick={() => {
          clearTimeout(timeoutRef.current!);
          timeoutRef.current = setTimeout(() => {
            onClick();
          }, 1000);
        }}
      >
        {children}
      </button>
    );
  }

export default function Dashboard() {
  return (
    <>
      <DebouncedButton
        onClick={() => alert('Spaceship launched!')}
      >
        Launch the spaceship
      </DebouncedButton>
      <DebouncedButton
        onClick={() => alert('Soup boiled!')}
      >
        Boil the soup
      </DebouncedButton>
      <DebouncedButton
        onClick={() => alert('Lullaby sung!')}
      >
        Sing a lullaby
      </DebouncedButton>
    </>
  )
}
