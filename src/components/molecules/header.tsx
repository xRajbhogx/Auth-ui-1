import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '@/constants/colors'

interface HeaderProps {
    title: string,
    subtitle: string
}


const Header = ({title, subtitle}: HeaderProps) => {
  return (
    <View style = {styles.container}>
        <Image
            source = {require('@/assets/images/logo-nobg.png')}
            style = {styles.logo}
        /> 
        <Text style = {styles.headerText}> {title} </Text>
        <Text style = {styles.subtitle}> {subtitle} </Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom:20,
    },
    headerText: {
        color: COLORS.dark_grey,
        fontSize: 32,
        fontWeight: '900',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: COLORS.light_grey
    }
})