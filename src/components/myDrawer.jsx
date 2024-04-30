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
        style={{ cursor: "pointer", marginLeft:'10px' }}
        color="white"
        size="26px"
        onClick={onOpen}
        
      />
      <Drawer
      size={'xs'}
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
                width: 220,
              }}
              src="/logo.jpg"
              alt="The cloud club logo"
            />
          </DrawerHeader>

          <DrawerBody marginTop="40px">
            <VStack
              spacing={7}
            >
                 <Link href="/">
                 <button className="drawer-button">Home</button>
                 </Link>
             
              <button className="drawer-button">About Us</button>
              <button className="drawer-button">Our Genetics</button>
              <button className="drawer-button">Merch</button>
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
