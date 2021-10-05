import React, {FunctionComponent, useEffect, useState} from 'react';
import {Tooltip, withStyles} from "@material-ui/core";
import {AFTER_CLASSES, ClassInfo, ComputerTypeInfo, NO_CLASS} from "../commons";
import ClassButton from "../ClassButton/ClassButton";

const REFRESH_INTERVAL_SECONDS = 5;
const TITLE_MAX_LEN = 56;

const getCurrentTime = () => {
    const currentDate = new Date();
    return String(currentDate.getHours()).padStart(2, '0')
        + ":"
        + String(currentDate.getMinutes()).padStart(2, '0');
};

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
        classes.unshift({
            start: '00:00',
            end: '08:30',
            title: NO_CLASS
        });

        for (let i = classes.length - 2; i >= 0; --i) {
            const firstEnd = classes[i].end.split(':').map(Number);
            const firstEndTime = new Date().setHours(firstEnd[0], firstEnd[1]);
            const secondStart = classes[i + 1].start.split(':').map(Number);
            const secondStartTime = new Date().setHours(secondStart[0], secondStart[1]);
            const diff = (secondStartTime - firstEndTime) / 1000;
            if (diff > 30) {
                classes.splice(i + 1, 0, {
                    start: classes[i].end,
                    end: classes[i + 1].start,
                    title: NO_CLASS
                });
            }
        }

        classes.shift();

        const entries = classes.filter((entry) => {
            return entry.end > currentTime;
        }).sort((a,b) =>
            (a.start > b.start) ? 1 : ((b.start > a.start) ? -1 : 0)
        );

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
