/**
 * 判断ISO,Andrio, 网页
 */
function isiOSApp() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["ios_app"];
    var flag = false;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = true;
            break;
        }
    }
    return flag;
}

if (isiOSApp()) {
    window.webkit.messageHandlers.nav.postMessage('hide');
}

/**
 * 定义命名空间
 */
var Ccp = window.Ccp = {}


/**
 * 惰性加载单体
 */
Ccp.Common = (function () {
    var uniqueInstance

    function constructor() {
        // 私有属性
        var privateAttr1 = 1

        // 私有方法
        /**
         * rem适配
         */
        function resize() {
            var deviceWidth = document.documentElement.clientWidth
            if (deviceWidth >= 750) deviceWidth = 750
            document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
        }

        return {
            publicAttr1: 'public-attr1',
            init: function () {
                // 初始化
                resize()
            }
        }
    }

    return {
        getInstance: function () {
            if (!uniqueInstance)
                uniqueInstance = constructor()
            return uniqueInstance
        }
    }

})()


// 调用
// Ccp.Common.getInstance().pubMethod1()
Ccp.Common.getInstance().init()
window.onorientationchange = window.onresize = function () {Ccp.Common.getInstance().init()}

window.onload = function(){
    mui('#nav-bar').on('tap', 'a', function() {
        var href = this.getAttribute('href');
        
        //非plus环境，直接走href跳转
        if(!mui.os.plus) {
            location.href = href;
            return;
        }
    })

    mui('.mui-table-view').on('tap', 'a', function() {
        var href = this.getAttribute('href');
        
        //非plus环境，直接走href跳转
        if(!mui.os.plus) {
            location.href = href;
            return;
        }
    })
}