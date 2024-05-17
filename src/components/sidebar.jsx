"use client"
import React, { ReactNode, useEffect } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Img,
  Divider,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiMail,
} from "react-icons/fi";
import { usePathname } from "next/navigation";

const LinkItems = [
  { name: "Dashboard", icon: FiHome, path : '/admin-panel/dashboard/' },
  { name: "Emails", icon: FiMail, path : '/admin-panel/emails/' },
  { name: "Members", icon: FiStar, path : '/admin-panel/members/' },
];

export default function SimpleSidebar({ children }) {
 
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" width={'100%'} bg={useColorModeValue("gray.100", "gray.900")} >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }}>
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
    paddingTop={'20px'}
      boxShadow="xl"
      backgroundColor={"#343a40"}
      // borderRight="1px"
      // borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      // boxShadow='md'
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      zIndex={2}
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between" paddingTop={'20px'} paddingBottom={'20px'}>
        <Img
          style={{ width: "100px" }}
          src="/logo.png"
          alt="The cloud club logo"
        />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Divider orientation="horizontal"/>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} path={link.path}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, path, ...rest }) => {

  const pathname = usePathname()

  return (
    <Link href={path}
      style={{ textDecoration: "none", color: "#c2c7d0" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
      
        fontWeight={"700"}
        align="center"
        py="2"
        px='4'
        mx="4"
        my='2'
        borderRadius="lg"
        role="group"
        cursor="pointer"
        bg={pathname == path && "#4B535C"}
        color={pathname == path && "white" }
        _hover={{
          bg: useColorModeValue('purple.500', 'purple.500'),
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};
