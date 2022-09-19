REACT INTRO LECTURE NOTES


# WHAT IS REACT?
- JS library for UI
- Component-based  
- Invented by Facebook (Meta) 
- Was made to be scalable 
- Companies that use React - Airnbnb, Netflix, Uber Yahoo, Dropbox, NYT, Asana
- Yarn package manager (can also use npm) 

# Component-based
- build individual components
- put those components together to create the app
- extremely scalable
- components are REUSABLE
- It is UI focused

# Scalability
 - create code that will work under many conditions

# Reusable
- Uses functions to create the UI elements
- Function returns an object that holds JSX (combo of HTML and JS)
- object holds data and behavior


# DOM
- Document Object Model - visual representation of your code

- REACT USES A VIRTUAL DOM - this is key point
    - lives behind the DOM - invisible layer
    - listens to the individual nodes in the DOM, compares the change
    - refreshes only the elememts that changed. (no full page refresh!)

# REACT COMPONENTS
- In react, a function returns a value of JSX
- JSX combo of extended JS and HTML
- Component Call 
 - <Component/>


### REACT RECAP:

1. Yarn - package manager by Meta
2. React is an SPA based on components
3. In React applications, generally one component per file
4. Component and file share name - PascalCase
5. Command:
    - $ yarn create react-app <app-name>  (kebab-case)
6. React components bring info from other files using  import
7. Components require export
8. React components are invoked/called using <ComponentName/>
9. Can see changes you are making by running command  $ yarn start .  Can stop with CTRL+C
10. Use browser console to check your errors
