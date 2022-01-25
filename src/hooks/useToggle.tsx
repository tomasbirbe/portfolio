import React, { useState } from 'react';

const useToggle = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  function onOpen() {
    setToggle(true);
  }

  function onClose() {
    setToggle(false);
  }

  function isOpen() {
    return toggle;
  }

  return { onOpen, onClose, isOpen };
};

export default useToggle;
