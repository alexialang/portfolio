import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { Button, Menu } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";


export const Header = () => {
  const navigate = useNavigate();

  return (
    
    <div className={styles.root}>
      {/* <Burger
        opened={opened}
        onClick={toggle}
        aria-label="Toggle navigation"
        classNames={{
          root: styles.burger,
        }}
      /> */}
      <div className={styles.imgS}>
      </div>
      <div className={styles.nav}>
        <Link to="/">
          <Button variant="subtle">Accueil</Button>
        </Link>
        <Menu
          // position="bottom"
          // trigger="hover"
          // openDelay={100}
          // closeDelay={200}
          // classNames={{
          //   item: styles.subItem,
          // }}
        >
          <Menu.Target>
            <Button variant="subtle">Page 1</Button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item
              className=""
              onClick={() => {
                navigate("/");
              }}
            >
              
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                navigate("/");
              }}
            >
              Page 2
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <Menu
          position="bottom"
          trigger="hover"
          openDelay={100}
          closeDelay={200}
          classNames={{
            item: styles.subItem,
          }}
        >
          <Menu.Target>
            <Button variant="subtle">Page 1</Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item
              className=""
              onClick={() => {
                navigate("/");
              }}
            >
              Page 2
            </Menu.Item>

          </Menu.Dropdown>
        </Menu>
        {/* 
        <Menu
          position="bottom"
          trigger="hover"
          openDelay={100}
          closeDelay={200}
          classNames={{
            item: styles.subItem,
          }}
        >
          <Menu.Target>
            <Button variant="subtle">Autres Services</Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item
              className=""
              onClick={() => {
                navigate("/dtg");
              }}
            >
              DTG
            </Menu.Item>
          </Menu.Dropdown>
        </Menu> */}

        <Link to="/devis">
          <Button variant="subtle">Page 3</Button>
        </Link>
        <Link to="/contact">
          <Button variant="subtle">Page4</Button>
        </Link>
      </div>
    </div>
  );
};

Header.propTypes = {
  opened: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
