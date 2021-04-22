import React from 'react';
import Header from "./Header/Header";
import Table from "./Table/Table";
import {ThemeProvider} from "styled-components";
import { useDarkMode } from './useDarkMode';
import {darkTheme, lightTheme} from "./themes";
import {GlobalStyles} from "./GlobalStyles";
import { SnackbarProvider } from 'notistack';

function App() {
    const [theme, toggleTheme] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (
        <SnackbarProvider maxSnack={2}>
            <ThemeProvider theme={themeMode}>
                <>
                    <GlobalStyles />
                    <div className="App">
                        <Header isDark={theme === 'dark'} onChange={toggleTheme}/>
                        <Table isDark={theme === 'dark'}/>
                    </div>
                </>
            </ThemeProvider>
        </SnackbarProvider>
    );
}

export default App;
