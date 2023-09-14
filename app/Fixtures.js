import { View, Text, Image } from 'react-native'
import React from 'react'

const Fixtures = ({ stadium, time, team1name, team2name, team1img, team2img, backgroundColor }) => (
    <View style={{
        height: 160,
        backgroundColor: backgroundColor,
        marginRight: 10,
        padding: 10,
        width: 360,
        borderRadius: 15,
        marginTop: 10
    }}>
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            width: "100%",
            // borderWidth: 2,
            justifyContent: "center"
            // borderColor: "red"
        }}>
            <View style={{
                width: "50%",
                // borderWidth: 2,
                // borderColor: "red",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Image source={
                    {
                        uri: team1img
                    }
                }
                    style={{ width: 70, height: 70, resizeMode: "contain", marginBottom: 12 }} ></Image>
                <Text style={{ color: "white", fontSize: 20, fontFamily: "Lato_700Bold" }}>

                    {team1name}
                </Text>
            </View>
            <View style={{
                height: '100%', paddingTop: 20
            }}>

                <Text style={{
                    color: 'white',

                }}>vs</Text>
            </View>

            <View style={{
                width: "50%",
                // borderWidth: 2,
                // borderColor: "red",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Image source={
                    {
                        uri: team2img
                    }
                }
                    style={{ width: 70, height: 70, resizeMode: "contain", marginBottom: 12 }} ></Image>
                <Text style={{ color: "white", fontSize: 20, fontFamily: "Lato_700Bold" }}>

                    {team2name}
                </Text>
            </View>
        </View>
        <View>
            <View>
                <Text style={{
                    textAlign: "center",
                    color: "whitesmoke",
                    marginTop: 8,
                    fontSize: 16
                }}>

                    {stadium} • {time}
                </Text>
            </View>

        </View>
    </View>
);



export default Fixtures