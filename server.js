const app = require('./src')

const port = 3333

app.listen(process.env.PORT || port, () => {
    console.log(`SERVER INICIADO NA PORTA - ${(process.env.PORT || port)}`)
})