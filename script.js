var clutter = "";

for(var i=1;i<=112;i++){
    var a = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${a}</div>`
}

document.querySelector("#pbtn").innerHTML=clutter;