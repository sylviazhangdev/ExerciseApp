import { View, StyleSheet} from "react-native";
import { Text, Button } from "react-native-paper";
import { useState } from "react";

export default function BalanceAccount(){

   /* balance set deposite and withdraw by 10 */ 
   const [balance, setBalance] = useState(200);

   /* deposite */
   const Deposit = () => {
    setBalance(balance+10)
   }

   /* withDraw */ 
   const WithDraw = () => {
    setBalance(balance-10)
   }


   return <View style = {styles.container}>
        <Text variant="headlineMedium" style = {styles.text}> My Account </Text>
        <Text variant="headlineMedium" style = {styles.text}> ${balance} </Text>

       
        <Button
          mode="contained"
          onPress={WithDraw}
          disabled = {balance <= 10}
        >
           WithDraw $10
        </Button>

        <Button
          mode="contained"
          onPress={Deposit}
        >
           Deposit $10
        </Button>

        { balance === 10 && 
        (<Text style = {styles.warningText}> Warm Tip: Your minimal balance is $10. </Text>)
        }

   </View>
}

const styles = StyleSheet.create({
    
    container:{
        flexDirection : "column",
        gap : 16,
    },

    text:{
        textAlign : "center",
    },

    warningText: {
        textAlign : "center",
        fontSize : 14,
        fontWeight:500,
        color:"red",

    }
})