export const Balance = ({ value = "1000" }) => {
  return (
    <div className="flex flex-row justify-center mt-5">
      <div className="font-bold text-lg">Your balance - </div>
      <div className="font-semibold ml-4 text-lg">Rs {value}</div>
    </div>
  );
};
