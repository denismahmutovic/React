import React from "react";

const Input = () => {
  const [formValues, setFormValues] = React.useState({
    email: "",
    password: "",
  });

  return (
    <div
      className="container"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(formValues);
        console.log(
          `Email${formValues.email}, password ${formValues.password}`
        );
      }}
    >
      <h1>Sign in</h1>
      <form>
        <div className="form-email">
          <input
            type="text"
            value={formValues.email}
            onChange={(e) =>
              setFormValues((prev) => ({ ...prev, email: e.target.value }))
            }
          ></input>
        </div>
      </form>
    </div>
  );
};
export default Input;
