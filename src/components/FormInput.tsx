const FormInput = ({ name, label, icon, type = 'text', placeholder, register }: { name: string, label: string, placeholder: string, register: any, icon: any, type: string }) => {
  return (
    <div className="mb-4">
      <label className="mb-2.5 block font-medium text-black dark:text-white">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          {...register(name)}
          placeholder={placeholder}
          className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />

        <span className="absolute right-4 top-4">
          {icon}
        </span>
      </div>
    </div>

  );
};

export default FormInput;
