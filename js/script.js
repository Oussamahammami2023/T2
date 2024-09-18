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
