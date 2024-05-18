// "use client";
// import FixedLogo from "@/components/fixedLogo";
// import Footer from "@/components/footer";
// import Header from "@/components/header";
// import MyDrawer from "@/components/myDrawer";
// import {
//   Img,
//   Stack,
//   VStack,
//   Text,
//   Button,
//   Input,
//   useColorModeValue,
//   Box,
//   Checkbox,
//   Flex,
// } from "@chakra-ui/react";
// import Link from "next/link";
// import { useState } from "react";

// function Page() {
//   const [email, setEmail] = useState("");

//   return (
//     <>
//     <Header />
//      <FixedLogo />
//       <Flex
//         width="100vw"
//         backgroundColor="black"
//         alignItems="center"
//         display="flex"
//         flexDirection="column"
//         justifyContent="center"
//         paddingTop={{ base: "120px", md: "200px", lg: "200px" }}
//         paddingBottom={{ base: "60px", md: "160px", lg: "160px" }}
//       >
//         <Box
//           bg={"transparent"}
//           display={"flex"}
//           flexDir={"column"}
//           alignItems="center"
//           width={{ base: "95%", sm: "70%", md: "35%" }}
//         >
//           <Stack
//             spacing={2}
//             display={"flex"}
//             flexDir={"column"}
//             alignItems={"center"}
//             width={"100%"}
//             marginBottom="40px"
//           >
//             <div
//               className="footer-subheading"
//               style={{ fontWeight: "600", fontSize: "22px" }}
//             >
//               Reset your password
//             </div>
//           </Stack>

//           <Stack
//             spacing={8}
//             display={"flex"}
//             flexDirection={"column"}
//             alignItems={"center"}
//             width={"100%"}
//           >
//             <Input
//               style={{
//                 height: "48px",
//                 width: "100%",
//                 fontWeight: "600",
//                 backgroundColor: "black",
//                 color: "white",
//                 borderWidth: 1,
//                 borderColor: "white",
//                 borderRadius: "5px",
//               }}
//               variant={"solid"}
//               //   color={"black"}
//               _placeholder={{
//                 color: "grey",
//               }}
//               borderRadius={0}
//               borderColor={useColorModeValue("white.900", "white.900")}
//               id={"email"}
//               type={"email"}
//               placeholder={"Email"}
//               aria-label={"Email"}
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <Button
//               className="btn"
//               style={{ width: "400px", borderWidth: "1px", width: "100%" }}
//             >
//               Reset Password
//             </Button>
//           </Stack>
//         </Box>
//       </Flex>
//       <Footer />
//     </>
//   );
// }

// export default Page;
