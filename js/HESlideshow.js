/*
==========================
How Easy! Slideshow.
==========================
*/
var HESlideshow = new(function() {

    this.basicSetting = function(config) {
        Setting(config);
    };
    var Setting = function(config) {
        //basic data get
        var slideContainer = document.querySelector(config.slideContainer),
            imgContent = document.querySelector(config.imgContent),
            imgBlock = document.querySelectorAll(config.imgBlock),
            effect = (config.effect == undefined) ? 'basic' : config.effect,
            effectSpeed = (config.effectSpeed == undefined) ? 2000 : config.effectSpeed,
            auto = (config.auto == undefined) ? true : config.auto,
            autoSpeed = (config.autoSpeed == undefined) ? 2000 : config.autoSpeed;
        // put Dom to setting
        settingDOM(slideContainer, imgContent, imgBlock);
        var effectSuit = [effect, effectSpeed];
        HESlideEffect.putEffect(btnReaction(slideContainer), effectSuit);
    }

    var settingDOM = function(slideContainer, imgContent, imgBlock) {
        //basic dom setting
        if (slideContainer.length <= 0 || imgContent.length <= 0 || imgBlock.length <= 0) {
            console.log('please key-in true element');
        } else {
            // set basic image width.
            imgContent.setAttribute('style', setContentWidth(imgBlock));
        };
    };

    function btnReaction(slideBlock) {
        //provide Btn dom
        var nextBtn = document.getElementById('nextBtn'),
            prevBtn = document.getElementById('prevBtn');
        return [slideBlock, nextBtn, prevBtn];
    }

    function setContentWidth(Detail) {
        //content width count
        var imgContentWidth = 0;
        for (var i = 0; i < Detail.length; i++) {
            imgContentWidth += outerWH(Detail[i])[0];
        }
        var returnData = 'width:' + imgContentWidth * 2 + 'px';
        return returnData;
    }

    function outerWH(dom) {
        // block outer width & outer height
        var widthDom = dom.offsetWidth,
            heightDom = dom.offsetHeight;
        var defaultStyle = getComputedStyle(dom);
        widthDom += parseInt(defaultStyle.marginLeft) + parseInt(defaultStyle.marginRight);
        heightDom += parseInt(defaultStyle.marginTop) + parseInt(defaultStyle.marginBottom);
        return [widthDom, heightDom];
    }


    // /* -- Auto Slide show -- */
    // this.setAuto = false;
    // this.AutoTime = 2000;

    // /* -- Image resize -- */
    // this.Imgresize = false;

    // /* -- set slide show DOM -- */
    // this.slideContainer = '';
    // this.imgContent = '';
    // this.imgBlock = '';

    // /* -- Slide show effect -- */
    // this.effectStyle = 'basic';

    // /* -- flicking dot -- */
    // this.flickingDot = false;

    // function activeBtn() {
    //     var nextBtn = function() {
    //         var nextBtn = document.getElementById('nextBtn');
    //     }
    //     var prevBtn = function() {
    //         var prevBtn = document.getElementById('prevBtn');
    //     }
    //     var flickingDot = function() {}
    // }

})();

// all effect
var HESlideEffect = new(function() {
    this.putEffect = function(effectDom, effectSuit) {
        if (Array.isArray(effectDom) && Array.isArray(effectSuit)) {
            //basic effect is fadeIn & fadeout
            setupEffect(effectDom, effectSuit);
        }
    };

    function setupEffect(dom, setting) {
        var slideContainer = dom[0],
            nextBtn = dom[1],
            prevBtn = dom[2];
        var effectName = setting[0],
            effectSpeed = setting[1];
        slideContainer.addEventListener('mouseenter', function(){
            console.log(this);
            // next.fadeIn;
        })
        slideContainer.addEventListener('mouseleave', function(){})
    }

})();

HESlideshow.basicSetting({
    slideContainer: '.slideContainer',
    imgContent: '.imgTotal',
    imgBlock: '.imgBlock',
    effect: 'basic'
});
