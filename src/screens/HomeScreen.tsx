import { Appbar, Avatar, Button, Text, Card } from "react-native-paper";
import ScreenContainer from "../components/ScreenContainer";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, ScrollView, StyleSheet } from "react-native";


type NotFoundScreenProps = {
    navigation: NativeStackNavigationProp<any>
};

export default function HomeScreen({ navigation }: NotFoundScreenProps) {
    return (
        <ScreenContainer>
            {/* <Text variant="headlineMedium"> Home screen </Text> */}
            <Appbar.Header>
                <Appbar.Content title="Exercise App" />
                <Appbar.Action icon="bell-outline" onPress={() => { }} />
            </Appbar.Header>

            <ScrollView style={styles.content}>// add style here
                <View style={styles.welcome}>
                    <Avatar.Icon icon="run" size={60} />
                    <Text variant="headlineSmall" style={styles.title}> A collection of exercises! </Text>
                    <Text variant="bodyMedium" style={styles.title}>
                        A collection of exercises testing out React Native in a structured project setting. This project uses React Navigation. React Native Paper(UI), and many other tools. </Text>
                </View>

                <Card style={styles.card} onPress={()=>navigation.navigate("Exercises",{screen:"ExerciseList"})}>
                    <Card.Title
                        title="Exercises"
                        subtitle="View the exercises"
                        left={(props) => <Avatar.Icon {...props} icon="run" />}

                    />
                </Card>
                
            </ScrollView>



        </ScreenContainer>
    );
}

//Customize styles
const styles = StyleSheet.create({
    content: {
        marginTop: 10,
    },
    welcome: {
        alignItems: "center",
        marginBottom: 24,
        gap: 20,
    },
    title: {
        marginTop: 12,
    },
    card: {
        marginBottom:12,
    },
});

// style = {styles.content} scrollview
// style = {styles.welcome} view
// style = {styles.title} text