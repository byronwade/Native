// ReferralScreen.js

import React from "react";
import { Avatar, AvatarFallbackText, ButtonText, Button, VStack, Image, Link, Heading, Text, View, ScrollView, HStack, Box } from "@gluestack-ui/themed";

import Icon from "react-native-vector-icons/FontAwesome";

const ReferralScreen = () => {
	return (
		<View backgroundColor="#1b1b1b" p="$3" style={{ flex: 1, alignItems: "center" }}>
			<Text fontWeight="bold" size="5xl" color="$white">
				We
			</Text>
			<View>
				<Icon style={{ justifyContent: "center", alignItems: "center" }} name="heart" size={150} color="red" />
			</View>
			<Text fontWeight="bold" size="5xl" color="$white">
				Referrals
			</Text>
			<Box backgroundColor="#bc6f30" borderRadius="$lg" overflow="hidden" pl="$3" pr="$3" m="$3">
				<Text color="$black" size="3xl">
					5687134
				</Text>
			</Box>
			<Text color="$grey" mt="$12" size="md">
				Share this code with anyone, and when they use it, you'll receive a 10% discount on any plumbing-related project.{" "}
			</Text>
		</View>
	);
};

export default ReferralScreen;
