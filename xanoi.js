window.onload = function() {
    document.querySelector(".o-easy").onclick = function(){hanoiInit(3)};
    document.querySelector(".o-medium").onclick = function(){hanoiInit(5)};
    document.querySelector(".o-hard").onclick = function(){hanoiInit(7)};
}
function hanoiInit(dif){
    "use strict";
    var colors = ["#82E9FF", "#BB8BFF","#FF695C","#FFF560","#80E845","#00FFB7","#E84018"];
    var difficulty = parseInt(dif);
    var  discs = {};
    var winornot={"1":false, "2":false,"3":true};

    (function generateCols(){
        document.querySelector(".o-easy").onclick = function(){};
        document.querySelector(".o-medium").onclick = function(){};
        document.querySelector(".o-hard").onclick = function(){};
        document.querySelector(".ch-dif").style.top = -400+"px";
        var i;
        var firstCol = document.querySelectorAll(".l-third")[0];

        for(i=0; i<difficulty; i++){
            discs[i]=new Disk(256-(256/difficulty)*i);
            discs[i].insert(firstCol, i);
        }
    }());

    function addEvent(elem, evType, fn) {
        if (elem.addEventListener) {
            elem.addEventListener(evType, fn, false);
        }
        else if (elem.attachEvent) {
            elem.attachEvent('on' + evType, fn);
        }
        else {
            elem['on' + evType] = fn;
        }
    }

    function addClass(o, c){
        var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g");if (re.test(o.className)) return;
        o.className = (o.className + " " + c).replace(/\s+/g, " ").replace(/(^ | $)/g, "");
    }

    function removeClass(o, c){
        var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g");
        o.className = o.className.replace(re, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "");
    }

    function hasClass(o,c) {
        var regexp =  new RegExp("(^|\\s)" + c + "(\\s|$)", "g");
        return  regexp.test(o.className);
    }

    function redAlert(){
     var hh = document.querySelector(".hh-cont");
        hh.className += " alert";
        setTimeout(function(){removeClass(hh, "alert");},200);
    }

    function Disk(r){
        var that = this;
        this.r=r;
        this.node = createDisc(r);

        function createDisc(l){
            console.log(l);
            var nElem = document.createElement('div');
            nElem.innerHTML ='';
            nElem.style.width = r+"px";
            nElem.style.backgroundColor = colors.pop();
            nElem.className = "hh-disc";
            nElem.returnWidth = parseInt(r);
            return nElem;
        }

        this.insert = function(where, i){
            if(i || i===0) that.node.elemId=i;
            if(where.children.length===0){
                where.appendChild(that.node);
            }else{
                if(where.children[0].returnWidth>that.node.returnWidth){
                    where.appendChild(that.node);
                }else{
                    redAlert();
                }
            }
            removeClass(that.node, "active");
        }
    }

    addEvent(document.querySelector(".hh-cont"), "click", function(e){
        var target = e.srcElement || e.target;
        if(hasClass(target,"hh-disc")) target = target.parentNode;
        var nodeId;
        if(!document.querySelector(".active")) {
            if(target.children.length===0) return false;
            addClass(target.children[target.children.length-1], "active");
        }else{
            nodeId = document.querySelector(".active").elemId;
            discs[nodeId].insert(target);
            checkWinOrNot();
        }
    });

    function checkWinOrNot(){
        if(!winornot["1"]){
            if(document.querySelector(".l-first").children.length==difficulty){
                winornot["1"] = true;
            }
        }
        if(!winornot["2"]){
            if(document.querySelector(".l-second").children.length==difficulty){
                winornot["2"] = true;
            }
        }
        if( winornot["1"] && winornot["2"] ){
            document.querySelector(".win").style.top=0;
        }
    }
}