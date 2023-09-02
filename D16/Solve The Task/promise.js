function  myfun(url) {
    var myPromise = new Promise(function(resolve,reject) {

       var http = new XMLHttpRequest();
       http.open("GET",url);
       http.onreadystatechange = function () {
           if(http.readyState == 4) {
               if(http.status>=200 && http.status<300){
                   resolve(http.responseText)
               }
               else{
                   reject('error')
               }

           }
            
       }
       http.send()
    })

  return myPromise;
}

myfun("https://jsonplaceholder.typicode.com/users").then((data)=>{
var result=JSON.parse(data)
console.log(result)})
.catch((err)=>{console.log(err)})
