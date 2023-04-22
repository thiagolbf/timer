import { FormContainer, MinutesAmountInput, TaskInput } from "./style";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

export const NewCycleForm = () => {
  const newCycleFormValidantionSchema = zod.object({
    task: zod.string().min(1, "Informe a tarefa"),
    minutesAmount: zod.number().min(1, "minimo").max(60, "maximo"),
  });

  type NewCycleFormData = zod.infer<typeof newCycleFormValidantionSchema>;

  const { register, handleSubmit, watch, formState, reset } =
    useForm<NewCycleFormData>({
      resolver: zodResolver(newCycleFormValidantionSchema),
      defaultValues: {
        task: "",
        minutesAmount: 0,
      },
    });

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        placeholder="Dê um nome para o seu projeto"
        list="task-suggestions"
        {...register("task")}
        disabled={!!activeCycle}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        id="minutesAmount"
        type="number"
        placeholder="00"
        // step={5}
        // min={1}
        // max={60}
        {...register("minutesAmount", { valueAsNumber: true })}
        disabled={!!activeCycle}
      />

      <span>minutos.</span>
    </FormContainer>
  );
};
