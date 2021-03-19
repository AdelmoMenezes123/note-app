const app = require('./server');

app.listen(app.get('port'), () => {
     console.log('Servidor rodando na porta: ', app.get('port'))
})