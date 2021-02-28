import React, { Component } from 'react';
import { Platform, TouchableOpacity, Text, StyleSheet, UIManager, LayoutAnimation } from 'react-native';
import { PLATFORM } from './Constants';

export default class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRowExpanded: false,
      userData: props.userData,
    };
    if (Platform.OS === PLATFORM.ANDROID) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    const { name, username, email, city } = this.state.userData;
    const { isRowExpanded } = this.state;
    return (
      <>
        <TouchableOpacity style={accordionStyle.rowContainer}
          onPress={() => this.onExpandUserData()}>
          <Text>{name}</Text>
          {isRowExpanded ? <Text>Collapse</Text> : <Text>Expand</Text>}
        </TouchableOpacity>
        {isRowExpanded && <>
          <Text style={accordionStyle.hiddenItem}>UserName : {username}</Text>
          <Text style={accordionStyle.hiddenItem}>Email : {email}</Text>
          <Text style={accordionStyle.hiddenItem}>City : {city}</Text>
        </>}
      </>
    );
  }

  onExpandUserData() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({
      isRowExpanded: !this.state.isRowExpanded
    });
  }
}

export const accordionStyle = StyleSheet.create({
  itemSeperator: {
    height: 1,
    backgroundColor: 'grey',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 54,
    padding: 8,
    alignItems: 'center'
  },
  hiddenItem: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 4,
  }
});
