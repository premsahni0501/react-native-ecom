import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Badge = ({ children, style }) => (
  <Text category="h5" style={{ ...styles.badge, ...style }}>{children}</Text>
);
export default Badge;

const styles = StyleSheet.create({
  badge: {
    flex: 1,
    color: '#444',
    minWidth: 18,
    height: 18,
    backgroundColor: '#fff',
    borderRadius: 9,
    position: 'absolute',
    textShadowColor: '#444',
    top: 0,
    left: '60%',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 18,
    fontWeight: '700',
    paddingHorizontal: 5,
  }
})