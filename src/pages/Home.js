import React from 'react';
import { StyleSheet, Image, SectionList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Font5 from 'react-native-vector-icons/FontAwesome5';
import { Text, Button, Layout } from 'react-native-ui-kitten';
import { Container } from '../components/Container';
import { Row } from '../components/Row';
import { Col } from '../components/Col';
import { _text } from '../assets/styles/_text';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Badge from '../components/Badge';
import { borderRadius, navbarBackgroundColor, backgroundColor } from '../util/constants';
import ProdSwiper from '../components/Home/ProdSwiper';
import CategoryView from '../components/Home/CategoryView';
import ProductCard from '../components/Home/ProductCard';

const styles = StyleSheet.create({
  navbar: {
    marginLeft: 0,
    marginRight: 0,
    height: 64,
    backgroundColor: navbarBackgroundColor,
    elevation: 0,
  },
  headerRight: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
  },
  iconButton: {
    borderWidth: 2,
    borderColor: '#ddd',
    width: 52,
    borderRadius: borderRadius,
    display: 'flex',
    overflow: 'hidden',
    height: 52,
  },
  iconButtonIcon: {
    width: 28,
    height: 28
  },
  cartButton: {
    width: 'auto',
    backgroundColor: '#444',
    borderWidth: 0,
    paddingHorizontal: 10,
    flexDirection: 'row',
    height: 52,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartButtonText: {
    color: "#ddd",
    fontSize: 20,
    display: 'flex',
    lineHeight: 52,
  },
  cartButtonIconWrapper: {
    borderColor: 'transparent',
    position: 'relative',
    width: 44,
    maxWidth: 44,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    backgroundColor: 'transparent'
  },
  cartButtonIcon: {
    textAlign: 'right',
    display: 'flex',
  },
  cartButtonBadge: {
    color: "white",
    backgroundColor: "#222",
  },
});

const sectionData = [
  {
    title: <Text category="h4" style={{ ..._text.heading, lineHeight: 0, height: 0 }}></Text>,
    data: [(
      <Container style={{ backgroundColor }}>
        <Row>
          <Col size={12}>
            <Text category="h4" style={{ ..._text.heading }}>Treats Subscription</Text>
          </Col>
        </Row>
      </Container>
    )],
  },
  {
    title: (
      <Container style={{ backgroundColor }}>
        <Row>
          <Col size={6} style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>
            <Button appearance="outline" status="basic" style={{ marginRight: 20, ...styles.iconButton }}
              icon={(style) => (
                <Icon name="search" size={28} color="#444" style={{ ...style, ...styles.iconButtonIcon }} />
              )} />
            <Button appearance="outline" status="basic" style={{ ...styles.iconButton }}
              icon={(style) => (
                <Font5 name="sliders-h" size={28} color="#444" style={{ ...style, ...styles.iconButtonIcon }} />
              )} />
          </Col>
          <Col size={6}>
            <TouchableOpacity activeOpacity={0.8} status="basic" style={{
              ...styles.iconButton,
              ...styles.cartButton,
            }}>
              <Text style={{
                ..._text.heading,
                ...styles.cartButtonText,
              }}>Cart</Text>
              <Layout style={styles.cartButtonIconWrapper}>
                <Icon name="shopping-bag" size={28} color="#ddd" style={{
                  ...styles.iconButtonIcon,
                  ...styles.cartButtonIcon,
                }} />
                <Badge style={styles.cartButtonBadge}>100</Badge>
              </Layout>
            </TouchableOpacity>
          </Col>
        </Row>
      </Container>
    ),
    data: []
  },
  {
    title: <Text category="h4" style={{ ..._text.heading, lineHeight: 0, height: 0 }}></Text>,
    data: [(
      <Container>
        <Row>
          <Col size={12}>
            <ProdSwiper />
          </Col>
        </Row>
      </Container>
    )]
  },
  {
    title: <Text category="h4" style={{ ..._text.heading, lineHeight: 0, height: 0 }}></Text>,
    data: [(
      <Container>
        <Row>
          <Col size={12}>
            <CategoryView categoryTitle="Products" viewAllComponent="">
              <ProductCard
                source={require('../assets/img/placeholder.png')}
                title="Product"
                price={22} />
              <ProductCard
                source={require('../assets/img/placeholder.png')}
                title="Product"
                price={22} />
              <ProductCard
                source={require('../assets/img/placeholder.png')}
                title="Product"
                price={22} />
              <ProductCard
                source={require('../assets/img/placeholder.png')}
                title="Product"
                price={22} />
            </CategoryView>
          </Col>
        </Row>
      </Container >
    )]
  },
  {
    title: <Text category="h4" style={{ ..._text.heading, lineHeight: 0, height: 0 }}></Text>,
    data: [(
      <Container>
        <Row>
          <Col size={12}>
            <CategoryView categoryTitle="Products">
              <ProductCard
                source={require('../assets/img/placeholder.png')}
                title="Product"
                price={22} />
              <ProductCard
                source={require('../assets/img/placeholder.png')}
                title="Product"
                price={22} />
              <ProductCard
                source={require('../assets/img/placeholder.png')}
                title="Product"
                price={22} />
              <ProductCard
                source={require('../assets/img/placeholder.png')}
                title="Product"
                price={22} />
            </CategoryView>
          </Col>
        </Row>
      </Container>
    )]
  }
]

class Home extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: { ...styles.navbar },
    title: '',
    headerLeft: () => (
      <Button appearance="ghost" style={{ ...styles.headerRight, marginLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')}
        icon={(style) => <Icon name="grid" size={28} style={{ ...style, width: 28, height: 28, }} />}>
      </Button>
    ),
    headerRight: () => (
      <Button appearance="ghost" style={{ ...styles.headerRight, marginRight: 20 }} icon={() => (
        <Image source={require('../assets/img/placeholder.png')} resizeMode="cover"
          style={{ width: 32, height: 32, borderRadius: 5, overflow: 'hidden' }} />
      )}></Button>
    )
  })
  render() {
    return (
      <>
        <SectionList
          style={{ backgroundColor }}
          sections={sectionData}
          keyExtractor={(item, index) => item + index}
          stickySectionHeadersEnabled={true}
          renderItem={({ item }) => item}
          renderSectionHeader={({ section: { title } }) => title} />
      </>
    )
  }
}
export default Home;
