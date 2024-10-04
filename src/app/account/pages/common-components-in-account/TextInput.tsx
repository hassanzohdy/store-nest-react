import {
  FormControlProps,
  requiredRule,
  useFormControl,
} from "@mongez/react-form";
export default function TextInput(props: FormControlProps) {
  const { value, changeValue, id, error, otherProps } = useFormControl({
    rules: [requiredRule],
    ...props,
  });

  return (
    <div className="w-full">
      <input
        className={`Input w-full border-[#ececec] ${error && "border-red-300"}`}
        value={value}
        id={id}
        onChange={e => {
          changeValue(e.target.value);
        }}
        {...otherProps}
      />
      {error && <p className="text-red-500 text-[13px] -mt-2">{error}</p>}
    </div>
  );
}
