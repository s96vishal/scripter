const param=require('./parameter');
const givenparser=require('./given');
const whenparser=require('./when');
const thenparser=require('./then');
module.exports=function checkline(line){
    var newdata='';
    if(line.includes('Given')){
        //line to be parsed for given
        templine=line.substr(5);
        newdata=givenparser.given(templine);
        }
                            
    //end of if for a given statement

    //line to be parsed for when 
    if(line.includes('When')){
        templine=line.substr(4);
        newdata=whenparser.when(templine);
         }
    //end of if for When statement
    if(line.includes('Then')){
        templine=line.substr(4);
         newdata=thenparser.then(templine);
         }

     return newdata;           
    //end of if for Then Statement
}