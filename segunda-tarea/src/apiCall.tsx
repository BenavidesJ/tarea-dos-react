import axios from "axios";

const Key = "142fbc981689d9f074c4508d50aef3fc";

export default axios.create({
    baseURL:'https://api.themoviedb.org/3',
    params: {
        q: '',
        api_key: Key
    }
})