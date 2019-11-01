import React from 'react';
import { StyleSheet, Dimensions, Image } from 'react-native';
import Swiper from 'react-native-swiper'
import { borderRadius } from '../../util/constants';
import { Layout, Text } from 'react-native-ui-kitten';

const styles = StyleSheet.create({
  wrapper: {
    height: 200,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    maxWidth: '100%',
    width: Dimensions.get('screen').width - 40,
    padding: 15,
    borderRadius: borderRadius,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  text: {
    color: '#222',
    fontWeight: 'bold',
    flex: 1,
    lineHeight: 30,
    overflow: 'hidden',
  },
  slideImage: {
    resizeMode: 'contain',
    flex: 1,
  }
})

const ProdSwiper = () => (
  <Swiper
    style={styles.wrapper}
  >
    <Layout style={{ ...styles.slide }}>
      <Image source={require('../../assets/img/placeholder.png')} style={{ ...styles.slideImage }} />
      <Text style={styles.text}>Hello Swiper</Text>
    </Layout>
    <Layout style={{ ...styles.slide, ...styles.slide2 }}>
      <Image source={require('../../assets/img/placeholder.png')} style={{ ...styles.slideImage }} />
      <Text style={styles.text}>Beautiful</Text>
    </Layout>
    <Layout style={{ ...styles.slide, ...styles.slide3 }}>
      <Image source={require('../../assets/img/placeholder.png')} style={{ ...styles.slideImage }} />
      <Text style={styles.text}>And simple</Text>
    </Layout>
  </Swiper>
);

export default ProdSwiper;