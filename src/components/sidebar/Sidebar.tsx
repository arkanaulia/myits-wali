
import React from 'react'

// chakra imports
import {
  Box,
  Flex,
  Drawer,
  DrawerBody,
  Icon,
  DrawerOverlay,
  useDisclosure,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react'
import Content from 'components/sidebar/components/Content'
import {
  renderThumb,
  renderTrack,
  renderView
} from 'components/scrollbar/Scrollbar'
import { Scrollbars } from 'react-custom-scrollbars-2'

// Assets
import { IoMenuOutline } from 'react-icons/io5'
import { IRoute } from 'types/navigation'
import { isWindowAvailable } from 'utils/navigation'

interface SidebarResponsiveProps {
  routes: IRoute[]
}

interface SidebarProps extends SidebarResponsiveProps {
  [x: string]: any
}

function Sidebar (props: SidebarProps) {
  const { routes } = props

  const variantChange = '0.2s linear'
  // SIDEBAR
  return (
    <Box display={{ sm: 'none', xl: 'block' }} position='fixed' minH='100%'>
      <Box
   
        transition={variantChange}
        w='290px'
        h='100vh'
        mt='20'
        minH='100%'
        overflowX='hidden'
      >
        <Scrollbars
          autoHide
          renderTrackVertical={renderTrack}
          renderThumbVertical={renderThumb}
          renderView={renderView}
        >
          <Content routes={routes} />
        </Scrollbars>
      </Box>
    </Box>
  )
}

// FUNCTIONS

export function SidebarResponsive (props: SidebarResponsiveProps) {
  // // SIDEBAR
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const { routes } = props
  // let isWindows = navigator.platform.startsWith("Win");
  //  BRAND

  return (
    <Flex display={{ sm: 'flex', xl: 'none' }} alignItems='left' >
      <Flex ref={btnRef} w='max-content' h='max-content' onClick={onOpen}>
        <Icon
          as={IoMenuOutline}
          color='gray.800'
          my='auto'
          w='30px'
          h='30px'
          me='10px'
          _hover={{ cursor: 'pointer' }}
        />
      </Flex>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement={
          isWindowAvailable() && window.document.documentElement.dir === 'rtl'
            ? 'right'
            : 'left'
        }
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent w='285px' maxW='285px' bg='secondaryGray.300'>
          <DrawerCloseButton
            zIndex='3'
            onClick={onClose}
            _focus={{ boxShadow: 'none' }}
            _hover={{ boxShadow: 'none' }}
          />
          <DrawerBody maxW='285px' px='0rem' pb='0'>
            <Scrollbars
              autoHide
              renderTrackVertical={renderTrack}
              renderThumbVertical={renderThumb}
              renderView={renderView}
            >
              <Content routes={routes} />
            </Scrollbars>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}
// PROPS

export default Sidebar
