import { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";


type Todo = {
    id: string;
    text: string;
}

export default function ToDoList() {

    //text in textInput
    const [todo, setTodo] = useState("");

    // todo List
    const [todos, setTodos] = useState<Todo[]>([]);

    // add a new todo item
    const addTodo = () => {

        if (!todo.trim()) { return; }

        // new todo object
        const newTodo: Todo = {
            id: Date.now().toString(),
            text: todo.trim(),
        };

        // add new todo object to the last item of the array
        setTodos((currentTodos) => [
            ...currentTodos,
            newTodo,
        ]);

        //clear textInput
        setTodo("");

    };

    //remove a todo by id
    const removeTodo = (id: string) => {
        setTodos((currentTodos) => currentTodos.filter((item) => item.id !== id)
        );
    };



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
            mode="contained"
            onPress={addTodo}
        >
            Add To do
        </Button>

        <FlatList
            data={todos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.todoItem}>
                    <Text>{item.text}</Text>

                    <Button
                        mode="text"
                        onPress={() => removeTodo(item.id)}
                    >
                        Remove
                    </Button>
                </View>


            )}
        />


    </View>

}

const styles = StyleSheet.create({
    container: {
        gap: 16,
    },

    input: {
        marginVertical: 16,
    },

    button: {
        marginBottom: 16,
    },

    todoItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 8,
    },
})