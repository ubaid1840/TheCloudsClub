"use client";
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
  Heading,
  Progress,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Cookies from "js-cookie";
import { CheckIcon, TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import axios from "axios";
import Loader from "../loading";
import { CustomToast } from "@/components/myToast";
import { useRouter } from "next/navigation";
import FixedLogo from "@/components/fixedLogo";
import CannotJoinModal from "@/components/cannotJoinModal";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [steps, setSteps] = useState(1);
  const [age, setAge] = useState("");
  const [yesNoSelection, setYesNotSelection] = useState("");
  const [cannabisSelection, setCannabisSelection] = useState("");
  const [city, setCity] = useState("");
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const { addToast } = CustomToast();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [address, setAddress] = useState('')

  const router = useRouter();

  // useEffect(()=>{
  //   Cookies.remove('modalShown');
  //   Cookies.remove('privayModalShown');
  // },[])

  useEffect(() => {
    const isAuthenticated = Cookies.get("cloudClubAuthToken") === "true";
    const userID = Cookies.get("cloudClubUserId");
    if (userID && isAuthenticated) {
      router.replace("/");
    }
  }, []);

  // useEffect(() => {
  //   if (!dataVisible) {
  //     setDataVisible(true);
  //   }
  // }, [dataVisible]);

  function handleEnter(e) {
    if (e.key == "Enter") {
      handleNextStep();
    }
  }

  function handleNextStep() {
    if (steps != 7) {
      setProgress(progress + 15);
      setSteps((prevState) => {
        const newState = prevState + 1;
        return newState;
      });
    }
  }

  function handlePreviousStep() {
    if (steps != 1) {
      setProgress(progress - 15);
      setSteps((prevState) => {
        const newState = prevState - 1;
        return newState;
      });
    }
  }

  function handleCannabisSelection(val) {
    setCannabisSelection(val);
  }

  function handleYesNoSelection(val) {
    if (val == "Ja") {
      onOpen();
    } else {
      setYesNotSelection(val)
    }
  }

  async function handleFinish() {
    const formData = {
      email: email,
      name: name,
      age: age,
      alreadyMember: yesNoSelection,
      city: city,
      requiredCannabis: cannabisSelection,
      address : address,
      password: password,
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/register.php`,
        formData,
        {
          withCredentials: false, // Exclude credentials (e.g., cookies)
          headers: {
            "Content-Type": "application/json", // Set content type to JSON
          },
        }
      );
      addToast({ message: "Welcome to the club", type: "success" });
      setProgress(progress + 15);
      setSteps((prevState) => {
        const newState = prevState + 1;
        return newState;
      });
      
    } catch (error) {
      console.log(error.response.data.error)
      addToast({ message: error.response.data.error, type: "error" });
    } finally {
      setLoading(false);
    }
  }

  const validateDate = (dateString) => {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!regex.test(dateString)) {
      console.log("Date format is incorrect. Please use DD/MM/YYYY format.");
      return false;
    }
    const [day, month, year] = dateString.split("/").map(Number);
    const date = new Date(year, month - 1, day);
    if (
      date.getFullYear() === year &&
      date.getMonth() + 1 === month &&
      date.getDate() === day
    ) {
      return true;
    } else {
      return false;
    }
  };

  const FloatingButton = ({ onClick }) => {
    return (
      <div className="floating-button">
        <Box
          bg="teal.500"
          display="flex"
          alignItems="center"
          justifyContent="center"
          _hover={{ bg: "teal.400" }}
          padding={"5px"}
          color={"white"}
        >
          <TriangleDownIcon
            boxSize={6}
            cursor={"pointer"}
            onClick={handleNextStep}
          />
        </Box>
        <Box
          ml={"2px"}
          bg="teal.500"
          display="flex"
          alignItems="center"
          justifyContent="center"
          _hover={{ bg: "teal.400" }}
          padding={"5px"}
          color={"white"}
        >
          <TriangleUpIcon
            boxSize={6}
            cursor={"pointer"}
            onClick={handlePreviousStep}
          />
        </Box>
      </div>
    );
  };

  function validateFinish () {
    if( email.includes("@") && password.length > 7 && email.includes(".") && name && age &&  yesNoSelection && city && cannabisSelection && address ){
      return false
    } else {
      return true
    }
  }

  return (
    <>
      <Header />
      <FixedLogo />

      <Flex
        width="100vw"
        backgroundColor="black"
        alignItems="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        paddingTop={{ base: "120px", md: "120px", lg: "120px" }}
        paddingBottom={{ base: "40px", md: "80px", lg: "80px" }}
        paddingLeft={{ base: "5px", md: "0px", lg: "0px" }}
        paddingRight={{ base: "5px", md: "0px", lg: "0px" }}
      >
        <Progress
          colorScheme={"teal"}
          value={progress}
          width={"100vw"}
          marginBottom={10}
        />
        <Box
          bg={"transparent"}
          display={"flex"}
          flexDir={"column"}
          alignItems={{ base: "center", sm: "center", md: "flex-start" }}
          width={{ base: "95%", sm: "70%", md: "500px" }}
        >
          <div className={`step${steps}`}>
            {steps == 1 && (
              <Stack
                spacing={4}
                display={"flex"}
                flexDir={"column"}
                width={"100%"}
                className={`step${steps} ${steps === 1 ? "active" : ""}`}
              >
                <Text color={"white"} fontSize={20} fontWeight={700}>
                  {`1 -> Unter welcher Emailadresse dürfen wir dich kontaktieren?*`}
                </Text>
                <Text color={"white"}>Frage 1 von 7</Text>
                <div>
                  <Text color={"white"}>Email</Text>

                  <Input
                    style={{
                      height: "48px",
                      width: "100%",
                      fontWeight: "600",
                      backgroundColor: "black",
                      color: "white",
                      border: "0px",
                      borderBottom: "solid",
                      padding: "0px",
                    }}
                    variant={"thin"}
                    //   color={"black"}
                    _placeholder={{
                      color: "grey",
                    }}
                    borderRadius={0}
                    borderColor={"white.900"}
                    id={"email"}
                    //   type={"email"}
                    placeholder={"name@beispiel.de"}
                    aria-label={"email"}
                    value={email}
                    // onKeyDown={handleEnter}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <Text color={"white"}>Password</Text>

                  <Input
                    style={{
                      height: "48px",
                      width: "100%",
                      fontWeight: "600",
                      backgroundColor: "black",
                      color: "white",
                      border: "0px",
                      borderBottom: "solid",
                      padding: "0px",
                    }}
                    variant={"thin"}
                    //   color={"black"}
                    _placeholder={{
                      color: "grey",
                    }}
                    borderRadius={0}
                    borderColor={"white.900"}
                    id={"password"}
                    type={"password"}
                    placeholder={"*******"}
                    aria-label={"password"}
                    value={password}
                    // onKeyDown={handleEnter}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button
                  onClick={handleNextStep}
                  style={{ width: "50px" }}
                  isDisabled={
                    email.includes("@") &&
                    password.length > 7 &&
                    email.includes(".")
                      ? false
                      : true
                  }
                >
                  OK
                </Button>
              </Stack>
            )}
            {steps == 2 && (
              <Stack
                spacing={4}
                display={"flex"}
                flexDir={"column"}
                width={"100%"}
                className={`step${steps} ${steps === 2 ? "active" : ""}`}
              >
                <Text color={"white"} fontSize={20} fontWeight={700}>
                  {`2 -> Vor und Nachname`}
                </Text>
                <Text color={"white"}>Frage 2 von 7</Text>
                <div>
                  <Input
                    style={{
                      height: "48px",
                      width: "100%",
                      fontWeight: "600",
                      backgroundColor: "black",
                      color: "white",
                      border: "0px",
                      borderBottom: "solid",
                      padding: "0px",
                    }}
                    variant={"thin"}
                    //   color={"black"}
                    _placeholder={{
                      color: "grey",
                    }}
                    borderRadius={0}
                    borderColor={"white.900"}
                    id={"name"}
                    //   type={"email"}
                    placeholder={"Anne"}
                    aria-label={"name"}
                    value={name}
                    //onKeyDown={handleEnter}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <Button
                  onClick={handleNextStep}
                  style={{ width: "50px" }}
                  isDisabled={name.trim().length < 1 ? true : false}
                >
                  OK
                </Button>
              </Stack>
            )}

            {steps == 3 && (
              <Stack
                spacing={4}
                display={"flex"}
                flexDir={"column"}
                width={"100%"}
                className={`step${steps} ${steps === 3 ? "active" : ""}`}
              >
                <Text color={"white"} fontSize={20} fontWeight={700}>
                  {`3 -> Was ist Ihr Geburtsdatum?*`}
                </Text>
                <Text color={"white"}>Frage 3 von 7</Text>
                <div>
                  <Input
                    style={{
                      height: "48px",
                      width: "100%",
                      fontWeight: "600",
                      backgroundColor: "black",
                      color: "white",
                      border: "0px",
                      borderBottom: "solid",
                      padding: "0px",
                    }}
                    variant={"thin"}
                    //   color={"black"}
                    _placeholder={{
                      color: "grey",
                    }}
                    borderRadius={0}
                    borderColor={"white.900"}
                    id={"age"}
                    //   type={"email"}
                    placeholder={"DD/MM/YYYY"}
                    aria-label={"age"}
                    value={age}
                    //onKeyDown={handleEnter}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <Button
                  onClick={handleNextStep}
                  style={{ width: "50px" }}
                  isDisabled={!validateDate(age)}
                >
                  OK
                </Button>
              </Stack>
            )}

            {steps == 4 && (
              <Stack
                spacing={4}
                display={"flex"}
                flexDir={"column"}
                width={"100%"}
                className={`step${steps} ${steps === 4 ? "active" : ""}`}
              >
                <Text color={"white"} fontSize={20} fontWeight={700}>
                  {`4 -> Bist du bereits Mitglied in einem anderen Cannabis Verein?*`}
                </Text>
                <Text color={"white"}>Frage 4 von 7</Text>
                <Stack
                  spacing={4}
                  display={"flex"}
                  flexDir={"column"}
                  width={"100%"}
                >
                  <div
                    className="option-box"
                    onClick={() => handleYesNoSelection("Nein")}
                  >
                    <div
                      className="option-sub-box"
                      style={{
                        backgroundColor: yesNoSelection == "Nein" && "#2C7A7B",
                        color: yesNoSelection == "Nein" && "white",
                      }}
                    >
                      A
                    </div>
                    <Text>Nein</Text>
                    <div style={{ width: "20px" }}>
                      {yesNoSelection == "Nein" && <CheckIcon />}
                    </div>
                  </div>
                  <div
                    className="option-box"
                    onClick={() => handleYesNoSelection("Ja")}
                  >
                    <div
                      className="option-sub-box"
                      style={{
                        backgroundColor: yesNoSelection == "Ja" && "#2C7A7B",
                        color: yesNoSelection == "Ja" && "white",
                      }}
                    >
                      B
                    </div>
                    <Text>Ja</Text>
                    <div style={{ width: "20px" }}>
                      {yesNoSelection == "Ja" && <CheckIcon />}
                    </div>
                  </div>
                </Stack>
                <Button
                  onClick={handleNextStep}
                  style={{ width: "50px" }}
                  isDisabled={
                    yesNoSelection == "Nein" || yesNoSelection == "Ja"
                      ? false
                      : true
                  }
                >
                  OK
                </Button>
              </Stack>
            )}
            {steps == 5 && (
              <Stack
                spacing={4}
                display={"flex"}
                flexDir={"column"}
                width={"100%"}
                className={`step${steps} ${steps === 5 ? "active" : ""}`}
              >
                <Text color={"white"} fontSize={20} fontWeight={700}>
                  {`5 -> Wo wohnst Du*`}
                </Text>
                <Text color={"white"}>Frage 5 von 7</Text>
                <div>
                  <Text color={"white"}>Stadt</Text>
                  <Input
                    style={{
                      height: "48px",
                      width: "100%",
                      fontWeight: "600",
                      backgroundColor: "black",
                      color: "white",
                      border: "0px",
                      borderBottom: "solid",
                      padding: "0px",
                    }}
                    variant={"thin"}
                    _placeholder={{
                      color: "grey",
                    }}
                    borderRadius={0}
                    borderColor={"white.900"}
                    id={"city"}
                    placeholder={"Berlin"}
                    aria-label={"city"}
                    value={city}
                    //onKeyDown={handleEnter}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <Button
                  onClick={handleNextStep}
                  style={{ width: "50px" }}
                  isDisabled={city.trim().length < 1 ? true : false}
                >
                  OK
                </Button>
              </Stack>
            )}
            {steps == 6 && (
              <Stack
                spacing={4}
                display={"flex"}
                flexDir={"column"}
                width={"100%"}
                className={`step${steps} ${steps === 6 ? "active" : ""}`}
              >
                <Text color={"white"} fontSize={20} fontWeight={700}>
                  {`6 -> Wie viel Gramm Cannabis möchtest du monatlich kaufen?*`}
                </Text>
                <Text color={"white"}>Frage 6 von 7</Text>
                <Stack
                  spacing={4}
                  display={"flex"}
                  flexDir={"column"}
                  width={"100%"}
                >
                  <div
                    className="option-box"
                    onClick={() => handleCannabisSelection("unter 10g")}
                  >
                    <div
                      className="option-sub-box"
                      style={{
                        backgroundColor:
                          cannabisSelection == "unter 10g" && "#2C7A7B",
                        color: cannabisSelection == "unter 10g" && "white",
                      }}
                    >
                      A
                    </div>
                    <Text>unter 10g</Text>
                    <div style={{ width: "20px" }}>
                      {cannabisSelection == "unter 10g" && <CheckIcon />}
                    </div>
                  </div>
                  <div
                    className="option-box"
                    onClick={() => handleCannabisSelection("11-20g")}
                  >
                    <div
                      className="option-sub-box"
                      style={{
                        backgroundColor:
                          cannabisSelection == "11-20g" && "#2C7A7B",
                        color: cannabisSelection == "11-20g" && "white",
                      }}
                    >
                      B
                    </div>
                    <Text>11-20g</Text>
                    <div style={{ width: "20px" }}>
                      {cannabisSelection == "11-20g" && <CheckIcon />}
                    </div>
                  </div>
                  <div
                    className="option-box"
                    onClick={() => handleCannabisSelection("21-30g")}
                  >
                    <div
                      className="option-sub-box"
                      style={{
                        backgroundColor:
                          cannabisSelection == "21-30g" && "#2C7A7B",
                        color: cannabisSelection == "21-30g" && "white",
                      }}
                    >
                      C
                    </div>
                    <Text>21-30g</Text>
                    <div style={{ width: "20px" }}>
                      {cannabisSelection == "21-30g" && <CheckIcon />}
                    </div>
                  </div>
                  <div
                    className="option-box"
                    onClick={() => handleCannabisSelection("31-40g")}
                  >
                    <div
                      className="option-sub-box"
                      style={{
                        backgroundColor:
                          cannabisSelection == "31-40g" && "#2C7A7B",
                        color: cannabisSelection == "31-40g" && "white",
                      }}
                    >
                      D
                    </div>
                    <Text>31-40g</Text>
                    <div style={{ width: "20px" }}>
                      {cannabisSelection == "31-40g" && <CheckIcon />}
                    </div>
                  </div>

                  <div
                    className="option-box"
                    onClick={() => handleCannabisSelection("41-50g")}
                  >
                    <div
                      className="option-sub-box"
                      style={{
                        backgroundColor:
                          cannabisSelection == "41-50g" && "#2C7A7B",
                        color: cannabisSelection == "41-50g" && "white",
                      }}
                    >
                      E
                    </div>
                    <Text>41-50g</Text>
                    <div style={{ width: "20px" }}>
                      {cannabisSelection == "41-50g" && <CheckIcon />}
                    </div>
                  </div>
                </Stack>
                <Button
                  onClick={handleNextStep}
                  style={{ width: "50px" }}
                  isDisabled={
                    cannabisSelection == "unter 10g" ||
                    cannabisSelection == "11-20g" ||
                    cannabisSelection == "21-30g" ||
                    cannabisSelection == "31-40g" ||
                    cannabisSelection == "41-50g"
                      ? false
                      : true
                  }
                >
                  OK
                </Button>
              </Stack>
            )}
            {steps == 7 && (
              <Stack
                spacing={4}
                display={"flex"}
                flexDir={"column"}
                width={"100%"}
                className={`step${steps} ${steps === 3 ? "active" : ""}`}
              >
                <Text color={"white"} fontSize={20} fontWeight={700}>
                  {`3 -> Geben Sie die vollständige Adresse ein.*`}
                </Text>
                <Text color={"white"}>Frage 7 von 7</Text>
                <div>
                  <Input
                    style={{
                      height: "48px",
                      width: "100%",
                      fontWeight: "600",
                      backgroundColor: "black",
                      color: "white",
                      border: "0px",
                      borderBottom: "solid",
                      padding: "0px",
                    }}
                    variant={"thin"}
                    //   color={"black"}
                    _placeholder={{
                      color: "grey",
                    }}
                    borderRadius={0}
                    borderColor={"white.900"}
                    id={"address"}
                    //   type={"email"}
                    placeholder={"Musterstraße 12, 12345 Musterstadt, Deutschland"}
                    aria-label={"address"}
                    value={address}
                    //onKeyDown={handleEnter}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <Button
                  onClick={() => {
                    setLoading(true);
                    handleFinish();
                  }}
                  style={{ width: "150px" }}
                  isDisabled={validateFinish()}
                >
                  Vollständig
                </Button>
              </Stack>
            )}
            {steps == 8 && (
              <Stack
                spacing={4}
                display={"flex"}
                flexDir={"column"}
                width={"100%"}
                alignItems={"center"}
                className={`step${steps} ${steps === 7 ? "active" : ""}`}
              >
                <Text color={"white"} fontSize={20} fontWeight={700}>
                  {`glückwunsch!`}
                </Text>
                <Text color={"white"}>Deine bewerbung wurde angenommen!</Text>
                <Link href={"/login"}>
                  <Button style={{ width: "300px" }}>
                    JETZT MITGLIED WERDEN
                  </Button>
                </Link>
              </Stack>
            )}
          </div>
        </Box>
      </Flex>
      <FloatingButton />
      {/* <Footer /> */}
      <CannotJoinModal isOpen={isOpen} onClose={onClose} />
      {loading ? <Loader /> : null}
    </>
  );
}

export default Signup;
