import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';
import { HStack, Icon } from '@chakra-ui/react';
import { Platform } from '../interface/app.interface';

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <>
      {/*  marginY={1} =  4*1 theme-spacing(4) * value(1) */}
      <HStack marginY={2}>
        {' '}
        {platforms.map((platform) => (
          <Icon as={iconMap[platform.slug]} color={'gray.400'}></Icon>
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
