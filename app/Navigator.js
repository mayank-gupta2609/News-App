import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Headlines from './Headlines'
import Leagues from './Leagues'
import StackedLayout from './Leagues/_layout'
import StackedLayout1 from './Players/_layout'
import { Image } from 'react-native'
import UCL from './UCL'
import * as NavigationBar from 'expo-navigation-bar';
const Navigator = ({ navigator }) => {
    const Tab = createBottomTabNavigator()
    // const [color, setColor] = React.useState('rgb(27 ,27, 27)')
    React.useEffect(async () => {
        await NavigationBar.setBackgroundColorAsync("black");
        // console.log(navigator)
    }, []);
    return (
        <>
            <NavigationContainer>
                <Tab.Navigator screenOptions={({ route }) => ({
                    tabBarStyle: {
                        backgroundColor: "black"
                        ,
                        borderTopWidth: 0,
                        height: 70,
                        witdh: "100%",
                        tabBarActiveTintColor: "red",
                        tabBarInactiveTintColor: "white",
                    }, headerShown: false,
                    tabBarOptions: {

                        showIcon: true,
                        showLabel: false,
                        lazyLoad: true,
                        // navi

                    }, navigationBarColor: 'gold'

                })}>
                    <Tab.Screen name="Headlines" component={Headlines} options={{
                        tabBarIcon: ({ }) => (
                            <Text style={{
                                color: "white",
                                paddingTop: 10
                            }}>NEWS</Text>
                        ),
                        tabBarLabel: ""
                    }} ></Tab.Screen>
                    <Tab.Screen name="UCL" component={UCL} options={{
                        tabBarIcon: ({ }) => (

                            <Image
                                source={require('../statics/UEFA.png')}
                                style={{ width: 44, height: 42, }}
                            />
                        ),
                        tabBarLabel: "UCL"
                    }}
                    ></Tab.Screen>
                    <Tab.Screen name="Leagues" component={StackedLayout} options={{
                        tabBarIcon: ({ }) => (

                            <Image
                                source={require("../statics/Trophy.png")}
                                style={{ width: 44, height: 42, }}
                            />
                        ),
                        tabBarLabel: "Leagues"
                    }}></Tab.Screen>

                    <Tab.Screen name="Players" component={StackedLayout1} options={{
                        tabBarIcon: ({ }) => (
                            <Image
                                source={{ uri: "https://www.clker.com/cliparts/u/t/7/t/G/z/white-soccer-player-hi.png" }}
                                style={{ width: 25, height: 40, resizeMode: "cover" }}
                            />
                        ),
                        tabBarLabel: "Players"
                    }}></Tab.Screen>
                </Tab.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Navigator