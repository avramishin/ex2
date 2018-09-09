<template>
    <div>
        <div>
            <div class="card">
                <div class="balance">0,19 {{currency}}</div>
                <div class="button3">
                    <div>
                        <md-button class="md-dense md-primary button2">Deposit</md-button>
                    </div>
                    <div>
                        <md-button class="md-dense md-primary button2">Withdraw</md-button>
                    </div>
                    <div>
                        <md-button class="md-dense md-primary button2" @click="openExchange(currency)">Exchange</md-button>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item in history">
            <div class="date">{{item.datetime}}</div>
            <div class="balance1">
                <span :class="poluchitKlassZnacheniya(item.amount)">{{item.amount}}</span>
                <span class="currency">{{item.currency}}</span>
                <div class="card1 gc">{{item.text}}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .negative {
        color: red;
    }

    .positive {
        color: green;
    }

    .balance {
        text-align: center;
        font-size: 35px;
        margin-top: 50px;
        margin-bottom: 50px;
    }

    .button3 {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .button2 {
        color: #F7F7EF !important;
        border: 1px solid white;
        margin: 0;
        border-radius: 5px;
        margin-bottom: 10px;
        background-color: transparent;
    }

    .currency {
        font-size: 15px;
    }

    .date {
        font-size: 10px;
        text-align: end;
        margin-top: 10px;
    }

    .balance1 {
        font-size: 20px;
    }

    .card1 {
        font-size: 15px;
        border-bottom: 1px solid #dbd9ca;
        padding-bottom: 5px;
    }

</style>

<script>
    export default{
        methods: {
            openExchange(currency){
                this.$router.push({
                    path: `/exchange/${currency}`
                });
            },

            poluchitKlassZnacheniya: function (amount) {
                if (amount < 0) {
                    return 'negative';
                } else {
                    return 'positive';
                }
            }
        },

        props: ['remote', 'toolbar'],

        data () {
            return {
                currency: this.$route.params.currency,
                history: [
                    {
                        amount: 100.25,
                        currency: 'WMZ',
                        datetime: '2018.09.04 13:45:45',
                        text: 'покупка в магазине зара'
                    },
                    {
                        amount: -85.46,
                        currency: 'WMR',
                        datetime: '2018.09.03 13:45:27',
                        text: 'продукты АТБ'
                    },
                    {
                        amount: 0.44,
                        currency: 'WMR',
                        datetime: '2018.09.03 13:45:39',
                        text: 'бухло на барабахе'
                    }
                ]

            }
        },
        created(){
            this.toolbar.title = `${this.currency} History`;
        }
    }
</script>
