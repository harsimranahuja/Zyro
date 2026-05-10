import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/db.js';
import {inngest, functions} from './inngest/index.js'
import {serve} from 'inngest/express'

const app = express();

await connectDB();

app.use(express.json());
app.use(cors());

app.get('/',(req, res)=> res.send('Server is running'))
app.use('/api/inngest',serve({
    client: inngest,
    functions,
  }))

const PORT = process.env.PORT || 4000;

// Only listen when running locally (not on Vercel)
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))
}

// Export for Vercel serverless
export default app;