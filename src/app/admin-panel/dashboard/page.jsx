"use client";

import Loader from "@/app/loading";
import AdminLayout from "@/components/AdminLayout";
import { RepeatIcon } from "@chakra-ui/icons";
import { Box, HStack, Heading, Img, Spinner, VStack, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Page() {
  const [totalUsers, setTotalUsers] = useState(0);
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
            setTotalUsers(response.data.length);
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
        <Box
          minH="100vh"
          width={"100%"}
          // bg={useColorModeValue("gray.100", "gray.900")}
          paddingTop={"20px"}
          justifyContent={"center"}
          display={"flex"}
          bg={'gray.100'}
        >
          {/* <Box
            width={"300px"}
            height={"130px"}
            bg={"#ace2ee"}
            overflow={"hidden"}
            borderRadius={"5px"}
          >
         

            <VStack width={"100%"} spacing={0}>
              <HStack justifyContent={"space-between"} color={"white"}>
                <VStack style={{ alignItems: "flex-start" }} spacing={0}>
                  <Heading
                    style={{ fontWeight: "900", fontSize: 34, color: "black" }}
                    letterSpacing={2}
                  >
                    {totalUsers}
                  </Heading>
                  <Heading
                    fontSize={18}
                    fontWeight={"500"}
                    letterSpacing={2}
                    color={"black"}
                  >
                    Total Members
                  </Heading>
                </VStack>
                <div>
                  <Img
                    style={{ width: "100px", height: "100px" }}
                    src="/user-plus.png"
                    alt="user registration"
                    fill={"white"}
                    filter="brightness(0) saturate(100%) invert(17%) sepia(91%) saturate(7462%) hue-rotate(207deg) brightness(99%) contrast(99%);"
                  />
                </div>
              </HStack>
              <div
                style={{
                  height: "30px",
                  width: "100%",
                  backgroundColor: "#015CCF",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <RepeatIcon
                  color={"white"}
                  style={{ cursor: "pointer" }}
                  _hover={{ color: "black" }}
                  onClick={() => {
                    setLoading(true);
                    fetchAllUsers();
                  }}
                />
              </div>
            </VStack>
          </Box> */}

          <Box
            width={"300px"}
            height={"150px"}
            bg={"#015CCF"}
            overflow={"hidden"}
            borderRadius={"5px"}
            paddingTop={'10px'}
           
          >
            <div style={{width :"100%", justifyContent:'space-between', display:'flex', flexDirection:'column', height:'140px'}}  >
              <HStack justifyContent={"space-between"} color={"white"} marginX={'15px'} alignItems={'center'}>
                <VStack style={{ alignItems: "flex-start" }} spacing={2}>
                  <Text
                    style={{ fontWeight: "900", fontSize: 34,  }}
                    letterSpacing={2}
                  >
                    {totalUsers-1}
                  </Text>
                  <div
                    fontSize={18}
                    fontWeight={"500"}
                    letterSpacing={2}
                    
                  >
                    Total Members
                  </div>
                  <div></div>
                </VStack>
                <div>
                  <Img
                    style={{ width: "80px", height: "80px", opacity:0.2 }}
                    src="/user-plus.png"
                    alt="user registration"
                    // fill={"white"}
                    // filter="brightness(0) saturate(100%) invert(17%) sepia(91%) saturate(7462%) hue-rotate(207deg) brightness(99%) contrast(99%);"
                  />
                </div>
              </HStack>
              <div
                style={{
                  height: "30px",
                  width: "100%",
                  backgroundColor: "#003372",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <RepeatIcon
                  color={"white"}
                  style={{ cursor: "pointer" }}
                  _hover={{ color: "teal.400" }}
                  onClick={() => {
                    setLoading(true);
                    fetchAllUsers();
                  }}
                />
              </div>
            </div>
          </Box>
        </Box>
      )}
    </AdminLayout>
  );
}
