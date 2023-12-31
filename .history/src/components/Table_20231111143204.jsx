import { useSelector } from "react-redux";

const Table = () => {
  const data = useSelector((state) => state.data);

  return(

  
  <>
    {data.length && (
      <div className="table-container">
        <table className="booking-table">
          <TableHead />
          <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
            {data.map((data, i) => {
              return <TabelRow key={i} data={data} />;
            })}
          </tbody>
        </table>
      </div>
    )}
  </>;
  )
};

export default Table;
