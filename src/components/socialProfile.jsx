import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useRef } from "react";

export default function SocialProfileSimple({ data }) {


  return (
    <Center py={6}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={'white'}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          name={data?.name ? data?.name : ''} src='https://bit.ly/broken-link'
          alt={"Avatar Alt"}
          mb={4}
          pos={"relative"}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: "green.300",
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {data?.name}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          {data?.email}
        </Text>
        <Text
          textAlign={"center"}
          color={'gray.700'}
          px={3}
        >
          {data?.id == "1" ? "Admin" : `Member ID: ${data?.id}`}
        </Text>
        <Text
          textAlign={"center"}
          color={"gray.700"}
          px={3}
        >
          {data?.address}
        </Text>

{data?.id == '1' ? null
:

        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={"gray.50"}
            fontWeight={"400"}
          >
            {`#${data?.city}`}
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={"gray.50"}
            fontWeight={"400"}
          >
            {`#${data?.age}`}
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={"gray.50"}
            fontWeight={"400"}
          >
            {`#${data?.requiredCannabis}`}
          </Badge>
        </Stack>
}

        {/* <Stack mt={8} direction={"row"} spacing={4}>
          <Button
           
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"purple.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "purple.500",
            }}
            _focus={{
              bg: "purple.500",
            }}
          >
            Update Picture
          </Button> 
        </Stack> */}
      </Box>
    </Center>
  );
}
