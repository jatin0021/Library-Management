document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from reloading the page

    const userType = document.getElementById("userType").value; // Check user role (admin/user)
    const userId = document.getElementById("userId").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    // Clear any previous error messages
    errorMessage.textContent = "";

    // Dummy user credentials for demo
    const credentials = {
        user: { userId: "user1", password: "user123" },
        admin: { userId: "admin1", password: "admin123" }
    };

    // Validate login credentials
    if (userId === credentials[userType].userId && password === credentials[userType].password) {
        // Hide login form and show dashboard
        document.querySelector(".login-container").style.display = "none";
        document.querySelector(".dashboard-container").style.display = "block";
        
        // Logs for debugging
        console.log(`Logged in as: ${userType}`);

        // Show correct menus based on the user role
        if (userType === "admin") {
            document.getElementById("maintenanceMenu").style.display = "block";
            document.getElementById("reportMenu").style.display = "block";
            document.getElementById("transactionMenu").style.display = "block";
            console.log("Admin has access to all menus.");
        } 
        else if (userType === "user") {
            document.getElementById("maintenanceMenu").style.display = "block";
            document.getElementById("reportMenu").style.display = "block";
            document.getElementById("transactionMenu").style.display = "block";
            console.log("User has access to Report Menu only.");
        }
    } else {
        errorMessage.textContent = "Invalid User ID or Password";
    }
});

function showSection(sectionId) {
    const sections = document.getElementsByClassName('sub-section');
    // Hide all sections
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

document.getElementById('addMembershipForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the form from submitting immediately

    // Get form field values
    const name = document.getElementById('memberName').value.trim();
    const contact = document.getElementById('contactInfo').value.trim();
    const membershipNumber = document.getElementById('membershipNumber').value.trim();
    const membershipDuration = document.getElementById('membershipDuration').value;

    // Check if any field is empty
    if (!name || !contact || !membershipNumber) {
        document.getElementById('addMembershipError').textContent = 'All fields are mandatory!';
    } else {
        document.getElementById('addMembershipError')
        // document.getElementById('addMembershipError').textContent = '';
        alert(`Membership added successfully: \nName: ${name}\nContact: ${contact}\nMembership Number: ${membershipNumber}\nDuration: ${membershipDuration}`);
        
        // Here, you would add the logic to submit this data to the server
        // For now, it just resets the form
        document.getElementById('addMembershipForm').reset();
    }
});

function addIssue() {
    // Get the form inputs
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('authorName').value;
    const issueDate = document.getElementById('issueDate').value;
    const returnDate = document.getElementById('returnDate').value;

    // Check if all fields are filled
    if (title && author && issueDate && returnDate) {
        // Get the issue list table body
        const issueList = document.getElementById('issue-list');

        // Create a new row
        const row = document.createElement('tr');

        // Create columns for the book title, author, issue date, and return date
        const titleColumn = document.createElement('td');
        titleColumn.innerText = title;

        const authorColumn = document.createElement('td');
        authorColumn.innerText = author;

        const issueDateColumn = document.createElement('td');
        issueDateColumn.innerText = issueDate;

        const returnDateColumn = document.createElement('td');
        returnDateColumn.innerText = returnDate;

        // Create a column for the delete button
        const actionColumn = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.className = 'delete-btn';
        deleteButton.onclick = function() {
            row.remove(); // Remove the row when delete is clicked
        };

        actionColumn.appendChild(deleteButton);

        // Append the columns to the row
        row.appendChild(titleColumn);
        row.appendChild(authorColumn);
        row.appendChild(issueDateColumn);
        row.appendChild(returnDateColumn);
        row.appendChild(actionColumn);

        // Append the row to the issue list
        issueList.appendChild(row);

        // Clear the input fields after adding the issue
        document.getElementById('bookTitle').value = '';
        document.getElementById('authorName').value = '';
        document.getElementById('issueDate').value = '';
        document.getElementById('returnDate').value = '';
    } else {
        alert('Please fill in all fields');
    }
}

function addMembership() {
    const memberName = document.getElementById('memberName').value;
    const membershipType = document.getElementById('membershipType').value;
    const joinDate = document.getElementById('joinDate').value;

    if (memberName && membershipType && joinDate) {
        const membershipList = document.getElementById('membership-list');

        const row = document.createElement('tr');
        const nameColumn = document.createElement('td');
        nameColumn.innerText = memberName;
        const typeColumn = document.createElement('td');
        typeColumn.innerText = membershipType;
        const dateColumn = document.createElement('td');
        dateColumn.innerText = joinDate;

        const actionColumn = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = function() {
            row.remove();
        };

        actionColumn.appendChild(deleteButton);

        row.appendChild(nameColumn);
        row.appendChild(typeColumn);
        row.appendChild(dateColumn);
        row.appendChild(actionColumn);

        membershipList.appendChild(row);

        document.getElementById('memberName').value = '';
        document.getElementById('joinDate').value = '';
    } else {
        alert('Please fill all fields');
    }
}

