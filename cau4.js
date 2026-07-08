class CongNhan {
    constructor(stt, hoTen, ngaySinh, diaChi, luong, chucVu) {
        this.stt = stt;
        this.hoTen = hoTen;
        this.ngaySinh = ngaySinh;
        this.diaChi = diaChi;
        this.luong = luong;
        this.chucVu = chucVu;
    }
}

const danhSachCongNhan = [
    new CongNhan(1, "Trương Tấn B", "1998-11-11", "đà nẵng", 2000, "abc"),
    new CongNhan(2, "Trương Tấn A", "1997-11-11", "quảng nam", 2000, "abc"),
    new CongNhan(3, "Trương Tấn C", "1999-11-11", "huế", 2000, "abc")
];

danhSachCongNhan.sort((a, b) => a.hoTen.localeCompare(b.hoTen));
danhSachCongNhan.forEach((worker, index) => {
    worker.stt = index + 1;
});

function renderTable() {
    const tbody = document.getElementById("workerTableBody");
    tbody.innerHTML = "";
    
    danhSachCongNhan.forEach(worker => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${worker.stt}</td>
            <td>${worker.hoTen}</td>
            <td>${formatDate(worker.ngaySinh)}</td>
            <td>${worker.diaChi}</td>
            <td>${worker.luong}</td>
            <td>${worker.chucVu}</td>
        `;
        tbody.appendChild(row);
    });
}

function formatDate(dateString) {
    if (!dateString) return "";
    const parts = dateString.split("-");
    if (parts.length === 3) {
        return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateString;
}

document.getElementById("workerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const hoTen = document.getElementById("hoTen").value.trim();
    const ngaySinh = document.getElementById("ngaySinh").value;
    const diaChi = document.getElementById("diaChi").value.trim();
    const luong = parseFloat(document.getElementById("luong").value);
    const chucVu = document.getElementById("chucVu").value.trim();
    
    const newWorker = new CongNhan(0, hoTen, ngaySinh, diaChi, luong, chucVu);
    danhSachCongNhan.push(newWorker);
    
    danhSachCongNhan.sort((a, b) => a.hoTen.localeCompare(b.hoTen));
    danhSachCongNhan.forEach((worker, index) => {
        worker.stt = index + 1;
    });
    
    renderTable();
    document.getElementById("workerForm").reset();
});

renderTable();
