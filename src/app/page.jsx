"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Link from "next/link";
import {
  Stack,
  Img,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Spinner,
  Box,
  Text
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Footer from "@/components/footer";
import About from "@/components/about";
import AgeModal from "@/components/ageModal";
import Cookies from "js-cookie";
import Header from "@/components/header";
import Lottie from "lottie-react";
import Loader from "./loading";
import PrivacyModal from "@/components/privacyModal";
import JoinNowModal from "@/components/joinNowModal";
import axios from "axios";

export default function Home() {
  const {
    isOpen: isAgeModalOpen,
    onOpen: onAgeModalOpen,
    onClose: onAgeModalClose,
  } = useDisclosure();
  const {
    isOpen: isPrivacyModalOpen,
    onOpen: onPrivacyModalOpen,
    onClose: onPrivacyModalClose,
  } = useDisclosure();
  const {
    isOpen: isJoinNowModalOpen,
    onOpen: onJoinNowModalOpen,
    onClose: onJoinNowModalClose,
  } = useDisclosure();

  const [containHeight, setContainerHeight] = useState("1000px");
  const [imgWidth, setImgWidth] = useState("1000px");
  const [stackMargin, setStackMargin] = useState("1000px");
  const [isModalShown, setIsModalShown] = useState(true);
  const [isPrivacyModalShown, setIsPrivacyModalShown] = useState(true);
  const [isJoinNowModalShown, setIsJoinNowModalShown] = useState(true);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    if (pageLoading) {
      setPageLoading(false);
    }
  }, []);

  useEffect(() => {
    const privacyModalShown = Cookies.get("privayModalShown");
    if (!privacyModalShown) {
      onPrivacyModalOpen();
    } 
  }, []);

  useEffect(() => {
    const modalShown = Cookies.get("modalShown");
    if (!modalShown) {
      onAgeModalOpen();
    } 
  }, []);

  // useEffect(()=>{
  //   Cookies.remove("cloudClubAuthToken")
  //   Cookies.remove("cloudClubUserId")

  //   Cookies.remove("privayModalShown")
  //   Cookies.remove("modalShown")

  // },[])

  useEffect(() => {
    const isAuthenticated = Cookies.get("cloudClubAuthToken") === "true";
    const userID = Cookies.get("cloudClubUserId");
    if (userID && isAuthenticated) {
    } else {
      setTimeout(()=>{
        onJoinNowModalOpen();
      },30000)
     
    }
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const position = window.scrollY;
  //     const minHeight = 80;
  //     const minWidth = 100;
  //     const newHeight = Math.max(minHeight, 1000 - position * 6);
  //     const newWidth = Math.max(minWidth, 1000 - position * 6);
  //     setContainerHeight(`${newHeight}px`);
  //     setStackMargin(`${newHeight + 220}px`);
  //     setImgWidth(`${newWidth}px`);
  //   };

  //   // Attach scroll event listener
  //   window.addEventListener("scroll", handleScroll);

  //   // Clean up: Remove scroll event listener on component unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const handleYesClick = (val) => {
    if (val == "age") {
      Cookies.set("modalShown", "true", { expires: 1 });
      onAgeModalClose();
    } else {
      Cookies.set("privayModalShown", "true", { expires: 1 });
      onPrivacyModalClose();
    }
  };

  const handleNoClick = () => {
    onPrivacyModalClose()
  };

  return (
    <div style={{ width: "100%", backgroundColor: "black" }}>
      <Header />
      {/* <div
        style={{
          height: containHeight,
          maxHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          marginTop: "40px",
          backgroundColor: "black",
          width: "100vw",
          position: "fixed",
        }}
      >
        <Img
          style={{ maxWidth: "65%", width: imgWidth }}
          src="/logo.png"
          alt="The cloud club logo"
        />
      </div> */}
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "black",
          width: "100%",
          border: "0px",
          flexDirection:'column'
        }}
        alignItems="center"
        height={{ base: "300px", lg: "100vh" }}
      >
        <Img
        marginTop={{base : '20px'}}
        maxWidth={{base : '60%', lg : '40%'}}
          style={{ width: "1000px" }}
          src="/hero1.png"
          alt="The cloud club logo"
        />
        <div style={{borderBottom:'1px solid', borderBottomColor:'#cccccc'}}>
          <Text color={'white'} fontSize={{base : 20, md:40, lg : 40}}>CANNABIS SOCIAL CLUB</Text>
        </div>
      </Box>
      <Stack
        style={{
          width: "100vw",
          display: "flex",
          backgroundColor: "black",
          alignItems: "center",
          gap: 0,
          paddingTop: "40px",
          paddingRight: "10px",
          paddingLeft: "10px",
        }}
      >
        <About />
      </Stack>
      <Footer />

      <JoinNowModal isOpen={isJoinNowModalOpen} onClose={onJoinNowModalClose} />

      <AgeModal
        isOpen={isAgeModalOpen}
        onClose={onAgeModalClose}
        onYesClick={() => handleYesClick("age")}
      />
      <PrivacyModal
        onNoClick={handleNoClick}
        isOpen={isPrivacyModalOpen}
        onClose={onPrivacyModalClose}
        onYesClick={() => handleYesClick("privacy")}
      />
    </div>
  );
}
