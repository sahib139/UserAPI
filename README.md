# USER API

# For Local installation
- Download the repository in your local machine
- Go to project root folder and run `npm i`
- Then to start server , run `npm start`

# API end-points
- (POST)localhost:3000/api/v1/users/signup
    - request body should have {email,username,password}
- (POST)localhost:3000/api/v1/users/signin
    - request body should have {email,password}
- (PATCH)localhost:3000/api/v1/users/forgot-password
    - request body should have {email,newPassword}