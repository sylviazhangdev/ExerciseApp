import { FlatList, ListRenderItem, ListRenderItemInfo, View } from "react-native";
import { Card, Icon, Text } from "react-native-paper";
import ScreenContainer from "../components/ScreenContainer";
import { useEffect, useState } from "react";


const API_URL = "https://jsonplaceholder.typicode.com/users";

export default function Exercise5Screen() {

    //This screen has 3 mutually-exclusive states: loading, error, data

    const [users, setUsers] = useState<string[]>([]);

    const [errorMessage, setErrorMessage] = useState<string>();

    // Load users from API
    const loadUsers = async () => {
        try {

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
            console.warn("Unable to load users", error);
        }
    };

    // Load users on startup/mount
    useEffect(() => {
        loadUsers();
    }, []);

    //Render each user
    const renderUser = ({ item,index }: ListRenderItemInfo<any>) => (
        <Card>
            <Card.Content>
                <Text>{index+1}. {item.name}</Text>
            </Card.Content>
        </Card>
    );

    // Error state
    if(errorMessage) {
        return(
           <ScreenContainer>
            <Text variant="headlineMedium"> ERROR<Icon size={20} source="alert" /> </Text>
            <FlatList
                data={users}
                renderItem={renderUser}
            />
        </ScreenContainer> 
        );
    }

    return (
        <ScreenContainer>
            <Text variant="headlineMedium"> Exercise 5: Users via API<Icon size={20} source="alert" /> </Text>
            <FlatList
                data={users}
                renderItem={renderUser}
            />
        </ScreenContainer>
    );
}