import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import Accordion, { accordionStyle } from './Accordion';
import { LIST_DATA } from './ListMockData';

export default class Main extends Component {

  render() {
    return (
      <FlatList
        data={LIST_DATA}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() =>
          <View style={accordionStyle.itemSeperator}></View>
        }
      />
    );
  }

  renderItem = ({ item, index }) => {
    return (
      <Accordion userData={item} />
    );
  };
}
