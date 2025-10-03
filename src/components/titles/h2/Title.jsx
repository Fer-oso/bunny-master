import { useTypingEffect } from "../../../pages/home/components/hooks/useTypingEffect";

export const Title = ({title}) => {

 const { displays, activeStates } = useTypingEffect(title, {
    typingSpeed: 80,
    eraseSpeed: 50,
    pauseBeforeErase: 500,
    pauseBeforeRestart: 200,
    randomVariation: 50,
  });
  
  return (
  displays.map((display, index) => (
      <h1
        key={index}
        className={`${display?.color ?? title[index].color} pr-1 text-3xl md:text-5xl  font-bold leading-tight tracking-tight`}
        style={{
          borderRight: activeStates[index]
            ? "2px solid currentColor"
            : "none",
        }}
      >
        {display}
        {index < displays.length - 1 && " "}
      </h1>
    ))
  );
};
