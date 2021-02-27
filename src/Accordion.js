import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRowExpanded: false,
      userData: props.userData,
    };
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
