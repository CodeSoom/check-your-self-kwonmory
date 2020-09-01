import React, { useCallback, useState } from 'react';

import Header from '../../components/common/Header';

const HeaderContainer = () => {
  const [dropDownMenuActive, setDropdownMenuActive] = useState(false);

  const handleDropdownMenuActive = useCallback(() => {
    setDropdownMenuActive(!dropDownMenuActive);
  }, [dropDownMenuActive]);

  return (
    <Header
      onDropdownMenuActive={handleDropdownMenuActive}
      dropDownMenuActive={dropDownMenuActive}
    />
  );
};

export default HeaderContainer;
