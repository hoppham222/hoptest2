import React from 'react'
import {
  Image,
  View,
  Text,
} from 'react-native'
import Shopping from '../assets/shopping-cart-2.png'

export default function CategoryListItem(props){
  return <View>
    <Text>CategoryListItem1</Text>
    <Image source={Shopping} />
  </View>
}