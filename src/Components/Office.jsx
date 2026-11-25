
import React, { useState } from 'react';
import axios from 'axios';

function Office() {
    const [name, setName] = useState('');
    const [officeNumber, setOfficeNumber] = useState('');
    const [deleteOfficeNumber, setDeleteOfficeNumber] = useState('');

    // SAVE OFFICE
    async function saveOffice() {
        try {
            const response = await axios.post(
                'http://localhost:8082/api/office/save',
                {
                    name: name,
                    officeNumber: officeNumber
                }
            );

            alert('Office Saved Successfully');

            setName('');
            setOfficeNumber('');

        } catch (error) {
            console.error(error);
            alert('Saving Office Failed');
        }
    }

    // DELETE OFFICE BY NUMBER
    async function deleteOffice() {
        try {
            const response = await axios.delete(
                'http://localhost:8082/api/office/delete/officeNumber/' + deleteOfficeNumber
            );

            alert(response.data);
            setDeleteOfficeNumber('');

        } catch (error) {
            console.error(error);
            alert(error.response?.data || 'Deleting Office Failed');
        }
    }

    return (
        <div>
            <h1>Save OFFICE</h1>

            <label>Office Name:</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <br /><br />

            <label>Office Number:</label>
            <input
                type="number"
                value={officeNumber}
                onChange={(e) => setOfficeNumber(e.target.value)}
            />

            <br /><br />

            <button onClick={saveOffice}>SAVE</button>

            <h2>Delete Office</h2>

            <input
                type="number"
                value={deleteOfficeNumber}
                onChange={(e) => setDeleteOfficeNumber(e.target.value)}
            />

            <button
                onClick={deleteOffice}
                style={{ marginLeft: '10px', padding: '4px 10px' }}
            >
                DELETE
            </button>
        </div>
    );
}

export default Office;
