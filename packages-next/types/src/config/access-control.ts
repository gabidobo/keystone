import type { FieldAccess, ListAccess } from '@keystonejs/access-control';
import { KeystoneContext, SessionContext } from '../core';

export type ListAccessArgs = {
  listKey: string;
  operation: keyof ListAccess<ListAccessArgs>;
  session?: SessionContext<any>['session'];
  originalInput: any;
  gqlName: string;
  itemId: any;
  itemIds?: any[];
  context: KeystoneContext;
};

export type FieldAccessArgs = {
  listKey: string;
  operation: keyof FieldAccess<FieldAccessArgs>;
  session?: SessionContext<any>['session'];
  originalInput: any;
  gqlName: string;
  itemId: any;
  itemIds?: any[];
  context: KeystoneContext;
  item: any;
  fieldKey: string;
};

export type ListAccessControl =
  | Partial<ListAccess<ListAccessArgs>>
  | ListAccess<ListAccessArgs>['read'];

export type FieldAccessControl =
  | Partial<FieldAccess<FieldAccessArgs>>
  | FieldAccess<FieldAccessArgs>['read'];

export type { FieldAccess, ListAccess };
