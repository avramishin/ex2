export default {
    install (Vue, options) {

        const me = {
            sessionId: '',
            baseurl: options.baseurl,

            setSessionId (sid) {
                me.sessionId = sid;
            },

            usersLogin(params = {}) {
                return me._wrap(Vue.http.get(`${me.baseurl}/users/login`, {params: params}))
            },

            settingsList () {
                return me._wrap(Vue.http.get(`${me.baseurl}/settings/list`))
            },

            usersProfile (params = {}) {
                params.session_id = me.sessionId;
                return me._wrap(Vue.http.get(`${me.baseurl}/users/profile`, {params: params}))
            },

            walletsWithdrawalsSave (params) {
                params.session_id = me.sessionId;
                return me._wrap(Vue.http.get(`${me.baseurl}/wallets/withdrawals/save`, {params: params}))
            },

            walletsDepositsSave(params) {
                params.session_id = me.sessionId;
                return me._wrap(Vue.http.get(`${me.baseurl}/wallets/deposits/save`, {params: params}))
            },

            // Wrap http call in promise and return data section, watch for errors
            _wrap (request) {
                return new Promise((resolve, reject) => {

                    request.then(response => {
                        if (response['data'].error) {
                            reject(response['data'].error)
                        } else {
                            resolve(response['data'].data)
                        }

                    }, response => {
                        console.log(response);
                        reject(response['data'].error ? response['data'].error : "General Server Error")
                    })
                })
            }
        };

        Vue.prototype.$api = me;
    }
}