/**
 * rem适配
 */
function resize() {
    var deviceWidth = document.documentElement.clientWidth
    if(deviceWidth >= 750) deviceWidth = 750
    document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
}

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

window.onorientationchange = window.onresize = function(){
	resize()
}
resize();

if(isiOSApp()){
    window.webkit.messageHandlers.nav.postMessage('hide');
}