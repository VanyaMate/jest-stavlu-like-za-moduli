import axios, { AxiosResponse } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress;
    phone: string;
    website: string;
    company: ICompany;
}

export interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo;
}

export interface IGeo {
    lat: string;
    lng: string;
}

export interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

const Users = () => {
    const [ users, setUsers ] = useState<IUser[]>([]);

    const loadUsers = useCallback(async () => {
        const response: AxiosResponse<IUser[]> = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
    }, []);

    useEffect(() => {
        loadUsers();
    }, [ loadUsers ]);

    return (
        <div>
            Users
            {
                users.map((user) => {
                    return <Link
                        to={ `/user/${ user.id }` }
                        className={ 'item' }
                        key={ user.id }>[{ user.email }]: { user.username }</Link>;
                })
            }
        </div>
    );
};

export default Users;