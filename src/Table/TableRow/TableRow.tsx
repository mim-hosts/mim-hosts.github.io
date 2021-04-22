import React, {FunctionComponent} from 'react';
import './TableRow.css';
import {ColorInfo, ComputerTypeInfo} from "../Table";
import {Button} from "@material-ui/core";
import { useSnackbar } from 'notistack';

export interface TableRowProps {
    staticInfo: ComputerTypeInfo;
    hosts?: ColorInfo
}

const windowsLogo = (invert?: boolean) => (
    <img width='20px' style={{
        filter: invert ? 'invert(100%)' : undefined,
        marginLeft: '6px'
    }} src={process.env.PUBLIC_URL + '/windows.svg'} alt='windows'/>
);

const linuxLogo = (invert?: boolean) => (
    <img width='20px' style={{
        filter: invert ? 'invert(100%)' : undefined,
        marginLeft: '6px'
    }} src={process.env.PUBLIC_URL + '/linux.svg'} alt='linux'/>
);

const macosLinuxLogo = (invert?: boolean) => (
    <div style={{ marginRight: '-12px', marginBottom: '6px' }}>
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

const TableRow: FunctionComponent<TableRowProps> = ({
    staticInfo,
    hosts
}) => {
    const { enqueueSnackbar } = useSnackbar();

    let hostsButtons;
    const darkColors = ['brown', 'white', 'blue'];

    if (hosts) {
        const entries = Object.entries(hosts).map((entry) => (
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
            const osLogo = entry.up ? (
                entry.os === 'windows'
                    ? windowsLogo(darkColors.includes(staticInfo.codename.toLowerCase()))
                    : staticInfo.codename.toLowerCase() === 'red'
                    ? macosLinuxLogo(darkColors.includes(staticInfo.codename.toLowerCase()))
                    : linuxLogo(darkColors.includes(staticInfo.codename.toLowerCase()))
            ) : <div style={{ width: '26px' }} />;
            return (
                <Button
                    key={hostname}
                    variant="contained"
                    style={{
                        backgroundColor: entry.up ? staticInfo.color : undefined,
                        textTransform: "none",
                        width: "112px",
                        margin: "2px",
                        fontFamily: "Titillium Web, sans-serif",
                        fontWeight: 600,
                        color: darkColors.includes(staticInfo.codename.toLowerCase()) && entry.up ? "white" : undefined,
                        cursor: !entry.up ? 'initial' : undefined
                    }}
                    onClick={entry.up ? () => {
                        navigator.clipboard.writeText(hostname);
                        enqueueSnackbar(`Hostname "${hostname}" copied to clipboard`, {
                            variant: 'success',
                        });
                    } : undefined}
                >
                    {hostname}
                    <div style={{ marginLeft: '4px', marginBottom: '-6px' }}>
                        {osLogo}
                    </div>
                </Button>
            )
        })
    } else {
        hostsButtons = 'Loading...'
    }

    return (
        <tr>
            <td style={{ color: staticInfo.color }}>{staticInfo.codename}</td>
            <td>{staticInfo.type}</td>
            <td>{staticInfo.processor}</td>
            <td>{staticInfo.memory}</td>
            <td>{staticInfo.graphics}</td>
            <td>
                <div style={{ paddingLeft: "12px" }}>
                    {hostsButtons}
                </div>
            </td>
        </tr>
    );
}

export default TableRow;
