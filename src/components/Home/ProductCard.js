import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Layout, Text } from 'react-native-ui-kitten';
import { borderRadius } from '../../util/constants';

const styles = StyleSheet.create({
  productCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 200,
    backgroundColor: '#fff',
    borderRadius: borderRadius,
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  productImage: {
    flex: 1,
    resizeMode: 'contain',
    height: 100,
    marginBottom: 10,
  },
  productTitle: {
    flex: 1,
    lineHeight: 28,
  },
  productPrice: {
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 36,
  }
})
const ProductCard = ({ source, title, price, style }) => (
  <Layout style={{ ...styles.productCard, ...style }}>
    <Image source={source} style={styles.productImage} />
    <Text style={styles.productTitle}>{title}</Text>
    <Text style={styles.productPrice}>${price}</Text>
  </Layout>
);

export default ProductCard;