import React from 'react';
import PropTypes from 'prop-types';

const AccountsList = ({ accounts }) => {
   return (
      <ul>
         {accounts.map((account) => (
            <li
               key={account._id}
            >{`Id - ${account._id}, Название - ${account.title}, userId - ${account.userId}`}</li>
         ))}
      </ul>
   );
};

AccountsList.propTypes = {
   accounts: PropTypes.arrayOf(
      PropTypes.shape({
         _id: PropTypes.string.isRequired,
         title: PropTypes.string.isRequired,
         userId: PropTypes.string.isRequired
      })
   )
};

export default AccountsList;
