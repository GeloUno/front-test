import React, { useEffect, useState, useMemo } from 'react';
import Timer from './Timer';
import ThemeSwitch from './ThemeSwitch';
import { HStack } from '@chakra-ui/react';

const Header = (props) => {
  const [seconds, setSeconds] = useState(0);
  const date = useMemo(() => new Date().toTimeString(), []);
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
      <Timer seconds={seconds} date={date} />
      <ThemeSwitch toggleDarkMode={props.toggleDarkMode} />
    </HStack>
  );
};

export default Header;
