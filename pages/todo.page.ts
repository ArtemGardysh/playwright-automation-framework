import {Page} from '@playwright/test';

export class TodoPage {
    constructor(private page: Page) {}


async open() {
    await this.page.goto('https://demo.playwright.dev/todomvc')
}
async addTodo(text: string) {
    await this.page.fill('.new-todo', text);
    await this.page.keyboard.press('Enter');
}

 getTodos() {
    return this.page.locator('.todo-list li');
}
}