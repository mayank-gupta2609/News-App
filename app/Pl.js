import { View, Text, StyleSheet, SafeAreaView, Button, FlatList, ScrollView, StatusBar, Image } from 'react-native'
import React from 'react'
import { Video, ResizeMode } from 'expo-av';
// import { StatusBar } from 'expo-status-bar';
import { useFocusEffect } from '@react-navigation/native';
import NewsItem from './NewsItem';
import Loader from './Loader';
import Fixtures from './Fixtures';
import WebView from 'react-native-webview';



// const Item = ({ title }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );




const Pl = ({ navigation }) => {
  const video = React.useRef(null);
  useFocusEffect(() => {
    StatusBar.setBackgroundColor('#cc084f', false)
    StatusBar.setBarStyle("dark-content")
  })
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      video.current?.stopAsync()
    });

    return unsubscribe;
  }, [navigation]);

  const [status, setStatus] = React.useState({});

  const [articles, setArticles] = React.useState([]);

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
  ];

  const getNews = async () => {
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)"
    }

    let response = await fetch("https://newsapi.org/v2/everything?q=Premier%20League%20Soccer&apiKey=2adedfc1ddc14abbbb549001696ee643&pageSize=20", {
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
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.videoHolder}>
          <View style={styles.mainVideo}>
            <Video
              ref={video}
              style={styles.video}
              source={
                require("../statics/PLINTRO.mp4")
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

              backgroundColor="#cc084f" />}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <Text style={{
          fontSize: 30,
          color: "#300034",
          fontFamily: "Lato_700Bold",
          padding: 10
        }}>Standings</Text>

        <View style={{
          width: "95%",
          height: 920,
          position: "relative",
          overflow: "hidden",
          borderRadius: 20,
          marginLeft: "auto",
          marginRight: "auto",

        }}>


          <View style={{
            height: "180%",
            position: "absolute",
            top: -174,
            width: "100%",

            transform: "scale(1.08)"
          }}>
            <WebView
              source={{ uri: "https://www.google.com/search?q=premier+league+standings+23/24&source=lmns&bih=718&biw=1494&hl=en&sa=X&ved=2ahUKEwi78dSfhqiBAxW6z6ACHbe8A1kQ0pQJKAB6BAgBEAI#sie=lg;/g/11sk7gnh6c;2;/m/02_tc;st;fp;1;;;" }}
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
              articles.map((item, index) => {
                return <NewsItem title={item.title} url={item.urlToImage} time={item.publisedAt} source={
                  // name:
                  item.author
                  // img: "../statics/UEFA.png"
                }
                  backgroundColor="#cc084f"
                  borderColor="#9e3af4"
                  newsUrl={item.url}
                  key={index + "PL"}
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
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#ff005c",
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
    color: "#300034",
    fontFamily: "Lato_700Bold"
  }, item: {
    borderBottomWidth: 5,
    height: 300,
    margin: 10,
    width: "95%",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#cc084f",
    borderRadius: 5,
    borderColor: "#9e3af4"
  }, title: {
    color: "#300034",
    fontSize: 22,
    padding: 10
  }, newsItemTitle: {
    color: "white",
    fontSize: 20,
    padding: 10
  }
})

export default Pl