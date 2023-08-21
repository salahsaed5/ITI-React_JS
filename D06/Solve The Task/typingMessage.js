function NewWindow(){
    var win = open("","", "width=300,height=300");
    win.document.write("Hello From New Window!")
    win.document.bgColor="yellow";
    var word = 'Hello'
    console.log(word[i])
    var i=0
    setInterval(function(){
        if(i<5){
            win.document.write(word[i])
            i++
        }
    },1000)
    
    setTimeout(function(){
        win.close()},15000);
            }

