import { Appbar, Avatar, Button, Text, Card, Switch } from "react-native-paper";
import ScreenContainer from "../components/ScreenContainer";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, ScrollView, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeContext";


type NotFoundScreenProps = {
    navigation: NativeStackNavigationProp<any>
};

export default function SettingsScreen() {

    const {overrideTheme,setOverrideTheme} = useTheme();

    const isDark = (overrideTheme === "dark");

    
    const toggleOverrideTheme = ()=>{
        setOverrideTheme(isDark? "light" : "dark")
    }

    return (
        <ScreenContainer>
            {/* <Text variant="headlineMedium"> Home screen </Text> */}
            
            <ScrollView style={styles.content}>

                <Card >
                    <Card.Title
                        title="Appearance"
                        left={(props) => <Avatar.Icon {...props} icon="run" />}
                    />

                    <Card.Content>
                        <View style={styles.formRow}>
                            <Text>Dark Model</Text>
                            <Switch value={isDark} onValueChange={toggleOverrideTheme}/>
                        </View>
                    </Card.Content>
                </Card>
                
            </ScrollView>

        </ScreenContainer>
    );
}

//Customize styles
const styles = StyleSheet.create({
    content: {
        padding: 2,
    },

    formRow: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:10,
    },
});

