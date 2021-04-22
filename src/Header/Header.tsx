import {AppBar, Link, makeStyles, Toolbar, Typography} from "@material-ui/core";
import React, {FunctionComponent} from "react";
import {DarkModeSwitch} from "react-toggle-dark-mode";

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#343a40",
        height: "56px"
    },
    logo: {
        fontFamily: "Titillium Web, sans-serif",
        fontWeight: 600,
        color: "#fff",
        paddingBottom: ".5125rem",
        fontSize: "1.25rem",
    }
}));

export interface HeaderProps {
    isDark: boolean;
    onChange: () => void;
}

const Header: FunctionComponent<HeaderProps> = ({
    isDark,
    onChange
}) => {
    const { header, logo } = useStyles();

    const toggle = (
        <div style={{ paddingBottom: '2px' }}>
            <DarkModeSwitch
                sunColor="white"
                checked={isDark}
                onChange={onChange}
                size={35}
            />
        </div>
    )

    const displayDesktop = () => {
        return (
            <Toolbar style={{ justifyContent: 'space-between' }}>
                {appLogo}
                {toggle}
            </Toolbar>
        );
    };

    const appLogo = (
        <Link href="https://mim-hosts.github.io" style={{ textDecoration: 'none' }}>
            <Typography className={logo}>
                mim-hosts.github.io
            </Typography>
        </Link>
    );

    return (
        <AppBar className={header}>{displayDesktop()}</AppBar>
    );
}

export default Header;
