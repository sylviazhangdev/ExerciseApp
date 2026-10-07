import { Button, Text } from "react-native-paper";
import { BookType } from "../../types/BookType";
import { StyleSheet, View } from "react-native";

type BookProps = {
    book: BookType;
    onAddToWishList: (book: BookType) => void;
};

export default function Book({
    book,
    onAddToWishList }: BookProps) {



    return (
        <View style= {styles.container}>

            <View>
                <Text variant="titleMedium">
                    {book.title}
                </Text>

                <Text variant="bodyMedium">
                    {book.author}
                </Text>
            </View>


            <Button
                mode="text"
                onPress={() => onAddToWishList(book)}
            >
                Add to wish list
            </Button>
        </View>

    );

}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },

});