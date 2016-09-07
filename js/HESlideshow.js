function basicSetting() {
    /* -- Auto Slide show -- */
    this.setAuto = false;
    this.AutoTime = 2000;

    /* -- Image is Full page or simple style -- */
    this.ImgStyle = 'basic';

    /* -- set slide show DOM -- */
    this.slideContainer = '';
    this.imgContent = '';
    this.imgBlock = '';

    /* -- Slide show effect -- */
    this.effectStyle = 'basic';

    /* -- flicking dot -- */
    this.flickingDot = false;
}

function activeBtn() {
    var nextBtn = function() {
    	var nextBtn = document.getElementById('nextBtn');
    }
    var prevBtn = function() {
    	var prevBtn = document.getElementById('prevBtn');
    }
    var flickingDot = function() {}
}