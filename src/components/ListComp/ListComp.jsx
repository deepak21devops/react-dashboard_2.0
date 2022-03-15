import React from "react";
import "./listcomp.scss";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ListComp = () => {
  const productList = [
    {
      id: 1,
      title: "Brown eggs",
      type: "dairy",
      description: "Raw organic brown eggs in a basket",
      filename: "0.jpg",
      height: 600,
      width: 400,
      price: 28.1,
      status: "Cooking",
      rating: 4,
      img: "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 2,
      title: "Sweet fresh stawberry",
      type: "fruit",
      description: "Sweet fresh stawberry on the wooden table",
      filename: "1.jpg",
      height: 450,
      width: 299,
      status: "Cooking",
      price: 29.45,
      rating: 4,
      img: "https://images.pexels.com/photos/5081399/pexels-photo-5081399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 3,
      title: "Asparagus",
      type: "vegetable",
      description: "Asparagus with ham on the wooden table",
      filename: "2.jpg",
      height: 450,
      status: "Delivered",
      width: 299,
      price: 18.95,
      rating: 3,
      img: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 4,
      title: "Green smoothie",
      type: "dairy",
      description:
        "Glass of green smoothie with quail egg's yolk, served with cocktail tube, green apple and baby spinach leaves over tin surface.",
      filename: "3.jpg",
      height: 600,
      width: 399,
      status: "Cooking",
      price: 17.68,
      rating: 4,
      img: "https://images.pexels.com/photos/4117550/pexels-photo-4117550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 5,
      title: "Raw legums",
      type: "vegetable",
      description: "Raw legums on the wooden table",
      filename: "4.jpg",
      height: 450,
      width: 299,
      status: "Delivered",
      price: 17.11,
      rating: 2,
      img: "https://images.pexels.com/photos/2280620/pexels-photo-2280620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 6,
      title: "Baking cake",
      type: "dairy",
      description:
        "Baking cake in rural kitchen - dough  recipe ingredients (eggs, flour, sugar) on vintage wooden table from above.",
      filename: "5.jpg",
      height: 450,
      status: "Delivered",
      width: 675,
      price: 11.14,
      rating: 4,
      img: "https://images.pexels.com/photos/6210876/pexels-photo-6210876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 7,
      title: "Pesto with basil",
      type: "vegetable",
      description: "Italian traditional pesto with basil, chesse and oil",
      filename: "6.jpg",
      height: 450,
      width: 299,
      status: "Cooking",
      price: 18.19,
      rating: 2,
      img: "https://images.pexels.com/photos/6823326/pexels-photo-6823326.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 8,
      title: "Hazelnut in black ceramic bowl",
      type: "vegetable",
      description:
        "Hazelnut in black ceramic bowl on old wooden background. forest wealth. rustic style. selective focus",
      filename: "7.jpg",
      height: 450,
      width: 301,
      price: 27.35,
      status: "Delivered",
      rating: 0,
      img: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="cellHead">Type</TableCell>
            <TableCell className="cellHead">Title</TableCell>
            <TableCell className="cellHead">Description</TableCell>
            <TableCell className="cellHead">Price</TableCell>
            <TableCell className="cellHead">Rating</TableCell>
            <TableCell className="cellHead">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productList.map((row) => (
            <TableRow key={row.name}>
              <TableCell className="cellItems">{row.type}</TableCell>
              <TableCell className="cellItems">
                <div className="cellImg">
                  <img src={row.img} alt=""></img>
                  {row.title}
                </div>
              </TableCell>
              <TableCell className="cellItems">{row.description}</TableCell>
              <TableCell className="cellItems">{row.price}</TableCell>
              <TableCell className="cellItems">{row.rating}</TableCell>
              <TableCell className={`cellItems `}>
                <div className={`status ${row.status}`}>{row.status}</div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListComp;
