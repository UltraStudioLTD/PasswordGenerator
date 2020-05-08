// ^ - start
// (?=.*[a-z]) - lowercase
// (?=.*[A-Z]) - uppercase
// (?=.*[0-9]) - numeric
// (?=.*[!@#$%^&*]) - special
// (?=.{8,}) - length [8+]

function ischecked(id) {
    return this[id].checked;
}

function generate() {
    var charlist = '';
    if($('input[type="checkbox"]:checked').length != 0){console.log('True');
    };
    if($('input[type="checkbox"]:checked').length == 0){
        console.log("False");
    }
    if(ischecked('lowercase')==true){
        var charlist = charlist + document.getElementById('lowercase').value;
        console.log(charlist);
    };
    if(ischecked('uppercase')==true){
        var charlist = charlist + document.getElementById('uppercase').value;
        console.log(charlist);
    };
    if(ischecked('numbers')==true){
        var charlist = charlist + document.getElementById('numbers').value;
        console.log(charlist);
    };
    if(ischecked('special')==true){
        var charlist = charlist + document.getElementById('special').value;
        console.log(charlist);
    };
    console.log(charlist);
    var Length = document.getElementById('Length').value;
    generatePassword(charlist, Length)
    function generatePassword(charset, l) {
        retVal = ''
        Length = Math.floor(l);
        for (var i = 0, n = charset.length; i < Length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));document.getElementById('Results').innerHTML = retVal;
        }
    }
}