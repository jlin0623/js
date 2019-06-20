function clone(source) {
    if (typeof(source) != "object") return null;

    let target = new Object();
    for (let attr in source) {
        target[attr] = source[attr];
    }
    return target;
}