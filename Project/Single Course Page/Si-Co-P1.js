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
    // 1. Đổi màu tiêu đề (nếu có CSS)
    this.classList.toggle('active');
    
    // 2. Tìm khối cha .Cur-P1 bao quanh tất cả
    const parent = this.closest('.Cur-P1');
    
    // 3. Từ khối cha đó, tìm chính xác thẻ nội dung bên trong
    const content = parent.querySelector('.Cur-P1-Content');
    
    // 4. Bật/tắt class hiển thị
    if (content) {
      content.classList.toggle('show');
    }
  });
});