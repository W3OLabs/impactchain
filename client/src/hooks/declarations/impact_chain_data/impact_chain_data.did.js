export const idlFactory = ({ IDL }) => {
  const email = IDL.Text;
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
    'waterEffiency' : WaterEffiency,
    'waterDischarge' : WaterDischarge,
    'email' : IDL.Text,
    'impactTarget' : IDL.Vec(ImpactTarget),
  });
  const Result = IDL.Variant({ 'ok' : UserRecord, 'err' : IDL.Text });
  return IDL.Service({
    'addUserRecord' : IDL.Func([email, UserRecord], [], []),
    'getUserRecord' : IDL.Func([email], [Result], ['query']),
    'removeUserRecord' : IDL.Func([email], [], []),
    'updateUserRecord' : IDL.Func([email, UserRecord], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