function addMovie() {
    const title = document.getElementById('movieTitle').value;
    const director = document.getElementById('directorName').value;
    const releaseYear = document.getElementById('releaseYear').value;

    if (title && director && releaseYear) {
        const movieList = document.getElementById('movie-list');

        const row = document.createElement('tr');
        const titleColumn = document.createElement('td');
        titleColumn.innerText = title;
        const directorColumn = document.createElement('td');
        directorColumn.innerText = director;
        const yearColumn = document.createElement('td');
        yearColumn.innerText = releaseYear;

        const actionColumn = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = function() {
            row.remove();
        };

        actionColumn.appendChild(deleteButton);

        row.appendChild(titleColumn);
        row.appendChild(directorColumn);
        row.appendChild(yearColumn);
        row.appendChild(actionColumn);

        movieList.appendChild(row);

        document.getElementById('movieTitle').value = '';
        document.getElementById('directorName').value = '';
        document.getElementById('releaseYear').value = '';
    } else {
        alert('Please fill all fields');
    }
}

function addBookToList() {
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;
    const publicationYear = document.getElementById('publicationYear').value;

    if (title && author && publicationYear) {
        const bookList = document.getElementById('book-list-table');

        const row = document.createElement('tr');
        const titleColumn = document.createElement('td');
        titleColumn.innerText = title;
        const authorColumn = document.createElement('td');
        authorColumn.innerText = author;
        const yearColumn = document.createElement('td');
        yearColumn.innerText = publicationYear;

        const actionColumn = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = function() {
            row.remove();
        };

        actionColumn.appendChild(deleteButton);

        row.appendChild(titleColumn);
        row.appendChild(authorColumn);
        row.appendChild(yearColumn);
        row.appendChild(actionColumn);

        bookList.appendChild(row);

        document.getElementById('bookTitle').value = '';
        document.getElementById('bookAuthor').value = '';
        document.getElementById('publicationYear').value = '';
    } else {
        alert('Please fill all fields');
    }
}

function addOverdueReturn() {
    const title = document.getElementById('overdueBookTitle').value;
    const author = document.getElementById('overdueAuthor').value;
    const originalReturnDate = new Date(document.getElementById('originalReturnDate').value);
    const actualReturnDate = new Date(document.getElementById('actualReturnDate').value);

    if (title && author && originalReturnDate && actualReturnDate) {
        const overdueList = document.getElementById('overdue-list');

        // Calculate the number of overdue days and fine
        const timeDifference = actualReturnDate - originalReturnDate;
        const overdueDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        const fine = overdueDays > 0 ? overdueDays * 1 : 0;  // $1 fine per day

        // Create a new row for the overdue list
        const row = document.createElement('tr');
        const titleColumn = document.createElement('td');
        titleColumn.innerText = title;
        const authorColumn = document.createElement('td');
        authorColumn.innerText = author;
        const originalDateColumn = document.createElement('td');
        originalDateColumn.innerText = originalReturnDate.toLocaleDateString();
        const actualDateColumn = document.createElement('td');
        actualDateColumn.innerText = actualReturnDate.toLocaleDateString();
        const fineColumn = document.createElement('td');
        fineColumn.innerText = fine > 0 ? `$${fine}` : 'No fine';

        // Create action column with delete button
        const actionColumn = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = function() {
            row.remove();
        };

        actionColumn.appendChild(deleteButton);

        // Append all columns to the row
        row.appendChild(titleColumn);
        row.appendChild(authorColumn);
        row.appendChild(originalDateColumn);
        row.appendChild(actualDateColumn);
        row.appendChild(fineColumn);
        row.appendChild(actionColumn);

        // Append the row to the overdue list
        overdueList.appendChild(row);

        // Clear the form fields
        document.getElementById('overdueBookTitle').value = '';
        document.getElementById('overdueAuthor').value = '';
        document.getElementById('originalReturnDate').value = '';
        document.getElementById('actualReturnDate').value = '';
    } else {
        alert('Please fill all fields');
    }
}


