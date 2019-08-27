function checkValidatePhone(str) {
    let patt = /^[0-9]{2}[-][0][0-9]{9}$/;
    if (patt.test(str)) {
        return true;
    } else {
        return false;
    }
}