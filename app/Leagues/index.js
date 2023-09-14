import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, StatusBar, Button } from 'react-native'
import React from 'react'
import { useFocusEffect } from '@react-navigation/native';

const LeagueCard = ({ name, logo, navigation }) => (
    // <Button onPress={() => {
    //     navigation.push(name);
    // }}
    //     title=''
    //     style={{
    //         width: '100%',
    //         height: 270
    //     }}
    // >


    <TouchableOpacity style={{
        width: "100%",
        borderWidth: 1,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: 260,
        // borderColor: "red"
    }}
        onPress={() => {
            navigation.push(name);
        }} activeOpacity={0.95}>
        <Image source={{
            uri: logo
        }}
            style={{
                width: "100%",
                height: 230,
                resizeMode: "contain",
                borderRadius: 10
            }}
        ></Image>
    </TouchableOpacity>
    // </Button>
)


const Leagues = ({ navigation }) => {
    useFocusEffect(() => {
        StatusBar.setBackgroundColor('black', false)
        StatusBar.setBarStyle("light-content")
    })
    const LeaguesData = [
        {
            id: "BDL",
            name: "Bundesliga",
            logo: "https://s.bundesliga.com/assets/img/30000/27160_imgw968.png"
        },
        {
            id: "Pl",
            name: "PremiereLeague",
            logo: "https://wallpapers.com/images/featured/premier-league-86d2ur0b5ryesbe7.jpg"
        }, {
            id: "LaLiga",
            name: "LaLiga",
            logo: "https://uploads-sportbusiness.imgix.net/uploads/2023/06/LALIGA_logo.jpg?auto=compress,format&crop=faces,entropy,edges&fit=crop&w=620&h=349"
        }, {
            id: "SerieA",
            name: "SerieA",
            logo: "https://www.soccerbible.com/media/93701/1-serie-a-logo-new.jpg"
        },
    ]

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false} style={{
                flex: 1,
                backgroundColor: "black"
            }}>
            <View style={styles.container}>
                {
                    LeaguesData.map((item) => {
                        return <LeagueCard name={item.name} logo={item.logo} navigation={navigation}></LeagueCard>
                    })
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap', // if you want to fill rows left to right
        backgroundColor: "black",
        justifyContent: 'center',
        alignContent: "center",
        paddingTop: 10
    },
    item: {
        width: '50%' // is 50% of container width
    }
})


export default Leagues