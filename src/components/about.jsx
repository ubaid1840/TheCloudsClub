import { Box, VStack, Text } from "@chakra-ui/react";
import React from "react";

function About() {
  return (
    <Box
      marginBottom={20}
      maxW={"lg"}
      borderTopRightRadius={20}
      borderBottomLeftRadius={20}
      borderWidth={2}
      padding={5}
    >
      <VStack spacing={3}>
        <Text
          className="heading-style"
          style={{  color: "white" }}
        >
          {` Willkommen im CloudClub68! Wir bringen den Geist der legendären Cannabis-Kultur Kaliforniens direkt hierher nach Deutschland. Unser Team ist heimisch und hat eine einfache Mission: nur das Beste anzubauen. Denk an Sorten wie Gelato 41 von Doja, Rainbow Runtz von Wizard Trees oder Dosidos von Jungle Boys. Das sind die Maßstäbe, an denen wir uns orientieren.`}
        </Text>
        <Text className="heading-style" >
          {` Wir haben Jahre damit verbracht, diese erstklassigen Genetiken zu verfolgen. Jetzt ist unser Traum Realität geworden, und wir sind bereit, ihn zu teilen. Unser Club ist ein Ort, an dem die Liebe zu feinem Cannabis erblüht, wo Freunde sich treffen und wo Deutschland auf Cali trifft.`}
        </Text>

        <Text className="heading-style" >
          {` Im CloudClub68 sind wir mehr als nur Züchter – wir sind Pioniere, die Ihnen die Cali-Sorten, die Sie lieben, direkt hier auf deutschem Boden anbieten. `}
        </Text>

        <Text
          className="heading-style"
        >{`Willkommen im CloudClub68!`}</Text>
      </VStack>
    </Box>
  );
}

export default About;
