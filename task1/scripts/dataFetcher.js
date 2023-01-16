fetch ("https://hickory-quilled-actress.glitch.me/computers")
.then(function(response){
    return response.json(response);
})
.then(function(result){
    laptopData = result;

    for (let key in laptopData) {
        let laptop = laptopData[key];
        _select.options[_select.options.length] = new Option(laptop.title, laptop.id);
      }
});