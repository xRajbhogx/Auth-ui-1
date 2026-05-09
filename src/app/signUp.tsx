import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputField from '@/components/inputField';
import Button from '@/components/button';
import Header from '@/components/header';
import { COLORS } from '@/constants/colors';
import { router } from 'expo-router';

const SignUpScreen = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')

  return (
    <SafeAreaView style = {styles.safeContainer}>
        <KeyboardAvoidingView 
            style = {styles.container}
            behavior= {Platform.OS === 'ios'? 'padding': 'height'}
            keyboardVerticalOffset={Platform.OS==='ios'? 100: 0}>
            <ScrollView
                contentContainerStyle = {{flexGrow: 1, alignItems: 'center'}}
                >
                <View style ={{
                    paddingTop: 40,
                    marginBottom: 50
                }}>
                    <Header 
                        title = 'Sign Up For Free'
                        subtitle = "Sign up in 1 minute for free!" />
                </View>

                <View style={{ gap: 20, width: '100%' }}>
                    <InputField 
                        title = 'Email Address'
                        placeHolder='elementary221b@gmail.com'
                        icon = 'mail'
                        onChangeText={setEmail}/>
                    <InputField 
                        title = 'Password'
                        placeHolder='*****************'
                        icon = 'lock'
                        onChangeText={()=>{
                            setPassword;
                           }}/>
                    <InputField 
                        title = 'Password Confirmation'
                        placeHolder='*****************'
                        icon = 'lock'
                        onChangeText={setConfirmPassword}/>
                </View>
                <View style={{width: '100%', marginTop: 25, }}>
                    <Button title= 'Sign Up'/>
                </View>

                <View style = {{flexDirection: 'row', padding: 25}}>
                    <Text>
                        Already have an account? {' '}
                    </Text>
                    <TouchableOpacity onPress={()=>router.push('/signIn')}>
                        <Text style = {{color: COLORS.green, fontWeight: '400'}}>
                            Sign In.
                        </Text>
                    </TouchableOpacity>
                </View> 
            </ScrollView>
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
    safeContainer: {
        flex:1, 
        backgroundColor: COLORS.bg
    },
    container: {
        flex:1,
        width: '100%',
        // backgroundColor: 'red',
        // justifyContent: 'center',
    }
})