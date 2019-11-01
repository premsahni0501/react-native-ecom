import React from 'react';
import { _view } from '../assets/styles/_view';
import { Layout } from 'react-native-ui-kitten';

export const Col = ({ size, children, style }) => (
  <Layout style={{
    ..._view.col,
    flexBasis: size ? `${(size / 12) * 100}%` : '100%',
    maxWidth: size ? `${(size / 12) * 100}%` : '100%',
    ...style
  }}>{children}</Layout>
)