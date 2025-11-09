document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Element Setup ---
    const userForm = document.getElementById('userForm');
    const userTableBody = document.getElementById('userTable');
    const dynamicAlerts = document.getElementById('dynamicAlerts'); 
    const cookieAlert = document.getElementById('cookieAlert');
    const acceptCookiesBtn = document.getElementById('acceptCookies');

    // --- 2. Optional Helper: Toast Notification ---
    function showNotification(message, type = 'success') {
        const alertHTML = `
            <div class="alert alert-${type} alert-dismissible fade show fixed-top w-75 mx-auto mt-3 shadow-lg" 
                 role="alert" style="z-index: 2001;">
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`;
        
        dynamicAlerts?.insertAdjacentHTML('afterbegin', alertHTML);
        
        
        setTimeout(() => {
            const addedAlert = dynamicAlerts?.querySelector('.alert');
            if (addedAlert) addedAlert.classList.remove('show');
            setTimeout(() => addedAlert?.remove(), 500); 
        }, 4000);
    }

    // --- 3. Registration Form Handler ---
    userForm.addEventListener("submit", function (e) {
        e.preventDefault();

        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const plan = document.getElementById('plan').value;
        
        
        if (!name || !email || !phone || plan === '' || plan === 'Select Plan') {
             showNotification('⚠️ Please fill out all required fields and select a plan.', 'danger');
             return; 
        }

        
        const row = userTableBody.insertRow();
        row.innerHTML = `<td>${name}</td><td>${email}</td><td>${phone}</td><td>${plan}</td>`;
        
        
        this.reset(); 

       
        const successModal = new bootstrap.Modal(document.getElementById('successModal'));
        document.getElementById('successUserName').textContent = name;
        successModal.show();
    });

    // --- 4. Apply Button (Show Existing Modal) ---
    document.querySelectorAll(".apply-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            const modal = new bootstrap.Modal(document.getElementById("applyModal"));
            modal.show();
        });
    });

    // --- 5. Alert Handler ---
    if (acceptCookiesBtn) {
        acceptCookiesBtn.addEventListener("click", () => {
            const alertBox = document.getElementById("cookieAlert");
            alertBox.classList.remove("show");
            setTimeout(() => alertBox.remove(), 500);
        });
    }
});
