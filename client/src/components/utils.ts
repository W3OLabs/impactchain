import { UserRecord } from "../hooks/declarations/impact_chain_data/impact_chain_data.did";

export const isDataIncomplete = (info: UserRecord) => {
  if (info.aboutCompany.logo.length === 0) {
    return "ProfileLogo";
  }
  if (info.impactTarget.length === 0) {
    return "ImpactTarget";
  }
  if (info.waterEffiency.length === 0) {
    return "waterEffiencyMissing";
  }
  if (info.waterDischarge.length === 0) {
    return "waterDischargeMissing";
  }
  return "ok";
};
