import axios from "axios";

export const GET_LIST_KATEGORI = "GET_LIST_KATEGORI";

export const getListKategori = () => {
    console.log("2. Masuk actions kategori")
    return (dispatch) => {

        // dipanggil saat loading
        dispatch({
            type: GET_LIST_KATEGORI,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // dipanggil saat get data
        axios({
            method: 'GET',
            url: 'https://secondhand-kelompok2.herokuapp.com/api/v1/homekategori',
            timeout: 120000
        }).then((response) => {
            console.log("3. Berhasil ambil data kategori ", response.data)
            // berhasil get data
            dispatch({
                type: GET_LIST_KATEGORI,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        }).catch((error) => {
            console.log("3. Gagal ambil data kategori", error)
            // gagal get data
            dispatch({
                type: GET_LIST_KATEGORI,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
    }
}