import axios from 'axios';
import { Paginate, User } from '../components/users/list';
import { API_BASE } from '../config/constants';

export const getUsers = ({ page, limit }: Paginate, enablePaginate: boolean) => {

    let API_URL = `${API_BASE}/users`;

    API_URL += enablePaginate ? `?page=${page}&limit=${limit}` : '';

    return axios
        .get(API_URL)
        .then((payload) => {
            return payload.data
        }).catch((err) => {
            throw err
        })
}

export const createUser = (data: User) => {

    let API_URL = `${API_BASE}/users`;

    return axios
        .post(API_URL, data)
        .then((payload) => {
            return payload.data
        }).catch((err) => {
            throw err
        })
}