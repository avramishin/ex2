<template>
    <md-app>
        <md-app-toolbar class="md-primary" v-if="toolbar.visible">
            <md-button class="md-icon-button" v-if="toolbar.menu" @click="drawer.isOpen = !drawer.isOpen">
                <md-icon>menu</md-icon>
            </md-button>
            <span class="md-title">{{toolbar.title}}</span>
        </md-app-toolbar>
        <md-app-drawer :md-active.sync="drawer.isOpen">
            <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>
            <md-list @click="drawer.isOpen = !drawer.isOpen">
                <md-list-item>
                    <md-icon>speaker_notes</md-icon>
                    <router-link tag="span" class="md-list-item-text pointer" to="/wallets/list">Wallets</router-link>
                </md-list-item>
                <md-list-item>
                    <md-icon>exit_to_app</md-icon>
                    <router-link tag="span" class="md-list-item-text pointer" to="/auth">Logout</router-link>
                </md-list-item>
            </md-list>
        </md-app-drawer>
        <md-app-content>
            <router-view :remote.sync="remote" :toolbar.sync="toolbar" @error="onError"></router-view>
            <md-snackbar :md-position="snackBar.position" :md-duration="snackBar.duration" :md-active.sync="snackBar.isOpen" md-persistent>
                <span>{{snackBar.message}}</span>
                <md-button class="md-primary" @click="snackBar.isOpen = false">OK</md-button>
            </md-snackbar>
        </md-app-content>
    </md-app>
</template>
<script>
    const storage = window.localStorage;

    export default {
        methods: {

            onError: function (message) {
                this.snackBar.message = message;
                this.snackBar.isOpen = true;
            },

            loadProfile: function () {
                let me = this;
                me.$api.usersProfile({btype: 'REAL'}).then((response) => {
                    me.remote.profile = response;
                }).catch(() => {
                    return me.$router.push({
                        path: '/auth'
                    });
                });
            }
        },
        components: {

        },

        watch: {
            'remote.sessionId': function (val) {
                this.$api.setSessionId(val);
                storage.setItem('sessionId', val);
            }
        },

        data () {
            return {
                snackBar : {
                    position : 'center',
                    duration : 5000,
                    message : '',
                    isOpen : false
                },
                toolbar: {
                    visible: true,
                    menu: true,
                    title : 'Home'
                },

                drawer: {
                    isOpen: false
                },

                remote: {
                    sessionId: storage.getItem("sessionId"),
                    userId: 0,
                    settings: {},
                    profile: {},
                    wallets: []
                }
            }
        },

        created () {
            const me = this;

            if (!me.remote.sessionId) {
                return me.$router.push({
                    path: 'auth'
                });
            }

            me.$api.setSessionId(me.remote.sessionId);
            me.$api.settingsList().then(function (response) {
                me.remote.settings = response;
            }).then(function () {
                me.loadProfile();
            });
        }
    }
</script>

<style lang="scss">

.pointer {
    cursor: pointer;
}

.md-app {
    min-height: 100vh;
}

.gc {
    color: #8E8F8A;
}

.d-flex {
    display: flex;
}

.justify-content-end {
    justify-content: flex-end;
}

.justify-content-center {
    justify-content: center;
}

.inform {
    font-family: 'Tahoma, Helvetica, Arial, sans-serif';
    color: #448aff;
    margin-top: 30px;
    margin-bottom: 15px;
}

.card {
    margin-bottom: 20px;
    color: white;
    border: 1px solid black;
    border-radius: 10px;
    background-image: url("./assets/card-back.png");
    background-size: contain;
}

.wallet-number {
    font-size: 30px;
    margin: 10px;
}

.button {
    text-transform: none;
    font-size: 15px;
    margin: 0;
    margin-top: 15px;
    color: white !important;
    background-color: #448aff;
    width: 100%;
}

.md-title {
    text-align: center;
    color: #423e3e;
    font-size: 15px !important;
}

</style>
