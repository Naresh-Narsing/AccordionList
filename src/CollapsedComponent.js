import React, { Component } from "react";
import {
    View,
    Text,
} from "react-native";
import { accordionStyle } from "./Accordion";
import { CUSTOM_MESSAGE } from "./Constants";

class CollapsedComponent extends Component {
    render() {
        return (
            <View style={accordionStyle.hiddenItem}>
                <Text>{CUSTOM_MESSAGE}</Text>
            </View>
        );
    }
}
export default CollapsedComponent;