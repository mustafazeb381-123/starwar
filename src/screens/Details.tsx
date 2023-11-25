import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {URL} from '../utils/config';
import NavService from '../navigations/NavService';
import {EStacks} from '../navigations/appRoutes';
import Assets from '../utils/Asset';

export interface StarWarsData {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[]; // Assuming an array of characters
  planets: string[]; // Assuming an array of planets
  // Add other properties as needed
}

const Details = (props: any) => {
  console.log('props', props);

  const [data, setData] = useState<StarWarsData[]>([]);
  const [loader, setLoader] = useState(false);
  console.log('data', data);

  const selectedIndex = props?.route.params?.selectedIndex;

  console.log('selectedIndex', selectedIndex);
  // const indexes = selectedIndex?.selctedIndex;
  // console.log("indexes",indexes)
  const fetchDate = async () => {
    setLoader(true);
    axios
      .get(`${URL}`)
      .then(res => {
        console.log('res', res);
        setData(res?.data?.results[selectedIndex]);
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
    <View style={styles.main}>
      <View
        style={{
          width: '100%',
          height: 60,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => NavService.goBack()}>
          <Text
            style={{
              color: 'white',
              fontSize: 17,
              fontWeight: '600',
            }}>
            Back
          </Text>
        </TouchableOpacity>
      </View>
      {loader ? (
        <ActivityIndicator size={'large'} color={'white'} />
      ) : (
        <View>
          <View style={styles.cardView}>
            <TouchableOpacity onPress={() => {}} style={styles.card}>
              <Image style={styles.image} source={Assets.images.img} />
            </TouchableOpacity>
          </View>

          <View style={{width: '100%'}}>
            <Text style={{color: 'white', marginTop: 10}}>
              {`${data?.title}`}
            </Text>

            <Text style={{color: 'white', marginTop: 10}}>
              {` Director:  ${data.director}`}
            </Text>
            <Text style={{color: 'white', marginTop: 10}}>
              {` Detail:  ${data.opening_crawl}`}
            </Text>
            <Text style={{color: 'white', marginTop: 10}}>
              {` Producer:  ${data.producer}`}
            </Text>
            <Text style={{color: 'white', marginTop: 10}}>
              {` Release Date:  ${data.release_date}`}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: '100%',
    borderRadius: 20,
  },
  card: {
    width: '100%',
    marginTop: 5,
    height: 200,
    borderRadius: 20,
    borderWidth: 1,
    // borderColor: 'white',
  },
  cardView: {
    width: '100%',
    gap: 10,
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
    paddingHorizontal: 20,
  },
});
