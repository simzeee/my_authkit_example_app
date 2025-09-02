import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import { useAuth } from "@workos-inc/authkit-react";
import { Link } from "react-router-dom";
import { SignInButton } from "../components/sign-in-button";


export default function Index() {
  const { user, isLoading, getAccessToken, getUser } = useAuth();
  console.log('whole object', useAuth())
  const fetchAccessToken = async () => {
    const token = await getAccessToken();
    console.log('Access Token:', token);
  }
  console.log("user object with getUser", getUser())

  


  if (isLoading) {
    return "..."
  }

  return (
    <Flex direction="column" align="center" gap="2">
      {user ? (
        <>
          <Heading size="8">
            Welcome back{user?.firstName && `, ${user?.firstName}`}
          </Heading>
          <Text size="5" color="gray">
            You are now authenticated into the application
          </Text>
          <Flex align="center" gap="3" mt="4">
            <Button asChild size="3" variant="soft">
              <Link to="/account">View account</Link>
            </Button>
            <SignInButton large />
            <Button asChild size="3" variant="soft" onClick={fetchAccessToken}>
              <h1>Fetch Token</h1>
            </Button>
          </Flex>
        </>
      ) : (
        <>
          <Heading size="8">AuthKit authentication example</Heading>
          <Text size="5" color="gray" mb="4">
            Sign in to view your account details
          </Text>
          <SignInButton large />
        </>
      )}
    </Flex>
  );
}
