import { Flex } from "@chakra-ui/react";
import { Post } from "../components";

// Sample data object of a post
const SAMPLE = {
  _id: 3947,
  user: {
    _id: 1394,
    name: "Ralph Edwards",
    avatar: "/images/avatar.png",
  },
  status: "Funding",
  time: "3h ago",
  type: "text",
  message: `Velit ut ultrices quis viverra eu, ultricies nulla at nec. Ut diam venenatis egestas massa vulputate nam. Pretium eros, imperdiet odio sit. Natoque quam mi ut leo. Sed ut sit cursus nunc, sit. Magna neque vel amet sem vulputate lacus ut. \nDiam lacus sed ornare vulputate. Vulputate magna id suspendisse aliquam. Sit fames est proin diam morbi purus non. Purus donec eu arcu euismod. Volutpat facilisi venenatis phasellus maecenas in.`,
};

export default function Home() {
  const onReply = (_id, message) => {
    // TODO: Post the reply on post with ID: _id
    // console.log({ _id, message });
  };

  return (
    <Flex
      height="100vh"
      justifyContent="center"
      alignItems="center"
      background="#FFFFFF"
    >
      <Post
        id={SAMPLE._id}
        user={SAMPLE.user}
        status={SAMPLE.status}
        message={SAMPLE.message}
        time={SAMPLE.time}
        onReply={onReply}
        type={SAMPLE.type}
      />
    </Flex>
  );
}
