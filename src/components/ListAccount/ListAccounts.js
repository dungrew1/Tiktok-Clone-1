import React from "react";
import styles from "./ListAccount.module.scss";
import AccountItem from "../AccountItem/AccountItem";
import PropTypes from "prop-types";

function ListAccount({ title, list, onClick, perpage }) {
  return (
    <>
      <div className={styles.sidebar_list}>
        <p className={styles.account_title}>{title}</p>
        {list && list.map((user) => <AccountItem user={user} key={user.id} />)}
        <div>
          <p className={styles.sidebar_seeAll} onClick={onClick}>
            {perpage === 20 ? "See less" : "See more"}
          </p>
        </div>
      </div>
      <hr className={styles.hr} />
    </>
  );
}

ListAccount.prototype = {
  title: PropTypes.string,
  list: PropTypes.array,
  onClick: PropTypes.func,
  perpage: PropTypes.number,
};

export default ListAccount;
