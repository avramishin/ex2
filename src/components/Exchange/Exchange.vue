<template>
  <div>
    <div class="md-layout space-around">
      <div class="md-layout-item md-size-40">
        <md-field>
          <md-select v-model="srcCurrency">
            <md-option value="USD">USD</md-option>
            <md-option value="BTC">BTC</md-option>
            <md-option value="ETH">ETH</md-option>
          </md-select>
        </md-field>
      </div>

      <div class="md-layout-item md-size-20">
        <md-button class="md-icon-button">
          <md-icon>compare_arrows</md-icon>
        </md-button>
      </div>

      <div class="md-layout-item md-size-40">
        <md-field>
          <md-select v-model="dstCurrency">
            <md-option value="USD">USD</md-option>
            <md-option value="BTC">BTC</md-option>
            <md-option value="ETH">ETH</md-option>
          </md-select>
        </md-field>
      </div>
    </div>

    <div class="md-layout space-between">
      <div class="md-layout-item md-size-45">
        <div>You pay</div>
        <number-input :value="0" center controls size="small"></number-input>
      </div>

      <div class="md-layout-item md-size-45">
        <div>You receive</div>
        <number-input :value="0" center controls size="small"></number-input>
      </div>
    </div>

    <div class="md-layout space-between order-type-container">
      <div class="md-layout-item md-size-45">
        <md-switch v-model="orderType" value="LIMIT">Limit Order</md-switch>
      </div>

      <div class="md-layout-item md-size-45">
        <div>Price</div>
        <number-input :value="0" center controls size="small"></number-input>
        <div class="wlo">
          <a href="javascript:void(0);" @click="whatis = true">What is Limit Order?</a>
        </div>
      </div>
    </div>
    <div>
      <md-button class="md-raised md-primary w-100 exchange-button">exchange</md-button>
    </div>

    <md-dialog-alert
      :md-active.sync="whatis"
      md-title="Post created!"
      md-content="Your post <strong>Material Design is awesome</strong> has been created."
    />
  </div>
</template>

<style scoped>
.wlo {
  font-size: 10px;
  padding-top: 5px;
}

.exchange-button {
  margin: 20px 0 0 0;
}

.w-100 {
  width: 100%;
}

.order-type-container {
  margin-top: 20px;
}

.space-around {
  justify-content: space-around;
}

.space-between {
  justify-content: space-between;
}

.swap {
  color: #448aff !important;
}
</style>

<script>
import VueNumberInput from '@chenfengyuan/vue-number-input'

export default {
  props: ['remote', 'toolbar'],
  components: {
    'number-input': VueNumberInput
  },
  methods: {
    setSrcMinAmount: function() {
      this.srcAmount = this.srcMinAmount
    },

    setSrcMaxAmount: function() {
      this.srcAmount = this.srcMaxAmount
    }
  },

  data() {
    return {
      whatis: false,
      limitRate: 2092.0,
      marketRate: 1092.0,
      orderType: 'MARKET',
      menuVisible: false,
      srcMinAmount: 0.1,
      srcMaxAmount: 100.18,
      srcCurrency: 'USD',
      srcAmount: 100,
      dstMinAmount: 0.1,
      dstMaxAmount: 100.18,
      dstCurrency: 'ETH',
      dstAmount: 100
    }
  },

  created() {
    this.toolbar.title = `Exchange ${this.srcCurrency}`
  }
}
</script>
