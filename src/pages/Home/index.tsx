import { Play } from "phosphor-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as zod from "zod";

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from "./Home";
import { useState } from "react";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Signaler la tâche"),
  minutesAmount: zod
    .number()
    .min(5, "Le cycle doit être au minimun de 5 minutes")
    .max(60, "Le cycle doit être au maximum de 60 minutes"),
});

// interface NewCycleFormDate {
//   task: string;
//   minutesAmount: number;
// }

type NewCycleFormDate = zod.infer<typeof newCycleFormValidationSchema>;

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);

  const { register, handleSubmit, watch, reset } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  function handleCreateNewCycle(data: NewCycleFormDate) {
    const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
    };

    setCycles((state) => [...cycles, newCycle]);
    setActiveCycleId(id);

    reset();
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Je vais travailler sur</label>
          <TaskInput
            id="task"
            placeholder="Nommez votre projet"
            list="task-suggestions"
            {...register("task")}
          />
          <datalist id="task-suggestions">
            <option value="Project 1" />
            <option value="Project 2" />
            <option value="Project 3" />
            <option value="Project 4" />
          </datalist>

          <label htmlFor="minuteAmount">pendant</label>
          <MinutesAmountInput
            type="number"
            id="minuteAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register("minutesAmount", { valueAsNumber: true })}
          />
          <span>minutes.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Commencer
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
