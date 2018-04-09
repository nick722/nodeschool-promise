var promise = new Promise(function(fulfill, reject){
    setTimeout( function() {
        return fulfill('FULFILLED!')
    }, 300);
});

promise.then(function(result) {console.log(result)});