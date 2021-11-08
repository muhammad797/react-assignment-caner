import { useState } from "react";
import {
  Flex,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  Image,
} from "@chakra-ui/react";

const HelpRequest = ({ id, onReply }) => {
  const [request, setRequest] = useState("");

  return (
    <Flex
      maxW="640px"
      direction="column"
      justifyContent="space-evenly"
      height="132px"
      background="#2D323F"
      p={8}
      position="relative"
      roundedBottom={15}
    >
      <Text color="white" fontWeight="600" fontSize="16px" fontFamily="Poppins">
        How can you help with this Request?
      </Text>
      <InputGroup mt={3} alignItems={"center"}>
        <Input
          variant={"unstyled"}
          background={"#373F50"}
          placeholder={"Type here..."}
          height={"48px"}
          p={5}
          rounded={30}
          value={request}
          onChange={(e) => setRequest(e.target.value)}
        />
        <InputRightElement
          width={"4.5rem"}
          height={"100%"}
          onClick={() => {
            onReply(id, request);
            setRequest("");
          }}
        >
          <Image src={"/images/send.svg"} alt={"img"} />
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export default HelpRequest;
