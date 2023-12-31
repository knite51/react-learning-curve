import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

const ColorModeToggle = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <>
      <HStack>
        <Switch
          colorScheme="green"
          isChecked={colorMode === 'dark'}
          onChange={toggleColorMode}
        ></Switch>
        <Text whiteSpace={'nowrap'}>{colorMode} mode</Text>
      </HStack>
    </>
  );
};

export default ColorModeToggle;
