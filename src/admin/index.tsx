import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
// import jsonServerProvider from "ra-data-json-server";
// import simpleRestProvider from 'ra-data-simple-rest';
import crudProvider from 'ra-data-nestjsx-crud';

import UsersIcon from '@mui/icons-material/People';
import CommentIcon from '@mui/icons-material/Comment';

import { UserList, UserEdit, UserCreate } from './users';


// const dataProvider = jsonServerProvider("http://localhost:8000");
// const dataProvider = simpleRestProvider('http://localhost:8000');
const dataProvider = crudProvider('http://localhost:8000/admin');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="categories" list={ListGuesser} edit={EditGuesser} icon={CommentIcon} />
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UsersIcon} />
  </Admin>
);

export default App;