// export const network = "ic"
// export const dataCanisterId = "hocf4-oyaaa-aaaal-qdmba-cai";
// export const storageCanId = "osmo3-paaaa-aaaal-qdvlq-cai";
// export const scalingCanId = "ovnip-cyaaa-aaaal-qdvla-cai";
export { idlFactory as dataIDL } from "./declarations/impact_chain_data/impact_chain_data.did.js";
export { idlFactory as fileStorageIdlFactory } from "./declarations/file_storage/file_storage.did.js";
export { idlFactory as fileScalingManagerIdlFactory } from "./declarations/file_scaling_manager/file_scaling_manager.did.js";

export const network =  import.meta.env.DFX_NETWORK || "local"
export const dataCanisterId = "be2us-64aaa-aaaaa-qaabq-cai";
export const storageCanId = "bd3sg-teaaa-aaaaa-qaaba-cai";
export const scalingCanId = "bkyz2-fmaaa-aaaaa-qaaaq-cai";