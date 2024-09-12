import React, { useEffect, useState } from 'react';
import Navbar from './Task4/Navbar';

export default function ApiFetch() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setUsers(data);
                setLoading(false);
                setError(null);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
            //also i can do it from axios
    }, [users, loading, error]);

    if (loading) {
        return <div className="text-center text-gray-600">Loading...</div>;
    }

    return (
        <>
        <Navbar/>
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Users List</h2>
            {error == null ? (

                <ul className="list-disc pl-6 space-y-2">
                    {users.map((user) => (
                        <li
                            key={user.id}
                            className="bg-gray-100 border border-gray-300 rounded-lg p-4 "
                        >
                            <strong className="text-blue-600">{user.name}</strong> - {user.email}
                        </li>
                    ))}
                </ul>

            ) : (
                <div className="bg-red-100 border border-red-500 text-red-700 p-4 rounded mb-4">
                    <strong>Error:</strong> {error}
                </div>

            )}
        </div>
        </>
    );
}
