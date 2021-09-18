import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Dispatch, SetStateAction, createContext, useContext, ReactNode, useCallback, useState } from 'react';
import { api } from '../services/api';

interface SessionProviderProps {
  children: ReactNode;
}

interface ErrorProps {
  [key: string]: string;
}

interface SignInProps {
  email: string;
  password: string;
}

interface SessionContextProps {
  signIn: (signProps: SignInProps) => Promise<any>;
  signOut: () => void;
  errors: ErrorProps;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
}

const SessionContext = createContext({} as SessionContextProps);

export function SessionProvider({ children }: SessionProviderProps) {
  const [errors, setErrors] = useState<ErrorProps>({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = useCallback(async ({ email, password }: SignInProps): Promise<string | undefined> => {
    try {
      const response = await api.post('v1/login', { email: email, password: password });
      const { token }: { token: string } = response.data;
      api.defaults.headers.authorization = `Bearer ${token}`;
      AsyncStorage.setItem('@Birthday:token', token);
      setEmail('');
      setPassword('');
      setErrors({});
      return token;
    } catch (errors: any) {
      let errorsProps: ErrorProps = {};
      Object.keys(errors.response.data.errors).forEach(function (key) {
        errorsProps[key] = errors.response.data.errors[key][0];
      });
      setErrors(errorsProps);
      return undefined;
    }
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem('@Birthday:token');
    api.defaults.headers.authorization = null;
  }, []);

  return (
    <>
      <SessionContext.Provider value={{ signIn, errors, email, setEmail, password, setPassword, signOut }}>
        {children}
      </SessionContext.Provider>
    </>
  );
}

export function useSession() {
  return useContext(SessionContext);
}
