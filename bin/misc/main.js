//import axios from 'axios'
//const axios = require('axios').default
// import { Button } from "./button"
// var jq = require("jquery")
var graphics = /** @class */ (function () {
    function graphics() {
    }
    graphics.prototype.load_image = function (url) {
        var request = new XMLHttpRequest();
        request.open("get", "logo/img/EasyAvg.png");
        request.send(null);
        console.log(request.response);
    };
    return graphics;
}());
// var Graphics = new graphics()
// var img = Graphics.load_image("img/EasyAvg.png")
console.log("2秒后清屏");
// 直接清屏函数
function cls_logo() {
    $("body").children().remove();
}
setTimeout(function () {
    cls_logo();
    window.open("canvas.html");
}, 2000);
// setTimeout(() => 
// {
//     var body = document.getElementsByTagName("body")
//     console.log(body)
//     var children:HTMLCollection = body[0].children
//     console.log(children)
//     // for(var i = 0; i < children.length ; i++)
//     // {
//     //     children[i].remove()
//     // }
//     children[0].remove()
// }, 2000);
// var request = new XMLHttpRequest()
// request.open("get","logo/img/EasyAvg.png")
// request.send()
// console.log(request)
