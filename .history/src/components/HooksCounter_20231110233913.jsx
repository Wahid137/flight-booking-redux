import { useSelector } from "react-redux";

const HooksCounter = () => {
    const count = useSelector((state) => )
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{1}</div>
      <div className="flex space-x-3">
        <button className="bg-indigo-400 text-white px-3 py-2 rounded shadow">
          Increment
        </button>
        <button className="bg-red-400 text-white px-3 py-2 rounded shadow">
          Decrement
        </button>
      </div>
    </div>
  );
};

export default HooksCounter;
