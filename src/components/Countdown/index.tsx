import { CountdownContainer, Separator } from "./style";

import { useState, useEffect } from "react";

import { differenceInSeconds } from "date-fns";

import { useContext } from "react";
import { CyclesContext } from "../../contexts/CyclesContext";

export const Countdown = () => {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    setSecondsPassed,
    amountSecondsPassed,
  } = useContext(CyclesContext);

  // const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

  useEffect(() => {
    let interval: number;

    if (activeCycle) {
      interval = setInterval(
        () => {
          const secondsDifference = differenceInSeconds(
            new Date(),
            activeCycle.startDate
          );

          if (secondsDifference >= totalSeconds) {
            setSecondsPassed(totalSeconds);
            clearInterval(interval);
            markCurrentCycleAsFinished();
          } else {
            setSecondsPassed(secondsDifference);
          }
        },

        1000
      );
    }

    return () => {
      clearInterval(interval);
    };
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    markCurrentCycleAsFinished,
    setSecondsPassed,
  ]);

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`;
    }
  }, [minutes, seconds, activeCycle]);

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>

      <Separator>:</Separator>

      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  );
};
