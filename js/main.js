let progress = 0;
let interval = setInterval(() => {
  document.getElementById('loader').style.width = progress + '%'; // Thiết lập chiều rộng của loader
  document.getElementById('loader-text').textContent = progress + '%'; // Cập nhật văn bản hiển thị phần trăm

  progress++; // Tăng giá trị tiến độ

  if (progress > 100) {
    clearInterval(interval); // Dừng setInterval khi đạt 100%
    window.location.href = 'totinh.html'; // Chuyển hướng tới điểm neo (nếu cần)
    document.getElementById('loader-text').textContent = '100%'; // Thay đổi thành "100%" khi đạt 100%
  }
}, 100); // 100ms là khoảng thời gian cập nhật mỗi lần



function Load() {
    window.location.href = 'load.html';
}