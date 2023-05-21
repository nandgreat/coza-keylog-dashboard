const CustomButton = ({ label, type = 'button', onPress }: { label: string, type: string, onPress?: () => void }) => {
  return (
    <input
      type={type}
      value={label}
      onClick={onPress}
      className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
    />

  );
};

export default CustomButton;
