import React, {FunctionComponent} from 'react';
import styles from './TableHeader.module.scss';
import {HostInfo, HostsInfo} from "../Table";

export interface TableHeaderProps {
    hosts?: HostsInfo;
}

const TableHeader: FunctionComponent<TableHeaderProps> = ({
    hosts = {}
}) => {
    const numAllHosts = Object.values(hosts)
        .map(colorInfo => Object.keys(colorInfo).length)
        .reduce((a, b) => a + b, 0);
    const numUpHosts = Object.values(hosts)
        .map(colorInfo => Object.values(colorInfo))
        .map(hosts => hosts.map(host => (host as unknown as HostInfo).up))
        .map(hosts => hosts.reduce((a, b) => a + Number(b), 0))
        .reduce((a, b) => a + b, 0);
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
                        {`Hosty${numAllHosts ? ` (${numUpHosts} up, ${numAllHosts} wszystkich)` : ''}`}
                    </div>
                </th>
            </tr>
        </thead>
    );
}

export default TableHeader;
