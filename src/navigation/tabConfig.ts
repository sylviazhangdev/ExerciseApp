
// Bottom tabs for  navigation
// name: internal route name
// title: display name
// icon : icon name
// component: screen/component

import { Component } from "react";
import Exercise1Screen from "../screens/Exercise1Screen";
import Exercise2Screen from "../screens/Exercise2Screen";


export const tabs = [{

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