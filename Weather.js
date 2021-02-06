import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0","#D39D38"],
        title: "Haze",
        subTitle: "Just don't go outside",
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title: "Thunderstorm",
        subTitle: "node_modules\react-native\Libraries\Core\setUpErrorHandling.js:24:6 in handleError",
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subTitle: "node_modules\react-native\Libraries\Core\ExceptionsManager.js:171:19 in handleException",
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "Rain",
        subTitle: "node_modules\react-native\Libraries\Core\ExceptionsManager.js:104:6 in reportException",
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "Snow",
        subTitle: "Do you wanna build the snowman~? Fuck No.",
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Atmosphere",
        subTitle: "node_modules\expo\build\environment\react-native-logs.fx.js:27:4 in error",
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "Clear",
        subTitle: "Go get your ass burnt",
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subTitle: "node_modules\react-native\Libraries\LogBox\LogBox.js:59:8 in errorImpl",
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Mist",
        subTitle: "Libraries\LogBox\LogBox.js:148:8 in registerError",
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Dust",
        subTitle: "Thanks a lot china!",
    },
};


export default function Weather({temp, condition}){

    return (
        

        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.halfContainer}>
      
        <StatusBar barStyle="light-content" />

            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white"></MaterialCommunityIcons>
            <Text style={styles.temp}>{temp}º</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.title} >
                    {weatherOptions[condition].title}
                </Text>
                <Text style={styles.subTitle} >
                    {weatherOptions[condition].subTitle}
                </Text>

            </View>


        </LinearGradient>


        
    );
}
 
Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm","Drizzle","Rain","Snow","Atmosphere","Clear","Clouds","Haze","Mist","Dust"]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
     //   backgroundColor: "#FDF6AA",
    },
    temp :{
        color: "white",
        fontSize: 42,
    },
    halfContainer :{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "white",
        fontSize: 32,
        fontWeight : "300",
        marginBottom: 10,
        textAlign: "left",
    },
    subTitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 18,
        textAlign: "left",
    },
    textContainer: {
        alignItems: "flex-start",
        paddingHorizontal: 40,
        justifyContent: "center",
        flex: 1
    },
});