import { Text } from "react-native-paper";
import Library from "../components/exercise7/Library";
import ScreenContainer from "../components/ScreenContainer";

export default function Exercise7Screen() {
    return (
        <ScreenContainer>
            <Text variant="headlineMedium">
                Exercise07
            </Text>
            <Library />
        </ScreenContainer>
    );
}