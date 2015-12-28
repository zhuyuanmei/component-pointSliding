/**
 * 点滑动模块
 * @author zym
 * @version 1.0
 * @since 2015-12-25 圣诞节
 */

define(function(require, exports, module) {
    var PointSliding = function(options) {
        this.settings = $.extend({}, PointSliding.defaults, options);
        this.init();
    };

    PointSliding.prototype = {
            /**
             * 初始化
             */
            init : function() {
                this.create();
            },

            /**
             * 创建
             */
            create : function() {
                var _this = this;

                var leftVal = $(_this.settings.pointParentObjStr).offset().left;
                _this.minOffsetX  = parseInt($(_this.settings.pointObjStr).css('width'))/2;
                _this.maxOffsetX  = ($(window).width() - (leftVal*2)).toFixed(0);
                _this.rangeWidth  = (_this.maxOffsetX - _this.minOffsetX) / (_this.settings.pointsNumber - 1);

                //渲染初始化状态
                $(_this.settings.sliderObjStr).each(function(i,n){
                    var range = parseInt($(n).attr('data-curValue'))-1;
                    $(n).find(_this.settings.pointObjStr).css({'left':range * _this.rangeWidth});

                    if(_this.settings.hasImg){
                        $(n).siblings().find(_this.settings.imgObjStr).hide();
                        $(n).siblings().find(_this.settings.imgObjStr).eq(range).show();

                        $(n).attr('data-name',$(n).siblings(_this.settings.titleObjStr).text());
                    }else{
                        $(n).find(_this.settings.highLightObjStr).eq(_this.settings.pointsNumber-1).css('text-align','right');

                        $(n).find(_this.settings.highLightObjStr).removeClass('high-light');
                        $(n).find(_this.settings.highLightObjStr).eq(range).addClass('high-light');
                    }
                });

                // 事件绑定
                _this.bindEvent();
            },

            /**
             * 获取坐标点
             */
            fixOffsetX : function(offsetX) {
                var _this = this;

                offsetX -= $(_this.settings.pointParentObjStr).offset().left;

                if (offsetX < 0) {
                    offsetX = 0;
                }

                if (offsetX > _this.maxOffsetX) {
                    offsetX = _this.maxOffsetX;
                }

                return offsetX;
            },

            /**
             * 事件绑定
             */
            bindEvent : function() {
                var _this = this;

                var $gapItems = $(_this.settings.triggerObjStr);

                //resize事件
                $(window).on('resize',function(){
                    $(_this.settings.pointObjStr).css({'top':'50%','left':'0','-webkit-transform': 'translate(-50%, -50%)'});

                    var leftVal = $(_this.settings.pointParentObjStr).offset().left;
                    _this.minOffsetX  = parseInt($(_this.settings.pointObjStr).css('width'))/2;
                    _this.maxOffsetX  = ($(window).width() - (leftVal*2)).toFixed(0);
                    _this.rangeWidth  = (_this.maxOffsetX - _this.minOffsetX) / (_this.settings.pointsNumber - 1);

                    $(_this.settings.sliderObjStr).attr('data-curValue','1');

                    $(_this.settings.sliderObjStr).each(function(i,n){
                        if(_this.settings.hasImg) {
                            $(n).siblings().find(_this.settings.imgObjStr).hide();
                            $(n).siblings().find(_this.settings.imgObjStr).eq(0).show();
                        }else{
                            $(n).find(_this.settings.highLightObjStr).removeClass('high-light');
                            $(n).find(_this.settings.highLightObjStr).eq(0).addClass('high-light');
                        }
                    });
                });

                $gapItems.delegate(_this.settings.sliderObjStr, 'touchstart', function(event) {
                    event.preventDefault();
                });

                $gapItems.delegate(_this.settings.sliderObjStr, 'touchmove', function(event) {
                    var $this   = $(this);
                    var $button = $this.find(_this.settings.pointObjStr);
                    var offsetX = _this.fixOffsetX(event.changedTouches[0].clientX);

                    event.preventDefault();

                    $button.css('position', 'absolute');
                    $button.css('left', offsetX);
                });

                $gapItems.delegate(_this.settings.sliderObjStr, 'touchend', function(event) {
                    var $this         = $(this);
                    var $button       = $this.find(_this.settings.pointObjStr);
                    var offsetX       = _this.fixOffsetX(event.changedTouches[0].clientX);

                    var range = (offsetX / _this.rangeWidth).toFixed(0);

                    event.preventDefault();

                    var left  = range * _this.rangeWidth;

                    $button.css('left', left);

                    // 赋值
                    $this.attr('data-curValue', parseInt(range) + 1);

                    var number = parseInt(range);

                    if(_this.settings.hasImg){
                        var $curImg = $this.siblings().find(_this.settings.imgObjStr);
                        $curImg.hide();
                        $curImg.eq(number).show();
                    }else{
                        $this.find(_this.settings.highLightObjStr).removeClass('high-light');
                        $this.find(_this.settings.highLightObjStr).eq(number).addClass('high-light');
                    }
                });
            }
        };

        /**
         * 默认配置
         */
        PointSliding.defaults = {
            //类型标示符(有图类型or无图类型)
            hasImg: false,

            //分段点(滑动区域的分段点)
            pointsNumber: 3,

            //冒泡区域对象字串
            triggerObjStr: '',

            //title对象字串
            titleObjStr: '',

            //有图类型的图片对象字串
            imgObjStr: '',

            //无图类型的高亮对象字串
            highLightObjStr: '',

            //滑动区域对象字串
            sliderObjStr: '',

            //滑动点父节点对象字串
            pointParentObjStr: '',

            //滑动点对象字串
            pointObjStr: ''
        };

        var rPointSliding = function(options) {
            new PointSliding(options);
        };

        window.rPointSliding = $.rPointSliding = $.pointSliding = rPointSliding;
});