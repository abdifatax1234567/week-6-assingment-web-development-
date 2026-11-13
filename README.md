
# SpendWise - Interactive Budgeting Application

## Project Description

SpendWise is an interactive budgeting application developed using HTML, CSS and JavaScript. It helps users manage their monthly budgets, record expenses and monitor their spending.

## Features and Improvements

The following improvements were made:

- Added a monthly budget setting feature.
- Added an expense recording form.
- Added expense categories.
- Added automatic calculation of total expenses.
- Added automatic calculation of remaining balance.
- Added spending warnings when the budget is nearly exhausted or exceeded.
- Added the ability to delete expense records.
- Improved the dashboard to update automatically.

## 1. Decision Making

JavaScript conditional statements (`if`, `else if` and `else`) are used to evaluate spending.

For example:
- If expenses exceed the budget, a warning is displayed.
- If expenses reach 80% of the budget, a caution message appears.
- Otherwise, the application displays a message confirming that spending is within budget.

## 2. Working with Arrays

An array called `expenses` stores multiple expense records.

Each expense is stored as an object containing:
- An ID
- Expense name
- Category
- Amount

The `push()` method adds new expenses, while `filter()` removes deleted records.

## 3. Processing Data with Loops

The `for...of` loop processes expense records.

It is used to calculate total expenses and display all recorded expenses on the webpage.

## 4. DOM Manipulation

DOM methods are used to update the dashboard dynamically.

Examples include:
- `getElementById()` to select HTML elements.
- `textContent` to update displayed text.
- `createElement()` to create expense records.
- `appendChild()` to display elements.
- `replaceChildren()` to refresh the expense list.

## 5. Handling User Interactions

The `addEventListener()` method handles user actions.

It responds to:
- Expense form submissions.
- Budget form submissions.
- Delete button clicks.

The `preventDefault()` method prevents forms from refreshing the page when submitted.

## 6. Challenges Encountered and Solutions

Some challenges included:
- Understanding how to store multiple expense records using arrays.
- Using loops to calculate total expenses.
- Connecting JavaScript to HTML elements.
- Updating the dashboard after adding or deleting expenses.
- Handling form submissions without refreshing the webpage.

These challenges were resolved through practice, testing and debugging.

## Conclusion

The SpendWise application demonstrates how JavaScript can make a budgeting application interactive through decision making, arrays, loops, DOM manipulation and event listeners.
