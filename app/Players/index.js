import { View, Text, StatusBar, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { useFocusEffect } from '@react-navigation/native'
import topTalentsData from '../../Constants/TopTalents'
import iconsData from '../../Constants/IconsData'
import risingTalentsData from '../../Constants/RisingTalents'


const PlayersCard = ({ id, name, position, nation, img, club, color }) => (
    <View style={{
        height: 360,
        width: 250,
        borderLeftWidth: 4,
        borderLeftColor: color,
        margin: 10,
        borderRadius: 10,
        overflow: "hidden",
        borderBottomWidth: 4,
        borderBottomColor: color
    }}>
        <Image source={{
            uri: img
        }} style={{
            height: 260
        }}></Image>
        <View style={{
            width: 246
        }}>
            <Text style={{
                color: "white",
                fontSize: 18,
                width: "100%",
                textAlign: "center",
                padding: 10,
                fontFamily: "Lato_400Regular",
            }}>{name}</Text>
        </View>
        <View style={{
            width: 246,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
        }}>
            <Text style={{
                color: "white",
                fontSize: 23,
                textAlign: "center",
                marginTop: 3,
                fontFamily: "Lato_400Regular"
            }}>{position} </Text>
            <Image source={{ uri: nation }}
                style={{
                    height: 30,
                    width: 40,
                    borderRadius: 5,
                    marginTop: 7
                }}
            ></Image>
            <Image source={{ uri: club }}
                style={{
                    height: 40,
                    width: 40,
                    resizeMode: "contain"
                }}
            ></Image>

        </View>
    </View>)



const Players = () => {

    useFocusEffect(() => {
        StatusBar.setBackgroundColor('black', false)
        StatusBar.setBarStyle("light-content")
    })
    return (
        <ScrollView style={{
            height: "100%",
            backgroundColor: "black",
            paddingTop: 20
        }}>

            <Text style={{
                color: "white",
                fontSize: 25,
                margin: 15,
                fontFamily: "Lato_700Bold"
            }}>
                Legends
            </Text>

            <FlatList
                data={iconsData}
                renderItem={({ item }) => <PlayersCard
                    id={item.id}
                    name={item.name}
                    position={item.position}
                    nation={item.nation}
                    img={item.img}
                    club={item.club}
                    color="gold"
                />}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={true}
            />

            <Text style={{
                color: "white",
                fontSize: 25,
                margin: 15,
                fontFamily: "Lato_700Bold"
            }}>
                Top Talents
            </Text>

            <FlatList
                data={topTalentsData}
                renderItem={({ item }) => <PlayersCard
                    id={item.id}
                    name={item.name}
                    position={item.position}
                    nation={item.nation}
                    img={item.img}
                    club={item.club}
                    color="silver"
                />}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={true}
            />

            <Text style={{
                color: "white",
                fontSize: 25,
                margin: 15,
                fontFamily: "Lato_700Bold"
            }}>
                Rising Talents
            </Text>

            <FlatList
                data={risingTalentsData}
                renderItem={({ item }) => <PlayersCard
                    id={item.id}
                    name={item.name}
                    position={item.position}
                    nation={item.nation}
                    img={item.img}
                    club={item.club}
                    color="magenta"
                />}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={true}
            />
            <View style={{
                height: 20
            }}></View>

        </ScrollView>
    )
}

export default Players