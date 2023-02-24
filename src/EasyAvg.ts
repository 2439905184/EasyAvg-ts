const lodash = require("lodash")
import * as graphics from "./Graphics"

export function init()
{
    console.log("EasyAvg 核心已加载")
}
export function init_graphics()
{
    var grap = new graphics.Graphics()
    return grap
}
/*
const button_default_style = require("./assets/css/button.css")
console.log("css:", button_default_style)
import "./assets/css/button.css"
*/
/*$(function()
{
    console.log("2秒后清屏")
    function cls_logo()
    {
        $("body").children().remove()
    }
    setTimeout(() => 
    {
        if(document.title == "EasyAvg")
        {
            cls_logo()
            window.open("canvas.html")
        }
    }, 2000);
})
*/
// 直接清屏函数
