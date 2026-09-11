import { FlatList, ListRenderItem, ListRenderItemInfo, View } from "react-native";
import { ActivityIndicator, Button, Card, Icon, Text } from "react-native-paper";
import ScreenContainer from "../components/ScreenContainer";
import { useEffect, useState } from "react";


const API_URL = "https://jsonplaceholder.typicode.com/users";

export default function Exercise5Screen() {

    //This screen has 3 mutually-exclusive states: loading, error, data

    const [users, setUsers] = useState<string[]>([]);

    const [errorMessage, setErrorMessage] = useState<string>();

    const [isLoading, setIsLoading] = useState<boolean>(true);

    // Load users from API
    const loadUsers = async () => {
        try {

            // Reset the loading/error state
            setIsLoading(true);
            setErrorMessage(undefined);

            //example: non-async & await metho to handle promises
            // fetch(API_URL).then(r=>r.json()).then(d=> console.log(d)).catch(e=>console.warn(e))

            // Make a simple GET request
            const response = await fetch(API_URL);


            // check if not OK response status(success = 200-299)
            if (!response.ok) {
                throw new Error('API Failure :${response.status}')
            }

            // Convert JSON reponse
            const data = await response.json();

            //TESTING: dump user data in console
            console.log({ userList: data });

            // Update state
            setUsers(data);

        } catch (error) {
            setErrorMessage("Unable to load users");
            console.warn("Unable to load users", error);
        } finally {
            setIsLoading(false);
        }
    };

    // Load users on startup/mount
    useEffect(() => {
        loadUsers();
        //test error message
        // setErrorMessage("Unable to load users TEST ERROR!!");

    }, []);

    //Render each user
    const renderUser = ({ item, index }: ListRenderItemInfo<any>) => (
        <Card>
            <Card.Content>
                <Text>{index + 1}. {item.name}</Text>
            </Card.Content>
        </Card>
    );

    // Loading state
    if (isLoading) {
        return (
            <ScreenContainer>
                <Text variant="headlineMedium"> Loading.. </Text>

                <ActivityIndicator size="large" />
                <Text> Loading Users </Text>
            </ScreenContainer>
        );
    }

    // Error state
    if (errorMessage) {
        return (
            <ScreenContainer>
                <Text variant="headlineMedium"> ERROR<Icon size={20} source="alert" /> </Text>
                <Text> {errorMessage} </Text>

                <Button mode="contained" onPress={loadUsers}>
                    Retry
                </Button>


            </ScreenContainer>
        );
    }

    return (
        <ScreenContainer>
            <Text variant="headlineMedium"> Exercise 5: Users via API </Text>
            <FlatList
                data={users}
                renderItem={renderUser}
            />
        </ScreenContainer>
    );
}