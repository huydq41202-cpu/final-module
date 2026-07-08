function checkPerfectNumber() {
    let num;
    while (true) {
        let input = prompt("Nhập vào một số nguyên dương:");
        if (input === null) return false;
        
        let parsedFloat = parseFloat(input);
        let parsedInt = parseInt(input);
        
        if (!isNaN(parsedFloat) && Number.isInteger(parsedFloat) && parsedInt > 0) {
            num = parsedInt;
            break;
        }
        alert("Vui lòng nhập một số nguyên dương hợp lệ!");
    }
    
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    
    let result = (sum === num);
    alert(result);
    return result;
}

checkPerfectNumber();
