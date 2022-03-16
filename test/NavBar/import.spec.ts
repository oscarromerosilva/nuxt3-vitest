import {
    describe,
    test,
    expect
} from "vitest";

describe("test navBar component", async () => {
    const navBarComponent = await import('../../components/NavBar.vue')

    test('normal imports as expected', () => {
        expect(navBarComponent).toBeDefined()
    })
});