# gatsby-starter-gcn
A starter template to build amazing static websites with Gatsby, Contentful and Netlify. Inspired by [gatsby-contentful-starter](https://github.com/contentful-userland/gatsby-contentful-starter).

## Features
* Contentful integration with ready to go placeholder content
* Netlify integration including a pre-built contact form
* Minimal responsive design - made to customize or tear apart
* Styled components
* SEO friendly

## Demo
https://gcn.netlify.com/

![](screenshots/demo.jpg)

## Getting Started

### Install
```
git clone https://github.com/ryanwiemer/gatsby-starter-gcn.git
npm i
```

Or via the [Gatsby CLI](https://www.npmjs.com/package/gatsby-cli)

```
gatsby new gatsby-starter-gcn https://github.com/ryanwiemer/gatsby-starter-gcn.git
```

### Setup Contentful

1. [Sign up](https://www.contentful.com/sign-up/) for Contentful and create a new empty space

2. `npm run setup`

3. The following information will be required during the setup:
- `Space ID` - Get this from Contentful > Space settings > General settings
- `Content Management API access token` - Contentful > Space settings > API Keys > Content management tokens > Personal Access Tokens
- `Content Delivery API access token` - Contentful > Space settings > API Keys > Content delivery / preview > Content Delivery API - access token
- `Content Delivery API access token` - Contentful > Space settings > API Keys > Content delivery / preview > Content Preview API - access token

### Setup dev environment
After completing "Setup Contentful", you will find `.contentful.json` file generated in the project root.

Moving on, we need to set up the development environment.

To setup the initial theme or apply changes to your theme, please do the following:

1. `yarn build-theme`

Following which, you can proceed to start the dev server

2. `yarn dev`

### Other things you probably should do
1. Replace favicon at `./src/images/favicon.ico`
2. Update site global variables at `./src/utils/siteConfig.js`

### Some things you must know about Gatsby
1. Do not change/move `index.js` in `./src/pages` and `./src/layouts` around. Gatsby statically pulls from these directory. Changing these file paths will break the app.
- `.cache` folder is super annoying. If you made changes to file structure and app is breaking, then `rm -rf .cache` and restart dev server to see if it works.
- If you make edits to your Contentful space while running `yarn dev` you will need to stop it and rerun the command to see the changes reflected. For example a new post or page will not automatically show up until the website has been rebuilt.
- Currently this template assumes you have at least **one page** and **one post** in Contentful. If you do not the website will fail to build.
- Remove `/static/robots.txt` if you want your website to be crawled by search engines.
- **DO NOT** store your Contentful access tokens or space ids anywhere in GitHub. Treat them like passwords.

--- 

## Customization

### Routing
The 'router' mechanism for this project can be found at `./gatsby-node.js`. Each page is created by the `createPage` method provided by gatsby. The site awaits for the data to return from the graphql server before rendering the component onto a specific path. 

### Theme-ing


#### Semantic-UI Theme
In this fork, we are using the *Semantic-UI-React* framework for our components styles. This integration comes with theme support.

You can configure your project's theme in the site variables file, which is by default located at `./semantic/src/site/themes/default/globals/site.variables`.

You can find the main configuration for this theme-ing magic at `./semantic.json`.

#### Styled Components Theme

Edit `/src/styles/theme.js`

```
const theme = {
  colors: {
    base: '#121212',
    secondary: '#f1f1f1',
    highlight: '#5b8bf7'
  },
  sizes: {
    maxWidth: '1200px',
    maxWidthCentered: '650px'
  },
  responsive: {
    small: '35em',
    medium: '50em',
    large: '70em'
  }
};
```

## Deployment

### Manual Netlify Deployment

1. Run `gatsby build`

2. Drag and drop the folder `/public/` into Netlify

### Netlify Deployment From Git (Recommended)

1. [New Netlify website from Git](https://app.netlify.com/start)

2. Connect with GitHub and select your repo

3. Navigate to Netlify: **Settings** → **Build & Deploy** → **Build Environment Variables**. Add the following environment variables using the space id and production access token from Contentful. They must be named exactly like this in order to work properly.

```
ACCESS_TOKEN
SPACE_ID
```

![](screenshots/netlify-build-environment-variables.jpg)

4. Confirm the website is building successfully. Be aware that every time you push to `master` a deploy will automatically start and be published to production.

## Additional Settings

### Contentful Webhook (Optional)

1. Navigate to Netlify:
**Settings** → **Build & Deploy** → **Build hooks**.
Create a new build hook.

2. Navigate to Contentful:
 **app.contentful.com** → **Space Settings** → **Webhooks**. Create a webhook using the Netlify build URL that you just created
 and configure which events should trigger the build on production. For example the following will rebuild the production website every time a post or page is published, unpublished or deleted:

![](screenshots/contentful-webhook-selected-events.jpg)


### Netlify Form Notifications (Optional)

1. Navigate to Netlify:
**Forms** → **Notifications**

2. Click the add notification dropdown and select your desired notification method.

![](screenshots/netlify-form-notifcations.jpg)


## Useful Tips

## Todo
- [x] Add specific steps for Netlify deployment to the README
- [x] Add tips and caveats to the README
- [ ] Add better placeholder content
- [ ] Add tag pages
- [ ] Come up with a solution for a preview / staging environment
- [ ] Navigation generated by Contentful?
