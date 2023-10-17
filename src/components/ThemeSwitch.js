import React from 'react';
import { Switch, VStack } from '@chakra-ui/react';

const ThemeSwitch = (props) => {
  return (
    <VStack>
      <p>Dark theme</p>
      <Switch colorScheme="teal" size="lg" onChange={props.toggleDarkMode} />
    </VStack>
  );
};

export default ThemeSwitch;
