function GetghibliapiApi() {
    var host = "https://ghibliapi.herokuapp.com/Films"
    $.get(host, function (responseData) {
        responseData.forEach(element => {
            $('#result').append(element.id + '<h3>' + element.title + '</h3></br>')
        });
    })
}