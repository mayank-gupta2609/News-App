import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Leagues from '.';
import LeagueInfo from './[id]';
import TeamInfo from '../Teams/[id]';
import Players from '.';
import PlayerInfo from './[id]';
const Stack = createStackNavigator()
const StackedLayout1 = () => {
    return (
        <Stack.Navigator screenOptions={{

            tabBarStyle: {
                backgroundColor: 'black',
                borderWidth: 0,
                height: 40,
                witdh: "100%",

            }, headerShown: false,
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
                fontSize: 30,
                color: 'white',
                fontFamily: "Lato_700Bold"
            },

        }}>
            {/* <Text>StackedLayout1</Text> */}
            <Stack.Screen name="PlayersHome" component={Players} options={{
                title: "Players",
            }} ></Stack.Screen>
            <Stack.Screen name="PlayersInfo" component={PlayerInfo} options={({ route }) => ({ title: route.params.name })}></Stack.Screen>
            {/* <Stack.Screen name="TeamInfo" component={TeamInfo}></Stack.Screen> */}
        </Stack.Navigator>
    )
}

export default StackedLayout1