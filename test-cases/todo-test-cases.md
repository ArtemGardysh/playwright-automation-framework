# TodoMVC Test Cases

Application: https://demo.playwright.dev/todomvc/#/completed

---

## TC-01 Add new todo item

**Preconditions:** User on Todo page

**Steps:**

1. Enter text into input field
2. Press Enter

**Expected Result:** New todo item appears in the list

## TC-02 Add empty todo

**Steps:**

1. Press Enter without entering text

**Expected Result:** Todo is not added

## TC-03 Complete todo item

**Steps:**

1. Click toggle checkbox

**Expected Result:** Todo marked as completed
