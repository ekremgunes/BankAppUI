import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Transactions from './sectionContents/Transactions'
import Cashbacks from './sectionContents/Cashbacks'

const SpendingAndRefundsSection = () => {
  return (
    <View className="my-3 mx-5 flex-row items-center justify-between">
      
      <Transactions></Transactions>
      
      <View className="px-2"></View>
      
      <Cashbacks></Cashbacks>
    
    </View>
  )
}

export default SpendingAndRefundsSection

const styles = StyleSheet.create({})