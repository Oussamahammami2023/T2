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
    content: '<div class="group-list-inner-1-3">' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Ldesigner\'">' +
             'Logo designers<span class="subtitle">0 skills</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/designers-page.html\'">' +
             'Brand Identity Designers<span class="subtitle">0 skills</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Business Card Designers<span class="subtitle">0 skills</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Brochure & Flyer Designers<span class="subtitle">0 skills</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Poster Designers<span class="subtitle">0 skills</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Book Cover Designers<span class="subtitle">0 skills</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Packaging Designers<span class="subtitle">0 skills</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Print Designers<span class="subtitle">0 skills</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Advertisement Designers<span class="subtitle">0 skills</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Illustration designers<span class="subtitle">0 skills</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Icon Designers<span class="subtitle">0 skills</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Web Designers<span class="subtitle">0 skills</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'UI Designers<span class="subtitle">0 skills</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'UX Designers<span class="subtitle">0 skills</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Game Designers<span class="subtitle">0 skills</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Motion Graphics Designers<span class="subtitle">0 skills</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Promotional Video Designers<span class="subtitle">0 skills</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             '3D Animation Designers<span class="subtitle">0 skills</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Visual Effects Designers<span class="subtitle">0 skills</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Presentation Designers<span class="subtitle">0 skills</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             '3D Character Designers<span class="subtitle">0 skills</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             '3D Modeling<span class="subtitle">0 skills</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             '3D Product Designers<span class="subtitle">0 skills</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             '3D Environment Designers<span class="subtitle">0 skills</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Event Branding Designers<span class="subtitle">0 skills</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Event Invitation Designers<span class="subtitle">0 skills</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Banner & Billboard Designers<span class="subtitle">0 skills</span>' +
             '</div>' +
             '</div>'
  }
];

function openModal1_3(index) {
  const modal = document.getElementById('modal1_3');
  const modalTitle = document.getElementById('modalTitle1_3');
  const modalContent = document.getElementById('modalContent1_3');

  // تحقق من أن الفهرس صحيح
  if (collectionDetails1_3[index]) {
    modalTitle.textContent = collectionDetails1_3[index].title;
    modalContent.innerHTML = collectionDetails1_3[index].content; // تحميل المحتوى الجديد
    modal.style.display = 'block';
    document.body.classList.add('no-scroll'); // منع التمرير في الصفحة الرئيسية
  }
}

function closeModal1_3() {
  const modal = document.getElementById('modal1_3');
  modal.style.display = 'none';
  document.body.classList.remove('no-scroll'); // السماح بالتمرير في الصفحة الرئيسية
}
