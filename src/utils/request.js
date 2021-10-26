import store from '@/store';

// const HOST = 'https://msp.rocksdata.com/api/';
// const HOST = 'http://192.168.1.108:2004/api/';
// const HOST = 'http://www.rocksdata.com:2002/api/';
const HOST = 'https://oa.lzsjtxx.com:8008/api/';

async function request({ url, method = 'GET', params, data, headers = {}, }) {
    console.log('store', store.state.user.accessToken);
    let paramsStr = '?';
    if (params != undefined && Object.keys(params).length > 0) {
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                const element = params[key];
                paramsStr += `${key}=${element}&`;
            }
        }
    }

    if (store.state.user.accessToken !== null) {
        headers['Authorization'] = 'Bearer ' + store.state.user.accessToken;
    }
    console.log('headers', headers);

    return new Promise((resolve, reject) => {
        uni.request({
            url: `${HOST}${url}${paramsStr}`,
            method: method,
            data: data,
            header: headers,
            success(response) {
                // console.log('success', response);
                if (response.statusCode === 200 && response.data.errorCode === 200) {
                    resolve(response.data.data);
                } else {
                    console.log('reject', response);
                    reject(response.data.errorMsg);
                    setTimeout(() => {
                        uni.showToast({
                            title: response.data.errorMsg,
                            icon: 'none',
                            mask: true,
                            duration: 2000,
                        });
                    }, 0);
                }
            },
            fail(error) {
                console.log('fail');
                console.log(error);
                // reject(Error(false));
            },
        });
    });
}

export default request;
