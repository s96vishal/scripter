module.exports=function checkline(line){
    var newdata='';
    if(line.includes('Given')){
        templine=line.replace('Given','');
        
        newdata=`this.Given("${templine.trim()}", function () {   
            \/\/callback.pending();  
                });\n\n`;
                            }
    //end of if for a given statement
    if(line.includes('When')){
        templine=line.replace('When','');
        
        newdata=`this.When("${templine.trim()}", function () {   
            \/\/callback.pending();  
                });\n\n`;
                            }
    //end of if for When statement
    if(line.includes('Then')){
        templine=line.replace('Then','');
        
         newdata=`this.Then("${templine.trim()}", function () {   
            \/\/callback.pending();  
                });\n\n`;
                            }
                 return newdata;           
    //end of if for Then Statement
}