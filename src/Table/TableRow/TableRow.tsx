import React, {FunctionComponent, useState} from 'react';
import {ColorInfo} from "../Table";
import Classes from "../Classes/Classes";
import styles from './TableRow.module.scss';
import HostButton from "../HostButton/HostButton";
import {ClassInfo, ComputerTypeInfo, DARK_COLORS} from "../commons";
import cx from 'classnames';

export interface TableRowProps {
    staticInfo: ComputerTypeInfo;
    hosts?: ColorInfo;
    classes?: ClassInfo[]
}

const windowsLogo = (invert?: boolean) => (
    <img width='20px' style={{
        filter: invert ? 'invert(100%)' : undefined,
        marginBottom: '-5px'
    }} src={process.env.PUBLIC_URL + '/windows.svg'} alt='windows'/>
);

const linuxLogo = (invert?: boolean) => (
    <img width='20px' style={{
        filter: invert ? 'invert(100%)' : undefined,
        marginBottom: '-5px'
    }} src={process.env.PUBLIC_URL + '/linux.svg'} alt='linux'/>
);

const macosLinuxLogo = (invert?: boolean) => (
    <div style={{ marginBottom: '6px' }}>
        <img width='16px' style={{
            filter: invert ? 'invert(100%)' : undefined,
            marginBottom: '-2px'
        }} src={process.env.PUBLIC_URL + '/macos.svg'} alt='macos'/>
        /
        <img width='16px' style={{
            filter: invert ? 'invert(100%)' : undefined,
            marginBottom: '-2px'
        }} src={process.env.PUBLIC_URL + '/linux.svg'} alt='linux'/>
    </div>
);

export interface Entry {
    number: string;
    up: boolean;
    os: string;
}

const TableRow: FunctionComponent<TableRowProps> = ({
    staticInfo,
    hosts,
    classes
}) => {
    const [afterClasses, setAfterClasses] = useState<boolean>(false);

    let hostsButtons;

    if (hosts) {
        const entries: Entry[] = Object.entries(hosts).map((entry) => (
            {
                number: entry[0],
                up: Boolean(entry[1].up),
                os: entry[1].os || ''
            }
        )).sort((a,b) =>
            (a.number > b.number) ? 1 : ((b.number > a.number) ? -1 : 0)
        );
        hostsButtons = entries.map((entry) => {
            const hostname = `${staticInfo.codename.toLowerCase()}${entry.number}`;
            const logoDarkColor = DARK_COLORS.includes(staticInfo.codename.toLowerCase()) && staticInfo.color !== "white";
            const osLogo = entry.up ? (
                entry.os === 'windows'
                    ? windowsLogo(logoDarkColor)
                    : staticInfo.codename.toLowerCase() === 'red'
                    ? macosLinuxLogo(logoDarkColor)
                    : linuxLogo(logoDarkColor)
            ) : <div style={{ width: '26px' }} />;
            return (
                <HostButton
                    key={hostname}
                    hostname={hostname}
                    entry={entry}
                    staticInfo={staticInfo}
                    osLogo={osLogo}
                />
            )
        })
    } else {
        hostsButtons = 'Loading...'
    }

    return (
        <tr className={styles.tableRow}>
            <td>{staticInfo.room}</td>
            <td style={{ color: staticInfo.color }}>{staticInfo.codename}</td>
            <td>{staticInfo.type}</td>
            <td>{staticInfo.processor}</td>
            <td>{staticInfo.memory}</td>
            <td>{staticInfo.graphics}</td>
            <td>
                <div className={styles.classes}>
                    <Classes
                        staticInfo={staticInfo}
                        classes={classes}
                        onAfterClasses={(isAfter => {
                            setAfterClasses(isAfter);
                        })}
                    />
                </div>
            </td>
            <td>
                {typeof hostsButtons === 'string'
                    ? (hostsButtons)
                    : (
                        <div className={cx(styles.hostsButtons, {
                            [styles.hostsButtonsDuringClasses]: !afterClasses
                        })}>
                            {hostsButtons}
                        </div>
                    )
                }
            </td>
        </tr>
    );
}

export default TableRow;
