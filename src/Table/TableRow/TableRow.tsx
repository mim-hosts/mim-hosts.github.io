import React, {FunctionComponent} from 'react';
import './TableRow.css';
import {colorInfo, ComputerTypeInfo} from "../Table";
import {Button} from "@material-ui/core";

export interface TableRowProps {
    staticInfo: ComputerTypeInfo;
    hosts?: colorInfo
}

const TableRow: FunctionComponent<TableRowProps> = ({
    staticInfo,
    hosts
}) => {
    let hostsButtons;
    const darkColors = ['brown', 'white', 'blue'];

    if (hosts) {
        const entries = Object.entries(hosts).map((entry) => (
            {
                number: entry[0],
                up: Boolean(entry[1])
            }
        )).sort((a,b) =>
            (a.number > b.number) ? 1 : ((b.number > a.number) ? -1 : 0)
        );
        hostsButtons = entries.map((entry) => {
            const hostname = `${staticInfo.codename.toLowerCase()}${entry.number}`;
            return (
                <Button
                    key={hostname}
                    variant="contained"
                    style={{
                        backgroundColor: entry.up ? staticInfo.color : undefined,
                        textTransform: "none",
                        width: "80px",
                        margin: "2px",
                        fontFamily: "Titillium Web, sans-serif",
                        fontWeight: 600,
                        color: darkColors.includes(staticInfo.codename.toLowerCase()) && entry.up ? "white" : undefined,
                        cursor: !entry.up ? 'initial' : undefined
                    }}
                    onClick={entry.up ? () => {navigator.clipboard.writeText(hostname)} : undefined}
                >
                    {hostname}
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
