import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Welcome from "../screens/Welcome";
import Projects from "../screens/projects/Projects";
import ProjectDetails from "../screens/projects/ProjectDetails";
import AddProject from "../screens/projects/AddProject";
import EditProject from "../screens/projects/EditProject";
import Tasks from "../screens/tasks/Tasks";
import TaskDetails from "../screens/tasks/TaskDetails";
import AddTask from "../screens/tasks/AddTask";
import EditTask from "../screens/tasks/EditTask";
import Register from "../screens/users/Register";
import Login from "../screens/users/Login";
import Profile from "../screens/users/Profile";
import EditProfile from "../screens/users/EditProfile";

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
      <Stack.Screen
        name="ProjectDetails"
        component={ProjectDetails}
        options={{ title: "ProjectDetails" }}
      />
      <Stack.Screen
        name="Tasks"
        component={Tasks}
        options={{ title: "Tasks" }}
      />
      <Stack.Screen
        name="AddTask"
        component={AddTask}
        options={{ title: "Add Task" }}
      />
      <Stack.Screen
        name="TaskDetails"
        component={TaskDetails}
        options={{ title: "Task Details" }}
      />
    </Stack.Navigator>
  );
};

const WelcomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ title: "Welcome" }}
      />
      <Stack.Screen name="Home" component={Home} options={{ title: "Home" }} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Login" }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ title: "Register" }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Profile" }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ title: "EditProfile" }}
      />
    </Stack.Navigator>
  );
};

const AppBottomTabs = () => {
  return (
    <BottomTabs.Navigator screenOptions={{ headerShown: false }}>
      <BottomTabs.Screen
        name="WelcomeScreen"
        component={WelcomeStack}
        options={{ title: "Welcome Screen" }}
      />
      <BottomTabs.Screen name="MyProjects" component={AppStack} />
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
