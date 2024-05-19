"use client";

import Loader from "@/app/loading";
import AdminLayout from "@/components/AdminLayout";
import EmailTemplate from "@/components/emailTemplate";
import MyTable from "@/components/table";
import { RepeatIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  HStack,
  Heading,
  Img,
  SimpleGrid,
  Spinner,
  VStack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";

export default function Page() {
  const [memberData, setMemberData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  async function fetchAllUsers() {
    try {
      await axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/getallusers.php`, {
          withCredentials: false,
        })
        .then((response) => {
          if (response?.data?.length > 0) {
            setMemberData(response.data);
          }
        });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AdminLayout>
      {loading ? (
        <div
          style={{
            height: "100vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spinner />
        </div>
      ) : (
        <div
          style={{
            padding: "10px",
            height: "100vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Heading
            fontSize={"22px"}
            alignSelf={"flex-start"}
            mt={"10px"}
            mb={"20px"}
            ml={"5px"}
          >
            Members Data
          </Heading>
          <div
            style={{ width: "100%", backgroundColor: "white", height: "100%" }}
          >
            <SimpleGrid
              columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
              spacing="20px"
              justifyContent="center"
              width="100%"
              padding="20px"
            >
              {memberData.map(
                (item, index) =>
                  index != 0 && (
                    <Box
                      key={index}
                      width="100%"
                      maxWidth="320px"
                      height="auto"
                      padding="10px"
                      border="0.5px solid"
                      borderRadius="5px"
                      borderColor="#cccccc"
                      bg="gray.100"
                      boxShadow="md"
                    >
                      <HStack
                        justifyContent="space-between"
                        alignItems="flex-start"
                      >
                        <VStack alignItems="flex-start" spacing={1}>
                          <div style={{ display: "flex" }}>
                            <Heading
                              fontSize={16}
                              fontWeight={600}
                              color="#525252"
                            >
                              Member ID #{item?.id}
                            </Heading>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              fontSize: "14px",
                              marginTop: "10px",
                            }}
                          >
                            <Text color="#525252" fontWeight={600}>
                              Name:{" "}
                            </Text>
                            <Text>{item?.name}</Text>
                          </div>
                          <div style={{ display: "flex", fontSize: "14px" }}>
                            <Text color="#525252" fontWeight={600}>
                              D.O.B:{" "}
                            </Text>
                            <Text>{item?.age}</Text>
                          </div>
                          <div style={{ display: "flex", fontSize: "14px" }}>
                            <Text color="#525252" fontWeight={600}>
                              Email:
                            </Text>
                            <Text wordBreak="break-word">{item?.email}</Text>
                          </div>
                          <div style={{ display: "flex", fontSize: "14px" }}>
                            <Text color="#525252" fontWeight={600}>
                              Cannabis:
                            </Text>
                            <Text wordBreak="break-word">
                              {item?.requiredCannabis}
                            </Text>
                          </div>
                          <div style={{ display: "flex", fontSize: "14px" }}>
                            <Text color="#525252" fontWeight={600}>
                              City:
                            </Text>
                            <Text>{item?.city}</Text>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              fontSize: "14px",
                              alignItems: "center",
                            }}
                          >
                            <FaHome color="#525252" />
                            <Text
                              style={{
                                marginLeft: "5px",
                                wordBreak: "break-word",
                              }}
                            >
                              {item.address}
                            </Text>
                          </div>
                        </VStack>
                        <Avatar
                          size="lg"
                          name={item.name}
                          src="https://bit.ly/broken-link"
                          alt="Avatar Alt"
                          mb={4}
                          pos="relative"
                        />
                      </HStack>
                    </Box>
                  )
              )}
            </SimpleGrid>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
