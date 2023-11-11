import { useState } from "react";
import frame1 from "../assets/img/icons/Frame.svg";
import vector1 from "../assets/img/icons/Vector (1).svg";
import vector3 from "../assets/img/icons/Vector (3).svg";
import { useDispatch, useSelector } from "react-redux";
import { makeBooking } from "../redux/counter/actions";
import toast from "react-hot-toast";

const Book = () => {
  const data = useSelector((state) => state.data);
  const size = data.length;
  const dispatch = useDispatch();
  const [bookingData, setBookingData] = useState({});

  const handleBooking = (event) => {
    event.preventDefault();
    if (size >= 3) {
      toast.error("Sorry, you can not book more than 3");
    } else {
      if (Object.keys(bookingData).length === 5) {
        // console.log({ ...bookingData, id: size + 1 });
        dispatch(makeBooking({ ...bookingData, id: size + 1 }));
      } else {
        toast.error("please select data properly");
      }
    }
  };

  const handleInputBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newBooking = { ...bookingData };
    newBooking[field] = value;
    setBookingData(newBooking);
  };

  return (
    <div className="mt-[160px] mx-4 md:mt-[160px] relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form onSubmit={handleBooking} className="first-hero lws-inputform">
          <div className="des-from">
            <p>Destination From</p>
            <div className="flex flex-row">
              <img src={frame1} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="from"
                id="lws-from"
                required
                onBlur={handleInputBlur}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Coxs Bazar</option>
              </select>
            </div>
          </div>

          <div className="des-from">
            <p>Destination To</p>
            <div className="flex flex-row">
              <img src={frame1} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="to"
                id="lws-to"
                required
                onBlur={handleInputBlur}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Coxs Bazar</option>
              </select>
            </div>
          </div>

          <div className="des-from">
            <p>Journey Date</p>
            <input
              type="date"
              className="outline-none px-2 py-2 w-full date"
              name="date"
              id="lws-date"
              required
              onBlur={handleInputBlur}
            />
          </div>

          <div className="des-from">
            <p>Guests</p>
            <div className="flex flex-row">
              <img src={vector1} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="guests"
                id="lws-guests"
                required
                onBlur={handleInputBlur}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
              </select>
            </div>
          </div>

          <div className="des-from !border-r-0">
            <p>className</p>
            <div className="flex flex-row">
              <img src={vector3} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="ticketclassName"
                id="lws-ticketclassName"
                required
                onBlur={handleInputBlur}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Business</option>
                <option>Economy</option>
              </select>
            </div>
          </div>

          <button className="addCity" type="submit" id="lws-addCity">
            <svg
              width="15px"
              height="15px"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span className="text-sm">Book</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Book;
