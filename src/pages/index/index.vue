<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	import { mapMutations, mapState } from 'vuex';
	import { USER_INFO } from '@/store/mutation_type';
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		computed: {
            ...mapState({
                user: state => state.user,
			}),
		},
		onLoad() {
			this[USER_INFO]({
				accessToken: '',
				isLogin: '',
			});
		},
		methods: {
			...mapMutations([
                'USER_INFO',
            ]),
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
