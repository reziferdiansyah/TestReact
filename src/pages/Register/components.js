import React, { useEffect, useState } from "react";
import request from "actions/connect";
import logologin from "assets/images/lglogin.png";
import {
  Stack,
  Box,
  Text,
  Input,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Image,
} from "@chakra-ui/react";

export default function List() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onregister = (e) => {
    e.preventDefault();
    request.post("/register", { email, username, password });
    const onSubmit = (e) => {
      e.preventDefault();
      const body = {
        email,
        username,
        password,
      };
      request
        .post("/register", body)
        .then((res) => {
          if (res.data) window.location.href = "/login";
        })
        .catch((err) => console.log("ERR", err));
    };
  };

  return (
    <Flex
      w="80%"
      mx="auto"
      h="100%"
      justifyContent="center"
      alignItems="center"
      pt="30p"
    >
      <Box>
        <Image src={logologin} maxHeight="50vh" />
        <form onSubmit={onregister}>
          <Stack w="100%">
            <Box>
              <Text>Register</Text>
            </Box>
            <Box>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input w="80%" onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
            </Box>
            <Box>
              <FormControl id="username">
                <FormLabel>Username</FormLabel>
                <Input w="80%" onChange={(e) => setUsername(e.target.value)} />
              </FormControl>
            </Box>
            <Box>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  w="80%"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
            </Box>
            <Box>
              <Button type="submit" href="/login">
                <Text>Register</Text>
              </Button>
            </Box>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
}
