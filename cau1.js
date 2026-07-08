let numbers = [];
let n;

while (true) {
    let input = prompt("Nhập số lượng phần tử của mảng (tối đa 50):");
    if (input === null) break;
    n = parseInt(input);
    if (!isNaN(n) && n > 0 && n <= 50) {
        break;
    }
    if (n < 1) alert('số lượng phần tử không được âm')
    if (n > 50) alert('số lượng phần tử không vượt quá 50')
}

if (n !== undefined) {
    for (let i = 0; i < n; i++) {
        while (true) {
            let input = prompt(`Nhập phần tử thứ ${i + 1}/${n}:`);
            if (input === null) break;
            let value = parseInt(input);
            if (!isNaN(value)) {
                numbers.push(value);
                break;
            }
            alert("nhập một số nguyên hợp lệ!");
        }
    }

    if (numbers.length > 0) {
        displayArray(numbers);
        calculateAverageDivisibleBy3(numbers);
    } else {
        alert("Không có phần tử nào được nhập.");
    }
}

function displayArray(arr) {
    if (arr.length === 0) {
        alert("Mảng hiện đang trống.");
    } else {
        alert("Mảng hiện tại: " + arr.join(", "));
    }
}

function calculateAverageDivisibleBy3(arr) {
    const divisibleBy3 = arr.filter(num => num % 3 === 0);
    
    if (divisibleBy3.length === 0) {
        alert("Không có số nào trong mảng chia hết cho 3.");
        return null;
    }

    const sum = divisibleBy3.reduce((acc, curr) => acc + curr, 0);
    const average = sum / divisibleBy3.length;
    
    alert("Các số chia hết cho 3 trong mảng: [" + divisibleBy3.join(", ") + "]\nTrung bình cộng của các số chia hết cho 3 là: " + average);
    return average;
}
