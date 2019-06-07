const param=require('./parameter');

//array containing keywords for clicking some items
click_array=['click'];
data_array=['enter','put'];

module.exports.when=function (textline){
    //initial data kept to default
    data=`this.When("${textline.trim()}",function () {
            \/\/ callpack pending();
            });\n\n`;
    
    //converting line to lower case adn removing any extra spaces and converting to array
    whenline=textline.toLowerCase().trim();
    line_array=whenline.split(" ");

        for(var i=0;i<line_array.length;i++)
            {
                //checking for enter keyword for entering data
                if(data_array.includes(line_array[i]))
                    {
                        value='enter_'+line_array[i+1];
                        newdata=`this.When("${textline.trim()}",function(){\n`;
                        Object.keys(param[value]).forEach((items)=>{
                           //for entering multiple data
                            newdata+=`
                            driver.findElement(by.id('${param[value][items].id}')).sendKeys("${param[value][items].value}");`;
                        })
                        newdata+=` })\n\n`;
                        data=newdata;
                        break;
                    }



                //checking for click button 
                if(click_array.includes(line_array[i]))
                    {
                        value='click_'+line_array[i+1];
                       
                            // check for id property of an object if present  
                        if('id' in param[value])
                            {
                            data=`this.When("${textline.trim()}",function(){
                        return driver.wait(until.elementsLocated(by.id('${param[value].id}')),20000).then(()=>{
                        driver.findElement(by.id('${param[value].id}')).click();
                        })
                        })\n\n`;
                             break;
                            }
                    }
            }


    //finally returning the stored data for given line
    return data;
}