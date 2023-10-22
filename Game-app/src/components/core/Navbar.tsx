import { HStack, Image } from '@chakra-ui/react';
import logo from '../../assets/images/logo.webp';
import ColorModeToggle from './ColorModeToggle';
import SearchGame from '../game-main/filter-sort-search/SearchGame';

const Navbar = () => {
  return (
    <>
      <HStack padding="10px">
        <Image src={logo} boxSize="60px"></Image>
        <SearchGame></SearchGame>
        <ColorModeToggle />
      </HStack>
    </>
  );
};

export default Navbar;
