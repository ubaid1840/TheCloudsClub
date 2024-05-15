"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import MyDrawer from "@/components/myDrawer";
import {
  Img,
  Stack,
  VStack,
  Text,
  Button,
  Input,
  useColorModeValue,
  Box,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

function Page() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("initial");
  const [password, setPassword] = useState("");

  return (
    <>
    <Header />
      <div style={{height:'80px', alignItems: 'center', justifyContent: 'center', display: 'flex', marginTop: '40px', backgroundColor: 'black', width: '100vw', position: 'fixed', zIndex:999 }}>
        <Img style={{ width:'100px' }} src='/logo.png' alt='The cloud club logo' />
      </div>
      <Flex
        width="100vw"
        backgroundColor="black"
        alignItems="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        paddingTop={{ base: "120px", md: "160px", lg: "160px" }}
        paddingBottom={{ base: "20px", md: "120px", lg: "120px" }}
      >
        <Box
          bg={"transparent"}
          display={"flex"}
          flexDir={"column"}
          alignItems="center"
          width={{ base: "95%", sm: "70%", md: "35%" }}
        >
        <Stack spacing={2} display={'flex'} flexDir={'column'} alignItems={'center'} width={'100%'}>
        <div
            className="footer-subheading"
            style={{ fontWeight: "600", fontSize: "22px" }}
          >
            Login with password
          </div>
          <div style={{ display: "flex", }}>
            <Text className="footer-subheading" style={{ fontSize: "16px" }}>
              {`Don't have an account`}
            </Text>
            <Link href="/signup">
            <Button
              variant="link"
              className="footer-subheading"
              style={{ fontSize: "16px", marginLeft: "5px", color:'white' }}
            >
              Sign Up
            </Button>
            </Link>
          </div>
        </Stack>
         
        <Stack spacing={8} display={'flex'} flexDir={'column'} alignItems={'center'} marginTop={'40px'} width={'100%'}>
      
          <Input
            style={{
                height:'48px',
              width: "100%",
              fontWeight: "600",
              backgroundColor: "black",
              color: "white",
              borderWidth: 1,
              borderColor: "white",
             borderRadius:'5px'

            }}
            variant={"solid"}
            //   color={"black"}
            _placeholder={{
              color: "grey",
            }}
            borderRadius={0}
            borderColor={useColorModeValue("white.900", "white.900")}
            id={"email"}
            type={"email"}
            placeholder={"Email"}
            aria-label={"Email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            style={{
                height:'48px',
               
                width: "100%",
              fontWeight: "600",
              backgroundColor: "black",
              color: "white",
              borderWidth: 1,
              borderColor: "white",
              borderRadius:'5px'

            }}
            variant={"solid"}
            //   color={"black"}
            _placeholder={{
              color: "gray",
            }}
            borderRadius={0}
            borderColor={useColorModeValue("white.900", "white.900")}
            id={"password"}
            type={"password"}
            placeholder={"Password"}
            aria-label={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link href="/forgetpassword" style={{ alignSelf:'flex-end'}}>
           <Button
              variant="link"
              className="footer-subheading"
              style={{ fontSize: "16px", marginLeft: "10px", color:'white' }}
            >
              Forget Password
            </Button>
            </Link>
            <button className="btn" style={{width:'400px', borderWidth:'1px',  width: "100%", }}>Login</button>
            </Stack>
        </Box>
      </Flex>
      <Footer />
    </>
  );
}

export default Page;
