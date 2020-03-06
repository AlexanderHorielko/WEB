function isInteger(num) {
    if (num % 1 == 0){
        alert("Yes");
    } else{
        alert("No");
    }
}
function isPrime(a) {
    var n = a;
    n = +n;
    if ((n % 2 == 0) && (n != 2)) {
        return false;
    }
    else if (n == 2){
        return true;
    }
    else {
        let k = Math.round(Math.sqrt(n));
        let flag = false;

        for (i = 2; i < k + 1; i++)
            if (n % i == 0) {
                flag = true;
                return false;
            }

        if (flag == false){
            return true;
        }

    }
}
function findPrimes(a,b) {
    for(let i = a; i < b; i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
}
function isIPAddress(ip){
    let regExp = /^(\d{1,4}\.\d{1,4}\.\d{1,4}\.\d{1,4})$/m;
    console.log(ip + " " + regExp.test(ip).toString())
}
function findRGBA(text) {
    let regExp = /rgba\(\ ?(\d{1,2}|1\d{2}|2([0-4]\d|5[0-5])),\ ?(\d{1,2}|1\d{2}|2([0-4]\d|5[0-5])),\ ?(\d{1,2}|1\d{2}|2([0-4]\d|5[0-5])),\ ?(1|0\.[1-9])\)/g;
    let result = text.match(regExp);

    if(result != null){
        console.log(result[0].toString())
    }else{
        console.log("null")
    }
}
function findHexColor(text) {
    text = text.trim();
    let regExp = /#[A-F,0-9]{6}|#[a-f,0-9]{6}|#[A-F,0-9]{3}|#[a-f,0-9]{3}/g;
    let result = text.match(regExp);

    if(result != null){
        console.log(result.toString())
    }else{
        console.log("null")
    }
}
function findTags(text, tag) {
    let regExp = new RegExp(`<(/? *${tag})[^>]*>`, 'g');
    
    let result = text.matchAll(regExp);
    res = Array.from(result);
    
    if(res.length != 0){
        for(let i = 0; i < res.length; i++)
        {
            console.log(res[i][1].toString());
        }
    }else{
        console.log("null");
    }
}
function findPosNum(text) {
    let regExp = /\s(\+?\d+(\.\d+)?)\s/g;
    let result = text.match(regExp);

    if(result != null){
        for(let i = 0; i < result.length; i++){
            result[i] = result[i].trim()
        }
        console.log(result.toString());
    }else{
        console.log("null");
    }
}
function findDates(text) {
    let regExp = /\d{4}-((?:0[1,3-9]|1[0-2])-(?:0[1-9]|[1-2]\d|3[0-1]) |(02-(?:0[1-9]|1\d|2[0-8])))/g;
    let result = text.match(regExp);

    if(result != null){
        for (let i = 0; i < result.length; i++){
            console.log(result.toString());
        }
    }else{
        console.log("null");
    }
}
// findTags("", "div");
// findHexColor("The side bar<img as<dfasd>incl</img>s#ABC a<div fsdfsdf d#ABCDEFsf xcvv = fsdf sd fsdf >> </div> Cheatsheet, full Reference, and He<div asdg>asdasd</div>lp. You can also Save & Share with")
// findRGBA('Знаходить у заданому тексті рядок формату rgba(255, 255, 0, 0.5) що відповідає кольору у форматі RGBA і повертає його. Якщо такого рядка не знайдено, то повернути null.')
// isIPAddress('123.123.2312.412')
findPrimes(-7, 7);
// isInteger(20.23)
// findDates("1asfdasf sdfsdgsdg asdg sdf2018-12-12 gdfsd2g3 323 wer ewfsdfst34543 wr2345  +=234 +23 23  5345234 3242 23 -312 -312 4123 23.123 24123.123 , 123, 12323, 231asda 123 123 131233123  2001-02-12asdasd asdafasd123-23123-123")
// findPosNum('asfdasf sdfsdgsdg sdg sdf g3 423 wer ewfsdfst34543 wr2345  +=234 +23 23  5345234 324 23-312 -312 4123 23.123 24123.123 , 123, 12323,231')
// findTags("The side bar<img as<dfasd>incl</img>s a<div fsdfsdf dsf xcvv = fsdf sd fsdf >> </div> Cheatsheet, full Reference, and He<div asdg>asdasd</div>lp. You can also Save & Share with\
// the Community, and vi<footer asd asd> </footer>ew patte<footer a><footer></footer>sd asd> </footer>rns you create or favorite in My Patterns", 'div')