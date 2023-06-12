// Chakra Imports
import { Box, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { SidebarResponsive } from "components/sidebar/Sidebar";
import routes from "routes";

export default function AdminNavbar(props: {
  secondary: boolean;
  message: string | boolean;
  brandText: string;
  logoText: string;
  fixed: boolean;
  onOpen: (...args: any[]) => any;
}) {
  const navbarPosition = "fixed" as const;
  const navbarFilter = "none";
  const navbarBackdrop = "blur(20px)";
  const navbarShadow = "none";
  const navbarBorder = "transparent";
  const secondaryMargin = "0px";
  const paddingX = "15px";
  const gap = "0px";

  return (
    <Box
      position={navbarPosition}
      boxShadow={navbarShadow}
      bgColor="white"
      borderColor={navbarBorder}
      filter={navbarFilter}
      backdropFilter={navbarBackdrop}
      backgroundPosition="center"
      backgroundSize="cover"
      borderWidth="1.5px"
      borderStyle="solid"
      transitionDelay="0s, 0s, 0s, 0s"
      transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
      transition-property="box-shadow, background-color, filter, border"
      transitionTimingFunction="linear, linear, linear, linear"
      alignItems="center"
      display="flex"
      minH="65px"
      justifyContent={{ xl: "center" }}
      lineHeight="25.6px"
      mx="auto"
      mt={secondaryMargin}
      pb="8px"
      right="0"
      px={{
        sm: paddingX,
        md: "10px",
      }}
      ps={{
        xl: "12px",
      }}
      pt="8px"
      top="0"
      w="100vw"
    >
      <Flex
        w="100%"
        flexDirection='row'
        alignItems="center"
        justify='space-between'
        mb={gap}
      >
        <SidebarResponsive routes={routes} />
        <Box mx={{sm:'0px', md:'40px'}} >
          <Image src="/img/dashboards/logoo.png" height="24px" width="auto" />
        </Box>
        <Box  w='40px'>
        </Box>
        
      </Flex>
    </Box>
  );
}
