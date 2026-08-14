import{createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Exercise1Screen from "../screens/Excercise1Screen";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator(){
return (
    <Tab.Navigator>
        <Tab.Screen name = "Exercise1" component={Exercise1Screen} />
    </Tab.Navigator>   
);
}