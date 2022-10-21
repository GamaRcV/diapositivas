var btn= document.getElementById('btn')
var caja= document.getElementById('caja')
contador = 0;

 export function cambio(){
    if( contador== 0){
        caja.classList.add('pmodify')
        contador=1
    }else {
        caja.classList.remove('pmodify')
        contador=0
    }
}
btn.addEventListener('click',cambio,true)
