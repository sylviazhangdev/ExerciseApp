import { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { Book } from "../types/Book";



export default function MyLibrary() {

    //content of title input
    const [title, setTitle] = useState("");

    //content of author input
    const [author, setAuthor] = useState("");

    //all added books
    const [books, setBooks] = useState<Book[]>([]);

    //function: add new book
    const addBook = () => {

        //if title or author is empty, not add the book
        if (!title.trim() || !author.trim()) return;

        //create a new book object
        const newBook: Book = {
            id: Date.now().toString(),
            title: title.trim(),
            author: author.trim(),
        };

        //add new book to books(array)
        setBooks((currentBooks) => [
            ...currentBooks,
            newBook
        ]);

        // clear both inputs after adding the newBook
        setTitle("");
        setAuthor("");


    };

    const removeBook = (id: string) => {

        setBooks((currentBooks) =>
            currentBooks.filter((book) => book.id !== id)
        );
    };

    return (
        <View style={styles.container}>
            <Text variant="headlineMedium">
                MyLibrary
            </Text>

            <TextInput
                label="Enter title"
                mode="outlined"
                value={title}
                onChangeText={setTitle}
                style={styles.input}
            />

            <TextInput
                label="Enter author"
                mode="outlined"
                value={author}
                onChangeText={setAuthor}
                style={styles.input}
            />

            <Button
                mode="contained"
                onPress={addBook}
            >
                Add a book
            </Button>

            <FlatList
                data={books}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.bookItem}>
                        <Text variant="titleMedium"> {item.title} </Text>

                        <Text variant="bodyMedium"> {item.author} </Text>



                        <Button
                            mode="text"
                            onPress={() => removeBook(item.id)}
                        >
                            Remove
                        </Button>
                    </View>


                )}
            />


        </View>
    );


}

const styles = StyleSheet.create({
    container: {
        gap: 16,
    },

    input: {
        marginBottom: 12,
    },

    button: {
        marginBottom: 16,
    },

    bookItem: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        // flexDirection: "row",
        // justifyContent: "space-between",
        // alignItems: "center",
    },
})