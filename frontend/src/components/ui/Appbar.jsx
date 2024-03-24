export const Appbar = () => {
  return (
    <div className="shadow h-14 flex justify-between">
      <div className=" flex flex-col h-full justify-center ml-4">
        BasicPay App
      </div>
      <div className="flex flex-row ">
        <div className="flex flex-col justify-center h-full mr-4">Welcome </div>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">U</div>
        </div>
      </div>
    </div>
  );
};
