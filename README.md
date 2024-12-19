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


