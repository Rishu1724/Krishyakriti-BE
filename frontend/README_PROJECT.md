# Frontend (Expo) — Quick Reference

This directory contains the Expo (React Native) app used as the mobile frontend for the project.

## Quick start

- Install dependencies: `npm install`
- Start Metro / Expo: `npm start` or `npx expo start`
- Run on Android emulator: `npm run android`
- Run on iOS simulator: `npm run ios`
- Run on web: `npm run web`

Tips:
- For the Android emulator, use `10.0.2.2` to reach a backend running on your host machine.
- For the iOS simulator, `localhost` works for host machine services.
- For a physical device, set the backend base URL to your machine LAN IP (e.g. `192.168.x.x`).

## Project structure (important files)

- `app/` : Expo file-based routing entry (`app/index.tsx`).
- `App.js` : Expo app entry (loads router/navigation).
- `src/pages/` : Screen components used by the app:
  - `Learn.js` — main Learn screen (lists resources)
  - `MultiCropping.js`, `Agroforestry.js`, `Market.js` — topic pages
  - `Feedback.js` — feedback form screen
- `src/navigation/AppNavigator.js` : navigation setup and stack/tab configuration.
- `src/components/LearnCard.js` : UI card used to render resource items.
- `src/config.js` : app configuration (base backend URL / host selection). Update this to point the app at your backend.
- `constants/theme.ts` : color palette and theme tokens used across the app.
- `hooks/` : small reusable hooks (theme and color utilities).
- `assets/images/` : app images and icons.
- `package.json` : npm scripts (`start`, `android`, `ios`, `web`, `reset-project`).

## Backend connectivity

- The app expects a backend providing the `/api/learn` and `/api/feedback` endpoints.
- By default the app uses the host selection logic in `src/config.js`. If you run the backend locally:
  - Android emulator: use `http://10.0.2.2:PORT`
  - iOS simulator / web: use `http://localhost:PORT`
  - Physical device: use `http://<YOUR_LAN_IP>:PORT`

Change the `BASE_URL`/host in `src/config.js` (or the file your app uses) to match your environment.

## Running and testing

- Start the backend first so the app can fetch resources.
- Run `npm start` in this directory and open the app via the Expo DevTools.
- Use the Learn screen to verify resources load from `/api/learn` and submit feedback via `/api/feedback`.

## Notes & Next steps

- The app includes platform-aware host selection but you may prefer to centralize the base URL in environment variables for CI or production builds.
- If you add or change resource JSON files on the backend, use the backend `loadResources`/`seed` scripts to push updates into MongoDB.

If you'd like, I can also:
- Add an explicit `README` section that documents how to change the backend host inside the running app, or
- Make `src/config.js` read from a single environment variable and document how to override it per-platform.
