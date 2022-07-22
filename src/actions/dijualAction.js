import axios from "axios";
import jwtDecode from "jwt-decode";

export const GET_LIST_DIJUAL = "GET_LIST_DIJUAL";

export const getListDijual = () => {
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    const idpenjual = decoded.id
    console.log("2. Masuk actions")
    return (dispatch) => {

        // dipanggil saat loading
        dispatch({
            type: GET_LIST_DIJUAL,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // dipanggil saat get data
        axios({
            method: 'GET',
            url: `https://secondhand-kelompok2.herokuapp.com/api/v1/getprodukdijual/${idpenjual}`,
            headers:{Authorization: 'Bearer ' + token},
            timeout: 120000
        }).then((response) => {
            console.log("3. Berhasil ambil data dijual ", response.data)
            // berhasil get data dijual
            dispatch({
                type: GET_LIST_DIJUAL,
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
                type: GET_LIST_DIJUAL,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
    }
}