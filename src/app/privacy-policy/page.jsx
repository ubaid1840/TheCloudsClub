"use client";
import FixedLogo from "@/components/fixedLogo";
import Footer from "@/components/footer";
import Header from "@/components/header";
import {
  Img,
  Stack,
  VStack,
  Text,
  Button,
  Input,
  useColorModeValue,
  Box,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

function Page() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("initial");
  const [password, setPassword] = useState("");

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
        paddingTop={{ base: "120px", md: "160px", lg: "160px" }}
        paddingBottom={{ base: "20px", md: "120px", lg: "120px" }}
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
            
            width={"80vw"}
          >
            <Text style={{ color: "white", }}>
              Privacy Policy of The Cloud Club
            </Text>

            <Text style={{ color: "white" }} whiteSpace="pre-line">
              {`Welcome to thecloudclub.cc (the “Site”), provided by The CloudClub68, (“Us”, “We”, or “The CloudClub68”). By submitting personal information through the Site, mobile applications, and related services (together, the “Services”), you expressly consent to the transfer of your personal data to our servers in the U.S. for our collection, use, and disclosure in accordance with this Privacy Policy (“Policy”). This Policy describes the information we gather from you when you use the Services and how we use, process, and disclose that information. We may add to this Policy with other notices. We may also post additional privacy statements for some portions of the Services.
Information We Collect
When you create an account and use our Services, we collect the following types of information from you:
(a) Name;
(b) Contact information such as your email address and phone number;
(c) Demographics information such as your gender and location;
(d) Any other information, such as reviews, content, and bio, you provide us.
If you create an account using, or otherwise connect your account to, a social networking services account (e.g. Google Plus, Twitter, Facebook, Pinterest), we may also collect information provided to us by such social networking service including for example your: name; email address; birthday; geographic location; interests; profile picture; gender; networks; user ID; list of friends; and any information you have made public on such social networking account.
We automatically collect information about how you use our services, for example, pages you have viewed. We also collect certain technical information about your device including your Internet protocol address, geo-location information, your browser type, language and identifying information, your operating system and application version, device types, device model and manufacturer, device identifiers, and your device operating system type and version.
Use of Cookies
We also use cookies, Web beacons, and URL information to gather information regarding the date and time of your visit and the information for which you searched and which you viewed. Cookies are small pieces of information that a website sends to your computer’s hard drive while you are viewing a website. We may use both session cookies (which expire once you close your web browser) and persistent cookies (which usually stay on your computer until you delete them) to provide you with a more personal and interactive experience on our Site. Web beacons are digital images that are used to log information on the Services or in our emails. We use Web beacons to manage cookies, count visits, and to learn what marketing works and what does not. We also use Web beacons to tell if you open or act on our emails.
Others, including third party analytics service providers and advertising partners may also collect personally identifiable information about your online activities over time and across different websites when you use our Services, including as described in this Privacy Policy. This Policy does not apply to and we are not responsible for those other parties. Third party analytics services may use cookies and web beacons through our Site and platform device identifiers and software agents on and through our mobile Services to provide us with information about how you use and interact with our Site. We encourage you to review the privacy policies of these third parties to learn about your choices about information they collect from you.
Sharing Of Your Information
Our site provides services that may allow you to connect and share your actions, comments, content, profile, and information publicly or with other people. You may control some of the categories of personal information shared via your profile from the account settings menu on the Site. Please be mindful of your own privacy needs as you choose who to connect with and what to share and make public. We cannot control the privacy or security of information you choose to make public or share with others.
The CloudClub68’s Services may also provide you with the option to share certain information from your The CloudClub68 account with social networking services like Facebook, Google, Twitter, or Pinterest. We are not responsible for the use or re-sharing by others of any of your information once it is made public. If you do not want your information to be made public, you should not use The CloudClub68’s Services in this manner and/or you should adjust your privacy settings on the applicable social networking service accordingly. We are not responsible for and we do not control these social networking services privacy practices. Please review the applicable privacy policy for information about how they use your information.
How The CloudClub68 Uses Your Information
The CloudClub68 generally uses your information to:
(1) Facilitate the creation of and secure your account on the Services;
(2) Identify you as a user in our system;
(3) Provide, personalize, and improve the Service;
(4) Communicate with you about your use of the Services;
(5) Develop new products and services,
(6) Customize the advertising you view and recommend content;
(7) Fulfill your requests;
(8) Send newsletters, surveys, offers and promotional materials related to the Services and for other marketing purposes of The CloudClub68 using your contact information;
(9) Protect, investigate, and prevent potentially fraudulent, unauthorized, or illegal activities;
(10) Protect our rights and the rights of other users; and
(11) As otherwise described in this Privacy Policy or in notices we provided to you.
We may also use your information to verify your geographic location. We may use your geographic location data to personalize our Service, to recommend content, determine whether the information you have requested is available in your location.
How The CloudClub68 Discloses Your Information
We may share your information as follows:
(1) We may share your personal information with your consent or at your direction.
(2) We may also share your information with others who perform services on our behalf.
(3) We may disclose your information if we believe we are required to do so by law, or to comply with a court order, judicial or other government subpoena, or warrant.
(4) We also may disclose your information if we believe doing so is appropriate or necessary to prevent any liability, or fraudulent, abusive, or unlawful uses or to protect The CloudClub68 and our Services; or any rights, property, or personal safety of The CloudClub68 or others.
(5) In the event that The CloudClub68 is or may be acquired by or merged with another company or involved in any other business deal (or negotiation of a business deal) involving sale or transfer of all or part of our business or assets, we may transfer or assign your information as part of or in connection with the transaction. Finally, in the event of insolvency, bankruptcy, or receivership, information may be transferred as a business asset.
We may also share aggregated and anonymized data with our partners, advertisers, and other third parties.
Third Party Advertisers
We permit advertisements to be delivered to you by third party Internet advertising companies (also called ad networks or network advertisers). These companies may use cookies, Web beacons, platform device identifiers, software agents, and other technologies to collect non-personally identifiable information about your visits over time on our Service and across other websites to deliver advertisements to you targeted to your interests, measure their effectiveness and personalize advertising content, and to understand the usage and visitation of the Services and the other applications and websites tracked by these advertising companies. We do not have access to or control over cookies, Web beacons, platform device identifiers, software agents, or other technologies that they may use. We are not responsible for the privacy practices of third party advertisers. You should check the privacy policy of the third party advertiser to determine how it handles information it separately collects from you. In addition, the Network Advertising Initiative offers information about some of the Internet advertising companies we may use.
Security
The CloudClub68 takes commercially reasonable steps to help protect your Information against loss, misuse and unauthorized access, or disclosure. No company can fully prevent security risks, however. While we strive to protect your personal information, we cannot guarantee its absolute security. To help protect yourself and your information, choose a unique password for our Services and do not use a password on our Services that you would use on any other website or online service.
Dispute Resolution
If you believe that The CloudClub68 has not adhered to this Statement, please contact The CloudClub68 by e-mail at support@cloudclub.cc. We will do our best to address your concerns. If you feel that your complaint has been addressed incompletely, we invite you to let us know for further investigation.
Information Choices
You may opt out of receiving promotional emails from The CloudClub68 by following the instructions in those emails or by reviewing the settings in your account. If you opt out, we may still send you non-promotional emails, such as emails about your accounts or our ongoing business relations. You may also send requests about your personal information, including changes to your contact preferences, changes to or deletions of your information or content you post, and requests to opt-out of sharing your personal information with third parties by emailing support@cloudclub.cc. Please note that deletion of your information or content does not ensure complete or comprehensive removal of the content or information posted on the Services.
When you visit the Site, we and others give you the following choices about use of mechanisms for tracking, including tracking of your online activities over time and across different websites and online services by third parties. Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies from our Site or from third parties. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Site. To opt-out of Google Analytics web tracking for certain browsers, you can download Google Analytics Opt-out Browser Add-on. You may opt out of other cookies that may be present on the Site by following the directions on Google’s opt-out page, ScorecardResearch’s opt-out page, and Quantcast’s opt out page. You can also choose to opt-out of use of cookies by some of our third party advertising partners to deliver ads tailored to your profile and preferences. To find out more and opt-out click here. However, while we and others give you choices as described in this policy, there are many ways in which Web browser signals and other similar mechanisms can indicate your choice to disable tracking, and our Site may not be aware of or honor every mechanism.
You may have the right to know what personal information The CloudClub68 has about you and to correct any inaccuracies. Please direct any such requests by email to support@cloudclub.cc or by one of the other means listed below.
Changes and Updates to this Privacy Policy
From time to time, we may revise the Policy. To help you stay current of any changes, we note the date the Privacy Policy was last updated above.
The CloudClub68 Contact Information
Please contact The CloudClub68 with any questions or comments about this Policy, your information, our third-party disclosure practices, or your consent choices.
The CloudClub68, Inc.
Attention: Privacy Officer
Email: support@cloudclub.cc`}
            </Text>
          </Stack>
        </Box>
      </Flex>
      <Footer />
    </>
  );
}

export default Page;
