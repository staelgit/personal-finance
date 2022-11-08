import React from 'react';
import PropTypes from 'prop-types';

const AccountsList = ({ accounts }) => {
   return (
      <ul>
         {accounts.map((account) => (
            <li
               key={account.id}
            >{`Счет с названием - ${account.title} --->   баланс - ${account.balance}`}</li>
         ))}
      </ul>
   );
};

AccountsList.propTypes = {
   accounts: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number.isRequired,
         balance: PropTypes.number.isRequired,
         title: PropTypes.string.isRequired,
         typeId: PropTypes.number.isRequired
      })
   )
};

export default AccountsList;
