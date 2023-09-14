import { View, Text, StyleSheet, SafeAreaView, Button, FlatList, ScrollView, Image, TouchableOpacity, StatusBar, NativeModules, Platform } from 'react-native'
import React from 'react'
import { Video, ResizeMode } from 'expo-av';
import Carousel from 'react-native-reanimated-carousel';
import { useFocusEffect } from '@react-navigation/native';
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
import NewsItem from './NewsItem';
import Fixtures from './Fixtures';
import Loader from './Loader';


// const Item = ({ title, url, time, source }) => (
//   <View style={styles.item}>

//     <Image
//       source={
//         {
//           uri: url
//         }
//       }
//       style={{ width: '100%', height: '61%', resizeMode: "cover" }}
//     ></Image>
//     <Text style={styles.title}>{title}</Text>
//     <View >
//       <View style={{ width: "100%", display: 'flex', flexDirection: "row", justifyContent: "space-between" }}>
//         <View style={{ display: 'flex', flexDirection: "row", paddingLeft: 12 }}>
//           <View>

//             <Image source={
//               // {
//               // uri: 
//               require("../statics/UEFA.png")
//               // }
//             }
//               style={{ width: 20, height: 20, resizeMode: "cover", marginRight: 20 }}></Image>
//           </View>
//           <View>

//             <Text style={{ fontSize: 18, color: "whitesmoke" }}>{source}</Text>
//           </View>
//         </View>
//         <Text style={{ fontSize: 16, color: "grey", paddingRight: 12 }}>{time}</Text>
//       </View>

//     </View>
//   </View>
// );

// const Fixtures = ({ stadium, time, team1name, team2name, team1img, team2img }) => (
//   <View style={{
//     height: 160,
//     backgroundColor: "#040d6c",
//     marginRight: 10,
//     padding: 10,
//     width: 280,
//     borderRadius: 10,
//     marginTop: 10
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


const UCL = ({ navigation }) => {
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
  const [muted, setMuted] = React.useState(true);
  const [articles, setArticles] = React.useState([]);

  useFocusEffect(() => {
    StatusBar.setBackgroundColor('#02084e', false)
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

  const [status, setStatus] = React.useState({});
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Man City wins the Champions League',
      url: "https://ichef.bbci.co.uk/news/1024/branded_sport/972F/production/_130930783_gettyimages-1492286624.jpg"
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Man City wins the Champions League',
      url: "https://ichef.bbci.co.uk/news/1024/branded_sport/972F/production/_130930783_gettyimages-1492286624.jpg"
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Man City wins the Champions League',
      url: "https://ichef.bbci.co.uk/news/1024/branded_sport/972F/production/_130930783_gettyimages-1492286624.jpg"
    },
  ];

  const fixturesData = [
    {
      id: 'bd7acbea-c1b1-46c2-aed',
      stadium: 'Stadium1',
      time: "2/09 19:00",
      team1name: "Manchester City",
      team1img: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png',
      team2name: 'Arsenal',
      team2img: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png'
    },
    {
      id: '3ac68afc-c605-48d3-a4f',
      stadium: 'Stadium1',
      time: "2/09 19:00",
      team1name: "Manchester City",
      team1img: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png',
      team2name: 'Arsenal',
      team2img: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png'
    },
    {
      id: '58694a0f-3da1-471f-bd9',
      stadium: 'Stadium1',
      time: "2/09 19:00",
      team1name: "Manchester City",
      team1img: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png',
      team2name: 'Arsenal',
      team2img: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png'
    },
  ];

  const getNews = async () => {
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)"
    }

    let response = await fetch("https://newsapi.org/v2/everything?q=Premier%20League&apiKey=2adedfc1ddc14abbbb549001696ee643&pageSize=20", {
      method: "GET",
      headers: headersList
    });

    let data = await response.json();
    setArticles(data.articles)

  }
  React.useEffect(() => {
    getNews()
  }, [])


  return (
    <>
      {/* <StatusBar backgroundColor="red" barStyle="light-content"></StatusBar> */}
      <SafeAreaView style={{ flex: 1 }}>


        <ScrollView style={styles.container}>
          {/* <InView onChange={(isInView) => checkVisible(isInView)}> */}
          <TouchableOpacity onPress={() => {
            setMuted(!muted)
          }}
            activeOpacity={.9}>
            <View style={styles.videoHolder} >
              <View style={styles.mainVideo}>
                <Video
                  ref={video}
                  style={styles.video}
                  source={
                    require("../statics/UCLINTRO.mp4")
                  }
                  useNativeControls={false}
                  resizeMode={ResizeMode.COVER}
                  isLooping={true}
                  onPlaybackStatusUpdate={status => setStatus(() => status)}
                  shouldPlay
                  isMuted={muted}
                />
              </View>



            </View>
          </TouchableOpacity>
          {/* </InView> */}


          <View style={{
            padding: 10
          }}>
            <Text style={styles.heading}>Fixtures</Text>
            <FlatList
              data={fixturesData}
              renderItem={({ item }) => <Fixtures stadium={item.stadium} time={item.time} team1name={item.team1name} team2name={item.team2name} team1img={item.team1img} team2img={item.team2img}

                backgroundColor="#040d6c" />}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>



          <View style={{
            padding: 10,
            flex: 1
          }}>
            <Text style={styles.heading}>Groups</Text>
            <Carousel
              loop={false}
              width={350}
              style={{
                width: "100%",
                borderRadius: 10,
                marginTop: 10
              }}
              height={450}
              autoPlay={false}
              data={[{
                url: require('../statics/Groups/GroupA.jpg')
              }, {
                url: require('../statics/Groups/GroupB.jpg')
              }, {
                url: require('../statics/Groups/GroupC.jpg')
              }, {
                url: require('../statics/Groups/GroupD.jpg')
              }, {
                url: require('../statics/Groups/GroupE.jpg')
              }, {
                url: require('../statics/Groups/GroupF.jpg')
              }, {
                url: require('../statics/Groups/GroupG.jpg')
              }, {
                url: require('../statics/Groups/GroupH.jpg')
              }]}
              renderItem={({ item: { url } }) => {
                return (
                  <View
                    style={{
                      height: "100%",
                      borderRadius: 10,
                      overflow: 'hidden',
                      marginRight: 5
                    }}
                  >
                    <Image source={url}
                      style={{ width: "100%", height: "100%" }} ></Image>
                  </View>
                );
              }}
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
                    backgroundColor="#040d6c" borderColor="#eb45fd"
                    newsUrl={item.url}
                    key={index + "UCL"}
                  >

                  </NewsItem>
                })
              }
            </View> : <View style={{
              width: "100%"
            }}>
              <Loader backgroundColor="#cc084f"></Loader>
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
    backgroundColor: "#02084e"
  },
  videoHolder: {
    widht: "100%",
    // borderColor: "red",
    height: 240,
    padding: 10,
    marginTop: 25
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
    fontFamily: "Lato_700Bold"
  }, item: {
    borderBottomWidth: 5,
    height: 300,
    margin: 10,
    width: 350,
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

export default UCL