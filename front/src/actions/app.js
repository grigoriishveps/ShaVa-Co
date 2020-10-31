import {history} from '../history';
import {axios} from "./axiosConfig";
import _ from 'lodash';

export const GET_ACCOUNT_SUCCESS = 'GET_ACCOUNT_SUCCESS';
export const PWDRST_REQUEST_REQUEST = 'PWDRST_REQUEST_REQUEST';
export const PWDRST_REQUEST_SUCCESS = 'PWDRST_REQUEST_SUCCESS';
export const APP_READY = 'APP_READY';
export const SWITCH_AUTH_ERROR = 'SWITCH_AUTH_ERROR';
export const SWITCH_REG_ERROR = 'SWITCH_REG_ERROR';
export const SET_LOADING = 'SET_LOADING';
export const SET_SNACKBAR = 'SET_SNACKBAR';
export const CLEAR_SNACKBAR = 'CLEAR_SNACKBAR';
export const EMLCNF_STATUS_REQUEST = 'EMLCNF_STATUS_REQUEST';
export const EMLCNF_STATUS_SUCCESS = 'EMLCNF_STATUS_SUCCESS';
export const TOGGLE_BOX_SHADOW = 'TOGGLE_BOX_SHADOW';
export const SET_SUBMENU = 'SET_SUBMENU';
export const CHANGE_SIDEBAR_VISIBILITY = 'CHANGE_SIDEBAR_VISIBILITY';
export const CHANGE_HEADER_TITLE = 'CHANGE_HEADER_TITLE';
export const SIGN_INFRINGEMENTS = 'SIGN_INFRINGEMENTS';
export const SURVEYS_FETCHED = 'SURVEYS_FETCHED';

 export function postSignInfringement(data) {
    return dispatch => {
        dispatch(setLoading(true));
        return axios({
            method: 'post',
            url: '/me/sign_infringements_report/',
            headers: {Authorization: getAuthHeader()},
            data: data,
        })
            .then((response) => {
                dispatch(setLoading(false));
                dispatch({
                    type: SIGN_INFRINGEMENTS,
                });
                dispatch(setSnackbar('The report was signed successfully'));
            })
            .catch(err => {
                //errorCatcher(err, dispatch, "Error sign infringement")
            });
    };
}

export const getAuthHeader = () => {
    return 'Bearer ' + localStorage.getItem('tc-token');
}

export function changeSidebarVisibility() {
    return {
        type: CHANGE_SIDEBAR_VISIBILITY
    };
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
            dispatch(setLoading(false));
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

export function signUp(params) {
    return function (dispatch, getState) {
        dispatch(setLoading(true));
        return axios({
            method: "post",
            url: 'auth/sign_up/',
            data: params,
        }).then(response => {
            const token = _.get(response, 'data.token', null);
            if (token) {
                localStorage.setItem('tc-token', token);
            }
            dispatch({
                type: GET_ACCOUNT_SUCCESS,
                data: response.data.user
            });
            dispatch(setLoading(false));
            return Promise.resolve();
        })
            .catch(err => {
                //signUpErrorCatcher(err, dispatch);
                return Promise.reject(err);
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

// export function updateProfile(user) {
//     return dispatch => {
//         dispatch(setLoading(true));
//         return axios({
//             method: 'patch',
//             url: 'me/',
//             data: user,
//             headers: {Authorization: getAuthHeader()}
//         })
//             .then((response) => {
//                 dispatch({
//                     type: GET_ACCOUNT_SUCCESS,
//                     data: response.data
//                 });
//                 dispatch(setSnackbar('Profile was updated'));
//                 dispatch(setLoading(false));
//             })
//             .catch(err => {
//                 errorCatcher(err, dispatch, 'Update went wrong')
//                 return Promise.reject(err)
//             });
//     };
// }

export const setLoading = (value) => {
    return (dispatch, getState) => {
        dispatch({type: SET_LOADING, data: value});
    }
};

export const displayMessage = (message) => {
    return function (dispatch) {
        dispatch(setSnackbar(message));
    }
};

export const setSnackbar = (message) => {
    return {
        type: SET_SNACKBAR,
        message
    }
};

export const clearSnackbar = (message) => {
    return {
        type: CLEAR_SNACKBAR,
    }
};

export const setHeaderTitle = title => dispatch => dispatch({type: CHANGE_HEADER_TITLE, data: title});

// export function emailConfirmStatus(params, getState) {
//     return dispatch => {
//         dispatch({
//             type: EMLCNF_STATUS_REQUEST,
//         });
//         dispatch(setLoading(true));
//         return axios({
//             method: 'GET',
//             url: 'auth/emlcnf-status/',
//             params,
//         })
//             .then((response) => {
//                 dispatch({
//                     type: EMLCNF_STATUS_SUCCESS,
//                     data: response.data.result
//                 });
//                 dispatch(setLoading(false));
//             })
//             .catch(err => {
//                 errorCatcher(err, dispatch)
//             });
//     }
// }
