<template>
	<div class="flex-y-center">
		<span>{{now}}</span>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				year: '',
				month: '',
				day: '',
				hour: '',
				mint: '',
				sec: ''
			}
		},
		mounted() {
			this.recTime()
		},
		methods: {
			recTime() {
				var date = new Date()
				this.year = date.getFullYear()
				this.month = date.getMonth() + 1
				this.day = date.getDate()
				this.hour = leftpad(date.getHours(), 2, 0)
				this.mint = leftpad(date.getMinutes(), 2, 0)
				this.sec = leftpad(date.getSeconds(), 2, 0)
				setTimeout(this.recTime, 500)
			}			
		},
		computed: {
			now: function() {
				return this.year 
						+ '-' 
						+ this.month 
						+ '-' 
						+ this.day 
						+ ' ' 
						+ this.hour
						+ '-'
						+ this.mint
						+ '-'
						+ this.sec
			}
		}
	}
</script>