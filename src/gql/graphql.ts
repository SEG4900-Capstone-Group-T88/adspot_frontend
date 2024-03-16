/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: { input: any; output: any; }
  /** The built-in `Decimal` scalar type. */
  Decimal: { input: any; output: any; }
};

export type AddConnectionInput = {
  accountHandle: Scalars['String']['input'];
  apiToken: Scalars['String']['input'];
  platformId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};

export type AddConnectionPayload = {
  __typename?: 'AddConnectionPayload';
  connection?: Maybe<Array<Connection>>;
};

export type AddListingInput = {
  listingTypeId: Scalars['Int']['input'];
  platformId: Scalars['Int']['input'];
  price: Scalars['Decimal']['input'];
  userId: Scalars['Int']['input'];
};

export type AddListingPayload = {
  __typename?: 'AddListingPayload';
  listing?: Maybe<Array<Listing>>;
};

export type AddUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AddUserPayload = {
  __typename?: 'AddUserPayload';
  user?: Maybe<User>;
};

export enum ApplyPolicy {
  AfterResolver = 'AFTER_RESOLVER',
  BeforeResolver = 'BEFORE_RESOLVER',
  Validation = 'VALIDATION'
}

export type Connection = {
  __typename?: 'Connection';
  handle: Scalars['String']['output'];
  platform: Platform;
  platformId: Scalars['Int']['output'];
  token: Scalars['String']['output'];
  user: User;
  userId: Scalars['Int']['output'];
};

export type ConnectionFilterInput = {
  and?: InputMaybe<Array<ConnectionFilterInput>>;
  handle?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ConnectionFilterInput>>;
  platform?: InputMaybe<PlatformFilterInput>;
  platformId?: InputMaybe<IntOperationFilterInput>;
  token?: InputMaybe<StringOperationFilterInput>;
  user?: InputMaybe<UserFilterInput>;
  userId?: InputMaybe<IntOperationFilterInput>;
};

export type DateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  ngt?: InputMaybe<Scalars['DateTime']['input']>;
  ngte?: InputMaybe<Scalars['DateTime']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  nlt?: InputMaybe<Scalars['DateTime']['input']>;
  nlte?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DecimalOperationFilterInput = {
  eq?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  neq?: InputMaybe<Scalars['Decimal']['input']>;
  ngt?: InputMaybe<Scalars['Decimal']['input']>;
  ngte?: InputMaybe<Scalars['Decimal']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
  nlt?: InputMaybe<Scalars['Decimal']['input']>;
  nlte?: InputMaybe<Scalars['Decimal']['input']>;
};

export type DeleteUserInput = {
  userId: Scalars['Int']['input'];
};

export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  user?: Maybe<User>;
};

export type Error = {
  message: Scalars['String']['output'];
};

export type IntOperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
  ngt?: InputMaybe<Scalars['Int']['input']>;
  ngte?: InputMaybe<Scalars['Int']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  nlt?: InputMaybe<Scalars['Int']['input']>;
  nlte?: InputMaybe<Scalars['Int']['input']>;
};

export type ListFilterInputTypeOfConnectionFilterInput = {
  all?: InputMaybe<ConnectionFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ConnectionFilterInput>;
  some?: InputMaybe<ConnectionFilterInput>;
};

export type ListFilterInputTypeOfListingFilterInput = {
  all?: InputMaybe<ListingFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ListingFilterInput>;
  some?: InputMaybe<ListingFilterInput>;
};

export type ListFilterInputTypeOfListingTypeFilterInput = {
  all?: InputMaybe<ListingTypeFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ListingTypeFilterInput>;
  some?: InputMaybe<ListingTypeFilterInput>;
};

export type ListFilterInputTypeOfOrderFilterInput = {
  all?: InputMaybe<OrderFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<OrderFilterInput>;
  some?: InputMaybe<OrderFilterInput>;
};

export type Listing = {
  __typename?: 'Listing';
  connection: Connection;
  listingId: Scalars['Int']['output'];
  listingType: ListingType;
  listingTypeId: Scalars['Int']['output'];
  orders: Array<Order>;
  platform: Platform;
  platformId: Scalars['Int']['output'];
  price: Scalars['Decimal']['output'];
  user: User;
  userId: Scalars['Int']['output'];
};

