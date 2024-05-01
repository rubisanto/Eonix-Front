import React from "react";

function Home({ onIncrement, onDecrement, counter }) {
  return (
    <div>
      <button onClick={onIncrement}>Ajouter 1</button>
      <br />
      <br />
      <div> Vous avez cliqué {counter} fois</div>
      <br />
      <button onClick={onDecrement}>Enelever 1</button>
    </div>
  );
}

export default Home;
