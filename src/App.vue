<template>
    <md-app>
        <md-app-toolbar class="md-primary" v-if="toolbar.visible">
            <md-button class="md-icon-button" v-if="toolbar.menu" @click="drawer.isOpen = !drawer.isOpen">
                <md-icon>menu</md-icon>
            </md-button>
            <span class="md-title">Exchange</span>
        </md-app-toolbar>
        <md-app-drawer :md-active.sync="drawer.isOpen">
            <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>
            <md-list>
                <md-list-item>
                    <md-icon>move_to_inbox</md-icon>
                    <router-link tag="span" class="md-list-item-text" to="/wallets/list">Wallets</router-link>
                </md-list-item>

                <md-list-item>
                    <md-icon>send</md-icon>
                    <span class="md-list-item-text">Sent Mail</span>
                </md-list-item>

                <md-list-item>
                    <md-icon>delete</md-icon>
                    <span class="md-list-item-text">Trash</span>
                </md-list-item>

                <md-list-item>
                    <md-icon>error</md-icon>
                    <span class="md-list-item-text">Spam</span>
                </md-list-item>
            </md-list>
        </md-app-drawer>
        <md-app-content>
            <router-view :remote.sync="remote" :appReady="ready"></router-view>
        </md-app-content>
    </md-app>
</template>
<script>
    const storage = window.localStorage;

    export default {
        methods: {},
        components: {},

        watch: {
            'remote.sessionId': function (val) {
                this.$api.setSessionId(val);
                storage.setItem('sessionId', val);
            }
        },

        data () {
            return {
                ready: null,

                toolbar: {
                    visible: true,
                    menu: true
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
            me.ready = new Promise((resolve, reject) => {
                me.$api.settingsList().then((response) => {
                    me.remote.settings = response;
                }).then(() => {
                    if (!me.remote.sessionId) {
                        reject();
                        return me.$router.push({
                            path: 'auth'
                        });
                    }
                    me.$api.setSessionId(me.remote.sessionId);
                    me.$api.usersProfile({btype: 'REAL'}).then((response) => {
                        me.remote.profile = response;
                        resolve();
                    }).catch(() => {
                        reject();
                        return me.$router.push({
                            path: '/auth'
                        });
                    });
                });
            });
        }
    }
</script>

<style lang="scss">

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
