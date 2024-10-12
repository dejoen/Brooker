const BalanceContainer = () => {
  return (
    <div className="  m-10">
      <div className="w-full flex  flex-col md:flex-row justify-center place-items-center">
        <div className="text-sm w-1/2 p-3 ">
          <div className="border border-[#F7931A] text-center md:text-start w-[200px] p-2 rounded-md ">
            <p className="pb-2 text-white font-bold">Current balance</p>
            <p className="font-bold">
              {"$0.8989"}
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-10 flex  justify-evenly m-8  md:justify-end md:me-10 md:gap-2">
          <p className="bg-black bg-opacity-20 p-2 rounded-lg h-fit w-[150px] text-center">
            withdraw
          </p>
          <p className="bg-[#F7931A]  rounded-lg text-wraph-fit p-2 w-[150px] text-center">
            add transaction
          </p>
        </div>
      </div>
    </div>
  );
};

export default BalanceContainer;
