import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExerciseListScreen from "../screens/ExerciseListScreen";
import Exercise1Screen from "../screens/Exercise1Screen";
import Exercise2Screen from "../screens/Exercise2Screen";
import { useTheme } from "../context/ThemeContext";
import Exercise3Screen from "../screens/Exercise3Screen";
import Exercise5Screen from "../screens/Exercise5Screen";
import Exercise6Screen from "../screens/Exercise6Screen";
import Exercise7Screen from "../screens/Exercise7Screen";




export default function ExerciseNavigator() {

     // use theme context
    const {theme} = useTheme();

    return (
        <Stack.Navigator 
        initialRouteName="ExerciseList" // Route to render by default
        screenOptions={{
            headerShown: true,
            headerStyle: {
                backgroundColor: theme.colors.secondary,
                // height is not officially supported, esp. on iOS and Android
                // @ts-expect-error 
                height: 40,
            },
            headerTitleStyle: {
                ...theme.fonts.titleMedium,
                color: theme.colors.onSecondary,
            },
            headerBackTitleStyle: {
                fontSize: 50,
            },
            headerTintColor: theme.colors.onSecondary,
            // headerBackIcon
        }}>
            <Stack.Screen name="ExerciseList"
                component={ExerciseListScreen}
                options={
                    {
                        headerShown: false,
                    }
                }
            />

            <Stack.Screen name="Exercise1"
                component={Exercise1Screen}
                options={
                    {
                        title: "Exercise 01: Greeting",
                    }
                }
            />

            <Stack.Screen name="Exercise2"
                component={Exercise2Screen}
                options={
                    {
                        title: "Exercise 02: Counter",
                    }
                }
            />

             <Stack.Screen name="Exercise3"
                component={Exercise3Screen}
                options={
                    {
                        title: "Exercise 03: To Do List",
                    }
                }
            />

             <Stack.Screen name="Exercise5"
                component={Exercise5Screen}
                options={
                    {
                        title: "Exercise 05: Users Via API",
                    }
                }
            />

            <Stack.Screen name="Exercise6"
                component={Exercise6Screen}
                options={
                    {
                        title: "Exercise 06: MyLibrary component : store book titles and author names.",
                    }
                }
            />

             <Stack.Screen name="Exercise7"
                component={Exercise7Screen}
                options={
                    {
                        title: "Exercise 07: Build a library feature using multiple components with an Add to WishList function",
                    }
                }
            />
        </Stack.Navigator>

        // NotFound


    );
}

const Stack = createNativeStackNavigator();