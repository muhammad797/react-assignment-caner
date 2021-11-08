import { Flex, Text, Button, Image, Spacer } from "@chakra-ui/react";

const Header = ({ status, user, time }) => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} p={8}>
      <Button
        background={"#BE4444"}
        color={"white"}
        fontWeight={600}
        rounded={20}
        fontSize={14}
        mr={1}
        pr={5}
        pl={5}
      >
        {status}
      </Button>
      <Image borderRadius={"full"} src={user.avatar} ml={3} />
      <Text
        ml={3}
        color={"white"}
        textStyle={"h1"}
        fontSize={"18px"}
        fontWeight={600}
        fontFamily={"poppins"}
      >
        {user.name}
      </Text>
      <Text
        ml={3}
        color={"#93959A"}
        fontFamily={"poppins"}
        fontSize={"12px"}
        fontWeight={400}
      >
        {time}
      </Text>
      <Spacer />
      <Image
        borderRadius={"full"}
        src={"/images/dots.svg"}
        alt={"menu"}
        width={5}
      />
    </Flex>
  );
};

export default Header;
