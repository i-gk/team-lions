import express from 'express'

const APP_SERVER = express();

export default (): void => {

    APP_SERVER.get('/', (req, res) => res.send('Hola! 🙋🏻‍♂️'));

    APP_SERVER.listen(
        { port: 3000 },
        (): void => console.log(`\n 🚀 running on port 3000`));

}
