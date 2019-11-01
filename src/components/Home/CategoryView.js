import React from 'react';
import { Text, Button } from 'react-native-ui-kitten';
import { ScrollView } from 'react-native-gesture-handler';
import { Row } from '../Row';
import { Col } from '../Col';

const CategoryView = ({ categoryTitle, children }) => {
  console.log(categoryTitle);
  return (
    <>
      <Row>
        <Col size={12} style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text category="h5" style={{ fontWeight: 'bold' }}>{categoryTitle}</Text>
          <Button appearance="filled" status="info" size="small">View All</Button>
        </Col>
      </Row>
      <Row>
        {
          children ?
            <ScrollView horizontal={true}>
              {children}
            </ScrollView> :
            <Text category="h5"></Text>
        }
      </Row>
    </>
  );
}

export default CategoryView;