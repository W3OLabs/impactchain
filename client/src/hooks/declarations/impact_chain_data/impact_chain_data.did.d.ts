import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface IOTDevice {
  'id' : string,
  'name' : string,
  'platform' : string,
  'ipAdress' : string,
}
export interface ImpactTarget {
  'id' : string,
  'name' : string,
  'measurements' : Array<string>,
}
export type Result = { 'ok' : UserRecord } |
  { 'err' : string };
export interface UserRecord {
  'waterEffiency' : [] | [WaterEffiency],
  'waterDischarge' : [] | [WaterDischarge],
  'aboutCompany' : {
    'logo' : [] | [string],
    'name' : string,
    'companySize' : string,
    'industry' : string,
  },
  'email' : string,
  'impactTarget' : [] | [Array<ImpactTarget>],
}
export interface WaterDischarge {
  'waterDischargeGoal' : [] | [string],
  'waterDischargePermit' : [] | [string],
  'iotDevice' : [] | [IOTDevice],
}
export interface WaterEffiency {
  'waterEfficiencyGoal' : [] | [string],
  'waterStatemet' : [] | [string],
  'iotDevice' : [] | [IOTDevice],
}
export type email = string;
export interface _SERVICE {
  'addUserRecord' : ActorMethod<[UserRecord], undefined>,
  'getUserRecord' : ActorMethod<[email], Result>,
  'removeUserRecord' : ActorMethod<[email], undefined>,
  'updateUserRecord' : ActorMethod<[UserRecord], undefined>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: ({ IDL }: { IDL: IDL }) => IDL.Type[];
