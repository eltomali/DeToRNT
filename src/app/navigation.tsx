// import React, { FC } from "react";

// import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// import Main, { screenOptions as topBar } from "../features/todos/Todos";

// import AddTodo, {
//   screenOptions as addTodoScreenOptions,
// } from "../features/todos/AddTodo";
// import { RootStackParamList } from "./types";

// interface RoutesProps {}

// const MyTheme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     background: "white",
//   },
// };

// const AppStack = createStackNavigator<RootStackParamList>();

// export const TodoNavigator: FC<RoutesProps> = ({}) => {
//   return (
//     <NavigationContainer theme={MyTheme}>
//       <AppStack.Navigator initialRouteName="Main">
//         <AppStack.Screen name="Main" component={Main} options={topBar} />
//         <AppStack.Screen
//           name="AddTodo"
//           component={AddTodo}
//           options={addTodoScreenOptions}
//         />
//       </AppStack.Navigator>
//     </NavigationContainer>
//   );
// };
