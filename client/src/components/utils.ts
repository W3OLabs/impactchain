import { UserRecord } from "../hooks/declarations/impact_chain_data/impact_chain_data.did";

export const isDataIncomplete = (info: UserRecord) => {
  if (info.aboutCompany.logo.length === 0) {
    return "ProfileLogo";
  }
  if (info.impactTargets.length === 0) {
    return "ImpactTarget";
  }
  let withoutMeasurements = 0;
  for (const target of info.impactTargets[0]) {
    if (target.measurements.length === 0) {
      withoutMeasurements++;
    }
  }
  if (withoutMeasurements > 0) {
    return "Measurements";
  }
  return "ok";
};
