export const idlFactory = ({ IDL }) => {
  const IOTDevice = IDL.Record({
    'id' : IDL.Text,
    'name' : IDL.Text,
    'platform' : IDL.Text,
    'ipAdress' : IDL.Text,
  });
  const WaterEffiency = IDL.Record({
    'waterEfficiencyGoal' : IDL.Opt(IDL.Text),
    'waterStatemet' : IDL.Opt(IDL.Text),
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const WaterDischarge = IDL.Record({
    'waterDischargeGoal' : IDL.Opt(IDL.Text),
    'waterDischargePermit' : IDL.Opt(IDL.Text),
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const ImpactTarget = IDL.Record({
    'id' : IDL.Text,
    'name' : IDL.Text,
    'measurements' : IDL.Vec(IDL.Text),
  });
  const UserRecord = IDL.Record({
    'waterEffiency' : IDL.Opt(WaterEffiency),
    'waterDischarge' : IDL.Opt(WaterDischarge),
    'aboutCompany' : IDL.Record({
      'logo' : IDL.Opt(IDL.Text),
      'name' : IDL.Text,
      'companySize' : IDL.Text,
      'industry' : IDL.Text,
    }),
    'email' : IDL.Text,
    'impactTarget' : IDL.Opt(IDL.Vec(ImpactTarget)),
  });
  const email = IDL.Text;
  const Result = IDL.Variant({ 'ok' : UserRecord, 'err' : IDL.Text });
  return IDL.Service({
    'addUserRecord' : IDL.Func([UserRecord], [], []),
    'getUserRecord' : IDL.Func([email], [Result], ['query']),
    'removeUserRecord' : IDL.Func([email], [], []),
    'updateUserRecord' : IDL.Func([UserRecord], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
