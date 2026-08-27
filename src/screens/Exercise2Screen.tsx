import { View } from "react-native";
import { Text } from "react-native-paper";
import ScreenContainer from "../components/ScreenContainer";
import BalanceAccount from "../components/AccountBalance";

export default function Exercise1Screen(){
return(
    <ScreenContainer>
       <BalanceAccount/>
    </ScreenContainer>
);
}