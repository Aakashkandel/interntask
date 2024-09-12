import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Authentication(props) {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const{Component}=props;

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
    }, [token])
    return (
        <div>
           <Component/>
        </div>
    )
}
