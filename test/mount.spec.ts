import NavBar from '../components/NavBar.vue';
import Index from '../pages/index.vue';
import Services from '../pages/Services/index.vue';
import AboutUs from '../pages/AboutUs/index.vue';
import { shallowMount } from '@vue/test-utils';
import {
    describe,
    test,
    expect
} from "vitest";

const navBarWrapper = shallowMount(NavBar, {})
const indexWrapper = shallowMount(Index, {})
const servicesWrapper = shallowMount(Services, {})
const aboutWrapper = shallowMount(AboutUs, {})

describe("test navBar component", () => {

    test('correct component import', () => {
        expect(NavBar).toBeTruthy()
    })

    test('mounted correctly', () => {
        expect(navBarWrapper.exists()).toBe(true);
    })

    test('nav texts', () => {
        expect(navBarWrapper.html()).toContain('Home');
        expect(navBarWrapper.html()).toContain('Services');
        expect(navBarWrapper.html()).toContain('AboutUs');
        // expect(navBarWrapper.html()).toContain('FAIL');//will be fail
    })
});

describe('test index page', () => {
    test('mounted correctly', () => {
        expect(indexWrapper.exists()).toBe(true);
    })
    test('texts', () => {
        expect(indexWrapper.html()).toContain('Obsidian is a great project!!!');
    })
})

describe('test services page', () => {
    test('mounted correctly', () => {
        expect(servicesWrapper.exists()).toBe(true);
    })
    test('texts', () => {
        expect(servicesWrapper.html()).toContain('Obsidian project services here!!!');
    })
})

describe('test about us page', () => {
    test('mounted correctly', () => {
        expect(aboutWrapper.exists()).toBe(true);
    })
    test('texts', () => {
        expect(aboutWrapper.html()).toContain('Obsidian great people here!!!');
    })
})

describe('click on item', async () => {
    test('mounted correctly', () => {
        expect(indexWrapper.exists()).toBe(true);
    })
    await navBarWrapper.get('[link-test="home"]').trigger("click");
    expect(indexWrapper.html()).toContain('Obsidian is a great project!!!');

    await navBarWrapper.get('[link-test="services"]').trigger("click");
    expect(servicesWrapper.html()).toContain('Obsidian project services here!!!');

    await navBarWrapper.get('[link-test="aboutUs"]').trigger("click");
    expect(aboutWrapper.html()).toContain('Obsidian great people here!!!');
})