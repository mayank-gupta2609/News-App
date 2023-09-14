import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const PlayerInfo = ({ route, navigation }) => {
    // const id = useSearc
    return (
        <View>
            <TouchableOpacity onPress={() => {
                navigation.push("TeamInfo", {
                    name: "Dortmund"
                })
            }}>

                {/* <Text>{params.id}</Text> */}
                <Text>

                    {route.params.name}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default PlayerInfo