import { Image, Text } from "react-native";
import React from "react";
import Container from "../../components/common/Container";
import Input from "../../components/common/Input";
import CustomButton from "../../components/common/CustomButton";

const Index = () => {
  return (
    <Container>
       <Image
        // style={styles.tinyLogo}
        height={500}
        width={500}
        source={require('../../assets/images/logo.jpg')}
      />
      <Input
        label="E-mail or Username"
        iconPosition="Right"
        keyboardType="email-address"
        placeholder="Enter E-mail or Username"
      />

      <Input
        label="Password"
        icon={<Text>HIDE</Text>}
        iconPosition="Right"
        placeholder="Password"
        secureTextEntry={true}
      />

      <CustomButton primary title="submit"></CustomButton>
    </Container>
  );
};

export default Index;
