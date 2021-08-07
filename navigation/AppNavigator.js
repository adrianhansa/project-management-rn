import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Projects from "../screens/projects/Projects";
import ProjectDetails from "../screens/projects/ProjectDetails";
import AddProject from "../screens/projects/AddProject";
import EditProject from "../screens/projects/EditProject";
import Tasks from "../screens/tasks/Tasks";
import TaskDetailss from "../screens/tasks/TaskDetails";
import AddTask from "../screens/tasks/AddTask";
import EditTask from "../screens/tasks/EditTask";
import Register from "../screens/users/Register";
import Login from "../screens/users/Login";
import Profile from "../screens/users/Profile";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Projects" component={Projects} />
      <Stack.Screen
        name="AddProject"
        component={AddProject}
        options={{ title: "Add a New Project" }}
      />
      <Stack.Screen
        name="EditProject"
        component={EditProject}
        options={{ title: "Edit Project" }}
      />
    </Stack.Navigator>
  );
};

const AppBottomTabs = () => {
  return (
    <BottomTabs.Navigator screenOptions={{ headerShown: false }}>
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{ title: "Home" }}
      />
      <BottomTabs.Screen name="Projects" component={AppStack} />
    </BottomTabs.Navigator>
  );
};

function AppNavigator() {
  return (
    <NavigationContainer>
      <AppBottomTabs />
    </NavigationContainer>
  );
}

export default AppNavigator;
