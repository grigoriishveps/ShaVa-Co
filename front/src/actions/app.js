import {history} from '../history';
import {axios} from "./axiosConfig";
import _ from 'lodash';

export const GET_ACCOUNT_SUCCESS = 'GET_ACCOUNT_SUCCESS';
export const APP_READY = 'APP_READY';
export const SWITCH_AUTH_ERROR = 'SWITCH_AUTH_ERROR';
export const SWITCH_REG_ERROR = 'SWITCH_REG_ERROR';
export const SET_LOADING = 'SET_LOADING';
export const SET_SNACKBAR = 'SET_SNACKBAR';
export const CLEAR_SNACKBAR = 'CLEAR_SNACKBAR';


export const getAuthHeader = () => {
    return 'Bearer ' + localStorage.getItem('tc-token');
}

export function whoami() {
    return function (dispatch) {
        const token = localStorage.getItem('tc-token');
        if (!token) {
            dispatch({
                type: APP_READY,
            });
            return;
        }

        dispatch(setLoading(true));
        return axios({
            method: 'get',
            url: 'me/',
            headers: {Authorization: getAuthHeader()}
        }).then(response => {
            //dispatch(setLoading(false));
            dispatch({
                type: GET_ACCOUNT_SUCCESS,
                data: response.data
            });
            dispatch({
                type: APP_READY,
            });
        }).catch(err => {
            //localStorage.removeItem('bt-token');
            //errorCatcher(err, dispatch, 'Authorization error - please login again');
            dispatch({
                type: APP_READY,
            });
        });
    }
}

export function signIn(params) {
    return function (dispatch, getState) {
        if (!params.company_number) {
            params.company_number = '00000'
        }

        dispatch(setLoading(true));
        return axios({
            method: "post",
            url: 'auth/sign_in/',
            data: params,
        }).then(response => {
            localStorage.setItem('tc-token', response.data.token);
            dispatch({
                type: GET_ACCOUNT_SUCCESS,
                data: response.data.user
            });
            //history.push(chooseInitRoute(response.data.user.role));
            dispatch(setLoading(false));
        }).catch(err => {
            //signInErrorCatcher(err, dispatch)
        })
    }
}

export const logout = () => {
    return (dispatch, getState) => {
        //temporary
        localStorage.clear();
        window.location.replace('/');
        return axios({
            method: "delete",
            url: 'auth/logout/',
            headers: {Authorization: getAuthHeader()}
        })
            .then(response => {
                localStorage.clear();
                window.location.replace('/');
            })
            .catch(err => {
                //errorCatcher(err, dispatch)
            })
    }
};

export const setLoading = (value) => {
    return (dispatch, getState) => {
        dispatch({type: SET_LOADING, data: value});
    }
};

