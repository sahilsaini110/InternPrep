const express = require('express');
const urlRoute = require('./routes/index')
const userRoute = require('./routes/user')
const URL = require('./models/index');
const path = require('path')
const app = express();
const staticRoute = require('./routes/staticRouter')

app.set("view engine", "ejs");
app.set('views', path.resolve('./views'));//tell ki view ki file kha padi h

// app.use(cors());
app.use(express.json());//ye body m se json data ko parse krne k liye h
app.use(express.urlencoded({ extended: false}));//ye form data ko parse krne k liye h

app.use('/url', urlRoute);
app.use('/', staticRoute);
app.use('/user',userRoute);

app.get('/test', async(req, res)=>{
    const urls = await URL.find({});
    // return res.end(`
    //     <html>
    //         <body>
    //             <ol>
    //                 ${urls.map(url => `<li> ${url.shortId} - ${url.redirectUrl} </li>`).join('')}
    //             </ol>
    //         </body>
    //     </html>
    // `)
    return res.render('home', {url:urls})
})

app.listen(8001, ()=>console.log("running on 8001..."))