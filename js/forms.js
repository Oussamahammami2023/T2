function checkInternetConnection() {
    const iframe = document.getElementById("tally-frame");
    const errorMessage = document.getElementById("error-message");

    iframe.onerror = function () {
        // عند حدوث خطأ في تحميل iframe
        iframe.style.display = "none";
        errorMessage.style.display = "block";
    };

    window.addEventListener("offline", () => {
        // عند انقطاع الإنترنت
        iframe.style.display = "none";
        errorMessage.style.display = "block";
    });

    window.addEventListener("online", () => {
        // عند استعادة الإنترنت
        iframe.style.display = "block";
        errorMessage.style.display = "none";
        iframe.src = iframe.src; // إعادة تحميل iframe
    });
}

document.addEventListener("DOMContentLoaded", checkInternetConnection);
