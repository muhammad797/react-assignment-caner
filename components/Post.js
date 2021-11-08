import { Flex, Text, Box } from "@chakra-ui/react";
import { Header, HelpRequest } from ".";

const Card = ({ id, user, status, time, message, type, onReply }) => {
  const renderContent = () => {
    switch (type) {
      case "text":
        const parts = message?.split("\n") || [];
        return message?.split("\n").map((text, index) => (
          <Text
            color="white"
            fontWeight={400}
            fontSize="18px"
            fontFamily="Lato"
            key={`${index}`}
            mb={index < parts.length - 1 ? 4 : 0}
          >
            {text}
          </Text>
        ));
      default:
        return null;
    }
  };

  return (
    <Flex direction="column" maxW="640px" background="#272B35" rounded={15}>
      <Header user={user} status={status} time={time} />
      <Box p={8} pt={0}>
        {renderContent()}
      </Box>
      <HelpRequest id={id} onReply={onReply} />
    </Flex>
  );
};

export default Card;
