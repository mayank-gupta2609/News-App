import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import moment from 'moment/moment';
import { openBrowserAsync } from 'expo-web-browser';

// const NewsItem = ({ title, url, time, source, backgroundColor, borderColor, newsUrl }) =>

// (
//     <Pressable style={{
//         borderBottomWidth: 5,
//         height: 300,
//         margin: 10,
//         width: "95%",
//         borderRadius: 10,
//         overflow: "hidden",
//         borderRadius: 5,
//         backgroundColor: backgroundColor,
//         borderColor: borderColor
//     }} onPress={() => {
//         openBrowserAsync(newsUrl)
//     }}>

//         <Image
//             source={
//                 {
//                     uri: url
//                     , headers: { 'Accept': 'image/*' }
//                 }
//             }
//             style={{ width: '100%', height: '61%' }}
//             resizeMode={'cover'}
//         ></Image>
//         {title.length > 55 ?
//             <Text style={styles.title}>{title?.substring(0, 55)}...</Text> :
//             <Text style={styles.title}>{title}</Text>
//         }
//         <View >
//             <View style={{ width: "100%", display: 'flex', flexDirection: "row", justifyContent: "space-between" }}>
//                 <View style={{ display: 'flex', flexDirection: "row", paddingLeft: 12 }}>

//                     <View>

//                         <Text style={{ fontSize: 16, color: "whitesmoke" }}>{source?.substring(0, 15)}</Text>

//                     </View>
//                 </View>
//                 {/* moment(ISOStringHere, 'YYYY-MM-DD HH:mm'); */}

//                 <Text style={{ fontSize: 16, color: "white", paddingRight: 12 }}>
//                     {moment(time).format('MMMM Do YYYY')}
//                 </Text>
//             </View>

//         </View>
//     </Pressable >
// );


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

// export default NewsItem 
const NewsItem = ({ title, url, time, source, backgroundColor, borderColor, newsUrl }) => {

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
    if (!fontsLoaded) return <View></View>
    return (
        <Pressable style={{
            borderBottomWidth: 5,
            height: 300,
            margin: 10,
            width: "95%",
            borderRadius: 10,
            overflow: "hidden",
            borderRadius: 5,
            backgroundColor: backgroundColor,
            borderColor: borderColor
        }} onPress={() => {
            openBrowserAsync(newsUrl)
        }}>

            <Image
                source={
                    {
                        uri: url || "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
                        , headers: { 'Accept': 'image/*' }
                    }
                }
                style={{ width: '100%', height: '61%' }}
                resizeMode={'cover'}
            ></Image>
            {title.length > 55 ?
                <Text style={styles.title}>{title?.substring(0, 55)}...</Text> :
                <Text style={styles.title}>{title}</Text>
            }
            <View >
                <View style={{ width: "100%", display: 'flex', flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ display: 'flex', flexDirection: "row", paddingLeft: 12 }}>

                        <View>

                            {source ? <Text style={{ fontSize: 16, color: "#dae8e8" }}>{source?.substring(0, 15)}</Text> : <Text style={{ fontSize: 16, color: "#dae8e8" }}>Unknown Source</Text>}

                        </View>
                    </View>
                    {/* moment(ISOStringHere, 'YYYY-MM-DD HH:mm'); */}

                    <Text style={{ fontSize: 16, color: "#dae8e8", paddingRight: 12 }}>
                        {moment(time).format('MMMM Do YYYY')}
                    </Text>
                </View>

            </View>
        </Pressable >
    );
}




const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "white",
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
        position: "absolute",
        zIndex: 10,
        height: "100%",
        width: "100%"
    }, heading: {
        fontSize: 30,
        color: "#ff4b44",
    }, item: {

    }, title: {
        color: "white",
        fontSize: 21,
        padding: 10,
        fontFamily: "Lato_700Bold"
    }, newsItemTitle: {
        color: "white",
        fontSize: 20,
        padding: 10
    }
})


export default NewsItem