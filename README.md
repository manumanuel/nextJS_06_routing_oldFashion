#Notes

## Link with styles

- before nextJS 13, if we want to add styles to a Link component,
  we should enclose that in a <a> tag and that <a> tag is placed in <Link>

### \_app.js

-Before nextJS 13, \_app.js act as the wrapper for the components.
-so if a layout is defined, we can wrapper that with the layout component

### Fragment component in react

- Fragment in react is a lightweight component, that allows us to
  GROUP xle elements without adding extra nodes to DOM.It's useful
  when we have xle elements to return from a component but don't
  want to introduce additional HTML elements like <div> or <span>
- we can use <fragment></fragment> or <> </>

### event.preventDefault()

- it prevent the default action associated with the event(like form submission, link navigation)
  eg: it allow us to handle form submission with javascript without reloading the page

### useRef() hook

- allow us to persist values between renders without causing re-render
- unlike useState(), useRef doesn't trigger re-render when its value changes [ideal to be used to store values that don't affect rendering flow, such as timers or external libraries ]

### All react hooks should be called directly in the component function,

- not in any nested block statements

### to add resources freely

- icons -https://heroicons.com/
- images -https://unsplash.com/
