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