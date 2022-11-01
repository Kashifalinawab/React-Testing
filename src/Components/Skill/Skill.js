import React, { useState } from "react";

export const lang = ["HTML", "CSS", "JS", "REACT", "NODEJS", "PHP"];

function Skill(props) {
  const [isloggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <ul>
        {lang.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      {isloggedIn ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn("ture")}>Login</button>
      )}
    </>
  );
}

export default Skill;
