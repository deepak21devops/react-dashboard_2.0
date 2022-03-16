import "./datasource.scss";

export const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "users",
    headerName: "Users",
    width: 250,
    renderCell: (params) => {
      return (
        <div className="userContent">
          <img src={params.row.img} className="userImg" alt=""></img>
          {params.row.user}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 250 },
  { field: "age", headerName: "Age", width: 50 },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (params) => {
      return (
        <div className={`stats ${params.row.status}`}>{params.row.status}</div>
      );
    },
  },
];

export const rows = [
  {
    id: 1,
    user: "Snow",
    email: "Jon123@gmail.com",
    age: 35,
    status: "Pending",
    img: "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 2,
    user: "Lannister",
    email: "Cersei123@gmail.com",
    age: 42,
    status: "Active",
    img: "https://images.pexels.com/photos/5081399/pexels-photo-5081399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 3,
    user: "Lannister",
    email: "Jaime123@gmail.com",
    age: 45,
    status: "Passive",
    img: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 4,
    user: "Stark",
    email: "Arya123@gmail.com",
    age: 16,
    status: "Active",
    img: "https://images.pexels.com/photos/4117550/pexels-photo-4117550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 5,
    user: "Targaryen",
    email: "Daenerys123@gmail.com",
    age: 23,
    status: "Pending",
    img: "https://images.pexels.com/photos/2280620/pexels-photo-2280620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 6,
    user: "Melisandre",
    email: "Melli123@gmail.com",
    age: 150,
    status: "Passive",
    img: "https://images.pexels.com/photos/6210876/pexels-photo-6210876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 7,
    user: "Clifford",
    email: "Ferrara123@gmail.com",
    age: 44,
    status: "Pending",
    img: "https://images.pexels.com/photos/6823326/pexels-photo-6823326.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 8,
    user: "Frances",
    email: "Rossini123@gmail.com",
    age: 36,
    status: "Passive",
    img: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 9,
    user: "Roxie",
    email: "Harvey123@gmail.com",
    age: 65,
    status: "Active",
    img: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];
