import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  function handleChange(e) {
    e.preventDefault();
    console.log(name);
  }

  return (
    <div>
      {name.firstName}-{name.lastName}
      <form>
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
        />
        <br />
        <br />

        <input
          type="text"
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <br />
        <br />
        <button onClick={(e) => handleChange(e)}>Submit</button>
      </form>
    </div>
  );
}
