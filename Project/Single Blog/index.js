//Reply Comments
(function () {
const comments = document.querySelectorAll('.comment');

function closeAllForms(exceptForm) {
    document.querySelectorAll('.reply-form.is-open').forEach(f => {
if (f !== exceptForm) {
        f.classList.remove('is-open');
        const toggleBtn = f.closest('.comment-body').querySelector('.reply-toggle');
        toggleBtn.classList.remove('is-open');
        toggleBtn.querySelector('.reply-label').textContent = 'Reply';
}
});
}

comments.forEach(comment => {
    const toggleBtn = comment.querySelector('.reply-toggle');
    const form = comment.querySelector('.reply-form');
    const textarea = form.querySelector('textarea');
    const postBtn = form.querySelector('.btn-post');
    const cancelBtn = form.querySelector('.btn-cancel');
    const replyList = comment.querySelector('.reply-list');
    const label = toggleBtn.querySelector('.reply-label');

function closeForm() {
form.classList.remove('is-open');
toggleBtn.classList.remove('is-open');
label.textContent = 'Reply';
textarea.value = '';
}

toggleBtn.addEventListener('click', () => {
    const willOpen = !form.classList.contains('is-open');
    closeAllForms(willOpen ? form : null);
    form.classList.toggle('is-open', willOpen);
    toggleBtn.classList.toggle('is-open', willOpen);
    label.textContent = willOpen ? 'Cancel' : 'Reply';
    if (willOpen) textarea.focus();
});

    cancelBtn.addEventListener('click', closeForm);

    postBtn.addEventListener('click', () => {
const text = textarea.value.trim();
if (!text) {
textarea.focus();
return;
}

    const replyEl = document.createElement('div');
    replyEl.className = 'reply-item';
    replyEl.innerHTML = `
    <img class="avatar small" src="https://i.pravatar.cc/40?img=12" alt="Bạn">
    <div class="comment-body">
        <div class="comment-head">
        <span class="comment-author">Bạn</span>
        <span class="comment-date">${new Date().toLocaleDateString('vi-VN')}</span>
        </div>
        <p class="comment-text"></p>
    </div>
    `;
    replyEl.querySelector('.comment-text').textContent = text;
    replyList.appendChild(replyEl);

    closeForm();
});
});
})();

// Chon trang 
const allCourses = document.querySelectorAll('.comment[data-page]');
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
document.querySelector('.comment').scrollIntoView({ behavior: 'smooth' });
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