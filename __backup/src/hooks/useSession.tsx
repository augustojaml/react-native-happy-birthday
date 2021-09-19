import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import { api } from '../services/api';

interface ErrorsData {
  [key: string]: string;
}

interface SessionProps {
  signIn: (email: string, password: string) => void;
  errors: ErrorsData;
}

interface SessionCredentials {
  user: object;
  token: string;
}

interface SessionContextProps {
  children: ReactNode;
}

interface SessionCredentials {
  user: object;
  token: string;
}

const SessionContext = createContext({} as SessionProps);

export function SessionProvider({ children }: SessionContextProps) {
  const [errors, setErrors] = useState<ErrorsData>({});

  const setStoreSession = async (session: SessionCredentials) => {
    await AsyncStorage.setItem('@Birthday:user', JSON.stringify(session.user));
    await AsyncStorage.setItem('@Birthday:token', session.token);
  };

  const signIn = useCallback(async (email: string, password: string) => {
    api
      .post('v1/login', {
        email: email,
        password: password,
      })
      .then((response) => {
        const { user, token } = response.data;
        api.defaults.headers.authorization = `Bearer ${token}`;
        setStoreSession({ user, token });
        setErrors({});
      })
      .catch(function (error) {
        if (!error.response) {
          return;
        }

        let err: ErrorsData = {};

        Object.keys(error.response.data.errors).forEach(function (key) {
          err[key] = error.response.data.errors[key][0];
        });

        setErrors(err);
      });
  }, []);

  return (
    <SessionContext.Provider
      value={{
        signIn,
        errors,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  return useContext(SessionContext);
}
