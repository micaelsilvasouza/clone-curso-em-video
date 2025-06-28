interface InputProp {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  pattern?: string;
  changeFunction: (value: string) => void;
}

export default function InputForm({
  name,
  label,
  placeholder,
  type,
  pattern,
  changeFunction,
}: InputProp) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className={`text-sm text-gray-900 font-medium py-2`}
      >
        {label}
      </label>
      <input
        className={`
          placeholder:text-gray-500
          border border-gray-500/40
           valid:border-green-600
           focus:valid:border-green-600
           focus:invalid:border-red-500
            rounded-sm px-5 py-2 bg-indigo-50/50 placeholder:text-sm outline-none shadow`}
        type={type}
        id={name}
        name={name}
        required
        onChange={(event) => changeFunction(event.target.value)}
        placeholder={placeholder}
        pattern={pattern}
      />
    </div>
  );
}
