import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { tabs } from "./tabConfig";
import { Icon } from "react-native-paper";


const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator
        screenOptions={{
            // Show/hide the header(title bar)
            headerShown:true,
        }}
        >
            {/* Loop through the tabs in tabConfigs */}
            {tabs.map( tab => (
                <Tab.Screen 
                key={tab.name}
                name={tab.name} 
                component={tab.Component} 
                options={{
                    title:tab.title,
                    tabBarLabel:tab.label??tab.title,
                    tabBarIcon:({color,size}) => (
                        <Icon source={tab.icon} size={size} color={color}/>
                    ),
                }}
                />
            ))}
            {/* <Tab.Screen name="Exercise1" component={Exercise1Screen} />
            <Tab.Screen name="Exercise2" component={Exercise2Screen} /> */}
        </Tab.Navigator>
    );
}