export type ListingFilterInput = {
  and?: InputMaybe<Array<ListingFilterInput>>;
  connection?: InputMaybe<ConnectionFilterInput>;
  listingId?: InputMaybe<IntOperationFilterInput>;
  listingType?: InputMaybe<ListingTypeFilterInput>;
  listingTypeId?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<ListingFilterInput>>;
  orders?: InputMaybe<ListFilterInputTypeOfOrderFilterInput>;
  platform?: InputMaybe<PlatformFilterInput>;
  platformId?: InputMaybe<IntOperationFilterInput>;
  price?: InputMaybe<DecimalOperationFilterInput>;
  user?: InputMaybe<UserFilterInput>;
  userId?: InputMaybe<IntOperationFilterInput>;
};

export type ListingType = {
  __typename?: 'ListingType';
  listingTypeId: Scalars['Int']['output'];
  listings: Array<Listing>;
  name: Scalars['String']['output'];
  platform: Platform;
  platformId: Scalars['Int']['output'];
};

export type ListingTypeFilterInput = {
  and?: InputMaybe<Array<ListingTypeFilterInput>>;
  listingTypeId?: InputMaybe<IntOperationFilterInput>;
  listings?: InputMaybe<ListFilterInputTypeOfListingFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ListingTypeFilterInput>>;
  platform?: InputMaybe<PlatformFilterInput>;
  platformId?: InputMaybe<IntOperationFilterInput>;
};

export type LoginError = UserInvalidCredentialsError | UserNotFoundError;

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginPayload = {
  __typename?: 'LoginPayload';
  errors?: Maybe<Array<LoginError>>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addConnection: AddConnectionPayload;
  addListing: AddListingPayload;
  addUser: AddUserPayload;
  deleteUser: DeleteUserPayload;
  login: LoginPayload;
  updatePassword: UpdatePasswordPayload;
};


export type MutationAddConnectionArgs = {
  input: AddConnectionInput;
};


export type MutationAddListingArgs = {
  input: AddListingInput;
};


