import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import Accordion, { accordionStyle } from './Accordion';
import { USER_LIST_MOCK_DATA } from './Constants';
import CollapsedComponent from './CollapsedComponent';

class AccordionList extends Component {

  static defaultProps = {
    data: USER_LIST_MOCK_DATA,
    component: <CollapsedComponent />
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
      <Accordion itemData={item} component={this.props.component} />
    );
  };
}

export default AccordionList;
