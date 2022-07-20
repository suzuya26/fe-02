import axios from "axios";
import jwtDecode from 'jwt-decode';

export const GET_CURRENT_NOTIF = "GET_CURRENT_USER";

export const getCurrentNotif = () => {
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    const idcurrent = decoded.id

    console.log("2. Masuk actions")
    return (dispatch) => {

        // dipanggil saat loading
        dispatch({
            type: GET_CURRENT_NOTIF,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // dipanggil saat get data
        axios({
            method: 'GET',
            url: `https://secondhand-kelompok2.herokuapp.com/api/v1/gettotalpenawaran/${idcurrent}`,
            headers:{Authorization: 'Bearer ' + token},
            timeout: 120000
        }).then((response) => {
            console.log("3. Berhasil ambil data ", response.data)
            // berhasil get data
            dispatch({
                type: GET_CURRENT_NOTIF,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        }).catch((error) => {
            console.log("3. Gagal ambil data ", error)
            // gagal get data
            dispatch({
                type: GET_CURRENT_NOTIF,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
    }
}