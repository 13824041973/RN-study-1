import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "../pages/search";
import Dashboard from "../pages/dashboard";
import News from "../pages/news";
import { Icon } from "@ant-design/react-native";
import { StyleSheet, Pressable } from "react-native";
import Info from "../pages/info";
import User from "../pages/user";

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStackNavigation />
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();
const RootStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

const BottomTab = createBottomTabNavigator();
const BottomTabNavigation = () => (
  <BottomTab.Navigator>
    <BottomTab.Screen
      name="Dashboard"
      component={Dashboard}
      options={({ navigation }) => ({
        title: "首页",
        tabBarIcon: ({ color }) => (
          <Icon name="dashboard" size={24} color={color} />
        ),
      })}
    />
    <BottomTab.Screen
      name="News"
      component={News}
      options={({ navigation }) => ({
        title: "新闻",
        headerTitle: "搜索",
        headerRight: () => (
          <Pressable onPress={() => navigation.navigate("Search")}>
            <Icon name="search" size={18} style={styles.rightBtn} />
          </Pressable>
        ),
        tabBarIcon: ({ color }) => (
          <Icon name="google" size={24} color={color} />
        ),
      })}
    />
    <BottomTab.Screen
      name="Info"
      component={Info}
      options={({ navigation }) => ({
        title: "信息",
        tabBarIcon: ({ color }) => (
          <Icon name="profile" size={24} color={color} />
        ),
      })}
    />
    <BottomTab.Screen
      name="User"
      component={User}
      options={({ navigation }) => ({
        title: "我的",
        tabBarIcon: ({ color }) => <Icon name="user" size={24} color={color} />,
      })}
    />
  </BottomTab.Navigator>
);

const styles = StyleSheet.create({
  rightBtn: {
    marginRight: 16,
  },
});

export default Navigation;
