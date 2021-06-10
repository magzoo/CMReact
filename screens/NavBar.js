import { types } from '@babel/core'
import React, {userState, useState} from 'react'
import {Text, View, FlatList, Image, SafeAreaView, TouchableOpacity} from 'react-native'

import styles from './NavBarStyle'
import Index from './Index'


const tabs = 
        [{type: 'Calendário'},
        {type: 'Eventos'},
        {type: 'Utilizadores'},
        {type: 'Definições'}]

const NavBar = () => {
    const [type, setType] = useState('Calendário');
    const setTypeFilter = type => {
        setType(type)
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.listTab}>
                {
                    tabs.map(e => (
                        <TouchableOpacity 
                        style={[styles.btnTab, type === e.type && styles.btnTabActive]}
                        onPress= {() => setTypeFilter(e.type)}>
                            <Text style={styles.btnText}>
                                {e.type}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
            <Index/>
        </SafeAreaView>
    )
}

export default NavBar;