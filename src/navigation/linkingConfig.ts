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
                    Exercises: {//Exercise nav(stack)
                        path: "exercises",
                        screens: {
                            ExerciseList: "",
                            Exercise1: "exercise-1",
                            Exercise2: "exercise-2",
                        }
                    },
                    Exercise1: "exercise-1",
                    Exercise2: "exercise-2",
                }
            },
            NotFound: "*",// Catch-all route (404)
        },
    }
}
