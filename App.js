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
import { USER_LIST_MOCK_DATA } from './src/Constants';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <AccordionList data={USER_LIST_MOCK_DATA} />
      </SafeAreaView>
    </>
  );
};

export default App;
