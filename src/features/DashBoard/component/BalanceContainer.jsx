const BalanceContainer = () => {
  return (
    <div className="  m-10">
      <div className="w-full flex  flex-col md:flex-row justify-center place-items-center">
        <div className="text-sm w-1/2 p-3" >
          <p className="pb-2 text-white font-bold">
            current balance 
          </p>
          <p className="font-bold">
            {"$0.89868909S"}
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-10 flex  justify-evenly m-8  md:justify-end md:me-10 md:gap-2">
          <p className="bg-black bg-opacity-20 p-1 rounded-lg h-fit">
            withdraw
          </p>
          <p className="bg-[#F7931A] p-1 rounded-lg text-wrap text-center h-fit">
            add transaction
          </p>
        </div>
      </div>
    </div>
  );
};

export default BalanceContainer;
