import React from 'react';
import { _view } from '../assets/styles/_view';
import { Layout } from 'react-native-ui-kitten';

export const Row = ({ size, children, style }) => (
  <Layout style={{ ..._view.row, ...style }}>{children}</Layout>
)