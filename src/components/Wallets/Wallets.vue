<template>
    <div>
        <md-list class="md-double-line">
            <md-list-item v-for="wallet in remote.wallets" :key="wallet.id">
                <md-icon class="cf" :class="getCurrencyClass(wallet.currency)"></md-icon>

                <div class="md-list-item-text">
                    <span>{{numeral(wallet.balance,'0.00000')}} {{wallet.currency}}</span>
                    <span>${{ numeral(wallet.usd_equivalent,'0.00') }}</span>
                </div>

                <md-button class="md-icon-button md-list-action">
                    <md-icon>payment</md-icon>
                </md-button>
            </md-list-item>
        </md-list>
    </div>

</template>

<style>
    .text-right {
        text-align: right;
    }
</style>

<script>
    const numeral = require('numeral');

    export default {
        props: ['remote', 'toolbar'],

        methods: {
            getCurrencyClass(currency) {
                if (currency == 'BCH') {
                    return 'cf-btc-alt';
                } else {
                    return 'cf-' + currency.toLowerCase();
                }
            },

            numeral(value, format){
                return numeral(value).format(format);
            }
        },

        data ()
        {
            return {}
        },

        mounted()
        {
            const me = this;
            this.toolbar.title = 'Wallets List';
            me.$api.exchangeWalletsList({btype: 'REAL'}).then(function (response) {
                me.remote.wallets = response.wallets;
            }).catch(function (error) {
                me.$emit('error', error);
            });
        }
    }
</script>