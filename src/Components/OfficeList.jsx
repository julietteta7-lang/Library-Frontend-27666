
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OfficeList() {

    const [offices, setOffices] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [appliedSearch, setAppliedSearch] = useState('');

    // GET ALL OFFICES
    async function getAllOffices() {
        try {
            const response = await axios.get(
                'http://localhost:8082/api/office/all'
            );

            setOffices(response.data);

        } catch (error) {
            console.error(error);
            alert('Failed to retrieve offices');
        }
    }

    // LOAD OFFICES WHEN PAGE OPENS
    useEffect(() => {
        getAllOffices();
    }, []);

    // DELETE OFFICE
    async function deleteOffice(officeNumber) {

        if (!window.confirm('Are you sure you want to delete this office?')) {
            return;
        }

        try {
            const response = await axios.delete(
                'http://localhost:8082/api/office/delete/officeNumber/' + officeNumber
            );

            alert(response.data);

            getAllOffices();

        } catch (error) {
            console.error(error);
            alert(error.response?.data || 'Deleting Office Failed');
        }
    }

    const filteredOffices = offices.filter((office) =>
    office.name.toLowerCase().includes(appliedSearch.toLowerCase()) ||
    office.officeNumber.toString().includes(appliedSearch)
);

    return (
        <div>
            <h1>Available Offices</h1>

            <div>
    <input
        type="text"
        placeholder="Enter office name or number"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
    />

    <button onClick={() => setAppliedSearch(searchTerm)}>
        SEARCH
    </button>

    <button onClick={() => {
        setSearchTerm('');
        setAppliedSearch('');
    }}>
        CLEAR
    </button>
</div>

            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Office Name</th>
                        <th>Office Number</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredOffices.length > 0 ? (
                        filteredOffices.map((office) => (
                            <tr key={office.id}>
                                <td>{office.name}</td>
                                <td>{office.officeNumber}</td>
                                <td>
                                    <button
                                        onClick={() => deleteOffice(office.officeNumber)}
                                    >
                                        DELETE
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No offices found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default OfficeList;
