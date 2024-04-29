// Imports
import http from "http"
import { GetResult } from "./utils";
import fs from 'fs';
import busboy from "busboy"
import path from 'path';

// Server
http
    .createServer((req, res) => {
        // get route to get names
        // Handle Get Request
        if (req.method === "GET" && req.url == "/") {

            // Check if theres customer data at the backend
            const checkFile: any = fs.existsSync('./src/customers.txt')
            if (checkFile === true) {
                res.write(GetResult())
                res.end()
            }
            else {
                res.write(" MAKE A POST REQUEST WITH FILE ON THIS ENDPOINT")
                res.end();
            }
        }

        // Handle Post Request
        if (req.method === "POST" && req.url == "/") {
            // file upload (Busboy)
            const bb = busboy({ headers: req.headers });
            bb.on('file', (name: any, file: any, info: any) => {
                const saveTo = path.join(__dirname, 'customers.txt');
                file.pipe(fs.createWriteStream(saveTo));
            });
            bb.on('close', () => {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(`GET REQUEST TO GET INFORMATION`);
            });
            req.pipe(bb);
        }
    })

    // Ports
    .listen(8000 || (process.env.PORT as string), () => {
        console.log(`Listening on Port ` + 8000 || (process.env.PORT as string))
    })
