/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{vue,html,js}"],
    theme: {

        fontFamily: {
            // sans: ['Alata', 'sans - serif'],
            jose: ['Josefin Sans', 'sans - serif'],
            monton: ['Monoton', 'cursive'],

        },
        extend: {
            colors: {
                'main-color': '#10e956'
            }
        },

    },
    plugins: [],
}
