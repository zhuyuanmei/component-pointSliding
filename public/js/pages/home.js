/**
 * 移动官网
 * @since 2015.12.25
 */
define(function (require, exports, module) {
    //'点滑动'模块
    if($('#J_Gap').length){
        var PointSliding  = require('pointSliding');

        //有图模式
        $.pointSliding({
            //类型标示符(有图类型or无图类型)
            hasImg: true,

            //分段点(滑动区域的分段点)
            pointsNumber: 3,

            //冒泡区域对象字串
            triggerObjStr: '.J_GapItems',

            //title对象字串
            titleObjStr: '.J_ItemName',

            //有图类型的图片对象字串
            imgObjStr: '.J_CurrentImg',

            //滑动区域对象字串
            sliderObjStr: '.J_ItemSlider',

            //滑动点父节点对象字串
            pointParentObjStr: '.J_SliderBar',

            //滑动点对象字串
            pointObjStr: '.J_SliderPoint'
        });

        //无图模式
        $.pointSliding({
            //类型标示符(有图类型or无图类型)
            hasImg: false,

            //分段点(滑动区域的分段点)
            pointsNumber: 3,

            //冒泡区域对象字串
            triggerObjStr: '.J_GapItems',

            //title对象字串
            titleObjStr: '',

            //无图类型的高亮对象字串
            highLightObjStr: '.J_CurrentItem',

            //滑动区域对象字串
            sliderObjStr: '.J_ItemSlider1',

            //滑动点父节点对象字串
            pointParentObjStr: '.J_SliderBar1',

            //滑动点对象字串
            pointObjStr: '.J_SliderPoint1'
        });
    }
});