import { View } from "react-native";
import { Text } from "react-native-paper";
import WishList from "./WishList";
import BookList from "./BookList";
import { BookType } from "../../types/BookType";
import { useState } from "react";

export default function Library() {

    const books: BookType[] = [
        {
            id: "1",
            title: "Book1",
            author: "Author1",
        },
        {
            id: "2",
            title: "Book2",
            author: "Author2",
        },
    ];


    const [wishList, setWishList] = useState<BookType[]>([]);

    const addToWishList = (book: BookType) => {

        setWishList(

            (currentWishList) => {

                const alreadyExist = currentWishList.some(
                    (item) => item.id === book.id
                );

                if (alreadyExist) return currentWishList;
    
                return [...currentWishList, book];

            }
        );

    };

    return (
        <View>

            <WishList count={wishList.length} />

            <BookList books={books} onAddToWishList={addToWishList} />

        </View>

    );

}