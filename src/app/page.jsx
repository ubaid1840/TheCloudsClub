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
    } else {
      setIsPrivacyModalShown(false);
    }
  }, []);

  useEffect(() => {
    const modalShown = Cookies.get("modalShown");
    if (!modalShown) {
      onAgeModalOpen();
    } else {
      setIsModalShown(false);
    }
  }, []);

  useEffect(() => {
    const isAuthenticated = Cookies.get("cloudClubAuthToken") === "true";
    const userID = Cookies.get("cloudClubUserId");
    if (userID && isAuthenticated) {
    } else {
      onJoinNowModalOpen();
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const minHeight = 80;
      const minWidth = 100;
      const newHeight = Math.max(minHeight, 1000 - position * 6);
      const newWidth = Math.max(minWidth, 1000 - position * 6);
      setContainerHeight(`${newHeight}px`);
      setStackMargin(`${newHeight + 220}px`);
      setImgWidth(`${newWidth}px`);
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up: Remove scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleYesClick = (val) => {
    if (val == "age") {
      Cookies.set("modalShown", "true", { expires: 1 });
      setIsModalShown(false);
      onAgeModalClose();
    } else {
      Cookies.set("privayModalShown", "true", { expires: 1 });
      setIsPrivacyModalShown(false);
      onPrivacyModalClose();
    }
  };

  const handleNoClick = () => {
    setIsPrivacyModalShown(false);
  };

  return (
    <>
      <Header />
      <div
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
      </div>
      <Stack
        style={{
          width: "100vw",
          display: "flex",
          backgroundColor: "black",
          alignItems: "center",
          gap: 0,
          paddingTop: stackMargin,
          paddingRight: "10px",
          paddingLeft: "10px",
        }}
      >
        <About />
      </Stack>
      <Footer />

      {isJoinNowModalShown && (
        <JoinNowModal
          isOpen={isJoinNowModalOpen}
          onClose={onJoinNowModalClose}
        />
      )}

      {isModalShown && (
        <AgeModal
          isOpen={isAgeModalOpen}
          onClose={onAgeModalClose}
          onYesClick={() => handleYesClick("age")}
        />
      )}

      {isPrivacyModalShown && (
        <PrivacyModal
          onNoClick={handleNoClick}
          isOpen={isPrivacyModalOpen}
          onClose={onPrivacyModalClose}
          onYesClick={() => handleYesClick("privacy")}
        />
      )}
    </>
  );
}
