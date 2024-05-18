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
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function CannotJoinModal({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      size={{ base: "sm", md: "md", lg: "md" }}
      closeOnOverlayClick={false}
      onClose={onClose}
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
                Entschuldigung
              </Heading>
              <Img
                style={{
                  height: 120,
                  width: 120,
                }}
                src="/logo.png"
                alt="The cloud club logo"
              />
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "500",
                  fontSize: "16px",
                }}
              >
                Sie können dem Club nicht beitreten
              </Text>
              
                <Button
                onClick={onClose}
                  style={{
                    marginTop: "40px",
                    width: "200px",
                    marginBottom: 20,
                  }}
                >
                  Close
                </Button>
             
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

export default CannotJoinModal;
