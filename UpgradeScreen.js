// UpgradeScreen.js

import React, { useState } from "react";
import { Avatar, AvatarFallbackText, ButtonText, Button, VStack, Image, Link, Heading, Text, View, ScrollView, HStack, Box } from "@gluestack-ui/themed";

import Icon from "react-native-vector-icons/FontAwesome";

import { RefreshControl } from "react-native";

const UpgradeScreen = () => {
	const [isRefreshing, setIsRefreshing] = useState(false);

	return (
		<View style={{ justifyContent: "center", alignItems: "center" }}>
			<Text size="5xl">Upgrade</Text>
		</View>
	);
};

export default UpgradeScreen;
