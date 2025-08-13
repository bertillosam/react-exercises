import React from "react";

const Navbar = () => {
  return <div className="bg-background text-primary text-2xl my-4 flex flex-col mr-15 ml-4">
    <div className="flex justify-between">
      <h3>
        Samo
      </h3>
      <div>
        <div>
          Home {" "} About {" "} Contact
        </div>
      </div>
    </div>
  </div>;
};

export default Navbar;
