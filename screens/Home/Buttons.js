import React from 'react';
import {  View,TouchableOpacity, Text } from 'react-native';

import styles from './Styles'

const Buttons = () => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonTitle}>Adicionar Evento</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonTitle}>Remover Evento</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonTitle}>Editar Evento</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Buttons;