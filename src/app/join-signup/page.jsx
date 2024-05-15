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

function Signup() {
  const db = getFirestore(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isChecked, setIsChecked] = useState(true);
  const [date, setDate] = useState(new Date());
  const [steps, setSteps] = useState(1);
  const [selectedOption, setSelectedOption] = useState(0);
  const [yesNoSelection, setYesNotSelection] = useState(0);
  const [cannabisSelection, setCannabisSelection] = useState(0);
  const [city, setCity] = useState("");
  const [progress, setProgress] = useState(0);

  // useEffect(()=>{
  //   Cookies.remove('modalShown');
  //   Cookies.remove('privayModalShown');
  // },[])

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

  return (
    <>
      <Header />
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
          src="/logo.png"
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
                className={`step${steps} ${steps === 1 ? 'active' : ''}`}
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
                    borderColor={useColorModeValue("white.900", "white.900")}
                    id={"email"}
                    //   type={"email"}
                    placeholder={"name@beispiel.de"}
                    aria-label={"email"}
                    value={email}
                    onKeyDown={handleEnter}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <Button colorScheme={'purple'} onClick={handleNextStep} style={{ width: "50px" }}>
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
                className={`step${steps} ${steps === 2 ? 'active' : ''}`}
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
                    borderColor={useColorModeValue("white.900", "white.900")}
                    id={"name"}
                    //   type={"email"}
                    placeholder={"Anne"}
                    aria-label={"name"}
                    value={name}
                    onKeyDown={handleEnter}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <Button colorScheme={'purple'} onClick={handleNextStep} style={{ width: "50px" }}>
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
                className={`step${steps} ${steps === 3 ? 'active' : ''}`}
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
                    onClick={() => handleSelection(1)}
                  >
                    <div
                      className="option-sub-box"
                      style={{
                        backgroundColor: selectedOption == 1 && "#580058",
                        color: selectedOption == 1 && "white",
                      }}
                    >
                      A
                    </div>
                    <Text>unter 21</Text>
                    <div style={{ width: "20px" }}>
                      {selectedOption == 1 && <CheckIcon />}
                    </div>
                  </div>
                  <div
                    className="option-box"
                    onClick={() => handleSelection(2)}
                  >
                    <div
                      className="option-sub-box"
                      style={{
                        backgroundColor: selectedOption == 2 && "#580058",
                        color: selectedOption == 2 && "white",
                      }}
                    >
                      B
                    </div>
                    <Text>21-35</Text>
                    <div style={{ width: "20px" }}>
                      {selectedOption == 2 && <CheckIcon />}
                    </div>
                  </div>
                  <div
                    className="option-box"
                    onClick={() => handleSelection(3)}
                  >
                    <div
                      className="option-sub-box"
                      style={{
                        backgroundColor: selectedOption == 3 && "#580058",
                        color: selectedOption == 3 && "white",
                      }}
                    >
                      C
                    </div>
                    <Text>36-49</Text>
                    <div style={{ width: "20px" }}>
                      {selectedOption == 3 && <CheckIcon />}
                    </div>
                  </div>
                  <div
                    className="option-box"
                    onClick={() => handleSelection(4)}
                  >
                    <div
                      className="option-sub-box"
                      style={{
                        backgroundColor: selectedOption == 4 && "#580058",
                        color: selectedOption == 4 && "white",
                      }}
                    >
                      D
                    </div>
                    <Text>50+</Text>
                    <div style={{ width: "20px" }}>
                      {selectedOption == 4 && <CheckIcon />}
                    </div>
                  </div>
                </Stack>
                <Button colorScheme={'purple'} onClick={handleNextStep} style={{ width: "50px" }}>
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
                className={`step${steps} ${steps === 4 ? 'active' : ''}`}
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
                    onClick={() => handleYesNoSelection(1)}
                  >
                    <div
                      className="option-sub-box"
                      style={{
                        backgroundColor: yesNoSelection == 1 && "#580058",
                        color: yesNoSelection == 1 && "white",
                      }}
                    >
                      A
                    </div>
                    <Text>Nein</Text>
                    <div style={{ width: "20px" }}>
                      {yesNoSelection == 1 && <CheckIcon />}
                    </div>
                  </div>
                  <div
                    className="option-box"
                    onClick={() => handleYesNoSelection(2)}
                  >
                    <div
                      className="option-sub-box"
                      style={{
                        backgroundColor: yesNoSelection == 2 && "#580058",
                        color: yesNoSelection == 2 && "white",
                      }}
                    >
                      B
                    </div>
                    <Text>Ja</Text>
                    <div style={{ width: "20px" }}>
                      {yesNoSelection == 2 && <CheckIcon />}
                    </div>
                  </div>
                </Stack>
                <Button colorScheme={'purple'} onClick={handleNextStep} style={{ width: "50px" }}>
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
                className={`step${steps} ${steps === 5 ? 'active' : ''}`}
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
                    borderColor={useColorModeValue("white.900", "white.900")}
                    id={"city"}
                    placeholder={"Berlin"}
                    aria-label={"city"}
                    value={city}
                    onKeyDown={handleEnter}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <Button colorScheme={'purple'} onClick={handleNextStep} style={{ width: "50px" }}>
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
                className={`step${steps} ${steps === 6 ? 'active' : ''}`}
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
                    onClick={() => handleCannabisSelection(1)}
                  >
                    <div
                      className="option-sub-box"
                      style={{
                        backgroundColor: cannabisSelection == 1 && "#580058",
                        color: cannabisSelection == 1 && "white",
                      }}
                    >
                      A
                    </div>
                    <Text>unter 10g</Text>
                    <div style={{ width: "20px" }}>
                      {cannabisSelection == 1 && <CheckIcon />}
                    </div>
                  </div>
                  <div
                    className="option-box"
                    onClick={() => handleCannabisSelection(2)}
                  >
                    <div
                      className="option-sub-box"
                      style={{
                        backgroundColor: cannabisSelection == 2 && "#580058",
                        color: cannabisSelection == 2 && "white",
                      }}
                    >
                      B
                    </div>
                    <Text>11-20g</Text>
                    <div style={{ width: "20px" }}>
                      {cannabisSelection == 2 && <CheckIcon />}
                    </div>
                  </div>
                  <div
                    className="option-box"
                    onClick={() => handleCannabisSelection(3)}
                  >
                    <div
                      className="option-sub-box"
                      style={{
                        backgroundColor: cannabisSelection == 3 && "#580058",
                        color: cannabisSelection == 3 && "white",
                      }}
                    >
                      C
                    </div>
                    <Text>21-30g</Text>
                    <div style={{ width: "20px" }}>
                      {cannabisSelection == 3 && <CheckIcon />}
                    </div>
                  </div>
                  <div
                    className="option-box"
                    onClick={() => handleCannabisSelection(4)}
                  >
                    <div
                      className="option-sub-box"
                      style={{
                        backgroundColor: cannabisSelection == 4 && "#580058",
                        color: cannabisSelection == 4 && "white",
                      }}
                    >
                      D
                    </div>
                    <Text>31-40g</Text>
                    <div style={{ width: "20px" }}>
                      {cannabisSelection == 4 && <CheckIcon />}
                    </div>
                  </div>

                  <div
                    className="option-box"
                    onClick={() => handleCannabisSelection(5)}
                  >
                    <div
                      className="option-sub-box"
                      style={{
                        backgroundColor: cannabisSelection == 5 && "#580058",
                        color: cannabisSelection == 5 && "white",
                      }}
                    >
                      E
                    </div>
                    <Text>41-50g</Text>
                    <div style={{ width: "20px" }}>
                      {cannabisSelection == 5 && <CheckIcon />}
                    </div>
                  </div>
                </Stack>
                <Button colorScheme={'purple'} onClick={handleNextStep} style={{ width: "150px" }}>
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
                className={`step${steps} ${steps === 7 ? 'active' : ''}`}
              >
                <Text color={"white"} fontSize={20} fontWeight={700}>
                  {`glückwunsch!`}
                </Text>
                <Text color={"white"}>Deine bewerbung wurde angenommen!</Text>
                <Button colorScheme={'purple'} style={{ width: "300px" }}>
                  JETZT MITGLIED WERDEN
                </Button>
              </Stack>
            )}
          </div>
        </Box>
      </Flex>
      {/* <Footer /> */}
    </>
  );
}

export default Signup;
