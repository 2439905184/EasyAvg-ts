import * as $ from "jquery"
const axios = require("axios")
const lodash = require("lodash")

export class Graphics
{
    constructor()
    {

    }
    show():void
    {
        $("body").children().show()
    }
    cls():void
    {
        $("body").children().hide()
    }
}
// 有问题
/*export function load_image(p_url:string)
{
    $.ajax(
        {
            async: false,
            url: p_url,
            type: "get",
            success: function(result)
            {
                console.log(result)
                return result
            }
        })
}
*/