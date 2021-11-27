import React, {FunctionComponent} from 'react';
import styles from './TableHeader.module.scss';
import {HostInfo, HostsInfo} from "../Table";

export interface TableHeaderProps {
    hosts?: HostsInfo;
}

interface OsInfo {
    [os: string]: number;
}

const formatOs = (os: string) => {
    const capitalized = os.charAt(0).toUpperCase() + os.slice(1);
    return capitalized.replace('os', 'OS');
}

const TableHeader: FunctionComponent<TableHeaderProps> = ({
    hosts = {}
}) => {
    const allHosts: HostInfo[] = Object.values(hosts)
        .flatMap(colorInfo => Object.values(colorInfo));
    const upByOsMap = allHosts
        .filter(host => host.up)
        .map(host => host.os)
        .reduce((res, os) => res.set(os, (res.get(os) || 0) + 1), new Map());
    const upByOs: OsInfo = Object.fromEntries(upByOsMap);
    return (
        <thead className={styles.theadDark}>
            <tr>
                <th scope="col" style={{ width: "30px" }}>Sala</th>
                <th scope="col" style={{ width: "30px" }}>Nazwa</th>
                <th scope="col" style={{ width: "200px" }}>Typ komputera</th>
                <th scope="col" style={{ width: "170px" }}>Procesor</th>
                <th scope="col" style={{ width: "30px" }}>RAM</th>
                <th scope="col" style={{ width: "150px" }}>Grafika</th>
                <th scope="col" style={{ width: "200px" }}>Zajęcia</th>
                <th scope="col" style={{ width: "340px"}}>
                    <div style={{ paddingLeft: "6px" }}>
                        {`Hosty${allHosts.length ? ` (${
                            Object.keys(upByOs)
                                .sort()
                                .map(os => `${formatOs(os)} - ${upByOs[os]}`)
                                .join(', ')
                        })` : ''}`}
                    </div>
                </th>
            </tr>
        </thead>
    );
}

export default TableHeader;
