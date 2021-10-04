import React, {FunctionComponent} from 'react';
import {Button} from "@material-ui/core";
import styles from './HostButton.module.scss';
import {Entry} from "../TableRow/TableRow";
import {useSnackbar} from "notistack";
import {ComputerTypeInfo, DARK_COLORS} from "../commons";

export interface HostButtonProps {
    hostname: string;
    entry: Entry;
    staticInfo: ComputerTypeInfo;
    osLogo: JSX.Element;
}

const HostButton: FunctionComponent<HostButtonProps> = ({
    hostname,
    entry,
    staticInfo,
    osLogo
}) => {
    const { enqueueSnackbar } = useSnackbar();

    return (
        <Button
            key={hostname}
            variant="contained"
            disableRipple={!entry.up}
            disableElevation
            className={styles.hostButton}
            style={{
                backgroundColor: entry.up ? staticInfo.color : '#7a7a7a',
                color: !entry.up || (
                            DARK_COLORS.includes(staticInfo.codename.toLowerCase())
                            && entry.up && staticInfo.color !== "white"
                    ) ? "white"
                    : undefined,
                cursor: !entry.up ? 'initial' : undefined
            }}
            onClick={entry.up ? () => {
                if (navigator && navigator.clipboard) {
                    navigator.clipboard.writeText(hostname).then();
                    enqueueSnackbar(`Hostname "${hostname}" copied to clipboard`, {
                        variant: 'success',
                    });
                }
            } : undefined}
        >
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                {hostname}
                <div style={{ marginLeft: '2px', marginBottom: '-5px' }}>
                    {osLogo}
                </div>
            </div>
        </Button>
    )
}

export default HostButton;
