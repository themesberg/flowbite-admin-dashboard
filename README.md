# [Flowbite Admin Dashboard](https://flowbite-admin-dashboard.vercel.app) [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter)](https://twitter.com/intent/tweet?url=https%3A%2F%2Fgithub.com%2Fthemesberg%2Fflowbite-admin-dashboard&text=Check%20out%20this%20open-source%20admin%20dashboard%20built%20with%20Flowbite%20and%20Tailwind%20CSS)

[![version](https://img.shields.io/npm/v/flowbite-admin-dashboard)](https://www.npmjs.com/package/flowbite-admin-dashboard)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)
[![GitHub issues open](https://img.shields.io/github/issues/themesberg/flowbite-admin-dashboard.svg)](https://github.com/themesberg/flowbite-admin-dashboard/issues?q=is%3Aopen+is%3Aissue)
[![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/themesberg/flowbite-admin-dashboard.svg)](https://github.com/themesberg/flowbite-admin-dashboard/issues?q=is%3Aissue+is%3Aclosed)

[![Flowbite Admin Dashboard Live Preview](https://flowbite.s3.amazonaws.com/templates/flowbite-admin-dashboard/flowbite-admin-dashboard-preview.png)](https://flowbite-admin-dashboard.vercel.app/)

This project is a free and open-source UI admin dashboard template built with the components from [Flowbite](https://github.com/themesberg/flowbite) and based on the utility-first [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) framework featuring charts, tables, widgets, CRUD layouts, modals, drawers, and more.

This admin dashboard can quickly help you get started building an application for your project using the newest UI/UX development technologies in the open-source area including Tailwind CSS and Flowbite.

## 🌀 Built with Flowbite

The interactive components such as the navbars, modals, drawers, and tooltips are all based on the popular [open-source component library called Flowbite](https://flowbite.com/) which enables us to use these elements by creating more complex set of pages and widgets inside a fully-fledged admin dashboard template.

## 💨 Tailwind CSS utility classes

All of the pages, widgets, and components are solely based on the utility-first classes from Tailwind CSS and it is compatible with the latest `v3.x` of the technology by automatically purging all of the classes based on the template paths.

## 📊 15 example pages

Get started with 15 advanced examples pages including two different layouts of a dashboard's homepage full of charts widgets, tables, datepickers, and statistics and also with two CRUD layout pages for products, users, a settings page, authentication pages for login and register and even custom 404 and 500 error pages.

## 🧱 Advanced components

This admin dashboard contains many advanced components both from Flowbite but also from other third-party libraries such as ApexCharts which have been customly tailored with Tailwind CSS classes and designed based on the [Flowbite Design System](https://flowbite.com/figma/).

## 📚 Flowbite documentation

If you want to use this project we recommend to also [study the component library](https://flowbite.com/docs/getting-started/introduction/) that we used to build this dashboard because you can use even more components from that library to enhance the examples that we've coded here already.

## ⚙️ Workflow

This product is built using the following widely used technologies:

- Tailwind CSS: [tailwindcss.com](https://tailwindcss.com/)
- Flowbite: [flowbite.com](http://flowbite.com/)
- HUGO [gohugo.io](https://gohugo.io/documentation/)
- Webpack [webpack.js.org](https://webpack.js.org/)

## Table of Contents

- [Flowbite Admin Dashboard ](#flowbite-admin-dashboard-)
  - [🌀 Built with Flowbite](#-built-with-flowbite)
  - [💨 Tailwind CSS utility classes](#-tailwind-css-utility-classes)
  - [📊 15 example pages](#-15-example-pages)
  - [🧱 Advanced components](#-advanced-components)
  - [📚 Flowbite documentation](#-flowbite-documentation)
  - [⚙️ Workflow](#️-workflow)
  - [Table of Contents](#table-of-contents)
  - [Demo pages](#demo-pages)
  - [Quick start](#quick-start)
    - [JavaScript Frameworks](#javascript-frameworks)
    - [Back-end Frameworks](#back-end-frameworks)
  - [File Structure](#file-structure)
  - [Browser Support](#browser-support)
  - [Resources](#resources)
  - [Reporting Issues](#reporting-issues)
  - [Technical Support or Questions](#technical-support-or-questions)
  - [Licensing](#licensing)
  - [Useful Links](#useful-links)
  - [Authors](#authors)

## Demo pages

| Dashboard | Stacked Layout | Products (CRUD)
| --- | --- | --- |
| [![Dashboard](https://flowbite.s3.amazonaws.com/templates/flowbite-admin-dashboard/github/homepage.jpg)](https://flowbite-admin-dashboard.vercel.app/) | [![Stacked Layout](https://flowbite.s3.amazonaws.com/templates/flowbite-admin-dashboard/github/stacked.jpg)](https://flowbite-admin-dashboard.vercel.app/layouts/stacked/) | [![Products (CRUD)](https://flowbite.s3.amazonaws.com/templates/flowbite-admin-dashboard/github/products-crud.jpg)](https://flowbite-admin-dashboard.vercel.app/crud/products/)

| Users (CRUD) | Settings | Pricing page
| --- | --- | --- |
| [![Users (CRUD)](https://flowbite.s3.amazonaws.com/templates/flowbite-admin-dashboard/github/users.jpg)](https://flowbite-admin-dashboard.vercel.app/crud/users/) | [![Settings](https://flowbite.s3.amazonaws.com/templates/flowbite-admin-dashboard/github/settings.jpg)](https://flowbite-admin-dashboard.vercel.app/settings/) | [![Pricing page](https://flowbite.s3.amazonaws.com/templates/flowbite-admin-dashboard/github/pricing.jpg)](https://flowbite-admin-dashboard.vercel.app/pages/pricing/)

| Login page | Register page | Reset password
| --- | --- | --- |
| [![Login page](https://flowbite.s3.amazonaws.com/templates/flowbite-admin-dashboard/github/login.jpg)](https://flowbite-admin-dashboard.vercel.app/authentication/sign-in/) | [![Register page](https://flowbite.s3.amazonaws.com/templates/flowbite-admin-dashboard/github/register.jpg)](https://flowbite-admin-dashboard.vercel.app/authentication/sign-up/) | [![Reset password](https://flowbite.s3.amazonaws.com/templates/flowbite-admin-dashboard/github/reset-password.jpg)](https://flowbite-admin-dashboard.vercel.app/authentication/reset-password/)

| Forgot password | Profile lock | Maintenance page
| --- | --- | --- |
| [![Forgot password](https://flowbite.s3.amazonaws.com/templates/flowbite-admin-dashboard/github/forgot-password.jpg)](https://flowbite-admin-dashboard.vercel.app/authentication/forgot-password/) | [![Profile lock](https://flowbite.s3.amazonaws.com/templates/flowbite-admin-dashboard/github/profile-lock.jpg)](https://flowbite-admin-dashboard.vercel.app/authentication/profile-lock/) | [![Maintenance page](https://flowbite.s3.amazonaws.com/templates/flowbite-admin-dashboard/github/maintenance.jpg)](https://flowbite-admin-dashboard.vercel.app/pages/maintenance/)

| 404 not found | 500 server error | Playground
| --- | --- | --- |
| [![404 not found](https://flowbite.s3.amazonaws.com/templates/flowbite-admin-dashboard/github/404.jpg)](https://flowbite-admin-dashboard.vercel.app/pages/404/) | [![500 server error](https://flowbite.s3.amazonaws.com/templates/flowbite-admin-dashboard/github/500.jpg)](https://flowbite-admin-dashboard.vercel.app/pages/500/) | [![Playground](https://flowbite.s3.amazonaws.com/templates/flowbite-admin-dashboard/github/playground.jpg)](https://flowbite-admin-dashboard.vercel.app/playground/sidebar/)

-   [Live Preview](https://flowbite-admin-dashboard.vercel.app/)

## Quick start

1. Clone this repository or download the ZIP file
2. Make sure that you have Node.js and NPM installed
3. Install the project dependencies from the `package.json` file:

```
npm install
```

4. Create a local server on `localhost:1313` by running the following command:

```
npm run start
```

You can also build the project and get the distribution files inside the `public/` folder by running:

```
npm run build
```

You can instantly upload your project to Vercel by selecting the default HUGO configuration, but depending on your own tech stack whether it's React.js, Vue, Nuxt.js, Next.js or a back-end framework you can also just copy the layouts from this project inside your own tech stack.

Here's a list of compatible technologies and guides for Flowbite and Tailwind CSS:

### JavaScript Frameworks

The awesome open-source community also built and currently maintains the following standalone libraries for React, Vue, Svelte, and Angular:

- [🌀 Flowbite React Library](https://github.com/themesberg/flowbite-react)
- [🍀 Flowbite Vue Library](https://github.com/themesberg/flowbite-vue)
- [🎸 Flowbite Svelte Library](https://github.com/themesberg/flowbite-svelte)
- [📕 Flowbite Angular Library](https://github.com/themesberg/flowbite-angular)

We also wrote integration guides for the following front-end frameworks and libraries:

- [📝 Flowbite with React guide](https://flowbite.com/docs/getting-started/react/)
- [📝 Flowbite with Next.js guide](https://flowbite.com/docs/getting-started/next-js/)
- [📝 Flowbite with Vue guide](https://flowbite.com/docs/getting-started/vue/)
- [📝 Flowbite with Nuxt.js guide](https://flowbite.com/docs/getting-started/nuxt-js/)
- [📝 Flowbite with Svelte guide](https://flowbite.com/docs/getting-started/svelte/)

### Back-end Frameworks

Flowbite has a great integration with most of the back-end frameworks because it relies on vanilla JavaScript:

- [📚 Using Flowbite with Laravel](https://flowbite.com/docs/getting-started/laravel/)
- [🚊 Using Flowbite with Ruby on Rails 7](https://flowbite.com/docs/getting-started/rails/)
- [🐸 Using Flowbite with Django](https://flowbite.com/docs/getting-started/django/)
- [🌶 Using Flowbite with Flask](https://flowbite.com/docs/getting-started/flask/)

## File Structure

Within the download you'll find the following directories and files:

```
Flowbite Admin Dashboard
.
├── LICENSE
├── README.md
├── config.yml
├── content
├── data
├── layouts
├── node_modules
├── package-lock.json
├── package.json
├── postcss.config.js
├── resources
├── src
├── static
├── tailwind.config.js
├── webpack.config.js
└── yarn.lock
```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">

## Resources

- Live preview: <https://flowbite-admin-dashboard.vercel.app/>
- Flowbite documentation: <https://flowbite.com/docs/getting-started/introduction/>
- Tailwind CSS documentation: <https://tailwindcss.com/>
- License Agreement: <https://flowbite.com/docs/getting-started/license/>
- Issues: [Github Issues Page](https://github.com/themesberg/flowbite-admin-dashboard/issues)

## Reporting Issues

We use GitHub Issues as the official bug tracker for Flowbite Admin Dashboard. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of Flowbite Admin Dashboard. Check the CHANGELOG from your dashboard on the [GitHub releases page](https://github.com/themesberg/flowbite-admin-dashboard/releases).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Technical Support or Questions

If you have questions or need help integrating the product please [contact us](https://flowbite.com/contact/) instead of opening an issue.

## Licensing

- Copyright 2019-2023 Bergside Inc. (https://flowbite.com)
- Open-source under the [MIT License](https://github.com/themesberg/flowbite-admin-dashboard/blob/main/LICENSE)

## Useful Links

- 📚 [Flowbite Library](https://flowbite.com/) - Open-source components built with Tailwind CSS
- 🎨 [Flowbite Figma](https://flowbite.com/figma/) - Design system built for Figma
- 🧱 [Flowbite Blocks](https://flowbite.com/blocks/) - Building sections for website and applications
- 💎 [Flowbite Pro](https://flowbite.com/pro/) - A larger collection of the open-source version of the latter three

## Authors

- [Zoltán Szőgyényi](https://twitter.com/zoltanszogyenyi)
- [Robert Tanislav](https://twitter.com/roberttanislav)