/*
==========================
How Easy! Slideshow.
==========================
*/
var HESlideshow = new(function() {
    var nextBtn = document.getElementById('nextBtn'),
        prevBtn = document.getElementById('prevBtn');

    this.basicSetting = function(config) {
        settingDOM(config);
    };
    var settingDOM = function(config) {
        //basic dom setting
        var slideContainer = document.querySelector(config.slideContainer),
            imgContent = document.querySelector(config.imgContent),
            imgBlock = document.querySelectorAll(config.imgBlock);
        if (slideContainer.length <= 0 || imgContent.length <= 0 || imgBlock.length <= 0) {
            console.log('please key-in true element');
        } else {
            imgContent.setAttribute('style', setContentWidth(imgBlock));
        };
    };

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

    function animate() {}


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

HESlideshow.basicSetting({
    slideContainer: '.slideContainer',
    imgContent: '.imgTotal',
    imgBlock: '.imgBlock'
});
