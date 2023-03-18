import { expect, test } from "@playwright/test"
import { SIZE_BREAKPOINT_SMALL } from "../../lib/helpers"

test.describe(`Component "Navigation"`, async () => {
    test("Contains German entries", async ({ page }) => {
        await page.goto("/")

        // Navigation should contain German navigation entries
        await expect(page.locator(".Navigation_menu__GQzKW")).toContainText(
            "PortfolioKontaktÜber mich🇺🇸"
        )

        // Navigation should have German "Portfolio" entry selected
        await expect(
            page.locator(".Navigation_currentPage__B_txF")
        ).toContainText("Portfolio")
    })

    test("Contains English entries", async ({ page }) => {
        await page.goto("/")

        // Switch to english version
        await page.click(".Navigation_languageSwitch__Xc6hF>button")

        // Navigation should contain English navigation entries
        await expect(page.locator(".Navigation_menu__GQzKW")).toContainText(
            "PortfolioContactAbout me🇩🇪"
        )

        // Navigation should have English "Portfolio" entry selected
        await expect(
            page.locator(".Navigation_currentPage__B_txF")
        ).toContainText("Portfolio")
    })

    test("Navigation on small devices", async ({ page, viewport }) => {
        await page.goto("/")

        const prevViewport = viewport
        viewport = { height: 720, width: SIZE_BREAKPOINT_SMALL }

        // Navigation must not contain any navigation entries
        await expect(page.locator(".Navigation_menu__GQzKW")).toContainText("")

        viewport = prevViewport
    })
})
