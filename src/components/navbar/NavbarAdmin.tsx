
// Chakra Imports
import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function AdminNavbar (props: {
  secondary: boolean
  message: string | boolean
  brandText: string
  logoText: string
  fixed: boolean
  onOpen: (...args: any[]) => any
}) {
  
  
  // Here are all the props that may change depending on navbar's type or state.(secondary, variant, scrolled)
  const navbarPosition = 'fixed' as const
  const navbarFilter = 'none'
  const navbarBackdrop = 'blur(20px)'
  const navbarShadow = 'none'
  const navbarBorder = 'transparent'
  const secondaryMargin = '0px'
  const paddingX = '15px'
  const gap = '0px'


  return (
    <Box
      position={navbarPosition}
      boxShadow={navbarShadow}
      bgColor='white'
      borderColor={navbarBorder}
      filter={navbarFilter}
      backdropFilter={navbarBackdrop}
      backgroundPosition='center'
      backgroundSize='cover'
      borderWidth='1.5px'
      borderStyle='solid'
      transitionDelay='0s, 0s, 0s, 0s'
      transitionDuration=' 0.25s, 0.25s, 0.25s, 0s'
      transition-property='box-shadow, background-color, filter, border'
      transitionTimingFunction='linear, linear, linear, linear'
      alignItems='center'
      display='flex'
      minH='65px'
      justifyContent={{ xl: 'center' }}
      lineHeight='25.6px'
      mx='auto'
      mt={secondaryMargin}
      pb='8px'
      right='0'
      px={{
        sm: paddingX,
        md: '10px'
      }}
      ps={{
        xl: '12px'
      }}
      pt='8px'
      top='0'
      w='100vw'
    >
      <Flex
        w='100%'
        flexDirection={{
          sm: 'column',
          md: 'row'
        }}
        alignItems='center'
        mb={gap}
      >
        <Box mb={{ sm: '8px', md: '0px' }} mx='10'>
        <Image src="/img/dashboards/logoo.png" height='24px' width='auto'  />
          
          {/* Here we create navbar brand, based on route name */}
          {/* <Link
            color={mainText}
            href='#'
            bg='inherit'
            borderRadius='inherit'
            fontWeight='bold'
            fontSize='34px'
            _hover={{ color: { mainText } }}
            _active={{
              bg: 'inherit',
              transform: 'none',
              borderColor: 'transparent'
            }}
            _focus={{
              boxShadow: 'none'
            }}
          >
            {brandText}
          </Link> */}
        </Box>
        <Box display='flex' flexDirection='row' alignItems='center' ms='auto' w={{ sm: '100%', md: 'unset' }}>
          <Text>ID</Text>
        <Icon
          as={ChevronDownIcon}
        />
        </Box>
      </Flex> 
    </Box>
  )
}
