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

<AccordionList data={USER_LIST_MOCK_DATA} />
```

# Required Props
Prop | Type | default | Description
---- | ---- | ------- | -----------
data | Array | LIST_DATA | Array of objects

# Props for customization
Prop      | Type      | default | Description
--------- | ----------| ------- | ---------------
component | Component |         | Custom Component

# Demo Gif:

![accordion](https://user-images.githubusercontent.com/16000668/113183285-76619b00-9271-11eb-843f-a3338fac8e2c.gif)

