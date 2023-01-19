import React, { useState, useEffect } from 'react';
import { Button } from './Button';
export const Main = ({ arr }) => {
  const [visible, setVisible] = useState(true);
  const [clickedButtons, setClickedButtons] = useState([]);
  const [countOfClicks, setCountOfClicks] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

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

  return (
    <div>
      <h1>Mahjong</h1>
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
    </div>
  );
};
