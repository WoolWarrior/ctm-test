import { Option } from "../../types";

interface SelectFieldProps {
  placeholder?: string;
  options: Option[];
}

const SelectField = ({ options }: SelectFieldProps) => {
  return (
    <select>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectField;
