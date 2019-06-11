const param=require('./parameter');

//Trained arrays for clicking,entering data and in learning mode....
const click_array=['click'];
const data_array=['enter','put','select'];

module.exports.when=function (line){
    //initial opening for when Function
    data=`this.When("${line.trim()}",function () {\n`;

    whenline=line.toLowerCase().trim();

    if(whenline.includes('and')){
        //for spliting line i.e. i enter data and click some button 
        newwhenline=whenline.split('and');
        whenienterline=(newwhenline[0]).trim(); // contains data to enter i.e. i enter data 
        wheniclickline=(newwhenline[1]).trim(); // contains clickable line i.e. click some button
        data+=whenIEnter(whenienterline,line);
        data+=whenIClick(wheniclickline,line);
        
    }
    else if(whenline.includes('enter')){
        data+=whenIEnter(whenline,line);
    }
    else
    {   //if line only contains click options i.e when i click some button 
        data+=whenIClick(whenline,line);
    }
    
    data+=`\n});\n\n`; // closing of the When Function
    return data;
}


//functin for click actions

function whenIClick(line,textline){
line_array=line.split(" ");

for (var i=0;i<line_array.length;i++){
    if(click_array.includes(line_array[i]))
                    {
                        value='click_'+line_array[i+1];
                        // check for id property of an object if present  
                        if('id' in param[value])
                            {
                            return `\n
            return driver.wait(until.elementsLocated(by.id('${param[value].id}')),20000).then(()=>{
            driver.findElement(by.id('${param[value].id}')).click();
            })`;
                            }
                    }
}   
}

//function for entering actions
function whenIEnter(line,textline){

    line_array=line.split(" ");
    let data=' ';
    for(var i=0;i<line_array.length;i++){
        if(data_array.includes(line_array[i]))
                    {   
                        //check for enter or select keyword
                        if(line_array[i]=='enter')
                        {
                            value='enter_'+line_array[i+1];
                        }
                        else if (line_array[i]=='select')
                        {
                            value='select_'+line_array[i+1];
                        }

                        Object.keys(param[value]).forEach((items)=>{
                           //for entering multiple data
                            data+=`
            driver.findElement(by.id('${param[value][items].id}')).sendKeys("${param[value][items].value}");`;
                        })
                        
                        return data;
                        
                    }
    }
}