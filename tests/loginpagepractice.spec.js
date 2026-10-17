import { test, expect } from '@playwright/test'

test ('testing login page', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractice');
    await page.locator('#username').fill("rahulshettyacademy")
    await page.locator('#password').fill("Learning@830$3mK2")
    await page.locator('.radiotextsty').last().click()
    await page.locator('#okayBtn').click()
    await page.locator('select.form-control').selectOption("Consultant")
    await page.locator('#terms').click()
    await page.locator('#signInBtn').click()
    await page.locator('#terms').click()
    // await expect(page.locator('#terms')).toBeChecked()  showing err why?


    
})
