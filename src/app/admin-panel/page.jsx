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
  HStack,
  Heading,
  Icon,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loader from "../loading";
import Cookies from "js-cookie";
import { CustomToast } from "../../components/myToast";
import { redirect, useRouter } from "next/navigation";
import FixedLogo from "@/components/fixedLogo";
import SimpleSidebar from "@/components/sidebar";

import { RepeatIcon } from "@chakra-ui/icons";
import MyTable from "@/components/table";

function Page() {
  const [emails, setEmails] = useState([]);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { addToast } = CustomToast();
  const router = useRouter();
  const [totalUsers, setTotalUsers] = useState(0);
  const [page, setPage] = useState("Dashboard");
  const [memberData, setMemberData] = useState([])

  useEffect(() => {
    const isAuthenticated = Cookies.get("cloudClubAuthToken") === "true";
    const userID = Cookies.get("cloudClubUserId");
    if (userID && isAuthenticated) {
    } else {
      router.replace("/");
    }
  }, []);

  useEffect(() => {
    if(page == 'Dashboard'){
      fetchAllUsers();
    }
    else if(page == 'Members'){
      fetchAllUsers()
    } else {
      fetchAllEmails()
    }
   
  }, [page]);

  async function fetchAllEmails () {

    try {  
      await axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/getallusers.php`, {
        withCredentials: false,
      }).then((response)=>{
        console.log(response)
      })
      
    } catch (error) {
      console.log(error)
    }
  
  }

  async function fetchAllUsers() {

    try {
      await axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/getallusers.php`, {
        withCredentials: false,
      })
      .then((response) => {
        if (response?.data?.length > 0) {
          setTotalUsers(response.data.length)
          setMemberData(response.data)
        }
      });
    } catch (error) {
      console.log(error)
    }
  
  }

  return (
    <>
      {/* <Header /> */}
      {/* <FixedLogo />
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
          <Stack
            spacing={2}
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
            width={"100%"}
          >
            <div
              className="footer-subheading"
              style={{ fontWeight: "600", fontSize: "22px" }}
            >
              Login with password
            </div>
            <div style={{ display: "flex" }}>
              <Text className="footer-subheading" style={{ fontSize: "16px" }}>
                {`Don't have an account`}
              </Text>
              <Link href="/join-signup">
                <Button
                  variant="link"
                  className="footer-subheading"
                  style={{
                    fontSize: "16px",
                    marginLeft: "5px",
                    color: "white",
                  }}
                >
                  Sign Up
                </Button>
              </Link>
            </div>
          </Stack>

          <Stack
            spacing={8}
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
            marginTop={"40px"}
            width={"100%"}
          >
            <Input
              style={{
                height: "48px",
                width: "100%",
                fontWeight: "600",
                backgroundColor: "black",
                color: "white",
                borderWidth: 1,
                borderColor: "white",
                borderRadius: "5px",
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
                height: "48px",

                width: "100%",
                fontWeight: "600",
                backgroundColor: "black",
                color: "white",
                borderWidth: 1,
                borderColor: "white",
                borderRadius: "5px",
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
            <Link href="/forgetpassword" style={{ alignSelf: "flex-end" }}>
              <Button
                variant="link"
                className="footer-subheading"
                style={{ fontSize: "16px", marginLeft: "10px", color: "white" }}
              >
                Forget Password
              </Button>
            </Link>
            <Button
              isDisabled={
                email.includes("@") &&
                password.length > 7 &&
                email.includes(".")
                  ? false
                  : true
              }
              onClick={()=>{
                setLoading(true)
                handleLogin()
              }}
              colorScheme={"purple"}
              className="btn"
              style={{ width: "400px", borderWidth: "0px", width: "100%" }}
            >
              Login
            </Button>
          </Stack>
        </Box>
      </Flex>
      <Footer /> */}
      <div
        style={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          flexDirection: "row",
          // backgroundColor: "gray.400",
        }}
      >
        <SimpleSidebar onReturn={(val) => setPage(val)} />
        <Box
          minH="100vh"
          width={"100%"}
          bg={useColorModeValue("gray.100", "gray.900")}
          paddingTop={"20px"}
          justifyContent={"center"}
          display={"flex"}
        >
          {page == "Dashboard" ? (
            <Box
              width={"300px"}
              height={"130px"}
              bg={"#C32F3D"}
              overflow={"hidden"}
              borderRadius={"5px"}
            >
              <VStack width={"100%"} spacing={0}>
                <HStack justifyContent={"space-between"} color={"white"}>
                  <VStack style={{ alignItems: "flex-start" }} spacing={0}>
                    <Heading
                      style={{ fontWeight: "900", fontSize: 34 }}
                      letterSpacing={2}
                    >
                      {totalUsers}
                    </Heading>
                    <Heading fontSize={18} fontWeight={"500"} letterSpacing={2}>
                      Total Members
                    </Heading>
                  </VStack>
                  <div>
                    <Img
                      style={{ width: "100px", height: "100px", opacity: 0.2 }}
                      src="/user-plus.png"
                      alt="user registration"
                    />
                  </div>
                </HStack>
                <div
                  style={{
                    height: "30px",
                    width: "100%",
                    backgroundColor: "#860815",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <RepeatIcon
                    color={"white"}
                    style={{ cursor: "pointer" }}
                    _hover={{ color: "cyan" }}
                    onClick={fetchAllUsers}
                  />
                </div>
              </VStack>
            </Box>
          ) : page == "Members" ? (
            <Box
            minH="100vh"
            width={"100%"}
            // bg={useColorModeValue("gray.100", "gray.900")}
            paddingTop={"20px"}
            justifyContent={"center"}
            display={"flex"}>
              <MyTable data={memberData}/>
            </Box>
          ) : page == "Emails" ? (
            <Box></Box>
          ) : null}
        </Box>
      </div>
      {loading ? <Loader /> : null}
    </>
  );
}

export default Page;
