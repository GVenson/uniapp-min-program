import request from '@/utils/request';

export async function getUserInfo() {
    const response = await uni.login({
        scopes: 'auth_base',
    });
    const code = response[1].code;
    console.log('JScode', code);
    // const code = 1;
    return request({
        url: 'v2/applets/getUserInfo',
        method: 'GET',
        params: {
            code,
        },
    });
};