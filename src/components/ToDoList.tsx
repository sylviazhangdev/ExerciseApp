import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";


type Todo = {
    id:string;
    text:string;
}

export default function ToDoList() {

    //text in textInput
    const [todo, setTodo] = useState("");

    // todo List
    const [todos, setTodos] = useState<Todo[]>([]);

    // new todo object
    const newTodo: Todo = {
        id : Date.now().toString(),
        text : todo.trim(),
    };

    // add new todo object to the last item of the array
    // setTodos

    return <View style={styles.container}>
        <Text variant="headlineMedium">
            ToDoList
        </Text>

        <TextInput
            label="Enter a ToDo"
            mode="outlined"
            value={todo}
            onChangeText={setTodo}
            style={styles.input}
        />

        <Button
            mode = "contained"
            onPress={()=>{}}
        >  
         Add To do
        </Button>

    </View>

}

const styles = StyleSheet.create({
    container: {
        gap: 16,
    },

    input: {
        marginVertical: 16,
    }
})