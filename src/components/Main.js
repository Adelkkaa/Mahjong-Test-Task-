import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Window } from './Window';
export const Main = ({ arr }) => {
  const [visible, setVisible] = useState(true);
  const [clickedButtons, setClickedButtons] = useState([]);
  const [countOfClicks, setCountOfClicks] = useState(0);
  const [clickAgain, setClickAgain] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (clickAgain) {
      const timeout = setTimeout(() => setVisible(false), 5000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [clickAgain]);

  const handlerClick = (arg) => {
    if (clickedButtons.length % 2 === 1) {
      if (clickedButtons[clickedButtons.length - 1] === arg) {
        setCountOfClicks(0);
        setClickedButtons([...clickedButtons, arg]);
      } else {
        setClickedButtons(
          clickedButtons.filter((item) => item !== clickedButtons[clickedButtons.length - 1]),
        );
      }
    } else {
      setClickedButtons([...clickedButtons, arg]);
    }
  };

  const handlerAgainClicked = () => {
    setVisible(true);
    setCountOfClicks(0);
    setClickedButtons([]);
    setClickAgain(true);
  };

  return (
    <div>
      <h1>Mahjong</h1>

      {clickedButtons.length === 32 ? (
        <Window handlerAgainClicked={handlerAgainClicked} />
      ) : (
        <div className="button_wrapper">
          {arr.map((item, index) => (
            <Button
              key={index}
              item={item}
              handlerClick={handlerClick}
              clickedButtons={clickedButtons}
              visible={visible}
              setCountOfClicks={(arg) => setCountOfClicks(arg)}
              countOfClicks={countOfClicks}
            />
          ))}
        </div>
      )}
    </div>
  );
};
