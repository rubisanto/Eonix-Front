import React from "react";

function Home({ onIncrement, counter }) {
  return (
    <div>
      <button onClick={onIncrement}>Vous avez cliqué {counter} fois</button>
    </div>
  );
}

export default Home;
