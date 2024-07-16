'use client';

import { useEffect } from 'react';

const notes = [
  { type: 'white', key: 'a' },
  { type: 'black', key: 'w' },
  { type: 'white', key: 's' },
  { type: 'black', key: 'e' },
  { type: 'white', key: 'd' },
  { type: 'white', key: 'f' },
  { type: 'black', key: 't' },
  { type: 'white', key: 'g' },
  { type: 'black', key: 'y' },
  { type: 'white', key: 'h' },
  { type: 'black', key: 'u' },
  { type: 'white', key: 'j' },
  { type: 'white', key: 'k' },
  { type: 'black', key: 'o' },
  { type: 'white', key: 'l' },
  { type: 'black', key: 'p' },
  { type: 'white', key: ';' },
];

const Piano = () => {
  useEffect(() => {
    const playNote = (key: string) => {
      const audio = new Audio(`/sounds/${key}.wav`);
      audio.play();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key;
      const note = notes.find((n) => n.key === key);
      if (note) {
        playNote(key); // key 값을 사용하여 파일 재생
        const keyDiv = document.querySelector(`[data-key="${key}"]`);
        if (keyDiv) {
          keyDiv.classList.add('bg-yellow-300');
        }
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      const key = event.key;
      const note = notes.find((note) => note.key === key);
      if (note) {
        const keyDiv = document.querySelector(`[data-key="${key}"]`);
        if (keyDiv) {
          keyDiv.classList.remove('bg-yellow-300');
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-lvh bg-gray-300">
      <div className="flex relative">
        {notes.map((key, index) => (
          <div
            key={index}
            className={`border-black border-2 box-border flex items-end justify-center relative ${
              key.type === 'white' ? 'bg-white w-16 h-48' : 'bg-black w-10 h-32 -ml-5'
            }`}
            data-key={key.key}
          >
            <div className="text-xs mb-1 text-gray-700">{key.key}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Piano;
