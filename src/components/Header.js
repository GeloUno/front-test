import React, { useEffect, useState } from 'react';
import Timer from './Timer';
import ThemeSwitch from './ThemeSwitch';
import { HStack } from '@chakra-ui/react';

const Header = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <HStack justifyContent="space-between" padding="20px" height="10vh">
      <Timer seconds={seconds} />
      <ThemeSwitch />
    </HStack>
  );
};

export default Header;
