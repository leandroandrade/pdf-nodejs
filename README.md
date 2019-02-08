# pdf-nodejs
Sample project to generate PDF file using Nodejs.

Installation:

1. [nodejs.org](https://nodejs.org)
2. [npmjs.com](https://www.npmjs.com) (includes node)
3. git clone https://github.com/leandroandrade/pdf-nodejs/
3. cd ./pdf-nodejs/
4. npm install
5. npm start
6. http://localhost:3000/pdfmake

## Links
1. create pdf template online: http://pdfmake.org/playground.html
2. https://github.com/bpampuch/pdfmake/tree/0.1
3. https://www.npmjs.com/package/pdfmake 
4. https://github.com/Donnzh/node-pdfmake-demo
5. https://gist.github.com/Donnzh/78fd63517878d98493c765d1d83036fc

## Observation
To create header and footer to repeat in each page, use:

```
header: [
    {
        text: 'Header example',
        style: 'header'
    }
],

footer: [
    {
        text: 'Footer example'
    }
],
```