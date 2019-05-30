arr=['visit','login','open'];
textline="visit tosca Application"
function Given(textline){
    temparr=textline.split(" ");

    for(x of temparr){
        if(arr.includes(x)){
            console.log("true");
        }
    }

}

tosca={
    url:"www.sampleapp.tricentis.com/app1",
}


Given(textline);