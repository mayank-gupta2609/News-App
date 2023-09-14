import { View, Text, } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Leagues from '.';
import LeagueInfo from './[id]';
import TeamInfo from '../Teams/[id]';
import Pl from '../Pl.js'
import Bundesliga from '../Bundesliga.js'
import LaLiga from '../LaLiga.js'
import SerieA from '../SerieA.js'
const Stack = createStackNavigator()
const StackedLayout = () => {
    return (
        <Stack.Navigator screenOptions={{
            tabBarStyle: {
                backgroundColor: 'black',
                borderWidth: 0,
                height: 40,
                witdh: "100%",

            }, headerShown: true,
            tabBarOptions: {

                showIcon: true,
                showLabel: false,
                lazyLoad: true,
                // navi

            },
            headerStyle: {
                backgroundColor: 'black',
                borderWidth: 0
            }, headerTitleStyle: {
                fontSize: 20,
                color: 'white',
            },


        }}>
            {/* <Text>StackedLayout</Text> */}
            <Stack.Screen name="LeaguesHome" component={Leagues} options={{
                title: "Leagues"
            }}></Stack.Screen>
            <Stack.Screen name="LeaguesInfo" component={LeagueInfo} options={({ route }) => ({ title: route.params.name })}></Stack.Screen>
            <Stack.Screen name="TeamInfo" component={TeamInfo}></Stack.Screen>
            <Stack.Screen name="PremiereLeague" component={Pl} options={{
                title: 'Premiere League',
                headerStyle: {
                    backgroundColor: '#cc084f',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontFamily: "Lato_700Bold"
                },
            }}></Stack.Screen>
            <Stack.Screen name="Bundesliga" component={Bundesliga} options={{
                title: 'Bundesliga',
                headerStyle: {
                    backgroundColor: '#a3101a',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {

                    fontFamily: "Lato_700Bold"
                },
            }}></Stack.Screen>
            <Stack.Screen name="LaLiga" component={LaLiga} options={{
                title: 'La Liga',
                headerStyle: {
                    backgroundColor: 'whitesmoke',
                },
                headerTintColor: 'black',
                headerTitleStyle: {

                    fontFamily: "Lato_700Bold"
                },
            }}></Stack.Screen>
            <Stack.Screen name="SerieA" component={SerieA} options={{
                title: 'Serie A',
                headerStyle: {
                    backgroundColor: '#0b0d52',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {

                    fontFamily: "Lato_700Bold"
                },
            }}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default StackedLayout