"use client";
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
import Heading from "@/components/Heading";
import AgeModal from "@/components/ageModal";
import Cookies from "js-cookie";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [containHeight, setContainerHeight] = useState("1000px");
  const [imgWidth, setImgWidth] = useState("1000px");
  const [stackMargin, setStackMargin] = useState("1000px");
  const [isModalShown, setIsModalShown] = useState(true);

  useEffect(() => {
    const modalShown = Cookies.get("modalShown");
    if (!modalShown) {
      onOpen();
    } else {
      setIsModalShown(false);
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

  const handleYesClick = () => {
    Cookies.set("modalShown", "true", { expires: 1 });
    setIsModalShown(false);
    onClose();
  };

  return (
    <>
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
          style={{ maxWidth: "85%", width: imgWidth }}
          src="/logo.jpg"
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
        <Heading />
      </Stack>
      {isModalShown && (
        <AgeModal
          isOpen={isOpen}
          onClose={onClose}
          onYesClick={handleYesClick}
        />
      )}
    </>
  );
}
