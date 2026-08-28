import { MD3LightTheme } from "react-native-paper";

const theme = {
    // Start with MD3 theme defaults
    
    ...MD3LightTheme,
    // Override specific property values
    color: {
        // Use existing colors as defined
        ...MD3LightTheme.colors,

        // Override specific colors
        primary: "#00aced",
        onPrimary: "#fff",
        secondary: "#f78d0b",
        onSecondary: "#fff",
        onSurface: "#333",
    }
};

export default theme