export type MutationAddUserArgs = {
  input: AddUserInput;
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationUpdatePasswordArgs = {
  input: UpdatePasswordInput;
};

export type Order = {
  __typename?: 'Order';
  deliverable?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  listing: Listing;
  listingId: Scalars['Int']['output'];
  orderDate: Scalars['DateTime']['output'];
  orderId: Scalars['Int']['output'];
  orderStatus: OrderStatus;
  orderStatusId: OrderStatusEnum;
  price: Scalars['Decimal']['output'];
  user: User;
  userId: Scalars['Int']['output'];
};

export type OrderFilterInput = {
  and?: InputMaybe<Array<OrderFilterInput>>;
  deliverable?: InputMaybe<StringOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  listing?: InputMaybe<ListingFilterInput>;
  listingId?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<OrderFilterInput>>;
  orderDate?: InputMaybe<DateTimeOperationFilterInput>;
  orderId?: InputMaybe<IntOperationFilterInput>;
  orderStatus?: InputMaybe<OrderStatusFilterInput>;
  orderStatusId?: InputMaybe<OrderStatusEnumOperationFilterInput>;
  price?: InputMaybe<DecimalOperationFilterInput>;
  user?: InputMaybe<UserFilterInput>;
  userId?: InputMaybe<IntOperationFilterInput>;
};

export type OrderStatus = {
  __typename?: 'OrderStatus';
  name: Scalars['String']['output'];
  orderStatusId: OrderStatusEnum;
  orders: Array<Order>;
};

export enum OrderStatusEnum {
  Accepted = 'ACCEPTED',
  Completed = 'COMPLETED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type OrderStatusEnumOperationFilterInput = {
  eq?: InputMaybe<OrderStatusEnum>;
  in?: InputMaybe<Array<OrderStatusEnum>>;
  neq?: InputMaybe<OrderStatusEnum>;
  nin?: InputMaybe<Array<OrderStatusEnum>>;
};

export type OrderStatusFilterInput = {
  and?: InputMaybe<Array<OrderStatusFilterInput>>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<OrderStatusFilterInput>>;
  orderStatusId?: InputMaybe<OrderStatusEnumOperationFilterInput>;
  orders?: InputMaybe<ListFilterInputTypeOfOrderFilterInput>;
};

export type Platform = {
  __typename?: 'Platform';
  listingTypes: Array<ListingType>;
  name: Scalars['String']['output'];
  platformId: Scalars['Int']['output'];
};

export type PlatformFilterInput = {
  and?: InputMaybe<Array<PlatformFilterInput>>;
  listingTypes?: InputMaybe<ListFilterInputTypeOfListingTypeFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PlatformFilterInput>>;
  platformId?: InputMaybe<IntOperationFilterInput>;
};

export type Query = {
  __typename?: 'Query';
  orderById?: Maybe<Order>;
  orders: Array<Order>;
  platforms: Array<Platform>;
  userById?: Maybe<User>;
  users: Array<User>;
};


export type QueryOrderByIdArgs = {
  orderId: Scalars['Int']['input'];
};


export type QueryOrdersArgs = {
  where?: InputMaybe<OrderFilterInput>;
};


export type QueryUserByIdArgs = {
  userId: Scalars['Int']['input'];
};


export type QueryUsersArgs = {
  where?: InputMaybe<UserFilterInput>;
};

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ncontains?: InputMaybe<Scalars['String']['input']>;
  nendsWith?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nstartsWith?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePasswordInput = {
  password: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};

export type UpdatePasswordPayload = {
  __typename?: 'UpdatePasswordPayload';
  user?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  connections: Array<Connection>;
  email: Scalars['String']['output'];
  listings: Array<Listing>;
  orders: Array<Order>;
  password: Scalars['String']['output'];
  pendingRequests: Array<Order>;
  purchases: Array<Order>;
  userId: Scalars['Int']['output'];
};


export type UserPurchasesArgs = {
  where?: InputMaybe<OrderFilterInput>;
};

export type UserFilterInput = {
  and?: InputMaybe<Array<UserFilterInput>>;
  connections?: InputMaybe<ListFilterInputTypeOfConnectionFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  listings?: InputMaybe<ListFilterInputTypeOfListingFilterInput>;
  or?: InputMaybe<Array<UserFilterInput>>;
  orders?: InputMaybe<ListFilterInputTypeOfOrderFilterInput>;
  password?: InputMaybe<StringOperationFilterInput>;
  userId?: InputMaybe<IntOperationFilterInput>;
};

export type UserInvalidCredentialsError = Error & {
  __typename?: 'UserInvalidCredentialsError';
  message: Scalars['String']['output'];
};

export type UserNotFoundError = Error & {
  __typename?: 'UserNotFoundError';
  message: Scalars['String']['output'];
};

export type OrderSummaryFragment = { __typename?: 'Order', orderId: number, orderDate: any, orderStatusId: OrderStatusEnum, listing: { __typename?: 'Listing', price: any, user: { __typename?: 'User', userId: number, email: string }, listingType: { __typename?: 'ListingType', name: string, platform: { __typename?: 'Platform', name: string } }, connection: { __typename?: 'Connection', handle: string } } } & { ' $fragmentName'?: 'OrderSummaryFragment' };

export type TestQueryQueryVariables = Exact<{
  orderId: Scalars['Int']['input'];
}>;


export type TestQueryQuery = { __typename?: 'Query', orderById?: (
    { __typename?: 'Order' }
    & { ' $fragmentRefs'?: { 'OrderSummaryFragment': OrderSummaryFragment } }
  ) | null };

export const OrderSummaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrderSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Order"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderId"}},{"kind":"Field","name":{"kind":"Name","value":"orderDate"}},{"kind":"Field","name":{"kind":"Name","value":"orderStatusId"}},{"kind":"Field","name":{"kind":"Name","value":"listing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"listingType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"platform"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"connection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"handle"}}]}}]}}]}}]} as unknown as DocumentNode<OrderSummaryFragment, unknown>;
export const TestQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TestQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrderSummary"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrderSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Order"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderId"}},{"kind":"Field","name":{"kind":"Name","value":"orderDate"}},{"kind":"Field","name":{"kind":"Name","value":"orderStatusId"}},{"kind":"Field","name":{"kind":"Name","value":"listing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"listingType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"platform"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"connection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"handle"}}]}}]}}]}}]} as unknown as DocumentNode<TestQueryQuery, TestQueryQueryVariables>;