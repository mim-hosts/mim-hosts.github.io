import React, {FunctionComponent, useEffect, useState} from 'react';
import {Tooltip, withStyles} from "@material-ui/core";
import {AFTER_CLASSES, classesTimetable, ClassInfo, ComputerTypeInfo, NO_CLASS} from "../commons";
import ClassButton from "../ClassButton/ClassButton";

const REFRESH_INTERVAL_SECONDS = 15;
const TITLE_MAX_LEN = 56;

const getCurrentTime = () => {
    const currentDate = new Date();
    return String(currentDate.getHours()).padStart(2, '0')
        + ":"
        + String(currentDate.getMinutes()).padStart(2, '0');
}

const StyledTooltip = withStyles({
    tooltip: {
        fontSize: '1em',
        fontFamily: 'Titillium Web, sans-serif',
        fontWeight: 600,
    }
})(Tooltip);

const getButtons = (
    currentTime: string,
    staticInfo: ComputerTypeInfo,
    onAfterClasses: (isAfter: boolean) => void,
    classes?: ClassInfo[]
) => {
    let classesButtons;
    if (classes) {
        const timetable = [...classesTimetable];

        classes.forEach((singleClass) => {
            const idx = classesTimetable.findIndex((elt) => elt.start === singleClass.start);
            timetable[idx] = singleClass;
        })

        const entries = timetable.filter((entry) =>
            entry.end > currentTime
        ).sort((a,b) =>
            (a.start > b.start) ? 1 : ((b.start > a.start) ? -1 : 0)
        );

        while (entries.length > 0 && entries[entries.length - 1].title === NO_CLASS) {
            entries.pop();
        }

        entries.splice(2);

        classesButtons = entries.map((entry) => {
            const ongoing = entry.start <= currentTime && currentTime < entry.end;
            const isTitleShortened = entry.title.length > TITLE_MAX_LEN;
            const titleShortened = entry.title.slice(0, TITLE_MAX_LEN - 3);
            const title = isTitleShortened
                ? `${titleShortened.substring(0, titleShortened.lastIndexOf(' '))} ...`
                : entry.title;
            return (
                <div
                    key={`${entry.start}-${entry.end}-${entry.title}`}
                    style={{ marginBottom: '10px' }}
                >
                    <div style={{ fontWeight: 'bold' }}>
                        {entry.start} - {entry.end}
                    </div>
                    {isTitleShortened
                        ? (
                            <StyledTooltip
                                key={`${entry.start}${entry.end}${entry.title}`}
                                title={entry.title}
                            >
                                {ClassButton(ongoing, entry, staticInfo, title)}
                            </StyledTooltip>
                        )
                        : ClassButton(ongoing, entry, staticInfo, title, `${entry.start}${entry.end}${entry.title}`)
                    }
                </div>
            )
        });

        onAfterClasses(classesButtons.length === 0);

        if (classesButtons.length === 0) {
            classesButtons = AFTER_CLASSES;
        }
    } else {
        classesButtons = 'Loading...';
    }
    return classesButtons;
}

export interface ClassesProps {
    staticInfo: ComputerTypeInfo;
    classes?: ClassInfo[];
    onAfterClasses: (isAfter: boolean) => void;
}

const Classes: FunctionComponent<ClassesProps> = ({
    staticInfo,
    classes,
    onAfterClasses
}) => {
    const [currentTime, setCurrentTime] = useState<string>(getCurrentTime());
    const [classesButtons, setClassesButtons] = useState<string | JSX.Element[]>('Loading...');

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(getCurrentTime());
        },REFRESH_INTERVAL_SECONDS * 1000);
        return () => clearInterval(interval)
    });

    useEffect(() => {
        setClassesButtons(getButtons(currentTime, staticInfo, onAfterClasses, classes));
    }, [currentTime, staticInfo, classes, onAfterClasses]);

    return (
        <>
            {classesButtons}
        </>
    );
}

export default Classes;
