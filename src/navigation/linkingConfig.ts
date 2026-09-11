import { LinkingOptions } from "@react-navigation/native";

export const linking: LinkingOptions<ReactNavigation.RootParamList> = {
    // Linking config : https://reactnavigation.org/docs/configuring-links
    prefixes: [
        "exapp://",
        "https://exapp.com",
    ],
    config: {//Root navigator
        screens: {
            Root: {//Bottom tab nav
                screens: {
                    Home: "home",
                    Exercises: {//Exercise nav(stack)
                        path: "exercises",
                        screens: {
                            ExerciseList: "",
                            Exercise1: "exercise-1",
                            Exercise2: "exercise-2",
                            Exercise3: "exercise-3",
                            Exercise5: "exercise-5",

                        }
                    },
                    // Exercise1: "exercise-1",
                    // Exercise2: "exercise-2",
                    Settings: "settings",
                }
            },
            NotFound: "*",// Catch-all route (404)
        },
    }
}
