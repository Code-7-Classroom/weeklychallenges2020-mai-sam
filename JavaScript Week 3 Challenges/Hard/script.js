/*
HARD: Data security exercise. Inside of a closure, create an object called pii (Personally Identifiable Information)that cannot be 
accessed directly. The object should have at least two properties: name and ssn. Only the name property should be accessible, 
and it should be called through a public function. The ssn property should not be accessible at all.
*/

function clientInfo() {
    var pii = {
        name: 'Peter Parker',
        ssn: '123-45-6789'
    }
    function name() {
        console.log(pii.name);
    }
    return name;
}

var clientData = clientInfo();
clientData();



