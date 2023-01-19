import React, { useState, useEffect } from 'react';
export const Button = ({
  item,
  visible,
  handlerClick,
  clickedButtons,
  setCountOfClicks,
  countOfClicks,
}) => {
  const [clicked, setClicked] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [classBtn, setClassBtn] = useState('');
  const clickFunc = () => {
    setClicked(true);
    handlerClick(item);
    setCountOfClicks(countOfClicks + 1);
  };
  useEffect(() => {
    if (visible || countOfClicks > 1 || clicked) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    handlerStyle();

    if (clicked && !clickedButtons.includes(item)) {
      const timeout = setTimeout(() => {
        setClicked(false);
        setClassBtn('');
        // setCountOfClicks(0);
        setDisabled(false);
      }, 1000);
      return () => {
        clearTimeout(timeout);
      };
    }

    if (clickedButtons.length % 2 === 0) {
      const timeout = setTimeout(() => {
        setCountOfClicks(0);
      }, 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [clickedButtons, visible]);

  useEffect(() => {
    if (countOfClicks > 1) {
      setDisabled(true);
    }
    if (!visible && countOfClicks === 0) {
      setDisabled(false);
    }
  }, [countOfClicks]);

  const handlerStyle = () => {
    if (clicked) {
      if (clickedButtons.filter((arrItem) => arrItem === item).length === 2) {
        setClassBtn('black');
      } else {
        setClassBtn('red');
      }
    } else return '';
  };

  return (
    <button disabled={disabled} className={`button ${classBtn}`} onClick={() => clickFunc()}>
      {visible ? item : clicked && item}
    </button>
  );
};
