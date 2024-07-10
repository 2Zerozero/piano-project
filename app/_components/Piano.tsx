'use client';
import { useEffect } from 'react';

const Piano = () => {
  const keyToPianoNoteMap: { [key: string]: string } = {
    a: '/sounds/a.wav',
    s: '/sounds/s.wav',
    d: '/sounds/d.wav',
    f: '/sounds/f.wav',
    g: '/sounds/g.wav',
    h: '/sounds/h.wav',
    j: '/sounds/j.wav',
    k: '/sounds/k.wav',
    l: '/sounds/l.wav',
    ';': '/sounds/;.wav',
    w: '/sounds/w.wav',
    e: '/sounds/e.wav',
    t: '/sounds/t.wav',
    y: '/sounds/y.wav',
    u: '/sounds/u.wav',
    o: '/sounds/o.wav',
    p: '/sounds/p.wav',
  };

  const playNote = (noteFile: string) => {
    const audio = new Audio(noteFile);

    audio.play();
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const nodeFile = keyToPianoNoteMap[event.key];
      if (nodeFile) {
        playNote(nodeFile);

        console.log(nodeFile);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return <div>Piano</div>;
};

export default Piano;
