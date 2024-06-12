import {
  Img,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";

function PrivacyModal({ isOpen, onClose, onYesClick, onNoClick }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: "sm", md: "md", lg: "md" }}
      closeOnOverlayClick={false}
    >
      <ModalOverlay
        bg="whiteAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent style={{ borderRadius: "10px" }}>
        <ModalBody
          style={{
            backgroundColor: "black",
            color: "white",
            padding: 30,
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Img
              style={{
                height: 120,
                width: 120,
                marginTop: 20,
                marginBottom: 20,
              }}
              src="/logo2.png"
              alt="The cloud club logo"
            />
            <Text style={{ fontSize: "24px", fontWeight: "bold", margin: 10 }}>
              Wir schätzen deine privatsphäre
            </Text>
            <Text
              style={{
                textAlign: "justify",
                fontWeight: "500",
                fontSize: "16px",
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              Wir verwenden Cookies um Diene Erfahrung zu verbessern and unsere
              Seite zu optimieren.{' '}
              <Link color="white" href="/privacy-policy">
                Privacy Policy
              </Link>
            </Text>
          </div>
        </ModalBody>

        <ModalFooter
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
            onClick={onNoClick}
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
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default PrivacyModal;
