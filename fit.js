oson.fit = {
    vars:{
        version : "0.001",
        interval : "",
        marginleft : 0,
        margintop : 0,
        currentw : 0,
        currenth : 0,
        aranyw : 0,
        aranyh : 0,
        resultw : 1800,
        resulth : 900,
        oldw : 0,
        oldh : 0,
        scale : 1,
        rescale : 0,
        fitedid : "desktopbigclass",
     },
     scale:function(){
         oson.fit.vars.aranyw=oson.fit.vars.currentw/oson.fit.vars.resultw;
         oson.fit.vars.aranyh=oson.fit.vars.currenth/oson.fit.vars.resulth;
         if(oson.fit.vars.aranyw > oson.fit.vars.aranyh){
              if(1>oson.fit.vars.aranyh){
                  var testmargoa = oson.fit.vars.currentw-(oson.fit.vars.aranyh*oson.fit.vars.resultw);
                    	   oson.fit.vars.marginleft = (testmargoa-2)/2;
                    	   var testmargotext = testmargoa.toString()+"px";
                        var fitscalebale = "scale("+oson.fit.vars.aranyh.toString()+")";
                        oson.fit.vars.margintop = 0;
                        oson.fit.vars.scale = oson.fit.vars.aranyh;
                    }
                }else{
                    if(1>oson.fit.vars.aranyw){
                    	   var testmargoa = oson.fit.vars.currenth-(oson.fit.vars.aranyw*oson.fit.vars.resulth);
                    	   oson.fit.vars.margintop = (testmargoa-2)/2;
                        var fitscalebale = "scale("+oson.fit.vars.aranyw.toString()+")";
                        var testmargoleft = "0";
                        oson.fit.vars.marginleft = 0;
                        oson.fit.vars.scale = oson.fit.vars.aranyw;
                    }
                }
                var el = document.getElementById(oson.fit.vars.fitedid);
                el.style.webkitTransform=fitscalebale;
                el.style.webkitTransformOrigin="0 0";
                el.style.transform=fitscalebale;
                el.style.transformOrigin="0 0";
                el.style.marginLeft=oson.fit.vars.marginleft+"px";
                el.style.marginTop=oson.fit.vars.margintop+"px";
    },
    interval:function(){
                if (document.body && document.body.offsetWidth) {
                    oson.fit.vars.currentw = document.body.offsetWidth;
                    oson.fit.vars.currenth = document.body.offsetHeight;
                }
                if (document.compatMode=='CSS1Compat' &&
                    document.documentElement &&
                    document.documentElement.offsetWidth ) {
                    oson.fit.vars.currentw = document.documentElement.offsetWidth;
                    oson.fit.vars.currenth = document.documentElement.offsetHeight;
                }
                if (window.innerWidth && window.innerHeight) {
                    oson.fit.vars.currentw = window.innerWidth;
                    oson.fit.vars.currenth = window.innerHeight;
                }
                if(oson.fit.vars.currentw!=oson.fit.vars.oldw  || oson.fit.vars.currenth!=oson.fit.vars.oldh){
                    oson.fit.scale();
                    oson.fit.vars.oldw = oson.fit.vars.currentw;
                    oson.fit.vars.oldh = oson.fit.vars.currenth;
                }    
    }
}
oson.fit.interval();
oson.fit.vars.interval = setInterval("oson.fit.interval()", 1000);