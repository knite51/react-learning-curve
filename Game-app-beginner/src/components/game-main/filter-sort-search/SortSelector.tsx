import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { SortList } from '../../../utils/sort-list';
import { Sort } from '../../../interface/app.interface';

interface Props {
  onSelectSort: (sort: Sort) => void;
  selectedSort: Sort | null;
}

const SortSelector = ({ onSelectSort, selectedSort }: Props) => {
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by: {selectedSort?.name || 'Relevance'}
        </MenuButton>
        <MenuList>
          {SortList.map((sort) => (
            <MenuItem key={sort.name} onClick={() => onSelectSort(sort)}>
              {sort.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
