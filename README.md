# React coming soon template

Kick off your new website with coming soon starter template.
Coming soon website templates helps you to retain customers when you are busy in revamping your website.

The message you show in the coming soon plays a vital role in retaining the visitors and to collect new leads. So tailor the message to your audience and make a strong first impression for the new users.
There are other two web elements: animated countdown timer and sign-up form.

![Screenshoot of demo](https://github.com/arrlancore/react-coming-soon-template/blob/master/screenshoot.png)

## 🚀 Prerequisites

- <a href="https://yarnpkg.com/en/">Yarn</a>, follow the installation <a href="https://yarnpkg.com/en/docs/install">guide</a>
- <a href="https://nodejs.org/en/">Node.js</a>
- <a href="https://github.com/firebase/firebase-tools">Firebase</a>, if you want to hosting at firebase

```
    $ npm install -g firebase-tools
```

## 🚀 Quick start

Clone the repository. Update as you required and upload to your hosting.

**Simple clone.**

```
    $ git clone https://github.com/arrlancore/react-coming-soon-template.git
    $ cd react-coming-soon-template
```

## Installation

        $ yarn

The following dependencies will be installed:

```
    gatsby: ^2.0.0
    gatsby-plugin-manifest: ^2.0.2
    gatsby-plugin-offline: ^2.0.5
    gatsby-plugin-react-helmet: ^3.0.0
    react: ^16.5.1
    react-dom: ^16.5.1
    react-helmet: ^5.2.0
```

## Customising

- Type your own header, message and set the timer in index.js.
- Add your own background image in layout.css.

To set timer add props date and time at Timer component, example:

    <Timer  date="10/31/2018" time="19.00">

## Deployment

1. Deploying with firebase CLI

   Build Project

   ```sh
   $ yarn build
   ```

   Upload to Firebase.

   ```sh
   $ firebase login
   $ firebase init
   $ firebase deploy
   ```

2. Deploying with netlify

   - Sign up with Github/Gitlab/Bitbucket or Email
   - Connect to Git Provider
   - Authorize Git Provider
   - Pick Your Repository
   - Select Branch to Deploy (Default: master)
   - Change the build command to `yarn build`
   - Click `Deploy` button

## Deploy at Netlify

- Sign up with your favorite repository server or email on netifly
- Click on Sites
- Click on button new "site from"
- Connect to Git Provider
- Authorize Git Provider
- Pick Your Repository
- Select Branch to Deploy (Default: master)
- Change the build command to `gatsby build`
- Change Publish directory to `public/`
- Click `Deploy site` button

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
