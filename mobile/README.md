# Krishyakriti Mobile (Expo)

This is a minimal Expo React Native scaffold implementing a `Learn` screen and components using the given color palette.

Quick start (Windows PowerShell):

```powershell
cd mobile
npm install
npx expo start
```

Notes:
- Emulator network: Android emulator should use `http://10.0.2.2:5000` to reach backend at `localhost:5000`. iOS simulator can use `http://localhost:5000`.
- The `Learn` screen fetches `/api/learn` and renders cards.
- Palette used: `#009179` (primary), `#006A58` (accent), `#E7E1C6` (stonetone), `#3C3B35` (text).

Next steps I can do for you:
- Add details screen for each resource and navigation.
- Add offline caching and loading states improvements.
- Integrate feedback POST endpoint and form screen.
