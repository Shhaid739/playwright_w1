import { test, expect } from '@playwright/test'

// test('ui test', async ({ page }) => {
//     await page.goto('http://www.google.com');
// }

// )

// test('checking title', async ({ page }) => {
//     await page.goto('https://www.google.com')
//     await expect(page).toHaveTitle('Google')   //applying assersion here
//     console.log(await page.title())
// })

// locators - css [ locate and action ]

test('validating loging page', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    await page.locator('#username').fill("shahid")
    await page.locator('#password').fill('password')
    await page.locator('#signInBtn').click()
    console.log (await page.locator("[style*='block']").textContent())
})

