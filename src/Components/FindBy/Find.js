import React, { useEffect, useState } from "react";
export const product = ["Iphone", "Samsung", "Nokia", "Realme"];

function Find(props) {
  const [isloggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn("ture");
    }, 2000);
  }, []);

  return (
    <>
      <ul>
        {product.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      {isloggedIn ? (
        <button>logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn("ture")}>Login</button>
      )}
    </>
  );
}

export default Find;
