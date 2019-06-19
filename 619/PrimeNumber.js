function confirm() {
    // 抓到數字
    let num = document.getElementById("num").value;

    // 計算根號，取其最大整數加1
    let radicalNum = Math.floor(Math.sqrt(num)) + 1;

    // 是否為質數
    let isPrime = true;

    // 紀錄因數
    let factor = 0;

    // 1不屬於質數
    if (num == 1) {
        return result.innerHTML = num + "不是質數";
    }

    // 2是質數
    if (num == 2) {
        return result.innerHTML = num + "是質數";
    }

    // 從2算到開根號，如果整除代表不是質數，紀錄因數且跳出。
    for (i = 2; i <= radicalNum; i++) {
        if (num % i == 0) {
            isPrime = false;
            factor = i;
            break;
        }
    }

    // 回傳
    if (!isPrime) {
        result.innerHTML = num + "不是質數,它可以被" + factor + "整除";
    } else {
        result.innerHTML = num + "是質數";
    }
}