import React from "react";
import { connect } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import defaultAvatar from "../UserMenu/default-avatar.png";
import styles from "./UserMenu.module.css";
import { Button } from "@material-ui/core";

const UserMenu = ({ name, avatar, onLogout }) => (
  <div className={styles.container}>
    <img src={avatar} alt="Avatar" className={styles.avatar} />
    <span className={styles.name}>Welcome, {name}</span>
    <Button type="button" onClick={onLogout} variant="outlined" color="primary">
      Logout
    </Button>
  </div>
);
const mapStateToProps = (state) => ({
  name: authSelectors.getUserName(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
