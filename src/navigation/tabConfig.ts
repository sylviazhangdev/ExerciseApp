
// Bottom tabs for  navigation
// name: internal route name
// title: display name
// icon : icon name
// component: screen/component

import { Component } from "react";
import Exercise1Screen from "../screens/Exercise1Screen";
import Exercise2Screen from "../screens/Exercise2Screen";
import ExerciseNavigator from "./ExerciseNavigator";
import HomeScreen from "../screens/HomeScreen";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

// /**   
//  * Configuration for a bottom navigation tab.
//  * 
//  * @property name - Internal route name used for navigation
//  * @property title - Display title for the screen
//  * @property label -Shortly display label shown in the tab bar
//  * @property icon - Material Design icon name
//  * @property component -React component rendered for the tab
//  */

interface Tab {
    /** Internal route name used for navigation */
    name:string;
    /**  Display title for the screen*/
    title:string;
    /** Shortly display label shown in the tab bar*/
    label:string;
    /** Material Design icon name */
    icon:string;

    /** React component rendered for the tab. */
    Component:React.ComponentType<any>;

    /** Options for each tab, e.g. styling and behaviour  */
    options?: BottomTabNavigationOptions;
}


export const tabs:Tab[] = [
{
    name: "Home",
    label:"Home",
    title: "Home",
    icon: "home",
    Component:HomeScreen,
    options: {
       headerShown: false,
    },
},
{
    name: "Exercises",
    label:"Exercises",
    title: "Exercises",
    icon: "book-open-page-variant-outline",
    Component:ExerciseNavigator,
},
{
    name: "Exercise1",
    label:"Ex 01",
    title: "Exercise 01",
    icon: "numeric-1-circle",
    Component:Exercise1Screen,
},
{

    name: "Exercise2",
    label: "Ex 02",
    title: "Exercise 02",
    icon: "numeric-2-circle",
    Component:Exercise2Screen,
},
];