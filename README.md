# CodeCafe
#### Set Up React + Vite
#### Installed tailwind + Used Daisy UI
- Set Up routing 
- Added Navbar, Outlet and footer (Using daisy ui);
- connected backend to frontend via api;
- Added redux
    - install react-redux + @redux/toolkit => configureStore => added provider to app => created slice => added slice to app store;
- dispatch the data to redux store
    - via useDispatch => dispatch(res.data);
- If token not present or expire redirect user to login page.
- Fixed the bug where network tab was calling api again and again for switching to different routes  after the user was logged in!
- set up logout api
- Edit/Update profile done.
- Created Connection page > fetched connection API > and updated store 
- Created Request Page > fetched Request API > and updated store
- Added functionality to Accept/Reject buttons via req/accep&&reject api 
- And removed User form store once req is accepted or rejected.
- Added interested/ignored feature and remove the user from feed as soon as req is sent.
- Signup : Added Api and set up signup ui.
##

### Deployement( via aws) :
- install node 
- git clone 'yourproject'
- npm install
- npm run build
- install nginx
    - sudo apt update 
    - sudod apt install nginx 
    - sudo systemctl start nginx(to start nginx)
    sudo systemctl enable nginx

    #### This step should process after every new commit
    - copy code from dist to /var/www/html/
        - sudo scp -r dist/* /var/www/html/
    - enable port 80 on your instance 
    <> Keep Coding💙</>


