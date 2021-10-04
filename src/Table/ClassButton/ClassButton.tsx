import React from 'react';
import {Button} from "@material-ui/core";
import {ClassInfo, ComputerTypeInfo, DARK_COLORS, NO_CLASS} from "../commons";
import styles from './ClassButton.module.scss';

const ClassButton = (
    ongoing: boolean,
    entry: ClassInfo,
    staticInfo: ComputerTypeInfo,
    classTitle: string,
    key?: string
) => (
    <Button
        key={key}
        variant="contained"
        disableRipple
        disableElevation
        className={styles.classButton}
        style={{
            backgroundColor: entry.title === NO_CLASS ? '#e0e0e0' : (ongoing ? staticInfo.color : '#7a7a7a'),
            color: (DARK_COLORS.includes(staticInfo.codename.toLowerCase())
                    && ongoing
                    && entry.title !== NO_CLASS
                    && staticInfo.color !== "white")
                || (!ongoing && entry.title !== NO_CLASS)
                ? "white"
                : undefined,
        }}
    >
        {classTitle}
    </Button>
)

export default ClassButton;
