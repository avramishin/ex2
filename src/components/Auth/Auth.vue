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

        </md-card-content>

        <md-card-actions>
            <md-button class="button" @click="login">Login</md-button>
        </md-card-actions>
    </div>
</template>

<style scoped>

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