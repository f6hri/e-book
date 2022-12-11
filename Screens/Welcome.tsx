import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeMessage from '../Pages/Welcome/WelcomeMessage';

const Stack = createNativeStackNavigator();

export default function Welcome(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Welcome Message" component={WelcomeMessage} options={{headerShown:false}}/>
        </Stack.Navigator>
    );
}