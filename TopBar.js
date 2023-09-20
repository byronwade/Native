// TopBar.js
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const logo = require("./WadesLogo.png"); // Replace with the actual path to your logo image

const TopBar = ({ title }) => {
	return (
		<View style={styles.container}>
			<Image source={logo} style={styles.logo} />
			<Text style={styles.title}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 120,
		backgroundColor: "#1b1b1b",
		justifyContent: "left",
		paddingTop: 60, // To avoid the status bar
		paddingLeft: 10,
		alignItems: "center",
		flexDirection: "row", // To align logo and title horizontally
	},
	logo: {
		width: 30, // Adjust the width and height of the logo as needed
		height: 30,
		marginRight: 10, // Add margin between logo and title
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#fff",
	},
});

export default TopBar;
