        //the idea behind module is that it is a file of reusable code
        //we can import sections of pre written code to use whenever
        //great for any general utility values or functions
        //helps to make your code more reusable and maintainable
        //think of modules as seperate chapters of a book

        //to export any variables or functions preceede them with "export"
        // import{PI, getCircum, getArea} from "./export.js";
        
        //another way to import when there are many functions
        import * as Math from "./export.js"

        let circum = Math.getCircum(10)
        console.log(circum)

        let area = Math.getArea(10)
        console.log(area)