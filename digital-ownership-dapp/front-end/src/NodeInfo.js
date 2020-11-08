import React, { useEffect, useState } from 'react';
import { Card, Icon, Grid, Statistic } from 'semantic-ui-react';

import { useSubstrate } from './substrate-lib';

function Main(props) {
  const { api, keyring } = useSubstrate();
  const [currentUser, setCurrentUser] = useState({});
  const keyringOptions = keyring.getPairs().map((account) => ({
    key: account.address,
    value: account.address,
    text: account.meta.name.toUpperCase(),
    icon: 'user',
  }));

  useEffect(() => {
    let current = keyringOptions.find(
      (a) => a.value === props.accountPair?.address
    );
    setCurrentUser(current);
  }, [props.accountPair]);
  console.log(props.accountPair, keyringOptions, 'account pair');
  return (
    <Grid.Column>
      <Card>
        <Card.Content textAlign='center'>
          <Statistic label='Active User' value={currentUser?.text} />
        </Card.Content>
      </Card>
    </Grid.Column>
  );
}

export default function NodeInfo(props) {
  const { api } = useSubstrate();
  return api.rpc &&
    api.rpc.system &&
    api.rpc.system.chain &&
    api.rpc.system.name &&
    api.rpc.system.version ? (
    <Main {...props} />
  ) : null;
}
