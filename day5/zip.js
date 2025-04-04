import fs from "fs";
import zlib from "zlib";

let readStream = fs.createReadStream("./index.txt");
let gzip = zlib.createGzip();
let writeStream = fs.createWriteStream("./file.gz");

readStream.pipe(gzip).pipe(writeStream);
