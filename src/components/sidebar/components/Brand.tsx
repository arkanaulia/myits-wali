// Chakra imports
import { Flex, useColorModeValue } from '@chakra-ui/react';
import { Image } from 'components/image/Image';
import logoWhite from 'img/layout/logoWhite.png'

// Custom components

export function SidebarBrand() {
	//   Chakra color mode
	const logoColor = useColorModeValue('navy.700', 'white');

	return (
		<Flex alignItems='center' flexDirection='column'>
			<Image src={logoWhite} w='40px' h='40px' />
		</Flex>
	);
}

export default SidebarBrand;
