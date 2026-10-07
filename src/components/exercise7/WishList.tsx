import { Text } from "react-native-paper";

type WishListProps = {
    count: number;
};

export default function WishList({count}:WishListProps) {

    return (
        <Text>
            {count} {count===1?"book":"books"} in wish list.
        </Text>
    );

}