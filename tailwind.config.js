module.exports = {
    purge: false,
    target: 'relaxed',
    prefix: '',
    important: false,
    separator: ':',
    theme: {
        extend: {
            colors: {
                light: {
                    primary: 'rgba(255,255,255, 1)',
                    secondary: 'rgba(255,255,255, .7)',
                    hint: 'rgba(255,255,255, .5)',
                    separator: 'rgba(255,255,255, .12)',
                    shade: 'rgba(255,255,255, .06)',
                },
                dark: {
                    primary: 'rgba(0,0,0,.87)',
                    secondary: 'rgba(0,0,0,.54)',
                    hint: 'rgba(0,0,0,.32)',
                    separator: 'rgba(0,0,0,.12)',
                    shade: 'rgba(0,0,0,.06)',
                },
            }
        },
        inset: {
            '1/2': '50%',
        },
        container: {
            center: true,
            padding: '2rem',
        },
    },
    variants: {},
    corePlugins: {},
    plugins: [],
}
