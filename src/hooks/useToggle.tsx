import React, { useState } from 'react';

const useToggle = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  function onOpen() {
    setToggle(true);
  }

  function onClose() {
    setToggle(false);
  }

  return { onOpen, onClose, isOpen: toggle };
};

export default useToggle;
