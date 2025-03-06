import express from 'express';
import { Request, Response } from 'express';

const app = express();

app.get('/api/greet', (req: Request, res: Response) => {
  const name = req.query.name;
  
  if (!name) {
    return res.status(400).json({ error: "Name is required." });
  }
  
  return res.json({
    message: `Hello, ${name}! Welcome to Younglabs.`
  });
});

export const handler = app;