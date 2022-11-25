import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../firebase/auth';
import { getDocument } from '../firebase/database';

interface IGlobalContextProps {
  user: any;
  setUser: (user: any) => void;
}

export const GlobalContext = React.createContext<IGlobalContextProps>({
  user: {},
  setUser: () => {},
});

export const GlobalContextProvider = (props: any) => {

  const router = useRouter();

  const [hydrated, setHydrated] = useState(false);
  const [currentUser, setCurrentUser]: any = useState(null);

  useEffect(() => {
    setHydrated(true);
  }, [])

  useEffect(() => {
    onAuthStateChanged(auth, async (u) => {
      if (!u) return;

      const user = await getDocument("users", u!.uid);

      setCurrentUser(user);

      router.push('/home');
  });
  }, [])

  if (!hydrated) return <></>;

  return (
    <GlobalContext.Provider
      value={{
        user: currentUser,
        setUser: setCurrentUser,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};