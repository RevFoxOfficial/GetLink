// index.js
// 获取应用实例
import Message from 'tdesign-miniprogram/message/index';


Component({
    methods: {
        onInput: function (event) {
            this.setData({
                text: event.detail.value
            })
        }, handleBack() {
            console.log('go back');
        }, onTap: function () {
            let len = this.data.text
            if (len.length == 0) {
                Message.error({
                    context: this, offset: [20, 32], duration: 1500, content: '不可为空，请输入链接', closeBtn: true,
                });
            } else if (len.length != 0) {
                wx.navigateTo({
                    url: '/pages/target/target?text=' + len,
                })
            }
        }, onTap2: function () {
            wx.exitMiniProgram({
                success: (res) => {
                }
            })
        }
    }, options: {
        styleIsolation: 'apply-shared',
    }, data: {
        style: 'border: 2rpx solid rgba(220,220,220,1);border-radius: 12rpx;',
        text: '',
        text2: '©️ 2023-20XX 请开发者自行补充版权信息',
        links: [[{
            name: '用户协议', url: '/pages/license/license', openType: 'navigate',
        }, {
            name: '隐私政策', url: '/pages/privacy/privacy', openType: 'navigate',
        }, {
            name: '开源相关', url: '/pages/tdesignlicense/tdesignlicense', openType: 'navigate',
        },],],
        resultList: [{
            title: '仅支持微信公众平台用户',
            theme: 'default',
            description: '狐云问链微信小程序仅支持微信公众平台用户从公众平台后台使用，无法直接打开小程序使用',
        },],
    },

});