import { Text } from "react-native-paper";

type WishListProps = {
    count: number;
};

export default function WishList({count}:WishListProps) {

    return (
        <Text variant="titleMedium">
            {count} {count===1 ? "book" : "books"} in wish list.
        </Text>
    );

}