import { HttpAgent, Actor } from "@dfinity/agent";
import { network } from "../../hooks/exporter";

// CHANGE ME IN PRODUCTION;

const getActor = async (canisterId, idlFactory, identity) => {
  console.log("getActor called with:", { canisterId, idlFactory, identity });

  const HOST = network === "ic" ? `https://${canisterId}.icp0.io/` : "http://127.0.0.1:4943/";

  console.log("Host here", HOST)

  if (canisterId === undefined) {
    console.log("canisterId: ", canisterId);
    return null;
  }

  if (idlFactory === undefined) {
    console.log("idlFactory: ", idlFactory);
    return null;
  }

  if (identity === undefined) {
    console.log("identity:", identity);
  }

  const agent = new HttpAgent({
    host: HOST,
    identity: identity,
  });

  agent.fetchRootKey().catch((err) => {
    console.warn(
      "Unable to fetch root key. Check to ensure that your local replica is running"
    );
    console.error(err);
  });

  const actor = Actor.createActor(idlFactory, {
    agent: agent,
    canisterId,
  });

  return actor;
};
export { getActor };