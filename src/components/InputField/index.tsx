interface InputFieldProps {
    type: string;
    placeholder?: string;
}

const InputField = ({ type, placeholder }: InputFieldProps) => {
    return <input type={type} placeholder={placeholder} />;
};

export default InputField;
