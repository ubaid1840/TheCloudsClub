"use client";
import FixedLogo from "@/components/fixedLogo";
import Footer from "@/components/footer";
import Header from "@/components/header";
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
      <FixedLogo />
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
          alignItems={'center'}
        
          width={{ base: "95%", sm: "70%", md: "70%" }}
        >
        <Img width={'100%'} src="/genetics-hero.jpg"/>
        </Box>
      </Flex>
      <Footer />
    </>
  );
}

export default Page;
