import React from "react";

const Reservation = () => {
  return (
    <div className="col-sm-offset-1 col-sm-4">
      <h3>Reservation</h3>
      <div id="reservation" className="jumbotron">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
            />
            <input
              name="startDate"
              id="datepicker"
              type="text"
              value="01/05/2017"
            />
            <select>
              <option>Select number in party:</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Reservation;
