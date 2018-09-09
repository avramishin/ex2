<template>
	<div>
		<div class="md-layout">
			<div class="md-layout-item">

				<md-field>
					<md-input v-model="srcAmount"></md-input>
					<span class="md-helper-text">от <a @click="setSrcMinAmount" href="#">{{srcMinAmount}}</a> до <a @click="setSrcMaxAmount" href="#">{{srcMaxAmount}}</a></span>
				</md-field>

			</div>

			<div class="md-layout-item md-size-10 md-xsmall-size-30">
				<md-field>
					<md-select v-model="srcCurrency">
						<md-option value="USD">USD</md-option>
						<md-option value="BTC">BTC</md-option>
						<md-option value="ETH">ETH</md-option>
					</md-select>
				</md-field>

			</div>
		</div>

		<div class="d-flex justify-content-end">
			<div>
				<md-icon class="swap md-size-2x">swap_vert</md-icon>
			</div>

		</div>

		<div class="md-layout">
			<div class="md-layout-item">

				<md-field>
					<md-input v-model="dstAmount"></md-input>
					
				</md-field>

			</div>

			<div class="md-layout-item md-size-10 md-xsmall-size-30">
				<md-field>

					<md-select v-model="dstCurrency">
						<md-option value="USD">USD</md-option>
						<md-option value="BTC">BTC</md-option>
						<md-option value="ETH">ETH</md-option>
					</md-select>
				</md-field>

			</div>
		</div>

		<md-field>
			<label for="movie">Order Type</label>
			<md-select v-model="orderType">
				<md-option value="MARKET">Market</md-option>
				<md-option value="LIMIT">Limit</md-option>
			</md-select>
		</md-field>


		<div class="md-layout">
			
			<div class="md-layout-item">
				<div v-if="orderType=='MARKET'">
					<md-field>
						<label>Market Rate</label>
						<md-input v-model="marketRate" readonly></md-input>
					</md-field>
				</div>
				<div v-if="orderType=='LIMIT'">
					<md-field>
						<label>Specify Limit Rate</label>
						<md-input v-model="limitRate"></md-input>
					</md-field>
				</div>
			</div>
		</div>

		
		

		<div> <md-button class="button">OK</md-button></div>

	</div>
</template>

<style scoped>

.swap {
	color: #448aff !important;  
}


</style>

<script>
	export default{
		methods : {
			setSrcMinAmount: function () {
				this.srcAmount = this.srcMinAmount;
			},

			setSrcMaxAmount: function () {
				this.srcAmount = this.srcMaxAmount;
			}
		},

		data () {
			return {
				limitRate : 2092.00,
				marketRate : 1092.00,
				orderType : "MARKET",
				menuVisible : false,
				srcMinAmount : 0.1,
				srcMaxAmount : 100.18,
				srcCurrency : 'USD',
				srcAmount : 100,
				dstMinAmount : 0.1,
				dstMaxAmount : 100.18,
				dstCurrency : 'ETH',
				dstAmount : 100,

			}
		}
	}
</script>