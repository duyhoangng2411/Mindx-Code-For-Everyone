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
