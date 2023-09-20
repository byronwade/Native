// App.js
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { config, GluestackUIProvider } from "@gluestack-ui/themed";
import Icon from "react-native-vector-icons/Feather";

import HomeScreen from "./HomeScreen";
import SchedulingScreen from "./SchedulingScreen";
import ReferralScreen from "./ReferralScreen";
import AdditionalScreen from "./AdditionalScreen";
import UpgradeScreen from "./UpgradeScreen";
import TopBar from "./TopBar"; // Import the TopBar component

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			tabBarPosition="bottom"
			screenOptions={{
				showIcon: true,
				tabBarActiveTintColor: "#bc6f30",
				tabBarStyle: {
					borderTopWidth: 0,
					backgroundColor: "#1b1b1b",
					paddingTop: 5,
					color: "#fff",
				},
				tabBarIconStyle: { fontSize: 24 },
				tabBarLabelStyle: { fontSize: 10 },
				upperCaseLabel: false,
				tabBarHideOnKeyboard: true,
				headerShown: false,
			}}
		>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ focused }) => <Icon name="home" size={24} color={focused ? "#bc6f30" : "gray"} />,
					tabBarLabel: "Home",
					headerShown: false,
				}}
			/>
			<Tab.Screen
				name="Scheduling"
				component={SchedulingScreen}
				options={{
					tabBarIcon: ({ focused }) => <Icon name="calendar" size={24} color={focused ? "#bc6f30" : "gray"} />,
					tabBarLabel: "Schedule",
					headerShown: false,
				}}
			/>
			<Tab.Screen
				name="Referral"
				component={ReferralScreen}
				options={{
					tabBarIcon: ({ focused }) => <Icon name="user-plus" size={24} color={focused ? "#bc6f30" : "gray"} />,
					tabBarLabel: "Referral",
					headerShown: false,
				}}
			/>
			<Tab.Screen
				name="Additional"
				component={AdditionalScreen}
				options={{
					tabBarIcon: ({ focused }) => <Icon name="settings" size={24} color={focused ? "#bc6f30" : "gray"} />,
					tabBarLabel: "Settings",
					headerShown: false,
				}}
			/>
		</Tab.Navigator>
	);
};

const App = () => {
	return (
		<GluestackUIProvider config={config.theme}>
			<NavigationContainer>
				<StatusBar barStyle="light-content" />
				<TopBar title="Wade's Plumbing & Septic" />
				<Stack.Navigator
					screenOptions={{
						cardStyle: {
							backgroundColor: "#1b1b1b",
						},
						headerShown: false,
					}}
				>
					<Stack.Screen name="HomeStack" component={HomeStack} />
					<Stack.Screen name="UpgradeScreen" component={UpgradeScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</GluestackUIProvider>
	);
};

export default App;
