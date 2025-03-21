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
- if the same meta attribute is specified in nested pages, the child meta attribute will override the parent attribute

## use of \_document.js file

- used for customizing the HTML document structure
- it should add in the root folder
- it allows us to modify the default HTML page template, which is rendered for every page in the application

### uses of \_document

- adding global customizations to the <head> section
  eg: global meta tags, external stylesheet, external scripts
- modifying the <html> & <body> tags [adding custom classes & attributes]
- adding global scripts that need to be loaded for every page
- customizing the initial lang attribute for <html> tag

## Image optimizations

- Image helper class helps to load the optimized images on the fly in webp format
- ie it will produce images of different resolution on the page request
- it also support lazy loading [based on the resolution change, it will call for desired responsive image]
- import Image from 'next/image';
- <Image src='' alt='' width={} height={}>

## Monogodb implementation

### steps to follow in mongo cloud server [Atlas]

- we should create a cluster in mongodb cloud server
- cluster is like server in sql
- now its created using nodejs
- we have to add a username with password and ip to be whitelisted for connection
- when we do the connection with node it provide a connection string. we can use that from the application
- in this connection string username, password and dbname are given as <username> we have to replace it with real credentials

### steps to follow in client side

- in the application side (client side), we have to install mongodb using npm [npm install mongodb]
- import MongoClient from "mongodb"
- using this MongoClient we can establish the connection in client side
- sometimes the connectionstring doesn't have database name
- then we can specify it separately as shown below,
  const client = await MongoClient.connect(
  "mongodb+srv://manuelmanu008:6W1jYv7l8tAVFx7r@cluster0.6nblf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db("newsletter");
- every data to be inserted in mongodb is termed as document

### insert data

- below added a sample for inserting document,
  db.collection("emails").insertOne({ email: userEmail });
  here collection is the db name, insertOne insert document with fields. so in this document only one field exist, email

  - insert command can be insertOne/insertMany

  ### get data

  - for getting data from mongo server, we are using 'find'.
  - for sorting in descending order we should specify -1 in sort method with corresponding column name.
    eg : sort({columnName: -1})
  - for incremental sort we can use 1.
    eg of complete get req,
    db.collection("collectionName").find().sort({columnName: -1}).toArray();
  - toArray() added to make the return set of data to array

## React Context

- react's method for state management
- useContext hook is used from 'react'
- context object defines with common variable & methods that are invoked from different forms
- wrapping the defined context with Provider so that we can pass the props as children
