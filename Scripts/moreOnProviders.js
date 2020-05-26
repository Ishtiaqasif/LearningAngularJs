let app = angular.module('providers-app',[]);

app.provider ('date', function() {
    let greet;
    return{
        setGreeting: value => {
            greet = value;
        }, 
        $get: () => {
            return {
                showDate: () => {
                    let date = new Date();
                    return greet + `! It's ${ date.getDate() } Today`;
                }
                ,
                devsShowDate: () => {
                    let date = new Date();
                    return date.getDate();
                }
            }
        }
    }
});
//config functions can only access providers
app.config( dateProvider => {
    let date = dateProvider.$get().devsShowDate();
    if (date < 10) 
    dateProvider
        .setGreeting('ya! you are a money man');
    else if (date < 20 && date >= 10 )
    dateProvider.
        setGreeting('Be carefull! be carefull! be carefull!');
    else if (date < 30 && date >= 20 )
    dateProvider.
        setGreeting('Dont be over ambitious');
});

app.controller('providersCtrlr', ($scope, date) => {
    $scope.greetMsg = date.showDate();
});