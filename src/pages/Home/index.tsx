import { Play, HandPalm } from "phosphor-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import * as zod from "zod";

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from "./Home";
import { useContext } from "react";
import { Countdown } from "./components/Countdown";
import { NewCycleForm } from "./components/NewCycleForm";
import { CyclesContext } from "../../context/CyclesContext";

type NewCycleFormDate = zod.infer<typeof newCycleFormValidationSchema>;

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Signaler la tâche"),
  minutesAmount: zod
    .number()
    .min(5, "Le cycle doit être au minimun de 5 minutes")
    .max(60, "Le cycle doit être au maximum de 60 minutes"),
});

export function Home() {
  const { createNewCycle, interruptCurrentCycle, activeCycle } =
    useContext(CyclesContext);

  const newCycleForm = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  function handleCreateNewCycle(data: NewCycleFormDate) {
    createNewCycle(data);
    reset();
  }

  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountdownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Arreter
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Commencer
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  );
}
