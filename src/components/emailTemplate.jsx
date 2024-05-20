import { RepeatIcon } from "@chakra-ui/icons";
import {
  Box,
  HStack,
  VStack,
  Text,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";

export default function EmailTemplate({ data }) {
  if(data.length > 0)
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Accordion allowToggle>
        <VStack spacing={2} width={"100%"} alignItems={"normal"}>
          {data.map((item, index) => (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton
                  _expanded={{
                    bg: "teal.600",
                    color: "white",
                    borderBottomRadius: "0px",
                  }}
                  borderRadius={"10px"}
                  bg={"white"}
                >
                  <Box as="span" flex="1" textAlign="left">
                    <Text fontWeight={"600"}>Subject: {item.subject}</Text>
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Text fontSize={"14px"}>From: {item.from}</Text>
                      <Text fontSize={"10px"}>{item.date}</Text>
                    </div>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel bg={"white"} pb={4} borderBottomRadius={"10px"}>
                {item.message}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </VStack>
      </Accordion>
    </div>
  );
}
