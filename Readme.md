# React Native Accordion List

# Install
npm i react-native-accordionlist

# Import
```import AccordionList from './src/AccordionList';```

# Usage
```
const LIST_DATA = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    city: 'Gwenborough',
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    city: 'Wisokyburgh',
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    city: 'McKenziehaven',
    phone: '1-463-123-4447',
    website: 'ramiro.info',
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    city: 'South Elvis',
    phone: '493-170-9623 x156',
    website: 'kale.biz',
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    city: 'Roscoeview',
    phone: '(254)954-1289',
    website: 'demarco.info',
  }
]

<AccordionList data={LIST_DATA} />
```

# Required Props
Prop | Type | default | Description
---- | ---- | ------- | -----------
data | Array | LIST_DATA | Array of objects