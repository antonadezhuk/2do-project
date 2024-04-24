import { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { Redirect } from 'expo-router';
import { userState, discoverySettingsState } from '../state/atoms';
import { login } from '../api/userAPI';
import { ActivityIndicator, Text } from '../components/common';

const App = () => {
  const setUser = useSetRecoilState(userState);
  const setDiscoverySettings = useSetRecoilState(discoverySettingsState);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    login()
      .then((data) => {
        setUser(data);
        setDiscoverySettings((prevSettings) => ({
          ...prevSettings,
          tags: data.tags,
        }));
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [setDiscoverySettings, setUser]);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return <Redirect href="(tabs)/discover" />;
};

export default App;
