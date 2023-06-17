if('serviceWorker' in navigator){
    navigator.serviceWorker.register('../sw.js').then((message)=>{
        console.log('Service worker funcionando');
    })
}else{
    alert('Este browser no soporta SW');
}