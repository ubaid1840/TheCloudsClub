"use client";
import MyDrawer from "@/components/myDrawer";
import {
  Img,
  Stack,
  VStack,
  Text,
  Button,
  Input,
  useColorModeValue,
  Box,
  Checkbox,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { DatePicker } from "@orange_digital/chakra-datepicker";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isChecked, setIsChecked] = useState(true);
  const [date, setDate] = useState(new Date());

  return (
    <>
      <div
        style={{
          height: "80px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          marginTop: "40px",
          backgroundColor: "black",
          width: "100vw",
          position: "fixed",
          zIndex: 999,
        }}
      >
        <Img
          style={{ width: "100px" }}
          src="/logo.jpg"
          alt="The cloud club logo"
        />
      </div>

      <Flex
        width="100vw"
        backgroundColor="black"
        alignItems="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        paddingTop={{ base: "120px", md: "120px", lg: "120px" }}
        paddingBottom={{ base: "20px", md: "80px", lg: "80px" }}
      >
        <Box
          bg={"transparent"}
          display={"flex"}
          flexDir={"column"}
          alignItems="center"
          width={{ base: "95%", sm: "70%", md: "35%" }}
        >
          <Stack
            spacing={2}
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
            width={"100%"}
          >
            <div
              className="footer-subheading"
              style={{ fontWeight: "600", fontSize: "22px" }}
            >
              Create your account
            </div>
            <div style={{ display: "flex", marginBottom: "40px" }}>
              <Text className="footer-subheading" style={{ fontSize: "16px" }}>
                {`Already have an account`}
              </Text>
              <Link href="/login">
                <Button
                  variant="link"
                  className="footer-subheading"
                  style={{
                    fontSize: "16px",
                    marginLeft: "5px",
                    color: "white",
                  }}
                >
                  Login
                </Button>
              </Link>
            </div>
          </Stack>

          <Stack
            spacing={8}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            width={"100%"}
          >
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
              borderColor={useColorModeValue("white.900", "white.900")}
              id={"first Name"}
              //   type={"email"}
              placeholder={"First Name"}
              aria-label={"First Name"}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

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
                color: "gray",
              }}
              borderRadius={0}
              borderColor={useColorModeValue("white.900", "white.900")}
              id={"Last Name"}
              //   type={"password"}
              placeholder={"Last Name"}
              aria-label={"Last Name"}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {/* <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width:'100%', 
                alignItems:'center'
              }}
            >
              <div style={{color:'white', marginRight:'10px'}}>Select Age</div>
              <div className="datepicker">
                <DatePicker
                  initialValue={date}
                  onDateChange={(nextDate) => setDate(nextDate)}
                />
              </div>
            </div> */}

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
              borderColor={useColorModeValue("white.900", "white.900")}
              id={"email"}
              type={"email"}
              placeholder={"Email"}
              aria-label={"Email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

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
                color: "gray",
              }}
              borderRadius={0}
              borderColor={useColorModeValue("white.900", "white.900")}
              id={"password"}
              type={"password"}
              placeholder={"Password"}
              aria-label={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

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
              borderColor={useColorModeValue("white.900", "white.900")}
              id={"Confirm Password"}
              type={"password"}
              placeholder={"Confirm Password"}
              aria-label={"Confirm Password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <div style={{ display: "flex", alignSelf: "flex-start" }}>
              <Checkbox
                onChange={() => setIsChecked(!isChecked)}
                isChecked={isChecked}
                style={{ color: "white" }}
              >{`I agree to the terms and privacy policy`}</Checkbox>
            </div>

            <button
              className="btn"
              style={{ width: "400px", borderWidth: "1px", width: "100%" }}
            >
              Register
            </button>
          </Stack>
        </Box>
      </Flex>
    </>
  );
}

export default Signup;
