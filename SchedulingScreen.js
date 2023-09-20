// SchedulingScreen.js

import React, { useState } from "react";
import { ButtonText, Button, VStack, Image, Link, Heading, Text, View, ScrollView, HStack, Box } from "@gluestack-ui/themed";

import { RefreshControl, StyleSheet } from "react-native";

const SchedulingScreen = () => {
	const [isRefreshing, setIsRefreshing] = useState(false);
	return (
		<>
			<ScrollView
				p="$3"
				backgroundColor="#1b1b1b"
				refreshControl={
					<RefreshControl
						refreshing={isRefreshing}
						onRefresh={() => {
							setIsRefreshing(true);
							// do something to refresh the data
							setIsRefreshing(false);
						}}
					/>
				}
			>
				<View pt="$5">
					<Heading color="$white" size="xl">
						Today
					</Heading>
					<Text style={{ marginTop: -6 }} size="sm" color="$white">
						Wensday 17th, 2023
					</Text>
					<View style={styles.container}>
						<Button style={styles.box} size="xs" variant="solid" action="primary" isDisabled={false} isFocusVisible={false}>
							<ButtonText fontSize="$sm" fontWeight="$medium">
								2:30-4:30 PM
							</ButtonText>
						</Button>
					</View>
				</View>

				<View pt="$5">
					<Heading color="$white" size="xl">
						Tomarrow
					</Heading>
					<Text style={{ marginTop: -6 }} size="sm" color="$white">
						Wensday 17th, 2023
					</Text>

					<View style={styles.container}>
						<Button style={styles.box} size="xs" variant="solid" action="primary" isDisabled={false} isFocusVisible={false}>
							<ButtonText fontSize="$sm" fontWeight="$medium">
								2:30-4:30 PM
							</ButtonText>
						</Button>
						<Button style={styles.box} size="xs" variant="solid" action="primary" isDisabled={false} isFocusVisible={false}>
							<ButtonText fontSize="$sm" fontWeight="$medium">
								2:30-4:30 PM
							</ButtonText>
						</Button>
						<Button style={styles.box} size="xs" variant="solid" action="primary" isDisabled={false} isFocusVisible={false}>
							<ButtonText fontSize="$sm" fontWeight="$medium">
								2:30-4:30 PM
							</ButtonText>
						</Button>
					</View>
					<View style={styles.container}>
						<Button style={styles.box} size="xs" variant="solid" action="primary" isDisabled={false} isFocusVisible={false}>
							<ButtonText fontSize="$sm" fontWeight="$medium">
								12:30-4:30 PM
							</ButtonText>
						</Button>
						<Button style={styles.box} size="xs" variant="solid" action="primary" isDisabled={false} isFocusVisible={false}>
							<ButtonText fontSize="$sm" fontWeight="$medium">
								2:30-4:30 PM
							</ButtonText>
						</Button>
						<Button style={styles.box} size="xs" variant="solid" action="primary" isDisabled={false} isFocusVisible={false}>
							<ButtonText fontSize="$sm" fontWeight="$medium">
								2:30-4:30 PM
							</ButtonText>
						</Button>
					</View>
				</View>
			</ScrollView>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1, // Take up 100% of the screen width
		flexDirection: "row", // Horizontal layout
		justifyContent: "justify-between", // Space evenly between the boxes
		paddingTop: 10,
		marginRight: -10,
	},
	box: {
		flex: 1, // Each box takes an equal share of the space
		marginRight: 10,
	},
});

export default SchedulingScreen;
