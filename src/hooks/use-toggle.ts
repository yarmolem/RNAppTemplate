import {useState} from 'react';

export const useToggle = (defaultState: boolean = false) => {
  const [isOpen, setIsOpen] = useState(defaultState);

  return {
    isOpen,
    toggle: () => setIsOpen(prev => !prev),
    close: () => setIsOpen(false),
    open: () => setIsOpen(true),
  };
};
