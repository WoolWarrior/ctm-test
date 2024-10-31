import InputField from "../InputField";
import SelectField from "../SelectField";
import { QuestionField } from "../../types";

export interface QuestionProps {
  id: number;
  title: string;
  fields: QuestionField[];
}

const Question = ({ title, fields }: QuestionProps) => {
  return (
    <div>
      <h3>{title}</h3>
      {fields.map((field, index) => {
        switch (field.element) {
          case "input":
            return (
              <InputField
                key={index}
                type={field.type}
                placeholder={field.placeholder}
              />
            );

          case "select":
            return field.options ? (
              <SelectField key={index} options={field.options} />
            ) : null;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default Question;
