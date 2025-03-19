import { globalStyle } from '@vanilla-extract/css'

globalStyle('*, *::before, *::after', { boxSizing: 'border-box' })

globalStyle('*', { margin: 0 })

globalStyle('body', {
    lineHeight: 1.5,
    'WebkitFontSmoothing': 'antialiased',
    'fontFamily': '-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, Cantarell, Ubuntu, roboto, noto, helvetica, arial, sans-serif;'
})

globalStyle('img, picture, video, canvas, svg', {
    display: 'block',
    maxWidth: '100%',
})

globalStyle('input, button, textarea, select', { font: 'inherit' })

globalStyle('p, h1, h2, h3, h4, h5, h6', { overflowWrap: 'break-word' })

globalStyle('p', {textWrap: 'pretty'})
globalStyle('h1, h2, h3, h4, h5, h6', {textWrap: 'balance'})

globalStyle('#root', { isolation: 'isolate' })