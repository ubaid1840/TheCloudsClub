"use client";

import Loader from "@/app/loading";
import AdminLayout from "@/components/AdminLayout";
import EmailTemplate from "@/components/emailTemplate";
import MyTable from "@/components/table";
import { RepeatIcon } from "@chakra-ui/icons";
import { Box, HStack, Heading, Img, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

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
        <Loader />
      ) : (
        <Box
          width={"100%"}
          height={'100vh'}
          // bg={useColorModeValue("gray.100", "gray.900")}
          paddingTop={"20px"}
          justifyContent={"center"}
          display={"flex"}
        >
          <MyTable data={memberData} />
        </Box>
      )}
    </AdminLayout>
  );
}
