import { View } from "react-native";
import { Text } from "react-native-paper";
import ScreenContainer from "../components/ScreenContainer";
import Counter from "../components/Counter";

export default function Exercise1Screen() {
    return (
        <ScreenContainer>
            <Counter/>
        </ScreenContainer>
    );
}