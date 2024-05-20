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
  Heading,
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
          <Text color={'white'} fontSize={'50px'} mb={20}>Our Breeder Genetics</Text>
        <Img width={'80%'} src="/genetics-hero.jpg"/>
        <Text color={'white'} fontSize={'50px'} mt={{base : 10, lg : 40}}>Our Genetics</Text>
        <Img width={'80%'} src="/breed.jpeg"/>
        </Box>
      </Flex>
      <Footer />
    </>
  );
}

export default Page;
