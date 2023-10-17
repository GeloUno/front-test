import { HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Timer = (props) => {
  return (
    <VStack gap="10px" align="left">
      <HStack>
        <Text fontWeight="bold">Seconds spend on page:</Text>
        <p>{`${props.seconds} s`}</p>
      </HStack>
      <HStack>
        <Text fontWeight="bold">Time of entering the website:</Text>
        <p>{props.date}</p>
      </HStack>
    </VStack>
  );
};

export default Timer;
