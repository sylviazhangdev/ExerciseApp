import { View } from "react-native";
import { BookType } from "../../types/BookType";
import Book from "./Book";


type BookListProps = {
    books: BookType[];
    onAddToWishList: (book: BookType) => void;

};

export default function BookList({
    books,
    onAddToWishList,
}: BookListProps) {

    return (

        <View>

            {
                books.map((book) => (
                    <Book
                        key={book.id}
                        book={book}
                        onAddToWishList={onAddToWishList}
                    />
                ))
            }

        </View>

    );

}