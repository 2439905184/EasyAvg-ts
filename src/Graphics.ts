import * as $ from "jquery"
const lodash = require("lodash")
export class Graphics
{
    constructor()
    {

    }
    load_image(url:string):any
    {
        var request = new XMLHttpRequest()
        request.open("get","logo/img/EasyAvg.png")
        request.send(null)
        console.log(request.response)
        return request.response
    }
    cls():void
    {
        $("body").children().remove()
    }
}