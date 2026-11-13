
// Initial application data
let monthlyBudget = 50000;

let expenses = [];

let nextExpenseId = 1;

// Format amounts in Kenyan Shillings
function formatMoney(amount) {
    return new Intl.NumberFormat("en-KE", {
        style: "currency",
        currency: "KES",
        maximumFractionDigits: 2
    }).format(amount);
}

// Calculate total expenses using a loop
function calculateTotal() {
    let total = 0;

    for (let expense of expenses) {
        total += expense.amount;
    }

    return total;
}

// Update dashboard information
function updateDashboard() {
    let total = calculateTotal();
    let balance = monthlyBudget - total;

    document.getElementById("budget").textContent =
        formatMoney(monthlyBudget);

    document.getElementById("totalExpenses").textContent =
        formatMoney(total);

    document.getElementById("balance").textContent =
        formatMoney(balance);

    // Decision making using conditionals
    let feedback = document.getElementById("feedback");

    feedback.className = "feedback";

    if (total > monthlyBudget) {
        feedback.textContent =
            "Warning! You have exceeded your monthly budget.";

        feedback.classList.add("danger");

    } else if (total >= monthlyBudget * 0.8) {
        feedback.textContent =
            "Careful! You have used at least 80% of your budget.";

        feedback.classList.add("warning");

    } else {
        feedback.textContent =
            "Great job! You are within your budget.";

    }

    // Change balance colour based on spending
    document.getElementById("balance").style.color =
        balance < 0 ? "#d93636" : "#123c69";
}

// Display expense records on the webpage
function displayExpenses() {
    const expenseList = document.getElementById("expenseList");

    expenseList.replaceChildren();

    // Check whether expenses exist
    if (expenses.length === 0) {
        const message = document.createElement("p");
        message.textContent = "No expenses recorded yet.";
        expenseList.appendChild(message);
        return;
    }

    // Loop through all expense records
    for (let expense of expenses) {
        const item = document.createElement("div");
        item.className = "expense-item";

        const details = document.createElement("div");
        details.className = "expense-details";

        const name = document.createElement("strong");
        name.textContent = expense.name;

        const category = document.createElement("small");
        category.textContent = "Category: " + expense.category;

        const amount = document.createElement("p");
        amount.textContent = formatMoney(expense.amount);

        details.append(name, category, amount);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";
        deleteButton.dataset.id = expense.id;

        item.append(details, deleteButton);

        expenseList.appendChild(item);
    }
}

// Handle adding new expenses
document.getElementById("expenseForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("expenseName")
            .value.trim();

        const category = document.getElementById("category")
            .value;

        const amount = Number(
            document.getElementById("expenseAmount").value
        );

        // Validate expense information
        if (!name || !category || !Number.isFinite(amount) || amount <= 0) {
            alert("Please enter valid expense information.");
            return;
        }

        // Store expense as an object inside an array
        const newExpense = {
            id: nextExpenseId++,
            name: name,
            category: category,
            amount: amount
        };

        expenses.push(newExpense);

        // Update the webpage
        displayExpenses();
        updateDashboard();

        // Clear form fields
        this.reset();
    });

// Handle updating the monthly budget
document.getElementById("budgetForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const newBudget = Number(
            document.getElementById("budgetInput").value
        );

        if (!Number.isFinite(newBudget) || newBudget <= 0) {
            alert("Please enter a valid budget greater than zero.");
            return;
        }

        monthlyBudget = newBudget;

        updateDashboard();

        this.reset();
    });

// Handle deleting expenses using event delegation
document.getElementById("expenseList")
    .addEventListener("click", function(event) {

        if (event.target.classList.contains("delete-btn")) {

            const expenseId = Number(event.target.dataset.id);

            expenses = expenses.filter(function(expense) {
                return expense.id !== expenseId;
            });

            displayExpenses();
            updateDashboard();
        }
    });

// Display initial dashboard
updateDashboard();
displayExpenses();
