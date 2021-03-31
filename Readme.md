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
        title: 'Leanne Graham',
        collapsedData: {
            email: 'Sincere@april.biz',
            city: 'Gwenborough',
            website: 'hildegard.org'
        }
    },
    {
        id: 2,
        title: 'Ervin Howell',
        collapsedData: {
            email: 'Shanna@melissa.tv',
            city: 'Wisokyburgh',
            website: 'anastasia.net'
        }
    },
    {
        id: 3,
        title: 'Clementine Bauch',
        collapsedData: {
            email: 'Nathan@yesenia.net',
            city: 'McKenziehaven',
            website: 'ramiro.info'
        }
    },
    {
        id: 4,
        title: 'Patricia Lebsack',
        collapsedData: {
            email: 'Julianne.OConner@kory.org',
            city: 'South Elvis',
            website: 'kale.biz'
        }
    },
    {
        id: 5,
        title: 'Chelsey Dietrich',
        collapsedData: {
            email: 'Lucio_Hettinger@annie.ca',
            city: 'Roscoeview',
            website: 'demarco.info'
        }
    }
]

<AccordionList data={USER_LIST_MOCK_DATA} />
```

# Required Props
Prop | Type | default | Description
---- | ---- | ------- | -----------
data | Array | LIST_DATA | Array of objects

# Demo Gif:

![accordion](https://user-images.githubusercontent.com/16000668/113183285-76619b00-9271-11eb-843f-a3338fac8e2c.gif)

