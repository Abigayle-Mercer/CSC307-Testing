// Home.js
import React from "react";
import { View, Text } from "react-native";
import { useRoutes } from "expo-router";
import MyForm from "./components/MyForm";
import Login from "./components/Login";
import Profile from "./components/Profile";

const Home = () => {
  const routes = {
    "/": () => <Login />,
    "/profile": () => <Profile />,
  };

  const routeResult = useRoutes(routes);

  return (
    <View>
      <Text>HOME</Text>
      {routeResult}
    </View>
  );
};

export default Home;
