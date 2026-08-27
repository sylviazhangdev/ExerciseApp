import { useState } from "react";
import { View, StyleSheet} from "react-native";
import { Button, Text } from "react-native-paper";

export default function Counter() {

    /* initial count equals 0, setCount with the value change */
    const [count, setCount] = useState(0);

    return <View style={styles.container}>
        <Text variant="headlineMedium">
            Counter :{count}
        </Text>

        <Button
            mode = "contained"
            onPress={()=> setCount(count+1)}
        >  
         INCREMENT
        </Button>

        <Button
            mode = "contained"
            onPress={()=> setCount(count-1)}
            disabled={count===0}
        >  
         DECREMENT
        </Button>

    </View>

}

const styles = StyleSheet.create({
    container:{
        gap: 16,
    }
})