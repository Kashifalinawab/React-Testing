import React from "react";

function Form(props) {
  return (
    <div>
      <div data-testid="GM">Good Morning</div>
      <form>
        <div>
          <span title="close">X</span>
          <p>All feilds are need to be filled</p>
          <img src="www.pix.in" alt="Employee " />
          <br />
          <label htmlFor="name" name="name">
            Name
          </label>
          <input
            type="text"
            placeholder="YourName"
            id="name"
            value="Kashif"
            readOnly
          />
        </div>
        <br />
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea placeholder="BioData" role="bio" id="bio" />
        </div>

        <div>
          <label>Location :</label>
          <select>
            <option>Select Your City </option>
            <option>Nagpur</option>
            <option>Pune</option>
            <option>Mumbai</option>
            <option>Hydrabad</option>
          </select>
        </div>
        <br />
        <div>
          <label>
            <input type="checkbox" /> I agree to your Terms & Conditions
          </label>
          <br />
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
