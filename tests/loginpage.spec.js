import { test, expect } from '@playwright/test'

test('login test', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
    await page.locator('#userEmail').fill("Shahid@gmail.com")
    await page.locator('#userPassword').fill("Shahid@1")
    await page.locator('#login').click()
    
})