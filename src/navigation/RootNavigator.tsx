import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import NotFoundScreen from "../screens/NotFoundScreen";

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

             <Stack.Screen name="NotFound"
                        component={NotFoundScreen}
                        options={
                            {
                                title:"not found 404",
                            }
                        }
           />
        </Stack.Navigator>

                    // NotFound
                    

    );
}

const Stack = createNativeStackNavigator();