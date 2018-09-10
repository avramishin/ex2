<template>
	<div>
		<md-field>
			<label>Сумма</label>
			<md-input v-model="amount"></md-input>
			<span class="md-suffix">{{currency}}</span>
		</md-field>
		<md-field>
			<label>Внешний адрес</label>
			<md-input v-model="address"></md-input>
		</md-field>
		<div class="text-align">
			<md-button class="md-raised md-primary">Сканировать QR-код</md-button>
		</div>
		<md-field>
			<label>Комментарии</label>
			<md-input v-model="comment"></md-input>
		</md-field>
		<div style="text-align: center;">
			<md-button class="md-raised md-primary">Подать заявку</md-button>
		</div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				amount: 100,
				currency : 'UAH',
				address : '',
				comment : '',
			}
		},

		created(){
			this.currency = this.$route.params.currency;
		}
	}

</script>
<style>



</style>