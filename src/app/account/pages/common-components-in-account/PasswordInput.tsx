import {
  FormControlProps,
  matchRule,
  minLengthRule,
  requiredRule,
  useFormControl,
} from "@mongez/react-form";
export default function PasswordInput(props: FormControlProps) {
  const { value, changeValue, id, error, otherProps } = useFormControl({
    rules: [requiredRule, minLengthRule, matchRule],
    ...props,
  });
  return (
    <>
      <input
        className={`Input border-[#ececec] ${error && "border-red-300"}`}
        value={value}
        id={id}
        onChange={e => {
          changeValue(e.target.value);
        }}
        {...otherProps}
      />
      {error && <span className="text-red-500 text-[13px] -mt-3">{error}</span>}
    </>
  );
}
