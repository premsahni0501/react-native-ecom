import React from 'react';
import { _view } from '../assets/styles/_view';
import { Layout } from 'react-native-ui-kitten';

export const Container = ({ children, style }) => (
  <Layout style={{ ..._view.container, ...style }}>{children}</Layout>
)