import React, {
  createContext,
  useContext,
  useState,
  FC,
  useEffect,
} from "react";
import { Actor, ActorSubclass, HttpAgent } from "@dfinity/agent";

import { canisterId, idlFactory } from "./declarations/impact_chain_data";
import { _SERVICE } from "./declarations/impact_chain_data/impact_chain_data.did";

const network = import.meta.env.DFX_NETWORK || "local";
const localhost = "http://localhost:4943";
const host = "https://icp0.io";

interface AuthContextType {
  dataActor: ActorSubclass<_SERVICE> | null;
}

const initialContext: AuthContextType = {
  dataActor: null,
};


const AuthContext = createContext<AuthContextType>(initialContext);

export const useAuthClient = () => {
  const [dataActor, setBackendActor] = useState<ActorSubclass<_SERVICE> | null>(
    null
  );

  useEffect(() => {
    updateClient();
  }, []);

  async function updateClient() {
    let agent = new HttpAgent({
      host: network === "local" ? localhost : host,
    });

    if (network === "local") {
      agent.fetchRootKey();
    }

    const _backendActor: ActorSubclass<_SERVICE> = Actor.createActor(
      idlFactory,
      {
        agent,
        canisterId: canisterId,
      }
    );
    setBackendActor(_backendActor);
  }

  return {
    dataActor,
  };
};

interface LayoutProps {
  children: React.ReactNode;
}

export const ContextProvider: FC<LayoutProps> = ({ children }) => {
  const auth = useAuthClient();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
