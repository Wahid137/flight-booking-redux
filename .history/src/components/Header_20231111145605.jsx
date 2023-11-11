const Header = () => {
  return (
    <div>
      <header id="header">
        <div className="container">
          <h1 className="text-3xl text-white font-">Flight Booking</h1>
          <div className="flex items-center">
            <a className="text-white min-w-[50px] font-medium" href="#">
              Home
            </a>
            <button className="log-btn btn">Login</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
