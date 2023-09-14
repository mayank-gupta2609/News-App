import { View, Text, StyleSheet, SafeAreaView, Button, FlatList, ScrollView, StatusBar, Image } from 'react-native'
import React from 'react'
import { Video, ResizeMode } from 'expo-av';
import { useFocusEffect } from '@react-navigation/native';
import NewsItem from './NewsItem';
import Loader from './Loader';
import Fixtures from './Fixtures';
import WebView from 'react-native-webview';


// const NewsItem = ({ title, url, time, source }) => (
//   <View style={styles.item}>

//     <Image
//       source={
//         {
//           uri: url
//         }
//       }
//       style={{ width: '100%', height: '61%', resizeMode: "cover" }}
//     ></Image>
//     <Text style={styles.newsItemTitle}>{title}</Text>
//     <View >
//       <View style={{ width: "100%", display: 'flex', flexDirection: "row", justifyContent: "space-between" }}>
//         <View style={{ display: 'flex', flexDirection: "row", paddingLeft: 12 }}>

//           <View>

//             <Text style={{ fontSize: 18, color: "white" }}>{source}</Text>
//           </View>
//         </View>
//         <Text style={{ fontSize: 16, color: "white", paddingRight: 12 }}>{time}</Text>
//       </View>

//     </View>
//   </View>
// );

// const Fixtures = ({ stadium, time, team1name, team2name, team1img, team2img }) => (
//   <View style={{
//     height: 160,
//     backgroundColor: "#ff4b44",
//     marginRight: 10,
//     padding: 10,
//     width: 280,
//     borderRadius: 10
//   }}>
//     <View style={{
//       display: 'flex',
//       flexDirection: 'row',
//       width: "100%",
//       // borderWidth: 2,
//       // borderColor: "red"
//     }}>
//       <View style={{
//         width: "50%",
//         // borderWidth: 2,
//         // borderColor: "red",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center"
//       }}>
//         <Image source={
//           {
//             uri: team1img
//           }
//         }
//           style={{ width: 70, height: 70, resizeMode: "cover", marginBottom: 12 }} ></Image>
//         <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>

//           {team1name}
//         </Text>
//       </View>
//       <View style={{
//         height: '100%', paddingTop: 20
//       }}>

//         <Text style={{
//           color: 'white',

//         }}>vs</Text>
//       </View>

//       <View style={{
//         width: "50%",
//         // borderWidth: 2,
//         // borderColor: "red",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center"
//       }}>
//         <Image source={
//           {
//             uri: team2img
//           }
//         }
//           style={{ width: 70, height: 70, resizeMode: "cover", marginBottom: 12 }} ></Image>
//         <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>

//           {team2name}
//         </Text>
//       </View>
//     </View>
//     <View>
//       <View>
//         <Text style={{
//           textAlign: "center",
//           color: "whitesmoke",
//           marginTop: 8
//         }}>

//           {stadium} • {time}
//         </Text>
//       </View>

//     </View>
//   </View>
// );

// #0b0d52

