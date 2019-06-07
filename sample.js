this.Given("I open google website",function () {
                    return helpers.loadPage('www.google.com'); 
                    });

this.When("I click automobile tab",function(){
                        return driver.wait(until.elementsLocated(by.id('nav_automobile')),20000).then(()=>{
                        driver.findElement(by.id('nav_automobile')).click();
                        })
                        })

this.Then('I should see Vehicle Data page',function(){
                    return driver.wait(until.elementsLocated(by.id('entervehicledata')),10000);
                    })

this.When("I enter vehicle data and click next",function(){

                            driver.findElement(by.id('make')).sendKeys("Audi");
                            driver.findElement(by.id('engineperformance')).sendKeys("120");
                            driver.findElement(by.id('dateofmanufacture')).sendKeys("04/25/2015");
                            driver.findElement(by.id('numberofseats')).sendKeys("5");
                            driver.findElement(by.id('fuel')).sendKeys("Diesel");
                            driver.findElement(by.id('listprice')).sendKeys("10000");
                            driver.findElement(by.id('licenseplatenumber')).sendKeys("12345678");
                            driver.findElement(by.id('annualmileage')).sendKeys("168"); })

this.Then('I should see Product Data page',function(){
                    return driver.wait(until.elementsLocated(by.id('enterinsurantdata')),10000);
                    })

