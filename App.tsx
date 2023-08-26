import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { mapping, light as lightTheme } from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./login";
import { default as darkTheme } from "./theme.json";
import { AppNavigator } from "./navigation.component";

const { Navigator, Screen } = createStackNavigator();

const App: React.FC = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.dark, ...darkTheme }}>
        <AppNavigator />
      </ApplicationProvider>
    </>
  );
};

export default App;
