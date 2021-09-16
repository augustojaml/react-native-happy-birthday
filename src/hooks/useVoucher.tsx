import { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import { api } from '../services/api';

interface VoucherDOMProps {
  children: ReactNode;
}
interface ErrorsData {
  [key: string]: string;
}

interface VoucherForm {
  name: string;
  email: string;
  whatsapp: string;
  date_of_birth: string;
  how_did_you_find_us: string;
}

interface VoucherContextProps {
  sendVoucher: ({ name, email, whatsapp, date_of_birth, how_did_you_find_us }: VoucherForm) => Promise<any>;
  errors: ErrorsData;
}

const VoucherContext = createContext({} as VoucherContextProps);

export function VoucherProvider({ children }: VoucherDOMProps) {
  const [errors, setErrors] = useState<ErrorsData>({});

  const sendVoucher = useCallback(
    async ({ name, email, whatsapp, date_of_birth, how_did_you_find_us }: VoucherForm) => {
      return new Promise((resolve, reject) => {
        api
          .post('v1/vouchers', {
            name,
            email,
            whatsapp,
            date_of_birth,
            how_did_you_find_us,
          })
          .then((response) => {
            setErrors({});
            resolve(response.data);
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
      });
    },
    []
  );

  return <VoucherContext.Provider value={{ sendVoucher, errors }}>{children}</VoucherContext.Provider>;
}

export function useVoucher() {
  return useContext(VoucherContext);
}
