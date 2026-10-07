import { Button, Text } from "react-native-paper";
import { BookType } from "../../types/BookType";
import { View } from "react-native";

type BookProps = {
    book: BookType;
    onAddToWishList: (book: BookType) => void;
};

export default function Book({
    book,
    onAddToWishList }: BookProps) {



    return (
        <View>
            <Text variant="titleMedium">
                {book.title}
            </Text>

            <Text variant="bodyMedium">
                {book.author}
            </Text>

            <Button
                mode="text"
                onPress={() => onAddToWishList(book)}
            >
                Add to wish list
            </Button>
        </View>

    );

}