import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  VStack,
  Img,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function MyDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <GiHamburgerMenu
        style={{ cursor: "pointer", marginLeft: "10px" }}
        color="white"
        size="26px"
        onClick={onOpen}
      />
      <Drawer
        size={"xs"}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay bg="whiteAlpha.300" />
        <DrawerContent bg="black" alignItems="center">
          <DrawerCloseButton color="white" />
          <DrawerHeader>
            <Img
              style={{
                height: 120,
                width: 120,
              }}
              src="/logo.png"
              alt="The cloud club logo"
            />
          </DrawerHeader>

          <DrawerBody marginTop="40px">
            <VStack spacing={7} style={{alignItems:'flex-start'}}>
              <Link href="/">
                <button className="drawer-button">Home</button>
              </Link>
              <Link href="/about-us">
              <button className="drawer-button">About Us</button>
              </Link>
              <button className="drawer-button">Our Genetics</button>
              <Link href="/merch">
              <button className="drawer-button">Merch</button>
              </Link>
              <Link href="/privacy-policy">
              <button className="drawer-button">Privacy Policy</button>
              </Link>
            </VStack>
          </DrawerBody>

          {/* <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose} >
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MyDrawer;