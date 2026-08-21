function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

function checkPassword() {
    const val = document.getElementById('passkey').value;
            
    if (val === 'user123') {
        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("activePage", "page-one");
        showPage('page-one');

    } else if (val === 'client123') {
        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("activePage", "page-two");
        showPage('page-two');

    } else if (val === 'admin123') {
        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("activePage", "page-three");
        showPage('page-three');

    } else {
        document.getElementById('error-message').innerText = "Wrong password!";
    }
}

function logout() {
    sessionStorage.clear();
    document.getElementById('passkey').value = '';
    document.getElementById('error-message').innerText = "";
    showPage('login');
}

// Check active session on load
window.onload = function() {
    if (sessionStorage.getItem("isLoggedIn") === "true") {
        const target = sessionStorage.getItem("activePage") || 'login';
        showPage(target);
    }
}

//----------------------------------------------------------------------------------//
function switchPage() {
    const val = document.getElementById('passval').value;
            
    if (val === 'actions') {
        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("activePage", "AAR");
        showPage('AAR');

    } else {
        alert('Page is emplty, still working on');
    }
}

function switchPage2() {
    const val = document.getElementById('passval2').value;
            
    if (val === 'calls') {
        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("activePage", "ACS");
        showPage('ACS');

    } else {
        alert('Page is emplty, still working on');
    }
}

function switchPage3() {
    const val = document.getElementById('passval3').value;
            
    if (val === 'approved') {
        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("activePage", "ABT");
        showPage('ABT');

    } else {
        alert('Page is emplty, still working on');
    }
}

function switchPage4() {
    const val = document.getElementById('passval4').value;
            
    if (val === 'consol') {
        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("activePage", "CUS");
        showPage('CUS');

    } else {
        alert('Page is emplty, still working on');
    }
}

function returnPage() {
        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("activePage", "page-one");
        showPage('page-one');
}

//----------------------------------------------------------------------------------//
function filterTable() {
    // Get table element, text inputs, and table rows
    const table = document.getElementById("filterTable");
    const inputs = table.getElementsByClassName("filter-input");
    const rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");

    // Loop through all data rows in the body
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const cells = row.getElementsByTagName("td");
        let rowMatchesAllFilters = true;

        // Compare each row's columns against the corresponding input values
        for (let j = 0; j < inputs.length; j++) {
            const filterValue = inputs[j].value.toLowerCase();
            const cellValue = cells[j] ? cells[j].textContent.toLowerCase() : "";

            // If the cell value does not contain the filtered keyword, flag row to be hidden
            if (filterValue && !cellValue.includes(filterValue)) {
                rowMatchesAllFilters = false;
                break; // One mismatch is enough to skip checking other columns for this row
            }
        }

        // Toggle visibility using the CSS utility class
        if (rowMatchesAllFilters) {
            row.classList.remove("hidden-row");
        } else {
            row.classList.add("hidden-row");
        }
    }
}