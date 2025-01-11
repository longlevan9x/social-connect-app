# Facebook Connect App

This project is a Node.js application built with Express and TypeScript that integrates with Facebook for user authentication.

## Features

- Facebook authentication using Passport.js
- TypeScript for type safety
- Modular structure with controllers and routes

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

   git clone https://github.com/yourusername/facebook-connect-app.git

2. Navigate to the project directory:

   cd facebook-connect-app

3. Install the dependencies:

   npm install

## Configuration

Before running the application, you need to set up your Facebook app and obtain the necessary credentials (App ID and App Secret). 

1. Go to the [Facebook Developers](https://developers.facebook.com/) page and create a new app.
2. Add the "Facebook Login" product to your app.
3. Configure the OAuth redirect URI to point to your application (e.g., `http://localhost:3000/auth/facebook/callback`).
4. Copy your App ID and App Secret.

Create a `.env` file in the root of the project and add the following:

```
FACEBOOK_APP_ID=your_app_id
FACEBOOK_APP_SECRET=your_app_secret
```

## Usage

1. Start the application:

   npm run start

2. Navigate to `http://localhost:3000/auth/facebook` to initiate the authentication process.

## License

This project is licensed under the MIT License. See the LICENSE file for details.