const AlertComponent = ({ message, type, isVisible = false }: { message: string, type: string, isVisible: boolean }) => {

  const color = type == "success" ? "#34D399" : "#F87171";
  return (
    <>
      {isVisible && <div className={"flex w-full border-l-6 border-[" + color + "] bg-[" + color + "] bg-opacity-[15%] px-7 py-8 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30 md:p-4"} >

        <div className="w-full">
          <h5 className={"text-lg font-semibold text-black dark:text-[" + color + "] "}>
            {message}
          </h5>
        </div>
      </div >}
    </>

  );
};

export default AlertComponent;
