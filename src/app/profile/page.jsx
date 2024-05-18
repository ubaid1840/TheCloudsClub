"use client";
import FixedLogo from "@/components/fixedLogo";
import Footer from "@/components/footer";
import Header from "@/components/header";
import MyDrawer from "@/components/myDrawer";
import SocialProfileSimple from "@/components/socialProfile";
import UploadProfilePicture from "@/components/uploadProfilePicture";
import {
  Img,
  Stack,
  VStack,
  Text,
  Button,
  Input,
  useColorModeValue,
  Box,
  Checkbox,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Page() {
  const [email, setEmail] = useState("");
  const [userInfo, setUserInfo] = useState();
  const router = useRouter()

  useEffect(() => {
    const isAuthenticated = Cookies.get("cloudClubAuthToken") === "true";
    const userID = Cookies.get("cloudClubUserId");

    if (userID && isAuthenticated) {
      if (!userInfo)
        axios
          .get(
            `${process.env.NEXT_PUBLIC_BASE_URL}/getuserinfo.php?userId=${userID}`,
            {
              withCredentials: false,
            }
          )
          .then((response) => {
            if(response?.data?.info?.id){
              setUserInfo(response?.data?.info);
            }
          })
          .catch((error) => {
            console.error("Error fetching user information:", error);
          });
    }
    else {
        router.replace('/')
    }
  }, []);

  

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
        paddingTop={{ base: "120px", md: "200px", lg: "200px" }}
        paddingBottom={{ base: "60px", md: "160px", lg: "160px" }}
      >
        <Box
          bg={"transparent"}
          display={"flex"}
          flexDir={"column"}
          alignItems="center"
          width={{ base: "95%", sm: "70%", md: "35%" }}
        >
         <SocialProfileSimple data={userInfo}/>
         {/* <UploadProfilePicture /> */}
        </Box>
      </Flex>
      <Footer />
    </>
  );
}

export default Page;
