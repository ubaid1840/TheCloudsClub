"use client";
import MyDrawer from "@/components/myDrawer";
import { app } from "@/config/firebaseConfig";
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
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Cookies from "js-cookie";
import { CheckIcon } from "@chakra-ui/icons";
import axios from "axios";
import Loader from "../loading";
import { CustomToast } from "@/components/myToast";
import { useRouter } from "next/navigation";
import FixedLogo from "@/components/fixedLogo";

function Signup() {
  const db = getFirestore(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [steps, setSteps] = useState(1);
  const [selectedOption, setSelectedOption] = useState("");
  const [yesNoSelection, setYesNotSelection] = useState("");
  const [cannabisSelection, setCannabisSelection] = useState("");
  const [city, setCity] = useState("");
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const { addToast } = CustomToast();

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
    setProgress(progress + 17);
    setSteps((prevState) => {
      const newState = prevState + 1;
      return newState;
    });
  }

  function handleSelection(val) {
    setSelectedOption(val);
  }

  function handleCannabisSelection(val) {
    setCannabisSelection(val);
  }

  function handleYesNoSelection(val) {
    setYesNotSelection(val);
  }

  async function handleFinish() {
    const formData = {
      email: email,
      name: name,
      age: selectedOption,
      alreadyMember: yesNoSelection,
      city: city,
      requiredCannabis: cannabisSelection,
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

      if (response?.data?.message) {
        if (response?.data?.message == "User registered successfully") {
          addToast({ message: "Welcome to the club", type: "success" });
          handleNextStep();
        } else {
          if (response?.data?.includes("Duplicate entry")) {
            addToast({ message: "Email already exists", type: "error" });
          } else if (response.status == 500) {
            addToast({ message: "Error registering user", type: "error" });
          } else {
            addToast({ message: "Registration error", type: "error" });
          }
        }
      }
    } catch (error) {
      addToast({ message: "Registration error", type: "error" });
    } finally {
      setLoading(false);
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
          colorScheme={"purple"}
          value={progress}
          width={"100vw"}
          marginBottom={10}
        />
        <Box
          bg={"transparent"}
          display={"flex"}
          flexDir={"column"}
          alignItems="center"
          width={{ base: "95%", sm: "70%", md: "35%" }}
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
                <Text color={"white"}>
                  Frage 1 von 6 (unter 1 Minute Zeitaufwand)
                </Text>
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
                  colorScheme={"purple"}
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
                  {`2 -> Wie heißt du?`}
                </Text>
                <Text color={"white"}>Frage 2 von 6</Text>
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
                  colorScheme={"purple"}
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
                  {`3 -> Wie alt bist du?`}
                </Text>
                <Text color={"white"}>Frage 3 von 6</Text>
                <Stack
                  spacing={4}
                  display={"flex"}
                  flexDir={"column"}
                  width={"100%"}
                >
                  <div
                    className="option-box"
                    onClick={() => handleSelection("unter 21")}
                  >
                    <div
                      className="option-sub-box"
                      style={{
                        backgroundColor:
                          selectedOption == "unter 21" && "#580058",
                        color: selectedOption == "unter 21" && "white",
                      }}
                    >
                      A
                    </div>
                    <Text>unter 21</Text>
                    <div style={{ width: "20px" }}>
                      {selectedOption == "unter 21" && <CheckIcon />}
                    </div>
                  </div>
                  <div
                    className="option-box"
                    onClick={() => handleSelection("21-35")}
                  >
                    <div
                      className="option-sub-box"
                      style={{
                        backgroundColor: selectedOption == "21-35" && "#580058",
                        color: selectedOption == "21-35" && "white",
                      }}
                    >
                      B
                    </div>
                    <Text>21-35</Text>
                    <div style={{ width: "20px" }}>
                      {selectedOption == "21-35" && <CheckIcon />}
                    </div>
                  </div>
                  <div
                    className="option-box"
                    onClick={() => handleSelection("36-49")}
                  >
                    <div
                      className="option-sub-box"
                      style={{
                        backgroundColor: selectedOption == "36-49" && "#580058",
                        color: selectedOption == "36-49" && "white",
                      }}
                    >
                      C
                    </div>
                    <Text>36-49</Text>
                    <div style={{ width: "20px" }}>
                      {selectedOption == "36-49" && <CheckIcon />}
                    </div>
                  </div>
                  <div
                    className="option-box"
                    onClick={() => handleSelection("50+")}
                  >
                    <div
                      className="option-sub-box"
                      style={{
                        backgroundColor: selectedOption == "50+" && "#580058",
                        color: selectedOption == "50+" && "white",
                      }}
                    >
                      D
                    </div>
                    <Text>50+</Text>
                    <div style={{ width: "20px" }}>
                      {selectedOption == "50+" && <CheckIcon />}
                    </div>
                  </div>
                </Stack>
                <Button
                  colorScheme={"purple"}
                  onClick={handleNextStep}
                  style={{ width: "50px" }}
                  isDisabled={
                    selectedOption == "unter 21" ||
                    selectedOption == "21-35" ||
                    selectedOption == "36-49" ||
                    selectedOption == "50+"
                      ? false
                      : true
                  }
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
                <Text color={"white"}>Frage 4 von 6 (fast geschafft!)</Text>
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
                        backgroundColor: yesNoSelection == "Nein" && "#580058",
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
                        backgroundColor: yesNoSelection == "Ja" && "#580058",
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
                  colorScheme={"purple"}
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
                  {`5 -> Für welchen Standort interessierst du dich?*`}
                </Text>
                <Text color={"white"}>Frage 5 von 6 (Nur noch eine Frage)</Text>
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
                  colorScheme={"purple"}
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
                <Text color={"white"}>
                  Frage 6 von 6 (Du hast es geschafft!)
                </Text>
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
                          cannabisSelection == "unter 10g" && "#580058",
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
                          cannabisSelection == "11-20g" && "#580058",
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
                          cannabisSelection == "21-30g" && "#580058",
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
                          cannabisSelection == "31-40g" && "#580058",
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
                          cannabisSelection == "41-50g" && "#580058",
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
                  colorScheme={"purple"}
                  onClick={() => {
                    setLoading(true);
                    handleFinish();
                  }}
                  style={{ width: "150px" }}
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
                  Vollständig
                </Button>
              </Stack>
            )}
            {steps == 7 && (
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
                  <Button colorScheme={"purple"} style={{ width: "300px" }}>
                    JETZT MITGLIED WERDEN
                  </Button>
                </Link>
              </Stack>
            )}
          </div>
        </Box>
      </Flex>
      {/* <Footer /> */}
      {loading ? <Loader /> : null}
    </>
  );
}

export default Signup;
