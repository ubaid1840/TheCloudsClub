"use client";
import FixedLogo from "@/components/fixedLogo";
import Footer from "@/components/footer";
import Header from "@/components/header";
import SocialProfileSimple from "@/components/socialProfile";
import { AuthContext } from "@/store/context/AuthContext";
import {
  Box,
  Flex,
} from "@chakra-ui/react";
import { useContext} from "react";

function Page() {
  const {state : authState} = useContext(AuthContext)

  // useEffect(() => {
  //   const isAuthenticated = Cookies.get("cloudClubAuthToken") === "true";
  //   const userID = Cookies.get("cloudClubUserId");

  //   if (userID && isAuthenticated) {
  //     if (!userInfo)
  //       axios
  //         .get(
  //           `${process.env.NEXT_PUBLIC_BASE_URL}/getuserinfo.php?userId=${userID}`,
  //           {
  //             withCredentials: false,
  //           }
  //         )
  //         .then((response) => {
  //           if(response?.data?.info?.id){
  //             setUserInfo(response?.data?.info);
  //           }
  //         })
  //         .catch((error) => {
  //           console.error("Error fetching user information:", error);
  //         });
  //   }
  //   else {
  //       router.replace('/')
  //   }
  // }, []);

  

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
         <SocialProfileSimple data={authState?.value?.data}/>
         {/* <UploadProfilePicture /> */}
        </Box>
      </Flex>
      <Footer />
    </>
  );
}

export default Page;
