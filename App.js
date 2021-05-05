/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import AccordionList from './src/AccordionList';
import CollapsedComponent from './src/CollapsedComponent';
import { USER_LIST_MOCK_DATA } from './src/Constants';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <AccordionList data={USER_LIST_MOCK_DATA} component={<CollapsedComponent />} />
      </SafeAreaView>
    </>
  );
};

export default App;
