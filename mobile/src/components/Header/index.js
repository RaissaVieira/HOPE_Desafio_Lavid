import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles.js';

const Header = ( props ) => {
    return (
        <View style={styles.container} >
            <Text style={styles.text}> {props.text} </Text>
        </View>
    )
}

export default Header;