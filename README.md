
# A simple-react-full-stack app base on the following requirements
• Use a Node service API to query the GitHub repositories API
• Do not query GitHub repositories API directly from the client application.
• Do not return unnecessary data to the client application.
• Use Vue, React, or Angular as the client framework.
• Use Bootstrap for UI components.
• Start with repository 1000.
• Try to fit as many avatars on one screen as possible. (i.e. Without scrolling.)

# Install Process
git clone https://github.com/alkitony/uwgithub - # Download the repository
cd simple-react-full-stack - # Change directory
npm install (or yarn install) - # Install dependencies
npm run dev (yarn dev ) - # Start development server
Note: This will start both the express servers, which is running on local host port 8080, and react web server, which is running on local host port 3000
npm run build (or yarn build) - # Build for production
npm start (or yarn start) - # Start production server

Please Execute (to start both servers): npm run dev.

# Status
The coding exercise is not completed. Areas remaining to be completed.

## Server Side
Debugging the API call to pull GitHub Followers information based on Repository data.
Having the GitHub Repo API calls and the GitHub Followers API calls run sequentially. See Issues for more information.
Serving up final data to API endpoint for client.  Currently there is a temporary API to allow for client side development

## Client Side
Displaying followers information per users. The desired effect is to have the information overlay the image. Similar to this still (https://bootsnipp.com/snippets/Ga6Gy).  Currently the data would appear below the image when mouse over.  But that is not a good UI experience.

# Issues:

## Server Side
Resolving the handling of Promises.  I think this is what is causing the API calls not to run sequentially. The multiple GitHub Repo API calls are running sequentially within the function ( returnRepos() ) , however when apply the same strategy to the GitHub Followers API function ( returnFollowers() ) it is not executing the same way. 
Server up the data to the API end point. However, I think if the 

## Client Side
Resolving UI to display the follower information over the images when hover. This can be done.


# Inspiration and Support
In doing this coding exercise I reference and borrowed materials and examples.  As any developers do.  The days of coding alone in a cubical are long over.  

## Build 
   https://github.com/crsandeep/simple-react-full-stack - This is a complete borrow. I like what this person put together.  I will use it going forward for all my project.  It is clean and simple.

## Server Side
This specifically of handling promises sequentially. - https://medium.com/adobetech/how-to-combine-rest-api-calls-with-javascript-promises-in-node-js-or-openwhisk-d96cbc10f299
- https://medium.com/@Abazhenov/using-async-await-in-express-with-node-8-b8af872c0016

## Client Side
- https://bootsnipp.com/snippets/Ga6Gy
