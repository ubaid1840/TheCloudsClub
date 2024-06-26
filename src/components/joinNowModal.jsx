import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  Img,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Input
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";

function JoinNowModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('')
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: "sm", md: "md", lg: "md" }}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />

      <ModalContent style={{ borderRadius: "10px", padding: "0px" }}>
        <ModalBody
          style={{
            backgroundColor: "black",
            color: "white",

            // borderTopLeftRadius: "10px",
            // borderTopRightRadius: "10px",
            borderRadius: "10px",
            padding: "0px",
            margin: "0px",
          }}
        >
          <Box
            backgroundImage="/smoky.jpg"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            opacity="1"
            borderRadius="10px"
            padding="40px"
          >
            <div
              style={{
                cursor: "pointer",
                position: "absolute",
                top: 20,
                right: 20,
              }}
            >
              <CloseIcon onClick={onClose} />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Heading
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  margin: 10,
                  textAlign: "center",
                }}
              >
                Treten Sie dem inneren Kreis bei
              </Heading>
              <Img
                style={{
                  height: 170,
                  width: 170,
                  marginBottom:'20px'
                }}
                src="/logo3.png"
                alt="The cloud club logo"
              />
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "500",
                  fontSize: "16px",
                }}
              >
                Seien Sie der Erste, der von The CloudClub erfährt
              </Text>
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
              {/* <Link href="/join-signup"> */}
                <Button
                  onClick={onClose}
                 
                  style={{
                    marginTop: "40px",
                    width: "200px",
                    marginBottom: 20,
                  }}
                >
                  Join Now
                </Button>
              {/* </Link> */}
            </div>
          </Box>
        </ModalBody>

        {/* <ModalFooter
          style={{
            padding: 0,
            margin: 0,
            width: "100%",
            justifyContent: "space-between",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
        >
          <button
            className="modal-btn"
            style={{ zIndex: 1, borderBottomLeftRadius: "10px" }}
            onClick={() => window.open("https://www.google.com", "_blank")}
          >
            Ablehnen
          </button>
          <button
            className="modal-btn"
            style={{
              borderWidth: 0,
              borderStyle: "none",
              borderBottomRightRadius: "10px",
            }}
            onClick={onYesClick}
          >
            Annehmen
          </button>
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
}

export default JoinNowModal;
