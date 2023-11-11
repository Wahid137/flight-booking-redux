import { useSelector } from "react-redux";

const Table = () => {
  const data = useSelector((state) => state.data);

  return 
    <>
    {data.length && (
        

    )}
    </>
 
};

export default Table;
