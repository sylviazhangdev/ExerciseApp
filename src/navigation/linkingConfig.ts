import { LinkingOptions } from "@react-navigation/native";

export const linking: LinkingOptions<ReactNavigation.RootParamList> = {
    // Linking config : https://reactnavigation.org/docs/configuring-links
    prefixes:[
        "exapp://",
        "https://exapp.com",
    ],
    config:{
        screens:{
            Root:{
                screens:{
                     Exercise1:"exercise-1",
                     Exercise2:"exercise-2",
                }
            }
           
        },
    }
}
