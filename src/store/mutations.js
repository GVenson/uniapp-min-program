import { USER_INFO, WX } from './mutation_type';

export default {
    [USER_INFO](state, value) {
        console.log('USER_INFO', value);
        for (const key in value) {
            if (value.hasOwnProperty(key)) {
                state.user[key] = value[key];
            }
        }
    },
    [WX](state, value) {
        state.wx = value;
    },
};
