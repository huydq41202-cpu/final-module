function isLeapYear(year) {
    if (year % 100 === 0) {
        return year % 400 === 0;
    }
    return year % 4 === 0;
}

function getDaysInMonth(month, year) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            return isLeapYear(year) ? 29 : 28;
        default:
            return 0;
    }
}

function run() {
    let month, year;
    while (true) {
        let input = prompt("Nhập tháng và năm theo định dạng MM/yyyy:");
        if (input === null) return;
        
        let match = input.trim().match(/^(0[1-9]|1[0-2])\/(\d{4})$/);
        if (match) {
            month = parseInt(match[1], 10);
            year = parseInt(match[2], 10);
            break;
        }
        alert("Định dạng không hợp lệ hoặc tháng không đúng (01 - 12). Vui lòng nhập lại!");
    }
    
    let days = getDaysInMonth(month, year);
    alert("Tháng " + month + "/" + year + " có " + days + " ngày.");
}

run();
