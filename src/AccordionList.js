import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import Accordion, { accordionStyle } from './Accordion';
import { USER_LIST_MOCK_DATA } from './Constants';

class AccordionList extends Component {

  static defaultProps = {
    data: USER_LIST_MOCK_DATA
  }

  render() {
    const { data } = this.props;
    return (
      <FlatList
        data={data}
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

export default AccordionList;
