import { BooleanField, CreateButton, Datagrid, DateField, DeleteWithConfirmButton, EditButton, EmailField, ExportButton, List, Pagination, TextField, TopToolbar, useListContext } from "react-admin";


const ListActions = () => {
    const { total, isLoading } = useListContext();
    return (
        <TopToolbar>
            {/* <FilterButton /> */}
            <CreateButton/>
            <ExportButton disabled={isLoading || total === 0} />
        </TopToolbar>
    );
}

export const UserList = () => {
    return (
    <List title='Users List' actions={<ListActions />} perPage={5} pagination={<Pagination rowsPerPageOptions={[5, 10, 25, 50]} />}>
        <Datagrid>
            <TextField source="id" />
            <EmailField source="email" />
            <TextField source="fname" label='First Name' />
            <TextField source="lname" label='Last Name' />
            <TextField source="mobile" />
            <TextField source="userType" />
            <BooleanField source="active" />
            <DateField source="createAt" />
            <EditButton label="Edit" />
            <DeleteWithConfirmButton label="Delete" />
        </Datagrid>
    </List>
);}


export const UserEdit = () => {
    return (
        <div>
            <h1>User Edit</h1>
        </div>
    )
}

export const UserCreate = () => {
    return (
        <div>
            <h1>User Create</h1>
        </div>
    )
}