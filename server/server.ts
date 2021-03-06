import * as path from 'path';
import * as express from 'express';
import routes from './routes';

const app = express();

let p = path.join(__dirname, '../public');
console.log(p);

app.use(express.static(p));
app.use(express.json());
app.use(routes);


const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});