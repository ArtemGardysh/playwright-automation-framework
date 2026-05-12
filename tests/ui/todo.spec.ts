import {test,expect} from '@playwright/test';
import {TodoPage} from '../../pages/todo.page';

test('Add todo item', async ({page}) => {
    const todo = new TodoPage(page);

    await todo.open();
    await todo.addTodo('Learn Playwright');

    await expect(todo.getTodos()).toContainText('Learn Playwright');
});