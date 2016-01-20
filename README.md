# component_pointSliding
组件名称：点滑动<br>
组件功能：完成支持不同分段点的滑动事件，包括有图或无图类型<br>
组件参数：

有图类型的引用:<br/>
注意点:同个区块里面的图片width,height最好相同，可以实现图片的无缝切换<br/>
$.pointSliding({

            //类型标示符(有图类型or无图类型)
            hasImg: true,

            //分段点(滑动区域的分段点,可动态配置)
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
        
无图类型的引用:<br/>
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
