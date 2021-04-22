import React, {FunctionComponent, useEffect, useState} from 'react';
import TableHeader from "./TableHeader/TableHeader";
import './Table.css';
import TableRow from "./TableRow/TableRow";
import axios from "axios";

export interface ComputerTypeInfo {
    codename: string,
    type: string,
    processor: string,
    memory: string,
    graphics: string,
    color: string
}

const REFRESH_INTERVAL_SECONDS = 60;

export interface HostInfo {
    up: boolean;
    os?: string;
}

export interface ColorInfo {
    [index: number]: HostInfo
}

interface HostsInfo {
    [color: string]: ColorInfo;
}

export interface TableProps {
    isDark: boolean;
}

const Table: FunctionComponent<TableProps> = ({
    isDark
}) => {
    const staticInfo: ComputerTypeInfo[] = [
        {
            codename: "Red",
            type: "Apple iMac Late 2013",
            processor: "Intel Core i5-4570",
            memory: "8GB",
            graphics: "nVidia GeForce GT755M Mac Edition [GK107M]",
            color: "red"
        },
        {
            codename: "Pink",
            type: "Dell Precision Tower 3620",
            processor: "Intel Xeon E3-1240 v6",
            memory: "16GB",
            graphics: "nVidia Quadro P400 [GP107GL]",
            color: "rgb(255, 102, 255)"
        },
        {
            codename: "Orange",
            type: "Dell Precision Tower 3620",
            processor: "Intel Xeon E3-1240 v6",
            memory: "16GB",
            graphics: "nVidia Quadro P400 [GP107GL]",
            color: "orange"
        },
        {
            codename: "Brown",
            type: "Dell Precision Tower 3620",
            processor: "Intel Xeon E3-1240 v6",
            memory: "16GB",
            graphics: "nVidia Quadro P400 [GP107GL]",
            color: "brown"
        },
        {
            codename: "Green",
            type: "Dell Precision Tower 1700",
            processor: "Intel Xeon E3-1220 v3",
            memory: "8GB",
            graphics: "nVidia NVS 315 [GF119]",
            color: "green"
        },
        {
            codename: "Khaki",
            type: "Dell Precision Tower 3630",
            processor: "Intel Core i5-8500",
            memory: "16GB",
            graphics: "nVidia Quadro P400 [GP107GL]",
            color: "rgb(173, 169, 110)"
        },
        {
            codename: "White",
            type: "Dell Precision Tower 3630",
            processor: "Intel Core i5-8500",
            memory: "16GB",
            graphics: "nVidia Quadro P400 [GP107GL]",
            color: isDark ? "white" : "#212529"
        },
        {
            codename: "Cyan",
            type: "Dell Precision Tower 3630",
            processor: "Intel Core i5-8500",
            memory: "16GB",
            graphics: "nVidia Quadro P400 [GP107GL]",
            color: "cyan"
        },
        {
            codename: "Blue",
            type: "Dell Precision Tower 3630",
            processor: "Intel Core i5-8500",
            memory: "16GB",
            graphics: "nVidia Quadro P400 [GP107GL]",
            color: "blue"
        },
        {
            codename: "Violet",
            type: "Dell Precision Tower 3630",
            processor: "Intel Core i5-8500",
            memory: "16GB",
            graphics: "nVidia Quadro P400 [GP107GL]",
            color: "violet"
        }
    ]

    const [hosts, setHosts] = useState<HostsInfo>();

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

    useEffect(()=>{
        getHosts();
        const interval = setInterval(()=>{
            getHosts()
        },REFRESH_INTERVAL_SECONDS * 1000);
        return () => clearInterval(interval)
    },[])

    return (
        <div className="table-responsive">
            <table className="table-bordered">
                <TableHeader />
                <tbody>
                {staticInfo.map((computerTypeInfo) => {
                    let computerTypeHosts = undefined;
                    if (hosts) {
                        computerTypeHosts = hosts[computerTypeInfo.codename.toLowerCase()];
                    }
                    return (
                        <TableRow
                            key={computerTypeInfo.codename.toLowerCase()}
                            staticInfo={computerTypeInfo}
                            hosts={computerTypeHosts}
                        />
                    )
                })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
