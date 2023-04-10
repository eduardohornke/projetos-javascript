var seg=0
var min=0
var hr=0

var interval

function twoDigits(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

function start(){
    watch()
    interval= setInterval(watch,10)
}

function pause(){
    clearInterval(interval)
}

function stop(){
    clearInterval(interval)
    seg=0
    min=0
    window.alert("Seu tempo foi: "+document.getElementById('watch').innerText)
    document.getElementById('watch').innerText='00:00:00'
}

function watch(){
    seg++
    if(seg==60){
        min++
        seg=0
        if(min==60){
            min=0
            hr++
        }
    }
    document.getElementById('watch').innerText=twoDigits(hr)+':'+twoDigits(min)+':'+twoDigits(seg)
}