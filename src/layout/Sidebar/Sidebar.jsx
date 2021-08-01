import React from "react";
import PropTypes from "prop-types";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
} from "@material-ui/core";
import { getBooksApi } from "../../api/books";

const Sidebar = ({ open, setOpen }) => {
  const [books, setBooks] = React.useState([]);
  React.useEffect(() => {
    getBooksApi().then((items) => {
      setBooks(items);
      console.log(Array.from(new Set(items.map((book) => book.author))));
    });
  }, []);
  const onChangeHandler = (event) => {
    console.log(event.target.checked, event.target.name);
  };
  return (
    <Drawer
      // variant="persistent"
      anchor="right"
      open={open}
      onClose={() => setOpen(false)}
    >
      <List component="nav">
        {Array.from(new Set(books.map((book) => book.author))).map((author) => {
          return (
            <ListItem>
              <ListItemIcon>
                <Checkbox onChange={onChangeHandler} name={author} />
              </ListItemIcon>
              <ListItemText primary={author} />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Sidebar;
