import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "./Home";
import { createDrawerNavigator } from "react-navigation-drawer";

export const routeConfig = {
  Home: {
    screen: Home,
  }
}
const AppStack = createStackNavigator(routeConfig);
const AppDrawer = createDrawerNavigator({
  Drawer: AppStack
})

export default createAppContainer(AppDrawer);