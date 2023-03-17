import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  firstName: yup
    .string()
    .min(2, "Your input is too short. Min 2 chars")
    .max(20)
    .matches(/^[a-z ,.'-]+$/i, "Does not meet regex requirement")
    .required(),
  age: yup
    .number()
    .positive("The number has to be positive")
    .integer()
    .required(),
});

function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const myHandleSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(myHandleSubmit)}>
      <input {...register("firstName")} />
      <p>{errors.firstName?.message}</p>
      <input {...register("age")} />
      <p>{errors.age?.message}</p>
      <select {...register("role")}>
        <option value="brannmann sam">Brannman Sam</option>
        <option value="sykepleieren">Sykepleieren</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default HookForm;
