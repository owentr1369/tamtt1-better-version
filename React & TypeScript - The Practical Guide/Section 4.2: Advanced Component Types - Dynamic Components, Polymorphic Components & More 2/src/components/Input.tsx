type InputProps = {
  label: string;
  id: string;
  type: "text" | "email" | "password";
};

const Input = ({ label, id, type }: InputProps) => {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} />
    </p>
  );
};

export default Input;
