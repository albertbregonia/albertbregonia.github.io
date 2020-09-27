function dive(){
    document.getElementById('hud').style.display = 'inline-block';
    Array.from(document.getElementsByClassName('btn')).forEach(e => {
        e.style.display = 'inline-block';
    });
}
function enter(){
    document.getElementById('body').style.marginBottom = '200%';
    window.scroll({
        top: 4096,
        behavior: 'smooth'
    });
    setTimeout(()=>{
        window.open("/pages/about.html","_self");
    },1000);
}