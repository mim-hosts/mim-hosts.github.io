import React from 'react';
import './TableHeader.css';

function TableHeader() {
    return (
        <thead className="thead-dark">
            <tr>
                <th scope="col" style={{ width: "105px" }}>Nazwa kodowa</th>
                <th scope="col" style={{ width: "175px" }}>Typ komputera</th>
                <th scope="col" style={{ width: "155px" }}>Procesor</th>
                <th scope="col" style={{ width: "90px" }}>Pamięć RAM</th>
                <th scope="col" style={{ width: "320px" }}>Grafika</th>
                <th scope="col" style={{ width: "500px" }}>Hosty</th>
            </tr>
        </thead>
    );
}

export default TableHeader;
