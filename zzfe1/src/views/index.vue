<template>
	<div>

		<div class="Box">
			<div class="sele">
				<template class="el-link-st">
					<el-select v-model="value" placeholder="请选择数字">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</template>
				<template class="el-link-st">
					<el-select v-model="Symbol_val" placeholder="请选择符号">
						<el-option v-for="item in Symbol" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</template>
				<template class="el-link-st">
					<el-select v-model="valued" placeholder="请选择数字">
						<el-option v-for="item in optionsd" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</template>
				<el-button type="primary" @click="calculation()">执行</el-button>
			</div>
			<div class="bot">
				<p class="bot_l">执行结果:</p>
				<p class="bot_r">{{this.number?this.number:0}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'index',
		components: {

		},
		data() {
			return {
				options: [],
				value: '',
				optionsd: [],
				valued: '',
				Symbol: [{
					value: '+',
					label: '+'
				}, {
					value: '-',
					label: '-'
				}, {
					value: '*',
					label: '*'
				}, {
					value: '/',
					label: '/'
				}],
				Symbol_val: '',
				number: ''
			}
		},
		methods: {
			fn(i) {
				i = i / 2
				if (i > 2) {
					this.fn(i)
				}
				this.options.push({
					label: i.toString(),
					value: i
				})
			},
			fn3() {
				for (let i = 1; i <= 100; i++) {
					this.optionsd.push({
						label: i.toString(),
						value: i
					})
					// console.log(i)
				}
			},
			calculation() {
				if (this.Symbol_val === "+") {
					this.number = this.value + this.valued
				} else if (this.Symbol_val === "-") {
					this.number = this.value - this.valued
				} else if (this.Symbol_val === "*") {
					this.number = this.value * this.valued
				} else if (this.Symbol_val === "/") {
					this.number = this.value / this.valued
				}
				// console.log(this.value, this.valued, this.Symbol_val)
				// console.log(this.number)
			}
		},
		created() {
			this.fn(2048)
			this.fn3()
		}
	}
</script>
<style scoped>
	.Box {
		background-color: #F2F2F2;
		position: absolute;
		width: 910px;
		height: 330px;
		left: 271px;
		top: 174px;
	}

	.el-dropdown-link {
		cursor: pointer;
		color: #7D8087;
	}

	.el-icon-arrow-down {
		font-size: 12px;
	}

	.demonstration {
		display: block;
		color: #8492a6;
		font-size: 14px;
		margin-bottom: 20px;
	}

	.el-link-st {
		width: 224px;
		height: 40px;
		background-color: #FFFFFF;
		border: 1px solid #D8DCE6;
		box-sizing: border-box;
		border-radius: 4px;
		text-align: center;
		line-height: 40px;
	}

	.sele {
		width: 85%;
		height: 40px;
		display: flex;
		justify-content: space-around;
		margin: 40px auto;
		box-sizing: border-box;
	}

	.bot {
		position: absolute;
		width: 457px;
		height: 150px;
		left: 226px;
		top: 132px;
		background-color: #FFFFFF;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
		border-radius: 12px;
		display: flex;
		justify-content: space-around;
		text-align: center;
		align-items: center;
	}

	.bot_l {
		font-size: 25px;
		color: #888888;
	}

	.bot_r {
		font-size: 91px;
		margin: 0;
		color: #000000;


	}
</style>
