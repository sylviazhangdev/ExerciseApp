import { View } from "react-native";
import { Text } from "react-native-paper";
import WishList from "./WishList";

export default function Library() {

    return (
        <View>

            <Text variant="headlineMedium">
                Library
            </Text>


        <WishList/>
        </View>

    );

}