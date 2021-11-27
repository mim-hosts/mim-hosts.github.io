import React, {FunctionComponent, useEffect, useState} from 'react';
import TableHeader from "./TableHeader/TableHeader";
import styles from './Table.module.scss';
import TableRow from "./TableRow/TableRow";
import axios from "axios";
import {ClassInfo, STATIC_INFO} from "./commons";

const REFRESH_INTERVAL_SECONDS = 15;

export interface HostInfo {
    up: boolean;
    os?: string;
}

export interface ColorInfo {
    [index: number]: HostInfo
}

export interface HostsInfo {
    [color: string]: ColorInfo;
}

interface RoomsInfo {
    [room: number]: ClassInfo[];
}

export interface TableProps {
    isDark: boolean;
}

const Table: FunctionComponent<TableProps> = ({
    isDark
}) => {
    const [hosts, setHosts] = useState<HostsInfo>();
    const [rooms, setRooms] = useState<RoomsInfo>();

    const getHosts = async () => {
        try {
            axios.get<HostsInfo>('https://students.mimuw.edu.pl/~kr394714/mim-hosts/')
                .then(response => {
                    setHosts(response.data);
                });
        } catch (err) {
            console.error(err.message);
        }
    };

    const getClasses = async () => {
        try {
            axios.get<RoomsInfo>('https://students.mimuw.edu.pl/~kr394714/mim-hosts/rooms/')
                .then(response => {
                    setRooms(response.data);
                });
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getHosts().then();
        getClasses().then();
        const interval = setInterval(() => {
            getHosts().then();
            getClasses().then();
        },REFRESH_INTERVAL_SECONDS * 1000);
        return () => clearInterval(interval)
    },[]);

    return (
        <div className={styles.tableResponsive}>
            <table className={styles.tableBordered}>
                <TableHeader
                    hosts={hosts}
                />
                <tbody>
                {STATIC_INFO(isDark).map((computerTypeInfo) => {
                    const computerTypeHosts = hosts ? hosts[computerTypeInfo.codename.toLowerCase()] : undefined;
                    const classes = rooms ? rooms[computerTypeInfo.room] : undefined;
                    return (
                        <TableRow
                            key={computerTypeInfo.codename.toLowerCase()}
                            staticInfo={computerTypeInfo}
                            hosts={computerTypeHosts}
                            classes={classes}
                        />
                    )
                })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
