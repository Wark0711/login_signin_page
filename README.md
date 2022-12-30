Hello Everyone, this time I created a MERN based functional login & signin page.
In this we can access website only on login or signup.

In this, I have created both frontend and backend sections for login and register functions.

First I will describe the backend process:

First, I set up a MongoDB connection. Then I created a schema for Signin page, folllowed by its model using Mongoose package.
I used Mongoose because it allows to define schemas for our data to fit into, while also abstracting the access to MongoDB. 
This way we can ensure all saved documents share a structure and contain required properties.

Now I set up basic connections for server using express. I used CORS package to allow origin access from other domains.

Then I wrote code for Login and Signin API using POST method and tested them on Thunder Client.

Now we move to frontend process:

First I created Login and Signin Component using React and Vite.
I used Vite over Webpack due to its quick package creation and faster page loading.

Then I added routing connections using react-router package. I also set up Protected Component so that user can access website only when logged in.

Finally I wrote code for Login and Signin API Integration in respective components.

In Webpack we use 'npm start' to run the app in Development Mode.
In Vite, we use 'npm run dev'
