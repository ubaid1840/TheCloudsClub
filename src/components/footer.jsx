import {
  Button,
  FormControl,
  HStack,
  IconButton,
  Img,
  Input,
  Stack,
  VStack,
  useColorModeValue,
  SimpleGrid,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("initial");
  const [error, setError] = useState(false);
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");

  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100%",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 4 }}
        spacing="20px"
        width={"90%"}
      >
        {isLargerThan500 ? (
          <Img
            style={{ height: 120, width: 220, marginTop: 20, marginBottom: 20 }}
            src="/logo.jpg"
            alt="The cloud club logo"
          />
        ) : null}

        <VStack style={{ alignItems: "flex-start" }} spacing={3}>
          <div className="footer-heading">Get in touch</div>
          <div className="footer-subheading">a: The Cloud Club, Germany</div>
          <div className="footer-subheading">p: +49 1762 2047 2894</div>
        </VStack>
        <VStack style={{ alignItems: "flex-start" }} spacing={3}>
          <div className="footer-heading">Quick Links</div>
          <Link href="/">
            <div className="footer-subheading">Home</div>
          </Link>
          <div className="footer-subheading">Profile</div>
          <div className="footer-subheading">Merchandise</div>
        </VStack>

        <VStack style={{ alignItems: "flex-start" }} spacing={3}>
          <div className="footer-heading">Newsletter</div>
          <Stack
            direction={{ base: "column", md: "row" }}
            as={"form"}
            spacing={"12px"}
            onSubmit={(e) => {
              e.preventDefault();
              setError(false);
              setState("submitting");

              // remove this code and implement your submit logic right here
              setTimeout(() => {
                if (email === "fail@example.com") {
                  setError(true);
                  setState("initial");
                  return;
                }

                setState("success");
              }, 1000);
            }}
          >
            <div
              style={{ display: "flex", padding: 5, backgroundColor: "white" }}
            >
              <Input
                style={{
                  marginRight: 5,
                  width: "150px",
                  fontWeight: "600",
                  backgroundColor: "white",
                  color: "black",
                }}
                variant={"solid"}
                _placeholder={{
                  color: "gray.600",
                }}
                borderRadius={0}
                borderColor={useColorModeValue("gray.300", "gray.700")}
                id={"newsletter"}
                type={"email"}
                placeholder={"Email"}
                aria-label={"Newsletter"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button className="btn" isLoading={state === "submitting"}>
                Subscribe
              </button>
            </div>
          </Stack>
        </VStack>
      </SimpleGrid>

      <div
        style={{
          width: "100%",
          borderWidth: "1px",
          borderColor: "white",
          maxWidth: "1300px",
          marginTop: "40px",
          marginBottom: "40px",
        }}
      ></div>

      <SimpleGrid
        style={{ marginBottom: "40px" }}
        columns={{ sm: 1, md: 2, lg: 2 }}
        spacing="20px"
        width={"90%"}
        justifyContent={{
          base: "flex-start",
          md: "space-between",
          lg: "space-between",
        }}
        alignItems={"center"}
      >
        <div className="footer-subheading" style={{ fontSize: "14px" }}>
          © 2024 ALL RIGHTS RESERVED THE CLOUD CLUB
        </div>
        <div style={{ flex: "display" }}>
          <HStack
            spacing={5}
            justifyContent={{
              base: "flex-start",
              md: "flex-end",
              lg: "flex-end",
            }}
          >
            <RiInstagramFill
              color="white"
              size="22px"
              onClick={() => window.open("https://www.instagram.com", "_blank")}
              style={{ cursor: "pointer" }}
            />
            <FaFacebookF
              color="white"
              size="22px"
              onClick={() => window.open("https://www.facebook.com", "_blank")}
              style={{ cursor: "pointer" }}
            />
            <FaTwitter
              color="white"
              size="22px"
              onClick={() => window.open("https://www.twitter.com", "_blank")}
              style={{ cursor: "pointer" }}
            />
            <FaTiktok
              color="white"
              size="22px"
              onClick={() => window.open("https://www.toktik.com", "_blank")}
              style={{ cursor: "pointer" }}
            />
            <FaYoutube
              color="white"
              size="22px"
              onClick={() => window.open("https://www.youtube.com", "_blank")}
              style={{ cursor: "pointer" }}
            />
          </HStack>
        </div>
      </SimpleGrid>
    </div>
  );
}
