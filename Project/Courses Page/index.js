// Switch GridView - ListView
const courseHolder = document.getElementById('courseHolder');
const gridBtn = document.getElementById('gridBtn');
const listBtn = document.getElementById('listBtn');

gridBtn.addEventListener('click', () => {
    courseHolder.classList.remove('list-view');
    gridBtn.classList.add('active-view');
    listBtn.classList.remove('active-view');
});

listBtn.addEventListener('click', () => {
    courseHolder.classList.add('list-view');
    listBtn.classList.add('active-view');
    gridBtn.classList.remove('active-view');
});

// Chon trang 
const allCourses = document.querySelectorAll('.Course1-Holder[data-page]');
const pageButtons = document.querySelectorAll('.page-num');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentPage = 1;
const totalPages = pageButtons.length;

function showPage(page) {
currentPage = page;

// Ẩn/hiện đúng khóa học theo data-page
allCourses.forEach(course => {
    const coursePage = Number(course.dataset.page);
    course.classList.toggle('hidden-course', coursePage !== page);
});

// Đổi trạng thái active của số trang
pageButtons.forEach(btn => {
    btn.classList.toggle('active-page', Number(btn.dataset.page) === page);
});

// Cuộn lên đầu section Course cho dễ nhìn (tuỳ chọn)
document.querySelector('.Course-holder').scrollIntoView({ behavior: 'smooth' });
}

pageButtons.forEach(btn => {
btn.addEventListener('click', () => showPage(Number(btn.dataset.page)));
});

prevBtn.addEventListener('click', () => {
if (currentPage > 1) showPage(currentPage - 1);
});

nextBtn.addEventListener('click', () => {
if (currentPage < totalPages) showPage(currentPage + 1);
});

// Hiện trang 1 khi tải trang lần đầu
showPage(1);