const LaLiga = ({ navigation }) => {
  const video = React.useRef(null);
  useFocusEffect(() => {
    StatusBar.setBackgroundColor('whitesmoke', false)
    StatusBar.setBarStyle("dark-content")
  })
  React.useEffect(() => {
    navigation.addListener('blur', async () => {
      await video.current?.stopAsync()
    });

    navigation.addListener('focus', async () => {
      await video.current?.playAsync()
    });

  }, [navigation]);

  const [status, setStatus] = React.useState({});
  const [articles, setArticles] = React.useState([]);


  const fixturesData = [

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

  const fetchNews = async () => {
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)"
    }

    let response = await fetch("https://newsapi.org/v2/everything?q=La%20Liga%20Soccer&apiKey=2adedfc1ddc14abbbb549001696ee643&pageSize=20", {
      method: "GET",
      headers: headersList
    });

    let data = await response.json();
    // console.log(data);
    setArticles(data.articles)

  }
  React.useEffect(() => {
    fetchNews()
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <StatusBar backgroundColor="black" /> */}
      <ScrollView style={styles.container}>
        <View style={styles.videoHolder}>
          <View style={styles.mainVideo}>
            <Video
              ref={video}
              style={styles.video}
              source={
                require("../statics/LALIGAINTRO.mp4")
              }
              useNativeControls={false}
              resizeMode={ResizeMode.COVER}
              isLooping={true}
              onPlaybackStatusUpdate={status => setStatus(() => status)}
              shouldPlay
              isMuted={false}
            />
          </View>



        </View>
        <View style={{
          padding: 10
        }}>
          <Text style={styles.heading}>Fixtures</Text>
          <FlatList
            data={fixturesData}
            renderItem={({ item }) => <Fixtures stadium={item.stadium} time={item.time} team1name={item.team1name} team2name={item.team2name} team1img={item.team1img} team2img={item.team2img}
              backgroundColor="#ff4b44"
            />}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <Text style={{
          fontSize: 30,
          color: "#ff4b44",
          fontFamily: "Lato_700Bold",
          padding: 10
        }}>Standings</Text>

        <View style={{
          width: "95%",
          height: 900,
          position: "relative",
          overflow: "hidden",
          borderRadius: 10,
          marginRight: "auto",
          marginLeft: "auto",

        }}>


          <View style={{
            height: "180%",
            position: "absolute",
            top: -190,
            width: "100%",
            transform: "scale(1.06)"
          }}>
            <WebView
              source={{ uri: "https://www.google.com/search?q=la+liga+standings+23%2F24&sca_esv=565038199&bih=718&biw=1494&hl=en&sxsrf=AM9HkKkpuueUMd3gVx3o_07vbyFyhI0ZYg%3A1694625954081&ei=ovABZdyyBIihseMPyMygoAI&ved=0ahUKEwjci5TQjaiBAxWIUGwGHUgmCCQQ4dUDCBA&uact=5&oq=la+liga+standings+23%2F24&gs_lp=Egxnd3Mtd2l6LXNlcnAiF2xhIGxpZ2Egc3RhbmRpbmdzIDIzLzI0MgUQABiABDIIEAAYigUYhgMyCBAAGIoFGIYDMggQABiKBRiGA0iWFFCQBVj9EXABeAGQAQGYAa8CoAHjC6oBBzAuOC4wLjG4AQPIAQD4AQHCAgoQABhHGNYEGLADwgIGEAAYBxge4gMEGAAgQYgGAZAGCA&sclient=gws-wiz-serp#sie=lg;/g/11khrmf0s3;2;/m/09gqx;st;fp;1;;;" }}
              style={{
                width: "100%",
                height: "100%"
              }}
            ></WebView>
          </View>
        </View>

        <View style={{
          padding: 5
        }}>
          <Text style={styles.heading}>Headlines</Text>
        </View>
        {
          articles?.length > 0 ? <View style={{
            width: "100%"
          }}>
            {
              articles.map((item) => {
                return <NewsItem title={item.title} url={item.urlToImage} time={item.publishedAt} source={
                  // name:
                  item.author
                  // img: "../statics/UEFA.png"
                }

                  backgroundColor="#ff4b44"
                  borderColor="#ff4b44"
                  newsUrl={item.url}
                ></NewsItem>
              })
            }
          </View> : <View style={{
            width: "100%"
          }}>
            <Loader backgroundColor="#ff4b44"></Loader>
          </View>
        }

      </ScrollView>
    </SafeAreaView>
  )
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
    padding: 10,
  }, video: {
    alignSelf: 'center',
    width: "100%",
    height: 240,
    borderRadius: 10
  }, mainVideo: {
    height: "100%",
    width: "100%",
  }, heading: {
    fontSize: 30,
    color: "#ff4b44",
    fontFamily: "Lato_700Bold"
  }, item: {
    borderBottomWidth: 5,
    height: 300,
    margin: 10,
    width: "95%",
    borderRadius: 10,
    overflow: "hidden",
    borderRadius: 5,
    backgroundColor: "#ff4b44",
    borderColor: "#ff4b44"
  }, title: {
    color: "white",
    fontSize: 22
  }, newsItemTitle: {
    color: "white",
    fontSize: 20,
    padding: 10
  }
})

export default LaLiga