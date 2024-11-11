/* eslint-disable react/no-unescaped-entities */
import {
  Body,
  Container,
  Head,
  Hr,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  userFirstname: string;
}

export const LifomationWaitlistEmail = ({ userFirstname }: EmailProps) => (
  <>
     <Head />
     <Preview>Exciting news, {userFirstname} – you’re on the Lifomation waitlist! 🚀</Preview>
     <Body style={main}>
       <Container style={container}>
         <Img
           src={`https://lifomation.com/waitlist-logo.png`}
           width="220"
           height="100"
           alt="Lifomation Logo"
           style={logo}
         />
         <Text style={greeting}>Hi {userFirstname},</Text>
         <Text style={paragraph}>
           Welcome to the Lifomation family! I'm Lakshay, the developer behind Lifomation, and I'm thrilled to have you with us on this journey to revolutionize document organization.
         </Text>
         <Text style={paragraph}>
           Imagine never losing track of an important document again. Lifomation will be your go-to for secure, instant access to essential information for your family and future.
         </Text>
         <Text style={paragraph}>
           Stay tuned – I’ll keep you updated on our progress and make sure you're among the first to experience the platform. If you have questions or ideas, reply directly to{" "}
           <a href="mailto:adam.badar@mail.utoronto.com" style={link}>
             this email
           </a>{" "}
           – I'd love to hear from you!
         </Text>
         <Text style={signOff}>
           Warm regards,
           <br />
           Lakshay
         </Text>
         <Hr style={hr} />
         <Text style={footer}>
           You received this email because you signed up for Lifomation updates.
           If this was a mistake, feel free to ignore.
         </Text>
       </Container>
     </Body>
  </>
 );
 

LifomationWaitlistEmail.PreviewProps = {
  userFirstname: "Tyler",
} as EmailProps;

export default LifomationWaitlistEmail;

const main = {
  background: "linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)",
  fontFamily: 'figtree, "Helvetica Neue", Helvetica, Arial, sans-serif',
  padding: "40px 0",
  color: "#cccccc",
};

const container = {
  margin: "0 auto",
  padding: "24px 32px 48px",
  backgroundColor: "#1a1a1a",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  maxWidth: "600px",
};

const logo = {
  margin: "0 auto",
  paddingBottom: "20px",
};

const greeting = {
  fontSize: "18px",
  lineHeight: "28px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  marginBottom: "20px",
};

const link = {
  color: "#F7FF9B",
  textDecoration: "underline",
};

const signOff = {
  fontSize: "16px",
  lineHeight: "26px",
  marginTop: "20px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8c8c8c",
  fontSize: "12px",
};
