
const BalanceContainer = () =>{
    return (
<div className="m-10">
  <div className="w-full flex justify-center place-items-center">
    <div className="text-sm w-1/2">
        <p className="pb-2 text-white">current balance <span>@</span></p>
        <p className="font-bold">{'$0.89868909S'}</p>
    </div>
    <div className="w-1/2 flex justify-end md:me-10 gap-2">
    <p className="bg-black bg-opacity-20 p-3 rounded-lg h-fit">withdraw</p>
    <p className="bg-[#F7931A] p-1 rounded-lg text-wrap text-center h-fit">add transaction</p>
    </div>
  </div>
</div>
    );
}

export default BalanceContainer