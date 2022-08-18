import React from "react";
import "./Input.css";
const Input = () => {
  const [formValues, setFormValues] = React.useState({
    email: "",
    password: "",
  });

  return (
    <div
      className="container-input"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(formValues);
        console.log(
          `Email ${formValues.email}, password ${formValues.password}`
        );
      }}
    >
      {" "}
      <h2 className="fb">facebook</h2>
      <form>
        <div className="formEmail">
          <input
            type="text"
            value={formValues.email}
            onChange={(e) =>
              setFormValues((prev) => ({ ...prev, email: e.target.value }))
            }
          ></input>
        </div>

        <div className="password">
          <input
            type={"password"}
            value={formValues.password}
            onChange={(e) =>
              setFormValues((prev) => ({ ...prev, password: e.target.value }))
            }
          ></input>
        </div>
      </form>
      <button className="btn">PRIJAVI SE </button>
      <p className="lozinka"> Zaboravili ste lozinku</p>
      <hr></hr>
      <button className="btn-green">Kreiraj Novi korisnicki racun</button>
    </div>
  );
};
export default Input;
