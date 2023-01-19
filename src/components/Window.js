import React from 'react';

export const Window = ({ handlerAgainClicked }) => {
  return (
    <div className="win__wrapper">
      <p>Вы победили!</p>
      <button onClick={handlerAgainClicked} className="btn__again">
        Ещё раз
      </button>
    </div>
  );
};
