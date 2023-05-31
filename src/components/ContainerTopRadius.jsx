import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContainerTopRadius = ({children,style}) => {
  return (
    <View
    style={{
      paddingHorizontal: 20,
      paddingTop: 20,
      padding: 10,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      backgroundColor: 'white',
      ...style
    }}>
    {children}
  </View>
  )
}

export default ContainerTopRadius

const styles = StyleSheet.create({})