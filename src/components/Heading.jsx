import { Box, VStack, Text } from "@chakra-ui/react";
import React from "react";

function Heading() {
  return (
    <Box marginBottom={20} maxW={'lg'} borderTopRightRadius={20} borderBottomLeftRadius={20} borderWidth={2} padding={5} fontFamily='monospace'>
        <VStack spacing={3}>
      <Text className="heading-style" style={{fontFamily:'customFont', color:'white'}}>
       {` The Clouds Club is all about bringing the spirit of California's
        legendary Cannabis culture right here to Germany. We're a homegrown team
        with a simple mission: growing nothing but the best. Think of strains
        like Permanent Marker from Doja, Rainbow Runtz from Wizard Trees, or
        Jungle WiFi from Jungle Boys. These are the benchmarks we live by.`}
      </Text>
      <Text className="heading-style" style={{fontFamily:'customFont'}}>
       {` We've spent years chasing down these top-tier genetics. Now, our dream
        is a reality, and we're ready to share it. Our club is a place where the
        love for fine cannabis blooms, where friends meet, and where Germany
        meets Cali.`}
      </Text>

      <Text className="heading-style" style={{fontFamily:'customFont'}}>
       {` At The Clouds Club, we're more than growers—we're pioneers, bringing you
        the Cali strains you love, grown right here on German soil.`}
      </Text>

      <Text className="heading-style" style={{fontFamily:'customFont'}}>{`Welcome to The Clouds Club.`}</Text>
      </VStack>
    </Box>
  );
}

export default Heading;
