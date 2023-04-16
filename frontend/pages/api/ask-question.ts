import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';
import axios from 'axios';

const cors = Cors({
    methods: ['POST', 'GET', 'HEAD', 'OPTIONS'],
    origin: '*',
});

function runMiddleware(
    req: NextApiRequest,
    res: NextApiResponse,
    fn: Function
) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result: any) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    await runMiddleware(req, res, cors);
    const body = req.body;
    console.log(body);

    const response = axios({
        method: 'post',
        url: 'http://10.1.60.155:5001/answer',
        data: {
            question: body.question,
            conversation_history: '',
            session_id: 1,
        },
    });
    // console.log(response.data);

    // return res.json({
    //     answer: response.data.answer,
    //     references: response.data.references,
    // });

    console.log('hello world');

    return res.json({
        hello: 'world',
    });
}
