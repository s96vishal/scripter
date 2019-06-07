


application={
    tosca_url:"www.sampleapp.tricentis.com/app1",
    automobile:{id:'nav_automobile'},
    enter_vehicle:{
            firstname:{id:'abc',value:'vishal'},
            lastname:{id:'bcd',value:'vicky'}
    }
}

Object.keys(application["enter_vehicle"]).forEach((items)=>{
    console.log(items);
    console.log(application["enter_vehicle"][items].id);
})

   