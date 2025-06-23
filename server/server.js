import http from 'http';
import connectDb from './config/db.js';
import config from './config/config.js';
import app from './app.js';
const server=http.createServer(app)
async function main(){
    await connectDb()
    server.listen(config.port,()=>{
        console.log(`server listening on port ${config.port}` )
    })
}
main().catch(err=>{
    console.error(err)
})
