export const idlFactory = ({ IDL }) => {
  const IOTDevice = IDL.Record({
    'id' : IDL.Text,
    'name' : IDL.Text,
    'platform' : IDL.Text,
    'ipAdress' : IDL.Text,
  });
  const TargetRecords = IDL.Record({
    'documents' : IDL.Opt(IDL.Vec(IDL.Text)),
    'goal' : IDL.Opt(IDL.Text),
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const ImpactTarget = IDL.Record({
    'id' : IDL.Nat,
    'name' : IDL.Text,
    'targetRecords' : IDL.Opt(TargetRecords),
    'measurements' : IDL.Opt(IDL.Vec(IDL.Text)),
  });
  const UserRecord = IDL.Record({
    'aboutCompany' : IDL.Record({
      'logo' : IDL.Opt(IDL.Text),
      'name' : IDL.Text,
      'companySize' : IDL.Text,
      'industry' : IDL.Text,
    }),
    'email' : IDL.Text,
    'impactTargets' : IDL.Opt(IDL.Vec(ImpactTarget)),
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
