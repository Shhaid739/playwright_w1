// import { mergeTests } from "@playwright/test";
import { test, expect } from '@playwright/test'

test('login test', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
    await page.locator('.login-wrapper-footer-text').click()
    await page.locator('#firstName').fill("Md Shahid")
    await page.locator('#lastName').fill("Saleem")
    await page.locator('#userEmail').fill("mdshahidsaleem@gmail.com")
    await page.locator('#userMobile').fill("6205159274")
    await page.locator('[formcontrolname="occupation"]').selectOption("Nothing") //err
    await page.locator([value='Male']).click()  //err
    
})