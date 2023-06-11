// Chakra imports
import { Flex} from '@chakra-ui/react';
import { Image } from 'components/image/Image';
import logoWhite from 'img/layout/logoWhite.png'

// Custom components

export function SidebarBrand() {

	return (
		<Flex alignItems='center' flexDirection='column'>
			<Image src={logoWhite} w='40px' h='40px' />
		</Flex>
	);
}

export default SidebarBrand;
