import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/login';
import ForgotPassword from './pages/ForgotPassword'; 
import Welcome from './pages/Welcome';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown:false}} >
                <Screen name="Login" component={Login} /> 
                <Screen name="ForgotPassword" component={ForgotPassword} />
                <Screen name="Welcome" component={Welcome} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;