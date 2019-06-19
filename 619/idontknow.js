function confirm(num) {

    // 計算根號，取其最大整數加1
    let radicalNum = Math.floor(Math.sqrt(num)) + 1;


    // 0或1不屬於質數
    if (num == 1 || num == 0) {
        return false;
    }

    // 2是質數
    if (num == 2) {
        return true;
    }

    // 從2算到開根號，如果整除代表不是質數，紀錄因數且跳出。
    for (i = 2; i <= radicalNum; i++) {
        if (num % i == 0) {
            return false;
        }
    }

    return true;
}