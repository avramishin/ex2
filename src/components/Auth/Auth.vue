<template>
    <div>
        <md-card-content>
            <md-field md-clearable>
                <label>Username</label>
                <md-input v-model="username"></md-input>
            </md-field>

            <md-field :class="{'md-invalid' : error}">
                <label>Password</label>
                <md-input v-model="password" type="password"  @keyup.enter="login"></md-input>
                <span class="md-error" v-if="error">{{error}}</span>
            </md-field>

            <md-card-actions class="no-padding">
                <md-button class="w-100-button" @click="login">Login</md-button>
            </md-card-actions>

        <div class="space-between">
            <div>
                <router-link to="/auth/reset">
                    Забыли пароль?
                </router-link>
            </div>
            <div>
                <router-link to="/auth/registration">
                    Регистрация
                </router-link>
            </div>
        </div>

        </md-card-content>




    </div>
</template>

<style scoped>

.no-padding {
    padding: 0;
}

.space-between {
    display: flex;
    justify-content: space-between;
    margin: 20px 0 0 0; 
}

</style>

<script>
    const storage = window.localStorage;
    export default {

        props: ['remote', 'toolbar'],

        methods: {
            login: function () {
                const me = this;

                me.error = '';
                me.$api.usersLogin({
                    email: me.username,
                    password: me.password
                }).then(function(response) {
                    me.remote.sessionId = response.session_id;
                    me.remote.userId = response.user_id;
                    storage.setItem('username', me.username);
                    me.$router.push({
                        path : '/wallets/list'
                    });
                }).catch(function (error) {
                    me.error = error;
                });
            }
        },

        data () {
            return {
                username: '',
                password: '',
                error: ''
            }
        },

        created() {
            const username = storage.getItem('username');

            this.toolbar.title = 'Authentication';
            if (username) {
                this.username = username;
            }

            this.remote.sessionId = null;
        }
    }
</script>