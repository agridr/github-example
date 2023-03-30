import { Controller, useForm } from "react-hook-form";
import ReactPhoneInput from "react-phone-input-2";

export default function App() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="phone"
        rules={{ required: true }}
        render={({ field: { ref, ...field } }) => (
          <ReactPhoneInput
            {...field}
            inputExtraProps={{
              ref,
              required: true,
              autoFocus: true
            }}
            country={"in"}
            onlyCountries={["in"]}
            countryCodeEditable={false}
            specialLabel={"Player Mobile Number"}
          />
        )}
      />
      <input type="submit" />
    </form>
  );
}