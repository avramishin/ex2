const utils = {
    object: {
        defaults: require('object.defaults')
    }
}

export default {
    install (Vue, options) {

        const me = {
            sessionId: '',
            baseurl: options.baseurl,

            setSessionId (sid) {
                me.sessionId = sid;
            },

            usersLogin(params = {}) {
                //return me._wrap(Vue.http.get(`${me.baseurl}/users/login`, {params: params}))
                return me._wrap(Vue.http.post(`${me.baseurl}/users/login`, me._fd(params)))
            },

            settingsList () {
                return me._wrap(Vue.http.get(`${me.baseurl}/settings/list`))
            },

            usersProfile (params = {}) {
                utils.object.defaults(params, {session_id: me.sessionId});
                return me._wrap(Vue.http.post(`${me.baseurl}/users/profile`, me._fd(params)))
            },

            exchangeWalletsList(params = {}) {
                utils.object.defaults(params, {session_id: me.sessionId});
                return me._wrap(Vue.http.post(`${me.baseurl}/exchange/wallets/list`, me._fd(params)))
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
            },

            _fd(object) {
                let formData = new FormData();
                Object.keys(object).map(function (objectKey, index) {
                    formData.append(objectKey, object[objectKey]);
                });
                return formData;
            }
        };

        Vue.prototype.$api = me;
    }
}