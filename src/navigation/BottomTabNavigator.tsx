import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { tabs } from "./tabConfig";
import { Icon } from "react-native-paper";
import theme from "../theme/theme";


const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator
        screenOptions={{
            // Show/hide the header(title bar)
            headerShown:true,

            // Styling
            headerStyle: {
                backgroundColor :theme.colors.primary,
            },

            // tabBarStyle: styles the outer bar container
            tabBarStyle: {
                backgroundColor: "#fff",
                height:64, //Safe Height (esp. for web)
                borderTopWidth : 1,
                borderTopColor : theme.colors.outlineVariant,

            },

            // tabBarItemStyle :styles each tab item
            tabBarItemStyle:{
                
            },

            // tabBarLabelStyle : styles label text
            tabBarLabelStyle:{
                ...theme.fonts.labelSmall, // Use paper typography styles
                //Can do Customize style
                fontSize:12,
                lineHeight:14, // Try to prevent text clipping (esp. for web)
                marginTop:2,
                marginBottom:0,
            },

            // tabBarIconStyle: styles the icon wapper
            tabBarIconStyle:{},

            headerTintColor: theme.colors.onPrimary,
            tabBarActiveTintColor: theme.colors.primary,
            tabBarInactiveTintColor: theme.colors.outline,

        }}
        >
            {/* Loop through the tabs in tabConfigs */}
            {tabs.map( tab => (
                <Tab.Screen 
                key={tab.name}
                name={tab.name} 
                component={tab.Component} 
                options={{
                    ...tab.options, // Merge the custom options
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