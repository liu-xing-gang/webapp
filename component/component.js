//遵循 W3C 规则 (小写，并且包含一个短杠)

/**
 * ========================================
 * 组件名称: screen-layer
 * ========================================
 * 功能说明: 订单查询组件
 * ========================================
 * 作者    : Liu Xinggang
 * ======================================== 
 */
Vue.component('screen-layer', {
    props: {
        // a: Boolean
        data: Array,
        show: Boolean,
    },
    // template: '<div>{{a}} {{b}}</div>',
    template: '#test',
    data: function () {
        return {
            // b: 'b'
            // show: this.show
        }
    },
    
})