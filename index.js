if (
  typeof process === 'undefined' ||
  (typeof process !== 'undefined' &&
    process.env &&
    process.env.NODE_ENV === 'production')
) {
  console.log('%c Made with ☕️ coffee & 💝', 'color: green;')
}
