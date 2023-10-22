import { HStack, Image } from '@chakra-ui/react';
import logo from '../../assets/images/logo.webp';
import ColorModeToggle from './ColorModeToggle';
import SearchGame from '../game-main/filter-sort-search/SearchGame';

interface Props {
  onSearch: (value: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <>
      <HStack padding="10px">
        <Image src={logo} boxSize="60px"></Image>
        <SearchGame onSearch={onSearch}></SearchGame>
        <ColorModeToggle />
      </HStack>
    </>
  );
};

export default Navbar;
