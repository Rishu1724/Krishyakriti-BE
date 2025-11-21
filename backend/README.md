# Backend (Krishyakriti)

This backend uses Express and (optionally) MongoDB via Mongoose.

## Quick setup

1. Copy `.env.example` to `.env` and set `MONGO_URI` if you want DB persistence:

```powershell
cd backend
copy .env.example .env
# then edit .env and set MONGO_URI
```

2. Install dependencies and run:

```powershell
npm install
node server.js
```

## MongoDB options

- To run locally, install MongoDB Community Edition and use `mongodb://localhost:27017/krishyakriti` as `MONGO_URI`.
- Or use MongoDB Atlas and provide the connection string as `MONGO_URI`.

## Endpoints

- `GET /api/learn` — list learning resources
- `GET /api/learn/multicropping` — multicropping details
- `GET /api/learn/agroforestry` — agroforestry details
- `GET /api/learn/market` — market info
- `POST /api/feedback` — submit feedback (saves to DB if configured else falls back to `backend/data/feedback_local.json`)
- `GET /api/dbstatus` — quick DB connection status

