const param=require('./parameter');

//array for keeping keyword that can verify things
verify_array=['see','verify'];

module.exports.then=function (textline){
    //initial data set to default
    data=`this.Then("${textline.trim()}",function () {
            \/\/ callpack pending();
            });\n\n`;;

    thenline=textline.toLowerCase().trim();

    //textline converted to array :line_array
    line_array=thenline.split(" ");

    for(var i=0;i<line_array.length;i++)
        {
        //checking for verify keyword  
        if(verify_array.includes(line_array[i]))
            {
                value='verify_'+line_array[i+1];
                
            // check for id property of an object 
                if('id' in param[value])
                    {
                        data=`this.Then('${textline.trim()}',function(){
                    return driver.wait(until.elementsLocated(by.id('${param[value].id}')),10000);
                    })\n\n`;
                    break;
                    }
       
        
            }
        }


    //finally returning the stored data for given line
    return data;
}