import { useRef } from "react";

const QuestionAudio = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = (number: number) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    const audio = new Audio(`${number}.mp3`);
    audio.play();
    audioRef.current = audio;
  };

  return (
    <div className="space-x-8">
      <button onClick={() => playAudio(1)}>Play 1</button>
      <button onClick={() => playAudio(2)}>Play 2</button>
      <button onClick={() => playAudio(3)}>Play 3</button>
    </div>
  );
};

export default QuestionAudio;
