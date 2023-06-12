

import { Flex, Image, Text, useColorModeValue } from '@chakra-ui/react';

export default function Footer() {
	const textColor = useColorModeValue('gray.400', 'white');
	return (
		<Flex
			zIndex='3'
			flexDirection={{
				base: 'column',
				xl: 'row'
			}}
			alignItems='center'
			alignContent='center'
			justifyContent='space-between'
			px={{ base: '30px', md: '50px' }}
			pb='30px'>
			<Text
				color={textColor}
				textAlign={{
					base: 'center',
					xl: 'start'
				}}
				fontSize={{ base:'sm', md:'md' }} 
				>
				{' '}
				&copy; {new Date().getFullYear()}
				<Text as='span' fontWeight='500' ms='4px' fontSize={{ base:'sm', md:'md' }} >
				Hak Cipta Institut Teknologi Sepuluh Nopember
				
				</Text>
			</Text>
			<Image src='/img/icons/its.png' />
		</Flex>
	);
}
