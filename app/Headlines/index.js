import { View, Text, StyleSheet, SafeAreaView, FlatList, ScrollView, Image, TouchableOpacity, StatusBar, NativeModules, Platform } from 'react-native'
import React from 'react'
import { useFocusEffect } from '@react-navigation/native';
import NewsItem from '../NewsItem';
import Loader from '../Loader';
import {
    useFonts,
    Lato_100Thin,
    Lato_100Thin_Italic,
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    Lato_900Black,
    Lato_900Black_Italic,
} from '@expo-google-fonts/lato';
import Fixtures from '../Fixtures';

const Headlines = ({ navigation }) => {
    let [fontsLoaded] = useFonts({
        Lato_100Thin,
        Lato_100Thin_Italic,
        Lato_300Light,
        Lato_300Light_Italic,
        Lato_400Regular,
        Lato_400Regular_Italic,
        Lato_700Bold,
        Lato_700Bold_Italic,
        Lato_900Black,
        Lato_900Black_Italic,
    });

    const video = React.useRef(null);
    const [articles, setArticles] = React.useState([]);
    useFocusEffect(() => {
        StatusBar.setBackgroundColor('rgb(27 ,27, 27)', false)
        StatusBar.setBarStyle("light-content")
    })

    React.useEffect(() => {
        navigation.addListener('blur', async () => {
            await video.current?.stopAsync()
        });

        navigation.addListener('focus', async () => {
            await video.current?.playAsync()
            // StatusBarManager.
        });

    }, [navigation]);

    const fixturesData = [
        {
            id: 'bd7acbea-c1b1-46c2-aed',
            stadium: 'Molineux Stadium',
            time: "Sat 16th Sept 5:00 pm",
            team1name: "Wolves",
            team1img: 'https://ssl.gstatic.com/onebox/media/sports/logos/-WjHLbBIQO9xE2e2MW3OPQ_96x96.png',
            team2name: 'Liverpool',
            team2img: 'https://ssl.gstatic.com/onebox/media/sports/logos/0iShHhASp5q1SL4JhtwJiw_96x96.png'
        },
        {
            id: '3ac68afc-c605-48d3-a4f',
            stadium: 'Hotspur Stadium',
            time: "Sat 16th Sept 7:30 pm",
            team1name: "Tottenham",
            team1img: 'https://ssl.gstatic.com/onebox/media/sports/logos/k3Q_mKE98Dnohrcea0JFgQ_96x96.png',
            team2name: 'Sheffield United',
            team2img: 'https://ssl.gstatic.com/onebox/media/sports/logos/wF8AgQsssfy3_GLyVR3dSg_96x96.png'
        },
        {
            id: '58694a0f-3da1-471f-bd9',
            stadium: 'Old Trafford',
            time: "Sat 16th Sept 7:30 pm",
            team1name: "Man United",
            team1img: 'https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_96x96.png',
            team2name: 'Brighton',
            team2img: 'https://ssl.gstatic.com/onebox/media/sports/logos/EKIe0e-ZIphOcfQAwsuEEQ_96x96.png'
        },
        {
            id: '58694a0f-3dea1-47lk1f-bd9',
            stadium: 'Estadio de Vallecas',
            time: "Sat 16th Sept 12:30 am",
            team1name: "Rayo Vallecano",
            team1img: 'https://ssl.gstatic.com/onebox/media/sports/logos/i5LifmxEVIl0sbvIysiyhw_96x96.png',
            team2name: 'Alaves',
            team2img: 'https://ssl.gstatic.com/onebox/media/sports/logos/meAnutdPID67rfUecKaoFg_96x96.png'
        },
        {
            id: '58694a0f-3dea1-471f-bdo9',
            stadium: 'Mestalla',
            time: "Sat 16th Sept 7:45 pm",
            team1name: "Valencia",
            team1img: 'https://ssl.gstatic.com/onebox/media/sports/logos/QPbjvDwI_0Wuu4tCS2O6uw_96x96.png',
            team2name: 'Atletico Madrid',
            team2img: 'https://ssl.gstatic.com/onebox/media/sports/logos/srAAE0bOnCppUrlbJpFiHQ_96x96.png'
        },
        {
            id: '58694a0f-3dea1-471asf-bd9',
            stadium: 'Estadi Olímpic Lluís',
            time: "Sat 17th Sept 12:30 am",
            team1name: "Barcelona",
            team1img: 'https://ssl.gstatic.com/onebox/media/sports/logos/paYnEE8hcrP96neHRNofhQ_96x96.png',
            team2name: 'Real Betis',
            team2img: 'https://ssl.gstatic.com/onebox/media/sports/logos/S0fDZjYYytbZaUt0f3cIhg_96x96.png'
        },
    ];

    const getNews = async () => {
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)"
        }

        let response = await fetch("https://newsapi.org/v2/everything?q=manchester%20united&apiKey=2adedfc1ddc14abbbb549001696ee643&pageSize=20", {
            method: "GET",
            headers: headersList
        });

        let data = await response.json();
        console.log(data);

        // console.log(data);
        setArticles(data.articles)

    }


    React.useEffect(() => {
        getNews()
    }, [])


    if (!fontsLoaded) {
        return <View><Text>Loading</Text></View>;
    }
    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>


                <ScrollView style={styles.container}>
                    <View style={{
                        padding: 10
                    }}>
                        <Text style={styles.heading}>Fixtures</Text>
                        <FlatList
                            data={fixturesData}
                            renderItem={({ item }) => <Fixtures stadium={item.stadium} time={item.time} team1name={item.team1name} team2name={item.team2name} team1img={item.team1img} team2img={item.team2img}

                                backgroundColor="black" />}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>

                    <View style={{
                        padding: 10
                    }}>
                        <Text style={styles.heading}>Headlines  </Text>
                    </View>
                    {
                        articles?.length > 0 ? <View style={{
                            width: "100%"
                        }}>
                            {
                                articles.map((item, index) => {
                                    return <NewsItem title={item.title} url={item.urlToImage} time={item.publisedAt} source={
                                        // name:
                                        item.author
                                        // img: "../statics/UEFA.png"
                                    }
                                        backgroundColor="black"
                                        borderColor="whitesmoke"
                                        newsUrl={item.url}
                                        key={"news" + index}
                                    >

                                    </NewsItem>
                                })
                            }
                        </View> : <View style={{
                            width: "100%"
                        }}>
                            <Loader backgroundColor="black"></Loader>
                        </View>
                    }







                </ScrollView>
            </SafeAreaView>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "rgb(27 ,27, 27)",
        paddingTop: 10
    },
    videoHolder: {
        widht: "100%",
        // borderColor: "red",
        height: 240,
    }, video: {
        alignSelf: 'center',
        width: "100%",
        height: 240,
    }, mainVideo: {
        height: "100%",
        width: "100%"
    }, heading: {
        fontSize: 30,
        color: "white",
        fontFamily: "Lato_700Bold"
    }, item: {
        borderBottomWidth: 5,
        height: 300,
        margin: 10,
        width: "95%",
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "#040d6c",
        borderColor: "#eb45fd"
    }, title: {
        color: "white",
        fontSize: 20,
        padding: 10
    }, fixtures: {

    }
})

export default Headlines