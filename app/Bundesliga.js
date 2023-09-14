import { View, Text, StyleSheet, SafeAreaView, Button, FlatList, ScrollView, StatusBar, Image } from 'react-native'
import React from 'react'
import { Video, ResizeMode } from 'expo-av';
import { useFocusEffect } from '@react-navigation/native';
import NewsItem from './NewsItem';
import Loader from './Loader';
import Fixtures from './Fixtures';
import WebView from 'react-native-webview';
// import { StatusBar } from 'expo-status-bar';



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
//     {title.length > 70 ?
//       <Text style={styles.title}>{title?.substring(0, 55)}...</Text> :
//       <Text style={styles.title}>{title}</Text>
//     }
//     <View >
//       <View style={{ width: "100%", display: 'flex', flexDirection: "row", justifyContent: "space-between" }}>
//         <View style={{ display: 'flex', flexDirection: "row", paddingLeft: 12 }}>

//           <View>

//             <Text style={{ fontSize: 16, color: "whitesmoke" }}>{source?.substring(0, 15)}</Text>

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
//     backgroundColor: "#821017",
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

const Bundesliga = ({ navigation }) => {
  const video = React.useRef(null);

  const fixturesData = [{
    id: 'bd7acbea-c1b1-46c2-aed',
    stadium: 'Allianz Arena',
    time: "Sat 16th Sept 12:00 am",
    team1name: "Bayern",
    team1img: 'https://ssl.gstatic.com/onebox/media/sports/logos/-_cmntP5q_pHL7g5LfkRiw_96x96.png',
    team2name: 'Lerkusen',
    team2img: 'https://ssl.gstatic.com/onebox/media/sports/logos/0zIcXiwD_JGY482DFC28Lw_96x96.png'
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
  ];

  useFocusEffect(() => {
    StatusBar.setBackgroundColor('#a3101a', false)
    StatusBar.setBarStyle("light-content")
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

  const fetchNews = async () => {
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)"
    }

    let response = await fetch("https://newsapi.org/v2/everything?q=Bundesliga&apiKey=2adedfc1ddc14abbbb549001696ee643&pageSize=20", {
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
      {/* #ff005c */}
      <ScrollView style={styles.container}>
        <View style={styles.videoHolder}>
          <View style={styles.mainVideo}>
            <Video
              ref={video}
              style={styles.video}
              source={
                require("../statics/BundesligaINTRO.mp4")
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
              backgroundColor="#821017"
            />}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <Text style={{
          fontSize: 30,
          color: "white",
          fontWeight: "bold",
          padding: 10
        }}>Standings</Text>

        <View style={{
          width: "95%",
          height: 815,
          position: "relative",
          overflow: "hidden",
          borderRadius: 20,
          marginLeft: "auto",
          marginRight: "auto"
        }}>


          <View style={{
            height: "180%",
            position: "absolute",
            top: -192,
            width: "100%",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            transform: "scale(1.06)"

          }}>
            <View style={{
              height: "100%",
              width: "100%",
            }}>
              <WebView
                source={{ uri: "https://www.google.com/search?q=bundesliga+standings+23%2F24&sca_esv=565038199&bih=718&biw=1494&hl=en&sxsrf=AM9HkKkx-JV4-ojPXXdT92uua3YDCjWH1w%3A1694623986192&ei=8ugBZeWoC_Wt4-EP5Kux-A4&oq=bun+standings+23%2F24&gs_lp=Egxnd3Mtd2l6LXNlcnAiE2J1biBzdGFuZGluZ3MgMjMvMjQqAggAMgYQABgHGB4yCBAAGIoFGIYDMggQABiKBRiGAzIIEAAYigUYhgNIjwtQAFj3AXAAeACQAQCYAaICoAHxBaoBBTAuMS4yuAEDyAEA-AEB4gMEGAAgQYgGAQ&sclient=gws-wiz-serp#sie=lg;/g/11t82pjxl9;2;/m/037169;st;fp;1;;;" }}
                style={{
                  width: "100%",
                  height: "100%"
                }}
              ></WebView>

            </View>
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

                  backgroundColor="#821017"
                  borderColor="red"
                  newsUrl={item.url}
                ></NewsItem>
              })
            }
          </View> : <View style={{
            width: "100%"
          }}>
            <Loader backgroundColor="#821017"></Loader>
          </View>
        }
      </ScrollView>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#a3101a",
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
    color: "white",
    fontWeight: "bold"
  }, item: {
    borderBottomWidth: 5,
    height: 300,
    margin: 10,
    width: "95%",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#821017",
    borderRadius: 5,
    borderColor: "red"
  }, title: {
    color: "white",
    fontSize: 22,
    padding: 10
  }, newsItemTitle: {
    color: "white",
    fontSize: 20,
    padding: 10
  }
})

export default Bundesliga