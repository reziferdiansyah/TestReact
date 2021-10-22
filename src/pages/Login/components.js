import React, { useEffect, useState } from "react";
import logologin from "assets/images/lglogin.png";
import request from "actions/connect";
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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onlogin = (e) => {
    e.preventDefault();
    request.post("/login", { username, password });
    const onSubmit = (e) => {
      e.preventDefault();
      const body = {
        username,
        password,
      };
      request
        .post("/login", body)
        .then((res) => {
          if (res.data) window.location.href = "/list";
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
        <form onSubmit={onlogin}>
          <Stack w="100%">
            <Box>
              <Text>Login</Text>
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
              <Button type="submit">
                <Text>Login</Text>
              </Button>
            </Box>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
}
