// دالة لتفعيل العنصر المحدد
    function setActive(element) {
      const currentActive = document.querySelector('.unique-active');
      if (currentActive) {
        currentActive.classList.remove('unique-active');
      }
    
      element.classList.add('unique-active');
      localStorage.setItem('activeGroup', element.getAttribute('data-group'));
    }
    
    // استعادة الحالة النشطة عند تحميل الصفحة
    document.addEventListener('DOMContentLoaded', () => {
      const activeGroup = localStorage.getItem('activeGroup');
      if (activeGroup) {
        const activeElement = document.querySelector(`[data-group="${activeGroup}"]`);
        if (activeElement) {
          activeElement.classList.add('unique-active');
        }
      } else {
        const defaultActive = document.querySelector(`[data-group="Design"]`);
        if (defaultActive) {
          defaultActive.classList.add('unique-active');
        }
      }
    });
    const container = document.getElementById('groupContainer');
const groups = container.children;
let currentIndex = 0;

function scrollGroups() {
    currentIndex = (currentIndex + 1) % groups.length;
    const groupWidth = groups[currentIndex].offsetWidth;
    const containerWidth = container.offsetWidth;
    const scrollPosition = groups[currentIndex].offsetLeft - (containerWidth / 2) + (groupWidth / 2);
    container.scrollLeft = scrollPosition;
}

setInterval(scrollGroups, 5000);
const collectionDetails1_3 = [
  {
    title: 'Designers',
    content: `<div class="group-list-inner-1-3">
                <div class="group-item-inner-1-3" onclick="window.location.href='/pages/Ldesigner'">
                  Logo designers <span class="subtitle">0 skills</span>
                </div>
                <div class="group-item-inner-1-3" onclick="window.location.href='/pages/Ldesigner'">
                  Web designers <span class="subtitle">5 skills</span>
                </div>
                <div class="group-item-inner-1-3" onclick="window.location.href='/pages/Ldesigner'">
                  Graphic designers <span class="subtitle">3 skills</span>
                </div>
              </div>`
  },
  {
    title: '0 Skills',
    content: `<div class="group-list-inner-1-3">
                <div class="group-item-inner-1-3" onclick="window.location.href='/pages/Lskills'">
                  Basic skills <span class="subtitle">0 skills</span>
                </div>
                <div class="group-item-inner-1-3" onclick="window.location.href='/pages/Lskills'">
                  Advanced skills <span class="subtitle">0 skills</span>
                </div>
              </div>`
  }
];

function openModal1_3(index) {
  const modal = document.getElementById('modal1_3');
  const modalTitle = document.getElementById('modalTitle1_3');
  const modalContent = document.getElementById('modalContent1_3');

  modalTitle.textContent = collectionDetails1_3[index].title;
  modalContent.innerHTML = collectionDetails1_3[index].content;

  modal.style.display = 'block';
  document.body.classList.add('no-scroll');
}

function closeModal1_3() {
  const modal = document.getElementById('modal1_3');
  modal.style.display = 'none';
  document.body.classList.remove('no-scroll');
}

// Close modal when clicking outside of modal content
window.onclick = function(event) {
  const modal = document.getElementById('modal1_3');
  if (event.target === modal) {
    closeModal1_3();
  }
}
