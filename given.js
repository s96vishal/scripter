const param=require('./parameter');

// array for urls keywords 
url_array=['visit','open'];

module.exports.given=function given(textline){
    //initial data kept to default 
    data=`this.When("${textline.trim()}",function () {
        \/\/ callpack pending();
        });\n\n`;

    //converting line to lowercase and removing any extra spaces
    givenline=textline.toLowerCase().trim();

    //textline converted to array :line_array
    line_array=givenline.split(" ");

        for(var i=0;i<line_array.length;i++)
        {
        //checking for visit/open keywords to go to some url

            if(url_array.includes(line_array[i]))
                {
                    value=line_array[i+1]+'_url';
                    data=`this.Given("${textline.trim()}",function () {
                    return helpers.loadPage('${param[value]}'); 
                    });\n\n`;
                break;
                }
        }

    //finally returning the stored data for given line
    return data;
}





