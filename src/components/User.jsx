import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);

  const handleClick1 = () => {
    // Counter state is incremented
    setCount(count + 1);
  };
  const handleClick2 = () => {
    // Counter state is incremented
    setCount(count - 1);
  };

  return (
    <div className="user-card">
      <h1>Count: {count}</h1>

      <button onClick={handleClick1}>Increment</button>

      <button onClick={handleClick2}>Decdrese</button>

      <h2>Nameh: {name}</h2>
      <h3>Location: Bangalore</h3>
      <h4>Contact: @ananthfeb16</h4>
    </div>
  );
};

export default User;
