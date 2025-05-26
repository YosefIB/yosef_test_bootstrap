function showAlert(message: string, type: 'success' | 'danger') {
    // Remove existing alerts
    const existingAlerts = document.querySelectorAll('.alert');
    existingAlerts.forEach(alert => alert.remove());

    // Create new alert
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.role = 'alert';
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

    // Insert alert at the top of the form
    const form = document.querySelector('form');
    if (form) {
        form.insertAdjacentElement('beforebegin', alertDiv);
    }

    // Auto-dismiss after 3 seconds
    setTimeout(() => {
        alertDiv.classList.remove('show');
        setTimeout(() => alertDiv.remove(), 150);
    }, 3000);
}

function registerBtnCliced(){
    const registerBtn = document.getElementById('registerBtn');
    if (registerBtn) {
        registerBtn.addEventListener('click', () => {
            const fullName = (document.getElementById('fullName') as HTMLInputElement).value;
            const email = (document.getElementById('email') as HTMLInputElement).value;
            const password = (document.getElementById('password') as HTMLInputElement).value;

            if (fullName === '') {
                showAlert("Full Name cannot be empty!", "danger");
                return;
            }
            if (email === '') {
                showAlert("Email cannot be empty!", "danger");
                return;
            }

            if (password === '') {
                showAlert("Password cannot be empty!", "danger");
                return;
            }

            showAlert("Registration successful! Welcome " + fullName, "success");
        });
    }
}