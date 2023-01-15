import React from "react";
import "./Inbox.css";

const Inbox = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const name = event.target.name.value;
    console.log(name, email);
    event.target.reset();
  };
  return (
    <div className="pt-5 inbox">
      <div className="container">
        <div className="row g-4 pt-5 pb-5 d-flex   align-items-center">
          <div className="col-lg-4 mt-0">
            <h2 className="text-white  fs-2 fw-bold">Straight To Your Inbox</h2>
          </div>
          <div className="col-lg-8 m-0  ">
            <form
              action=""
              className="row px-4 px-lg-0 input-from "
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Name"
                name="name"
                required
                className="col-lg-4  inbox-input-filed"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                className="col-lg-5  inbox-input-filed-email"
              />
              <input
                type="submit"
                value="Submit"
                className="col-lg-2  inbox-input-button"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
