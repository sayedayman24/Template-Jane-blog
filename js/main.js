const subscribeBtn1 = document.getElementById("sub-btn");
const closeBtn = document.getElementById("close-btn");
const subModal = document.getElementById("sub-modal");

function showSub() {
    subModal.classList.add("active");
};

function closeModal() {
    subModal.classList.remove("active");
};