import axios from 'axios'
var isDevelopment = process.env.NODE_ENV === 'development'
var url = process.env.API_URL
const baseURL = isDevelopment ? 'http://0.0.0.0:8002/api/' : 'http://marke-publi-1o9yvwh9o6k4v-33506443.us-east-2.elb.amazonaws.com/api/'

const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: isDevelopment ? 10000000 : 1000000,
    headers: {
        'Authorization': (typeof localStorage !== "undefined" && localStorage.getItem('access_token') && (localStorage.getItem('access_token').length > 10)) ? "Bearer " + localStorage.getItem('access_token') : null,
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});


axiosInstance.interceptors.response.use(
    response => response,
    error => {
        const originalRequest = error.config;

        // Prevent infinite loops
        if (error && error.response && error.response.status === 401 && (originalRequest.url === '/main/token/refresh/' || originalRequest.url === 'main/token/refresh/')) {
            // window.location.href = '/login/';
            return Promise.reject(error);
        }

        if (error && error.response && error.response.status === 401) {
            const refreshToken = typeof localStorage !== "undefined" && localStorage.getItem('refresh_token');

            if (refreshToken) {
                const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

                // exp date in token is expressed in seconds, while now() returns milliseconds:
                const now = Math.ceil(Date.now() / 1000);
                console.log(tokenParts.exp);

                if (tokenParts.exp > now) {
                    return axiosInstance
                        .post('/main/token/refresh/', { refresh: refreshToken })
                        .then((response) => {
                            if (response && response.data) {
                                typeof localStorage !== "undefined" && localStorage.setItem('access_token', response.data.access);
                                typeof localStorage !== "undefined" && localStorage.setItem('refresh_token', response.data.refresh);
                                axiosInstance.defaults.headers['Authorization'] = "Bearer " + response.data.access;
                                originalRequest.headers['Authorization'] = "Bearer " + response.data.access;
                            }

                            return axiosInstance(originalRequest);
                        })
                        .catch(err => {
                            console.log(err)
                        });
                } else {
                    console.log("Refresh token is expired", tokenParts.exp, now);
                    // window.location.href = '/login/';
                }
            } else {
                console.log("Refresh token not available.")
                // window.location.href = '/login/';
            }
        } else {
            // window.location.href = '/login/';
        }

        // specific error handling done elsewhere
        return Promise.reject(error);
    }
);

export default axiosInstance