import React from 'react';
import styles from './TableHeader.module.scss';

function TableHeader() {
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
                        Hosty
                    </div>
                </th>
            </tr>
        </thead>
    );
}

export default TableHeader;
