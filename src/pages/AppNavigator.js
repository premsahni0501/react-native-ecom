import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import Home from "./Home";

export const routeConfig = {
  Home: {
    screen: Home,
  }
}
const AppNavigator = createDrawerNavigator(routeConfig);

export default createAppContainer(AppNavigator);