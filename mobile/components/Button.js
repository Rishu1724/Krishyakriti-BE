import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const PALETTE = {
  primary: '#009179',
  accent: '#006A58',
  stonetone: '#E7E1C6',
  textprimary: '#3C3B35'
}

export default function AppButton({title, variant='primary', style, ...props}){
  const backgroundColor = variant === 'primary' ? PALETTE.primary : PALETTE.stonetone
  const color = variant === 'primary' ? '#fff' : PALETTE.textprimary
  return (
    <TouchableOpacity accessibilityRole="button" {...props} style={[styles.btn, {backgroundColor}, style]}>
      <Text style={[styles.text, {color}]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical:10,
    paddingHorizontal:14,
    borderRadius:8,
    alignItems:'center'
  },
  text: { fontWeight:'600' }
})
