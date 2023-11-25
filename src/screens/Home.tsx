import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {URL} from '../utils/config';
import Assets from '../utils/Asset';
import NavService from '../navigations/NavService';
import {EStacks} from '../navigations/appRoutes';

const Home = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchDate = async () => {
    setLoader(true);
    axios
      .get(`${URL}`)
      .then(res => {
        console.log('res', res);
        setData(res?.data?.results);
      })
      .catch(err => {
        console.log('err', err);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  useEffect(() => {
    fetchDate();
  }, []);

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar barStyle="light-content" backgroundColor={'black'} />

      <View style={styles.titleView}>
        <Text style={styles.title}>Star Wars</Text>
      </View>

      <View style={styles.topTab}></View>
      {loader ? (
        // Display loader while data is being fetched
        <ActivityIndicator size="large" color="white" />
      ) : (
        <View style={styles.cardView}>
          {data.map((item: any, index: number) => (
            <TouchableOpacity
              onPress={() => {
                NavService.navigate(EStacks.Details, {selectedIndex: index});
              }}
              style={styles.card}>
              <Image style={styles.image} source={Assets.images.img} />
              <Text
                style={{color: 'white', marginTop: 10, textAlign: 'center'}}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  topTab: {},
  image: {
    height: 150,
    width: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  card: {
    width: '47%',
    marginTop: 5,
    height: 200,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
  },
  cardView: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  titleView: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  main: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 16,
  },
});
