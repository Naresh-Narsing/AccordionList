import React, { Component } from 'react';
import { Platform, TouchableOpacity, Text, Image, StyleSheet, UIManager, LayoutAnimation } from 'react-native';
import { DEFAULT_MESSAGE, PLATFORM } from './Constants';

export default class Accordion extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isRowExpanded: false,
    };
    if (Platform.OS === PLATFORM.ANDROID) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    const { title } = this.props.itemData;
    const { isRowExpanded } = this.state;
    return (
      <>
        <TouchableOpacity style={accordionStyle.rowContainer}
          activeOpacity={0.5}
          onPress={() => this.onExpandUserData()}>
          <Text>{title}</Text>
          {isRowExpanded ? <ImageComponent src={require('./images/ic_up.png')} /> :
            <ImageComponent src={require('./images/ic_down.png')} />}
        </TouchableOpacity>
        {isRowExpanded && <>
          {this.props.component ||
            <Text style={accordionStyle.hiddenItem}>{DEFAULT_MESSAGE}</Text>}
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

export const ImageComponent = (props) => {
  return (<Image source={props.src} style={accordionStyle.arrowIcons} resizeMode='contain' />);
}

export const accordionStyle = StyleSheet.create({
  itemSeperator: {
    height: 1,
    backgroundColor: 'grey',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 52,
    padding: 8,
    alignItems: 'center'
  },
  hiddenItem: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 4,
  },
  arrowIcons: {
    width: 14,
    height: 14,
    marginRight: 12
  }
});
