# React Native Accordion List

# Description
React native Accordion list using flatlist with animation.

# Install
npm i react-native-accordionlist

# Import
```import { AccordionList } from "react-native-accordionlist";```

# Usage
```
const USER_LIST_MOCK_DATA = [
    {
        id: 1,
        title: 'Leanne Graham'
    },
    {
        id: 2,
        title: 'Ervin Howell'
    },
    {
        id: 3,
        title: 'Clementine Bauch'
    },
    {
        id: 4,
        title: 'Patricia Lebsack'
    },
    {
        id: 5,
        title: 'Chelsey Dietrich'
    }
]

<AccordionList data={USER_LIST_MOCK_DATA} component={<CollapsedComponent />} />
```

# Required Props
Prop | Type | default | Description
---- | ---- | ------- | -----------
data | Array | LIST_DATA | Array of objects

# Props for customization
Prop      | Type      | default             | Description
--------- | ----------| ------------------- | ---------------
component | Component |  CollapsedComponent | Custom Component

# Demo Gif:

![demo](https://user-images.githubusercontent.com/16000668/117207769-f69b9300-ae11-11eb-84a4-425b17218f73.gif)




