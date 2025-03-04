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

## Implemented pre-rendering

- getStaticProps, getStaticPaths
- getServerSideProps

## Configure Head section

- we can add it in the landing page of an app
- import Head from 'next/head'
- eg: <Head>
  <title>Name</title>  [appears on the browser window/tab, used by search engines for indexing the page]
  <meta name="" description="" /> [not visible directly to users, but impt for SEO and page context,especially the description meta tag which appears in search results]
  </Head>
  - various meta tags are used to include a variety of information like page description, author, charset,
  viewport settings
 eg:<Head>
  <meta name="description" content="This is a description of the page." />
  <meta name="keywords" content="Next.js, SEO, web development" />
</Head>
Here name attribute specify the type of information being provided
- we can also define <Head> section dynamically so that it can implement in different sections of the same page
- eg implemented in [slug] page
- if we want to add a generic property which will be available across the application, we can define it in the
  \_app.js file [eg: define viewport]
