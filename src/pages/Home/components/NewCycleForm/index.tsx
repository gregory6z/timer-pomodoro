import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../context/CyclesContext";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">Je vais travailler sur</label>
      <TaskInput
        id="task"
        placeholder="Nommez votre projet"
        list="task-suggestions"
        {...register("task")}
        disabled={!!activeCycle}
      />
    
      <label htmlFor="minuteAmount">pendant</label>
      <MinutesAmountInput
        type="number"
        id="minuteAmount"
        placeholder="00"
        disabled={!!activeCycle}
        step={5}
        min={5}
        max={60}
        {...register("minutesAmount", { valueAsNumber: true })}
      />
      <span>minutes.</span>
    </FormContainer>
  );
}
