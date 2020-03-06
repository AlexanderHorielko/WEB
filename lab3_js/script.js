let obj = {
    className: "open menu"
};
let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
// printList(list);
// printListRec(list);
// printReverseListRec(list);
// printReverseList(list);
function addClass(obj, cls) {
    let classes = obj.className.split(" ");
    let checked = false;

    for (let i = 0; i < classes.length; i++){
        if(classes[i] == cls){
            checked = true;
            break;
        }else{
            checked = false;
        }
    }
    if(checked == false){
        obj.className += cls.toString();
    }
}
function camelize(str) {
    let words = str.split('-');
    str = words[0];

    for (let i = 1; i < words.length; i++){
        let letter = words[i].charAt(0).toUpperCase();
        words[i] = words[i].replace(words[i].charAt(0),letter);

        str += words[i];
    }
    return str;
}
function removeClass(obj, cls) {
    let classes = obj.className.split(" ");

    for (let j = 0; j < classes.length; j++){
        for (let i = 0; i < classes.length; i++){
            if(classes[i] == cls) {
                classes[i] = classes[i].replace(classes[i],'');
            }
        }
    }

    obj.className = '';
    for (let j = 0; j < classes.length; j++){
        obj.className += classes[j] + ' ';
    }
    obj.className = obj.className.trim();
    obj.className = obj.className.replace(/\s{2,}/g,' ');
    console.log(obj.className);
}
function filterRangeInPlace(arr, a, b) {
    let tmp = [];
    for (let i = 0; i < arr.length; i++){
        if(arr[i] > b || arr[i] < a){
            tmp = arr.splice(i, 1);
        }
    }
    arr = tmp;
}
function reverseSort(mas){
    var n = mas.length;

    for(let i = 0;i < n - 1; i++){
        var min = i;
        for(let j = i + 1;j < n; j++){
            if(mas[j] > mas[min]) min = j;
        }
        var t = mas[min];
        mas[min] = mas[i];
        mas[i] = t;
    }
    console.log(mas);
    return mas;
}
function arraySort(mas1){
    var mas = [];
    var n = mas1.length;
    for (let i = 0; i < n; i++){
        mas[i] = mas1[i];
    }
    for(let i = 0;i < n - 1; i++){
        var min = i;
        for(let j = i + 1;j < n; j++){
            if(mas[j] < mas[min]) min = j;
        }
        var t = mas[min];
        mas[min] = mas[i];
        mas[i] = t;
    }
    return mas;
}
function sortByAge(people){
    people.sort(sortFunction);
    return people;
}
function sortFunction(a,b) {
    return a.age - b.age;
}
function unique(array) {
    let uniqueArray = [];
    let uniqueCheck = false;
    for (let i = 0; i < array.length; i++){
        let tmp = array[i];
        for (let j = 0; j < uniqueArray.length + 1; j++) {
            if(uniqueArray[j] === tmp){
                uniqueCheck = false;
                break;
            }else{
                uniqueCheck = true;
            }
        }
        if(uniqueCheck){
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}


function printList(list) {
    let link = list;
    while (link !== null){
        console.log(link.value);
        link = link.next;
    }
}
function printListRec(list) {
    let link = list;
    console.log(link.value);
    if (link.next !== undefined){
        printListRec(link.next);
    }
}
function printReverseListRec(list) {
    if(list === undefined){
        return 0;
    }
    printReverseListRec(list.next);
    console.log(list.value);
}
function printReverseList(list) {
    let link = list;
    let previous = null;
    let current = null;
    while(link !== undefined){
        current = link;
        link = link.next;

        current.next = previous;
        previous = current;
        list = current;
    }
    printList(list);
}

