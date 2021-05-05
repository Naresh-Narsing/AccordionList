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
Prop      | Type      | default | Description
--------- | ----------| ------- | ---------------
component | Component |         | Custom Component

# Demo Gif:

https://user-images.githubusercontent.com/16000668/117206142-18941600-ae10-11eb-9aec-e1ced68b54df.mov



