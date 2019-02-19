## Coding Challenge

Thanks for the given opportunity.

#### What does "New Promotion" app has to offer:

Keeping the data concerns away from the view components and into the container components replicates the conventional controller — view relationship which is a great way to structure an app. Separation of business logic from presentation layer is a good approach to demonstrate my ability to make modular and scalable web applications.

- This app is bootstrapped with 'Create React App'
- Linting with TSLint
- Code formatting with Prettier
- Styling with CSS
- local state management and caching with Apollo Client and GraphQL queries
- Data flow follows a flux pattern with a single store which is InMemoryCache (normalized cache)

## Available scripts

### `npm start`

runs the app in the development mode locally [http://localhost:3000](http://localhost:3000).
The page will reload if you make edits and you will also see any lint errors in the console.

### `npm run build`

- Builds the app for production to the `build` folder.
- Bundles React in production mode and optimizes the build for the best performance.
- The build is minified and the filenames include the hashes.

### `npm run lint`

Checks for linting issues in the code

### `npm run deploy`

Build a new package and then deploys it to Firebase instantly. (Check below first)

## Set up firebase for quick deployment (demo)

Install Firebase tools

`npm install -g firebase-tools`

Sign in to firebase account which hosts the "new-promotions" app. If you need to change the app name, modify .firebaserc file in the project root.

### `firebase login`
