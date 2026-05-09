import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '@/constants/colors';
import Feather from '@expo/vector-icons/Feather';

interface MethodCardProps {
    title: string;
    subtitle: string;
    icon: any;
    isSelected: boolean;
    onPress: () => void;
}

const MethodCard = ({ title, subtitle, icon, isSelected, onPress }: MethodCardProps) => {
    return (
        <TouchableOpacity 
            style={[
                styles.cardContainer, 
                isSelected && styles.cardSelected
            ]}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <View style={[
                styles.iconContainer, 
                isSelected ? { backgroundColor: '#eef7df' } : { backgroundColor: '#f0f0f0' } 
            ]}>
                <Feather name={icon} size={20} color={isSelected ? COLORS.green : COLORS.dark_grey} />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={styles.cardSubtitle}>{subtitle}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default MethodCard

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderRadius: 25,
        backgroundColor: 'white',
        elevation: 2,
        shadowColor: COLORS.dark_grey,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        gap: 15,
        borderWidth: 2,
        borderColor: 'white',
    },
    cardSelected: {
        borderColor: COLORS.green,
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: COLORS.dark_grey,
        marginBottom: 4,
    },
    cardSubtitle: {
        fontSize: 14,
        color: COLORS.light_grey,
    },
})