import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { COLORS } from '@/constants/colors';

interface SocialButtonProp {
    icon: 'facebook-f' | 'google' | 'instagram'
}

const SocialButton = ({icon}: SocialButtonProp) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity 
            style = {styles.container}
            onPress={()=>alert(icon==='facebook-f'? 'facebook pressed!': `${icon} pressed!`)}>
            <FontAwesome6 name={icon} size={18} color="black" />
        </TouchableOpacity>
    </View>
  )
}

export default SocialButton

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: COLORS.bg,
        paddingVertical: 16,
        paddingHorizontal: 20,
        gap: 10,
        borderWidth: 1,
        borderRadius: 15

    }
})