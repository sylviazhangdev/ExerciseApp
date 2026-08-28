import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";

export default function RootNavigator() {
    return(
        <Stack.Navigator>
           <Stack.Screen name="Root"
                        component={BottomTabNavigator}
                        options={
                            {
                                headerShown:false,
                            }
                        }
           />
                    </Stack.Navigator>

    );
}

const Stack = createNativeStackNavigator();