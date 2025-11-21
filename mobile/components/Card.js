import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function Card({children, style}){
  return (
    <View style={[styles.card, style]}>{children}</View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding:12,
    borderRadius:10,
    backgroundColor:'#E7E1C6',
    shadowColor:'#000',
    shadowOpacity:0.06,
    shadowRadius:6,
    elevation:2
  }
})
