import { Box, Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

// Komponen Navbar
const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding={4}
      bg="teal.500"
      color="white"
    >
      {/* Konten Navbar */}
    </Flex>
  );
};

// Komponen Sidebar
const Sidebar = () => {
  return (
    <Box
      position="fixed"
      left={0}
      top={0}
      bottom={0}
      width={["100%", "20%"]}
      bg="gray.200"
      padding={4}
    >
      {/* Konten Sidebar */}
    </Box>
  );
};

// Komponen Layout
const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex>
      {/* Sidebar */}
      <Sidebar />

      <Box flex={1} ml={[0, isOpen ? "20%" : "0"]}>
        {/* Navbar */}
        <Navbar />

        {/* Konten Utama */}
        <Box padding={4}>{children}</Box>
      </Box>

      {/* Toggle Button (Mobile) */}
      <Box display={["block", "none"]} position="fixed" bottom={4} right={4}>
        <IconButton
          icon={<HamburgerIcon />}
          variant="outline"
          aria-label="Toggle sidebar"
          onClick={onToggle}
        />
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
