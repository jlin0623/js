// 定義預設的選項，並且隨著使用者變化的時候變動
let option = "Random";

// 隨使用者變換的值
function doChange() {
    // 先預設關起來 
    $("#char").hide();
    $("#bg").hide();

    // 當更換的時候先清空原本的
    result.innerHTML = "";

    // 抓到選項的值
    let op = document.getElementById("bar");
    let opArray = op.selectedIndex;
    let opVal = op.options[opArray].value;
    option = opVal;

    // 特定狀況下將欄位打開
    if (option === "Country") {
        $("#char").show();
    }
    if (option === "Both") {
        $("#char").show();
        $("#bg").show();
    }
    return option;
}

/*
    檢查身分證字號
    @param string id
    @return bool
*/
function checkId(id) {
    // ^表開頭
    // []表範圍
    // []{}範圍連續幾次
    // $限定長度
    // {1,5} 表示長度1到五個字元
    let ret = false;
    let regex = /^[A-Z][12][0-9]{8}$/
    let result = id.match(regex);
    if (result != null) {
        let letters = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';
        let c12 = id.substr(0, 1);
        let n12 = letters.indexOf(c12) + 10;
        let n1 = parseInt(n12 / 10);
        let n2 = n12 % 10;
        let n3 = parseInt(id.substr(1, 1));
        let n4 = parseInt(id.substr(2, 1));
        let n5 = parseInt(id.substr(3, 1));
        let n6 = parseInt(id.substr(4, 1));
        let n7 = parseInt(id.substr(5, 1));
        let n8 = parseInt(id.substr(6, 1));
        let n9 = parseInt(id.substr(7, 1));
        let n10 = parseInt(id.substr(8, 1));
        let n11 = parseInt(id.substr(9, 1));
        let sum = n1 * 1 + n2 * 9 + n3 * 8 + n4 * 7 + n5 * 6 + n6 * 5 + n7 * 4 + n8 * 3 + n9 * 2 + n10 * 1 + n11 * 1;
        ret = sum % 10 == 0;
    }
    return ret;
}

// 產生隨機的大寫字母
function getUpperCharacter() {
    str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    randNum = Math.floor(Math.random() * (26)) + 1;
    return str.substr(randNum - 1, 1);
}

// 產生區間的隨機數字
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// 按鈕呼叫function
function makeFakeId() {
    if (option === "Random") {
        doRandom();
    }
    if (option === "Boy") {
        doboy();
    }
    if (option === "Girl") {
        dogirl();
    }
    if (option === "Country") {
        doByOne();
    }
    if (option === "Both") {
        doByTwo();
    }
}

function doRandom() {
    let first = getUpperCharacter();
    let second = String(getRandom(1, 2));
    let end = getRandom(10000000, 99999999);

    let id = first + second + end;
    if (checkId(id)) {
        return result.innerHTML = id;
    } else {
        doRandom();
    }
}

function doboy() {
    let first = getUpperCharacter();
    let second = String(1);
    let end = getRandom(10000000, 99999999);

    let id = first + second + end;
    if (checkId(id)) {
        result.innerHTML = id;
    } else {
        doboy();
    }
}

function dogirl() {
    let first = getUpperCharacter();
    let second = String(2);
    let end = getRandom(10000000, 99999999);

    let id = first + second + end;
    if (checkId(id)) {
        result.innerHTML = id;
    } else {
        doboy();
    }
}

function dogirl() {
    let first = getUpperCharacter();
    let second = String(2);
    let end = getRandom(10000000, 99999999);

    let id = first + second + end;
    if (checkId(id)) {
        result.innerHTML = id;
    } else {
        dogirl();
    }
}

function doByOne() {
    let first = document.getElementById('char').value;
    let second = String(getRandom(1, 2));
    let end = getRandom(10000000, 99999999);

    let id = first + second + end;
    if (checkId(id)) {
        result.innerHTML = id;
    } else {
        doByOne();
    }
}

function doByTwo() {
    let first = document.getElementById('char').value;
    let second = document.getElementById('bg').value;
    let end = getRandom(10000000, 99999999);

    let id = first + second + end;
    if (checkId(id)) {
        result.innerHTML = id;
    } else {
        doByTwo();
    }
}
