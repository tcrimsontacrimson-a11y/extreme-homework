
function clean() {
    const image=document.getElementById('image');
    const input=document.getElementById('input');
    image.src='';
    input.value='';
}

function convert(){
    const input=document.getElementById("input");
    const canvas=document.getElementById("canvas");
    const image=document.getElementById("image");
    const ctx=canvas.getContext("2d");
    ctx.canvas.width=ctx.measureText(input.value).width;
    ctx.fillText(input.value,0,30);
    let dataURL=canvas.toDataURL();
    image.src=dataURL;
}