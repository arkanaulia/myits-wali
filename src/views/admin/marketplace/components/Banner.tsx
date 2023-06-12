// Chakra imports
import { Flex } from '@chakra-ui/react'
import styles from 'styles/Banner.module.css'

// Assets
// import banner from 'img/nfts/NftBanner1.png'

export default function Banner () {
  // Chakra Color Mode
  return (
    <Flex
      className={styles.bgImage}
      direction='column'
      // bgImage={banner}
      bgSize='cover'
      bgPosition='left'
      py={{ base: '30px', md: '56px' }}
      px={{ base: '30px', md: '64px' }}
      borderRadius='2xl'
      h={{ base:'120px',md:'340px' }}
      boxShadow="lg"
    >
    </Flex>
  )
}
