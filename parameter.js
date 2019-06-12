module.exports={

    //enter URL's in the form name_url
    tosca_url:"http://sampleapp.tricentis.com/101/",
    // for clicking buttons or text field or anything ,enter in the format click_clickablename
    click_automobile:{id:"nav_automobile"},
    //for verifying the details, enter in the following format verify_name
    verify_vehicle:{id:'entervehicledata'},

    enter_vehicle:{
        make:{id:'make',value:'Audi'},
        engineperformance:{id:'engineperformance',value:'120'},
        dateofmanufacture:{id:'dateofmanufacture',value:'04/25/2015'},
        numberofseats:{id:'numberofseats',value:'5'},
        fuel:{id:'fuel',value:'Diesel'},
        listprice:{id:'listprice',value:'10000'},
        licenseplatenumber:{id:'licenseplatenumber',value:'12345678'},
        annualmileage:{id:'annualmileage',value:'168'},
    },
    click_insurant:{id:'nextenterinsurantdata'},
    verify_insurant:{id:'enterinsurantdata'},


    enter_insurant:{
        firstname:{id:'firstname',value:'Insurant'},
        lastname:{id:'lastname',value:'services'},
        birthdate:{id:'birthdate',value:'03/25/1995'},
        gender:{className:'ideal-radio',radio:true,value:''},
        //classname
        streetaddress:{id:'streetaddress',value:'hinjewadi pune'},
        country:{id:'country',value:'India'},
        zipcode:{id:'zipcode',value:'411057'},
        city:{id:'city',value:'Pune'},
        occupation:{id:'occupation',value:'Employee'},
        hobbies:{className:'ideal-check',checkbox:true}
    },
    click_product:{id:'nextenterproductdata'},
    verify_product:{id:'nextenterproductdata'},

    enter_product:{
        startdate:{id:'startdate',value:'09/05/2019'},
        insurancesum:{id:'insurancesum',value:'3.000.000,00'},
        meritrating:{id:'meritrating',value:'Bonus 9'},
        damageinsurance:{id:'damageinsurance',value:'Partial Coverage'},
        courtesycar:{id:'courtesycar',value:'Yes'},
        optional_products:{xpath:'//*[@id="insurance-form"]/div/section[3]/div[5]/p/label[1]/span',checkbox:true}
        //xpath pending
    },
    click_price:{id:'nextselectpriceoption'},
    verify_price:{id:'priceTable'},

    enter_sendquote:{
        email:{id:'email',value:'abc@xyz.com'},
        phone:{id:'phone',value:'8365698889'},
        username:{id:'username',value:'s96vishal'},
        password:{id:'password',value:'Vishal123'},
        confirmpassword:{id:'confirmpassword',value:'Vishal123'},
        comments:{id:'Comments',value:'Good website"'},
    }

}

