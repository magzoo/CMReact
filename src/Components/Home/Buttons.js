import React from 'react';
import {  View,TouchableOpacity, Text,Button } from 'react-native';
import * as RootNavigation from '../../Navigation/RootNavigation'

import styles from './Styles'


const Buttons = () => {
    return (
            <View style={styles.buttonContainer}>
                <View style={styles.buttonViewLeft}>
                    <Button title="Adicionar Calendário" onPress={()=>{ RootNavigation.navigate("AddSchedule")}}/>
                </View>
                <View style={styles.buttonView}>
                    <Button title="Remover Calendário" onPress={()=>{ RootNavigation.navigate("RemoveSchedule")}}/>
                </View>
                <View style={styles.buttonViewRight}>
                    <Button title="Editar Calendário" onPress={()=>{ RootNavigation.navigate("EditSchedule")}}/>
                </View>
            </View>
    );
};

export default Buttons;