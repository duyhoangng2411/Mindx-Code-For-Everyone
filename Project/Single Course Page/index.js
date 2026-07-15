// NAVBAR -
function openTab(evt, tabId) {
  // 1. Ẩn tất cả các tab content [1]
let contents = document.getElementsByClassName("tab-content");
for (let i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
}

  // 2. Xóa bỏ class active khỏi các nút [1]
let buttons = document.getElementsByClassName("tab-btn");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].className = buttons[i].className.replace(" active", "");
}

  // 3. ĐỔI THÀNH "FLEX" Ở ĐÂY (Thay vì dùng "block" như cũ)
document.getElementById(tabId).style.display = "flex"; 

  // 4. Thêm class active vào nút vừa bấm [1]
evt.currentTarget.className += " active";
}

// Curriculum
const titles = document.querySelectorAll('.Cur-P1-TD-title');

titles.forEach(title => {
  title.addEventListener('click', function() {
    this.classList.toggle('active');
    
    const parent = this.closest('.Cur-P1');
    const content = parent.querySelector('.Cur-P1-Content');
    
    if (content) {
      content.classList.toggle('show');
    }

    // ĐOẠN THÊM MỚI: Tìm và xoay mũi tên nằm cùng khối cha
    const arrow = parent.querySelector('.Cur-A');
    if (arrow) {
        arrow.classList.toggle('rotated');
    }
  });
});

// --- JAVASCRIPT CHO PHẦN FAQ ---
const faqHeaders = document.querySelectorAll('.FAQ-P1-Header');

faqHeaders.forEach(header => {
  header.addEventListener('click', function() {
    // Đổi màu tiêu đề FAQ
    const title = this.querySelector('.FAQ-P1');
    if(title) title.classList.toggle('active');
    
    // Tìm nội dung FAQ nằm dưới
    const parent = this.closest('.FAQ-P1-Holder');
    const content = parent.querySelector('.FAQ-P1-ND');
    if (content) {
      content.classList.toggle('show');
    }
  });
});

// Thanh Progress
document.addEventListener("DOMContentLoaded", () => {
  // Mảng dữ liệu thực tế (Thứ tự từ 5 sao xuống 1 sao giống giao diện của bạn)
  const ratingPercentages = [90, 5, 2, 2, 1];

  // Lấy danh sách các dòng rating-row
  const rows = document.querySelectorAll(".Progress-Bar-Holder");

  rows.forEach((row, index) => {
    // Lấy số % tương ứng trong mảng dữ liệu
    const percentValue = ratingPercentages[index] || 0;

    // Tìm thẻ hiển thị số % trong dòng này và cập nhật text
    const percentText = row.querySelector(".percent-text");
    if (percentText) {
      percentText.textContent = `${percentValue}%`;
    }

    // Tìm thanh màu vàng trong dòng này và tăng chiều rộng (width)
    const progressFill = row.querySelector(".Progress-Fill");
    if (progressFill) {
      // Đặt timeout một chút để tạo hiệu ứng chuyển động chạy mượt sau khi load trang
      setTimeout(() => {
        progressFill.style.width = `${percentValue}%`;
      }, 100);
    }
  });
});