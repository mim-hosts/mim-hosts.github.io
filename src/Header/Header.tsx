import {AppBar, Link, makeStyles, Toolbar, Typography} from "@material-ui/core";
import React from "react";

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

function Header() {
    const { header, logo } = useStyles();

    const displayDesktop = () => {
        return <Toolbar>{appLogo}</Toolbar>;
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
