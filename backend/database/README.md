# Database helpers

This folder contains helper scripts to connect to MongoDB and seed initial data.

## Seed

1. Copy `.env.example` to `.env` and set `MONGO_URI`.
2. Run:

```powershell
cd backend/database
node seed.js
```

This will insert three `Resource` documents if they don't already exist.
