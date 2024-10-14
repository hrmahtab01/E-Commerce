import React from "react";
import Container from "../Components/Common/Container";
import Text from "../Components/Common/Text";

const About = () => {
  return (
    <div className="py-[80px] px-[80px]">
      <Container>
        <div>
          <Text className="text-[14px] text-primaryColor/50 font-normal font-poppins  leading-[25px]">
          Home / <span className="text-primaryColor">About</span>
          </Text>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
