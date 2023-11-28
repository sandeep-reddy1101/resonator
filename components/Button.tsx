interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="bg-black text-white rounded-full py-2 pl-4 pr-6">
      {children}
    </button>
  );
};

export default Button;
