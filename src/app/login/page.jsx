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
  Box,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loader from "../loading";
import Cookies from "js-cookie";
import {CustomToast} from '../../components/myToast'
import { redirect, useRouter } from "next/navigation";
import FixedLogo from "@/components/fixedLogo";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const { addToast } = CustomToast()
  const router = useRouter()
  const [pageLoading, setPageLoading] = useState(true)

  useEffect(()=>{
    const isAuthenticated = Cookies.get("cloudClubAuthToken") === "true";
    const userID = Cookies.get("cloudClubUserId");
    if(userID && isAuthenticated){
      router.replace("/")
    }
  },[])

  useEffect(()=>{
    if(pageLoading){
      setPageLoading(false)
    }
  },[])

  async function handleLogin() {
    const formData = {
      'email' : email,
      'password' : password
    }
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/login.php`,
        formData,
        {
          withCredentials: false,
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((response)=>{
        Cookies.set('cloudClubAuthToken', 'true', { expires: 365 }); // Expires in 1 year
            Cookies.set('cloudClubUserId', response?.data?.id, { expires: 365 });
            addToast({message: "Login Successful", type: "success"})
            if(response?.data?.id == 1){
              router.replace('/admin-panel')
            } else {
              router.replace('/')
            }
      })
      
    } catch (error) {
      if(error?.response?.data?.error){
        addToast({ message: error.response.data.error, type: "error" });
      } else {
     
        addToast({ message: error.message, type: "error" });
      }
     
     
    } finally {
      setLoading(false);
    }
  }

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
       {pageLoading ? <Spinner /> :  
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
              borderColor={"white.900"}
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
              borderColor={"white.900"}
              id={"password"}
              type={"password"}
              placeholder={"Password"}
              aria-label={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <Link href="/forgetpassword" style={{ alignSelf: "flex-end" }}>
              <Button
                variant="link"
                className="footer-subheading"
                style={{ fontSize: "16px", marginLeft: "10px", color: "white" }}
              >
                Forget Password
              </Button>
            </Link> */}
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
              style={{ width: "400px", borderWidth: "0px", width: "100%" }}
            >
              Login
            </Button>
          </Stack>
        </Box>
}
      </Flex>
      <Footer />
      {loading ? <Loader /> : null}
    </>
  );
}

export default Page;
