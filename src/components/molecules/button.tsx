import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { COLORS } from '@/constants/colors';

interface ButtonProp {
    title: string;
    handlePress: () => void;
}

const Button = ({title, handlePress}: ButtonProp) => {
  return (
    <View style={{ width: '100%', paddingHorizontal: 25, justifyContent: 'center',  }}>
        <TouchableOpacity 
            style={styles.container}
            onPress={handlePress}>
            <Text style = {{color: 'white', fontWeight: '600', fontSize: 16}}>
                {title}
            </Text>
            <FontAwesome6 name="arrow-right-long" size={16} color="white" />
        </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: COLORS.green,
        paddingHorizontal: 20,
        paddingVertical: 15,
        gap: 10,
        borderRadius: 18,
        elevation: 5,
        shadowColor: COLORS.green,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 5,
    }
})