"use client";

import Loader from "@/app/loading";
import AdminLayout from "@/components/AdminLayout";
import { RepeatIcon } from "@chakra-ui/icons";
import { Box, HStack, Heading, Img, VStack } from "@chakra-ui/react";
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
      {loading ? <Loader /> :
      <Box
        minH="100vh"
        width={"100%"}
        // bg={useColorModeValue("gray.100", "gray.900")}
        paddingTop={"20px"}
        justifyContent={"center"}
        display={"flex"}
      >
        <Box
          width={"300px"}
          height={"130px"}
          bg={"#C32F3D"}
          overflow={"hidden"}
          borderRadius={"5px"}
        >
          <VStack width={"100%"} spacing={0}>
            <HStack justifyContent={"space-between"} color={"white"}>
              <VStack style={{ alignItems: "flex-start" }} spacing={0}>
                <Heading
                  style={{ fontWeight: "900", fontSize: 34 }}
                  letterSpacing={2}
                >
                  {totalUsers}
                </Heading>
                <Heading fontSize={18} fontWeight={"500"} letterSpacing={2}>
                  Total Members
                </Heading>
              </VStack>
              <div>
                <Img
                  style={{ width: "100px", height: "100px", opacity: 0.2 }}
                  src="/user-plus.png"
                  alt="user registration"
                />
              </div>
            </HStack>
            <div
              style={{
                height: "30px",
                width: "100%",
                backgroundColor: "#860815",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <RepeatIcon
                color={"white"}
                style={{ cursor: "pointer" }}
                _hover={{ color: "cyan" }}
                onClick={()=>{
                  setLoading(true)
                  fetchAllUsers()
                }}
              />
            </div>
          </VStack>
        </Box>
      </Box>
}
    </AdminLayout>
  );
}
