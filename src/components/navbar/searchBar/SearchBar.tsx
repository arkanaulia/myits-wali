import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
export function SearchBar (props: {
  background?: string
  placeholder?: string
  borderRadius?: string | number
  [x: string]: any
}) {
  // Pass the computed styles into the `__css` prop
  const {
    background,
    placeholder,
    borderRadius,
    ...rest
  } = props
  // Chakra Color Mode
  const searchIconColor = useColorModeValue('gray.700', 'white')
  const inputBg = useColorModeValue('white', 'navy.900')
  const inputText = useColorModeValue('gray.700', 'gray.100')
  return (
    <InputGroup w={{ base: '100%' }} display='flex' alignItems='center' h='50px' {...rest}>
      <InputLeftElement h='full'>
        <IconButton
        h='full'
          aria-label='search'
          bg='inherit'
          borderRadius='inherit'
          _active={{
            bg: 'inherit',
            transform: 'none',
            borderColor: 'transparent'
          }}
          _focus={{
            boxShadow: 'none'
          }}
          icon={<SearchIcon color={searchIconColor} w='15px' h='15px' />}
        />
      </InputLeftElement>

      <Input
        fontSize='md'
        bg={background ? background : inputBg}
        color={inputText}
        fontWeight='500'
        borderColor='gray.400'
        w='full'
        h='full'
        _placeholder={{ color: 'gray.400', fontSize: '14px' }}
        borderRadius='xl'
        placeholder={placeholder ? placeholder : 'Search...'}
      />
    </InputGroup>
  )
}
