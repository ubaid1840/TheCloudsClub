"use client";

import Loader from "@/app/loading";
import AdminLayout from "@/components/AdminLayout";
import EmailTemplate from "@/components/emailTemplate";
import { RepeatIcon } from "@chakra-ui/icons";
import { Box, HStack, Heading, Img, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Page() {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllEmails();
  }, []);

  async function fetchAllEmails() {
    try {
      await axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/fetchemails.php`, {
          withCredentials: false,
        })
        .then((response) => {
          if (response.status == 200) {
            setEmails(response.data);
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
      ) : emails.length == 0 ? (
        <Box
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <Heading color={"#323232"}>No new emails!!!</Heading>
        </Box>
      ) : (
        <Box
          paddingY={"20px"}
          paddingX={'40px'}
          width={"100%"}
          // bg={useColorModeValue("gray.100", "gray.900")}

          justifyContent={"center"}
          display={"flex"}
          flexDirection={'column'}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "20px",
            }}
          >
            <Box
              onClick={() => {
                setLoading(true);
                fetchAllEmails()
              }}
              as="a"
              display="flex"
              alignItems="center"
              _hover={{ color: "purple.500" }}
            >
              <RepeatIcon boxSize={8} cursor={"pointer"} />
            </Box>
          </div>
          <EmailTemplate data={emails} />
        </Box>
      )}
    </AdminLayout>
  );
}