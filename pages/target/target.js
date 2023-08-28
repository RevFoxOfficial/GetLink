// <one line to give the program's name and a brief idea of what it does.>
// Copyright (C) 2023  RevFox
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

// pages/target/target.js

Page({
    data: {
        resultList: [{
            title: '正在加载',
            theme: 'default',
            description: '如果你长时间看到此内容，请尝试重新进入',
        },],
        disabled: true,
        text: '',
        text22: '点击下列按钮即代表你已同意用户协议和隐私政策',
        links: [
            [{
                name: '用户协议',
                url: '/pages/license/license',
                openType: 'navigate',
            },
                {
                    name: '隐私政策',
                    url: '/pages/privacy/privacy',
                    openType: 'navigate',
                },
                {
                    name: '开源相关',
                    url: '/pages/tdesignlicense/tdesignlicense',
                    openType: 'navigate',
                },
            ],
        ],
    },
    options: {
        styleIsolation: 'apply-shared',
    },
    onGoHome() {
        wx.reLaunch({
            url: '/pages/index/index',
        });
    },
    handleBack() {
        console.log('go back');
    },
    onLoad: function (options) {
        console.log(options);
        console.log(options.text);
        const pattern = /^(?:(?:https?|ftp):\/\/)?(?:www\.)?(?:[\w-]+\.)*(?:xn--(?:[\w-]+\.)+[\w-]{2,}|(?:[\w-]+\.)+[\w-]{2,})(?::\d{1,5})?(?:[/?#][^\s]*)?$/
        if (options.text.length == 0) {
            var oldList = this.data.resultList;
            oldList[0].description = "狐云问链没有接收到内容";
            oldList[0].title = "内容为空";
            oldList[0].theme = 'error';
            this.setData({
                resultList: oldList
            })
        } else if (!(pattern.test(options.text))) {
            var oldList = this.data.resultList;
            oldList[0].description = "狐云问链仅支持网址（不包括国际化域名）";
            oldList[0].title = "内容并非网址";
            oldList[0].theme = 'error';
            this.setData({
                resultList: oldList
            })
        } else {
            this.setData({
                text: options.text
            })
            var oldList = this.data.resultList;
            oldList[0].description = this.data.text;
            oldList[0].title = "复制链接后请粘贴至浏览器";
            oldList[0].theme = 'success';
            var dis = false;
            this.setData({
                resultList: oldList,
                disabled: dis
            })
        }
    },
    onTap: function () {
        wx.setClipboardData({
            data: this.data.text,
            success: function (res) {
            },
            fail: function (res) {
            }
        })
    },
    onTapTwo: function () {
        wx.setClipboardData({
            data: this.data.text,
            success: function (res) {
            },
            fail: function (res) {
            }
        })
        wx.exitMiniProgram({
            success: (res) => {
            }
        })
    }
});