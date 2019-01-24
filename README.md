# LibraryApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# details

the library app is a book collection app where you can sort, filter the book and then can add to card. This app is not responssive and may break in diffrent resolution . tested in (1366 * 768).

# live demo
visit https://gallant-wiles-17212b.netlify.com/

## data:

I have used a stub which I have generated using https://https://www.json-generator.com/ with the below schema

[ 
'{{repeat(100)}}', 
   { 
  _id: '{{index() + 100}}', 
     title: '{{random("The","A",)}} {{company()}}: {{company()}} {{company()}}', 
     quote:  '{{lorem(10, "words")}}', 
     cover: 'https://picsum.photos/400/600/?image={{index() + 900}}', 
  author: '{{firstName()}} {{surname()}}', 
     publication:'{{company().toUpperCase()}} {{random("PUBLICATIONS","BOOK HOUSE", "PRESS")}}', 
     year: '{{integer(0, 50) + 1970}}', 
   rating : '{{floating(1, 4, 1, "0.0")}}', 
     catagory:'{{random("fiction","history","children","thriller","suspence","horror","crime","adult","realism","philosophy","self-help","educational","management")}}', 
   sold:'{{integer(50000, 5000000)}}', 
   pages:'{{integer(100, 500)}}', 
     rented: '{{bool()}}' 
  } 
]

