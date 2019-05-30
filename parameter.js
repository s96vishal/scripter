tosca={
    url:"www.sampleapp.tricentis.com/app1",
    insurant_data:{
        firstname:{id:'first_name',value:'abcd'},
        lastname:{id:'',value:''}
    }

}

for(x in tosca){
    console.log(x);
}

urlop=['visit','login','open'];
stra= 'visit tosca website';
arr2=stra.split(" ");
console.log(arr2.toString());
