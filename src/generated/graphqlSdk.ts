import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from 'react-query';
import { useFetchData } from 'src/utils/graphqlClient';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _text: any;
  timestamptz: string;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type LoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginOrRegisterUserOutput = {
  __typename?: 'LoginOrRegisterUserOutput';
  error: Maybe<Scalars['String']>;
  token: Maybe<Scalars['String']>;
  userId: Maybe<Scalars['String']>;
};

export type PesignUrlOutput = {
  __typename?: 'PesignUrlOutput';
  url: Scalars['String'];
};

export type PresignUrlArgs = {
  storagePath: Scalars['String'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "_text". All fields are combined with logical 'AND'. */
export type _Text_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['_text']>;
  _gt?: InputMaybe<Scalars['_text']>;
  _gte?: InputMaybe<Scalars['_text']>;
  _in?: InputMaybe<Array<Scalars['_text']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['_text']>;
  _lte?: InputMaybe<Scalars['_text']>;
  _neq?: InputMaybe<Scalars['_text']>;
  _nin?: InputMaybe<Array<Scalars['_text']>>;
};

/** columns and relationships of "conversation_participant" */
export type Conversation_Participant = {
  __typename?: 'conversation_participant';
  /** An object relationship */
  conversation: Maybe<Conversations>;
  conversation_id: Scalars['String'];
  id: Scalars['String'];
  /** An object relationship */
  participant: Maybe<Users>;
  user_id: Scalars['String'];
};

/** aggregated selection of "conversation_participant" */
export type Conversation_Participant_Aggregate = {
  __typename?: 'conversation_participant_aggregate';
  aggregate: Maybe<Conversation_Participant_Aggregate_Fields>;
  nodes: Array<Conversation_Participant>;
};

/** aggregate fields of "conversation_participant" */
export type Conversation_Participant_Aggregate_Fields = {
  __typename?: 'conversation_participant_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<Conversation_Participant_Max_Fields>;
  min: Maybe<Conversation_Participant_Min_Fields>;
};


/** aggregate fields of "conversation_participant" */
export type Conversation_Participant_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Conversation_Participant_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "conversation_participant" */
export type Conversation_Participant_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Conversation_Participant_Max_Order_By>;
  min?: InputMaybe<Conversation_Participant_Min_Order_By>;
};

/** input type for inserting array relation for remote table "conversation_participant" */
export type Conversation_Participant_Arr_Rel_Insert_Input = {
  data: Array<Conversation_Participant_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Conversation_Participant_On_Conflict>;
};

/** Boolean expression to filter rows from the table "conversation_participant". All fields are combined with a logical 'AND'. */
export type Conversation_Participant_Bool_Exp = {
  _and?: InputMaybe<Array<Conversation_Participant_Bool_Exp>>;
  _not?: InputMaybe<Conversation_Participant_Bool_Exp>;
  _or?: InputMaybe<Array<Conversation_Participant_Bool_Exp>>;
  conversation?: InputMaybe<Conversations_Bool_Exp>;
  conversation_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  participant?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "conversation_participant" */
export enum Conversation_Participant_Constraint {
  /** unique or primary key constraint */
  ConversationParticipantPkey = 'conversation_participant_pkey'
}

/** input type for inserting data into table "conversation_participant" */
export type Conversation_Participant_Insert_Input = {
  conversation?: InputMaybe<Conversations_Obj_Rel_Insert_Input>;
  conversation_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  participant?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Conversation_Participant_Max_Fields = {
  __typename?: 'conversation_participant_max_fields';
  conversation_id: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  user_id: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "conversation_participant" */
export type Conversation_Participant_Max_Order_By = {
  conversation_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Conversation_Participant_Min_Fields = {
  __typename?: 'conversation_participant_min_fields';
  conversation_id: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  user_id: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "conversation_participant" */
export type Conversation_Participant_Min_Order_By = {
  conversation_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "conversation_participant" */
export type Conversation_Participant_Mutation_Response = {
  __typename?: 'conversation_participant_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Conversation_Participant>;
};

/** on_conflict condition type for table "conversation_participant" */
export type Conversation_Participant_On_Conflict = {
  constraint: Conversation_Participant_Constraint;
  update_columns?: Array<Conversation_Participant_Update_Column>;
  where?: InputMaybe<Conversation_Participant_Bool_Exp>;
};

/** Ordering options when selecting data from "conversation_participant". */
export type Conversation_Participant_Order_By = {
  conversation?: InputMaybe<Conversations_Order_By>;
  conversation_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  participant?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: conversation_participant */
export type Conversation_Participant_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "conversation_participant" */
export enum Conversation_Participant_Select_Column {
  /** column name */
  ConversationId = 'conversation_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "conversation_participant" */
export type Conversation_Participant_Set_Input = {
  conversation_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "conversation_participant" */
export enum Conversation_Participant_Update_Column {
  /** column name */
  ConversationId = 'conversation_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "conversations" */
export type Conversations = {
  __typename?: 'conversations';
  /** An array relationship */
  conversation_participant: Array<Conversation_Participant>;
  /** An aggregate relationship */
  conversation_participant_aggregate: Conversation_Participant_Aggregate;
  id: Scalars['String'];
  /** An array relationship */
  messages: Array<Messages>;
  /** An aggregate relationship */
  messages_aggregate: Messages_Aggregate;
  type: Scalars['String'];
  unreadCount: Scalars['Int'];
};


/** columns and relationships of "conversations" */
export type ConversationsConversation_ParticipantArgs = {
  distinct_on: InputMaybe<Array<Conversation_Participant_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Conversation_Participant_Order_By>>;
  where: InputMaybe<Conversation_Participant_Bool_Exp>;
};


/** columns and relationships of "conversations" */
export type ConversationsConversation_Participant_AggregateArgs = {
  distinct_on: InputMaybe<Array<Conversation_Participant_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Conversation_Participant_Order_By>>;
  where: InputMaybe<Conversation_Participant_Bool_Exp>;
};


/** columns and relationships of "conversations" */
export type ConversationsMessagesArgs = {
  distinct_on: InputMaybe<Array<Messages_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Messages_Order_By>>;
  where: InputMaybe<Messages_Bool_Exp>;
};


/** columns and relationships of "conversations" */
export type ConversationsMessages_AggregateArgs = {
  distinct_on: InputMaybe<Array<Messages_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Messages_Order_By>>;
  where: InputMaybe<Messages_Bool_Exp>;
};

/** aggregated selection of "conversations" */
export type Conversations_Aggregate = {
  __typename?: 'conversations_aggregate';
  aggregate: Maybe<Conversations_Aggregate_Fields>;
  nodes: Array<Conversations>;
};

/** aggregate fields of "conversations" */
export type Conversations_Aggregate_Fields = {
  __typename?: 'conversations_aggregate_fields';
  avg: Maybe<Conversations_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Conversations_Max_Fields>;
  min: Maybe<Conversations_Min_Fields>;
  stddev: Maybe<Conversations_Stddev_Fields>;
  stddev_pop: Maybe<Conversations_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Conversations_Stddev_Samp_Fields>;
  sum: Maybe<Conversations_Sum_Fields>;
  var_pop: Maybe<Conversations_Var_Pop_Fields>;
  var_samp: Maybe<Conversations_Var_Samp_Fields>;
  variance: Maybe<Conversations_Variance_Fields>;
};


/** aggregate fields of "conversations" */
export type Conversations_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Conversations_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Conversations_Avg_Fields = {
  __typename?: 'conversations_avg_fields';
  unreadCount: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "conversations". All fields are combined with a logical 'AND'. */
export type Conversations_Bool_Exp = {
  _and?: InputMaybe<Array<Conversations_Bool_Exp>>;
  _not?: InputMaybe<Conversations_Bool_Exp>;
  _or?: InputMaybe<Array<Conversations_Bool_Exp>>;
  conversation_participant?: InputMaybe<Conversation_Participant_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  messages?: InputMaybe<Messages_Bool_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  unreadCount?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "conversations" */
export enum Conversations_Constraint {
  /** unique or primary key constraint */
  ConversationsIdKey = 'conversations_id_key',
  /** unique or primary key constraint */
  ConversationsPkey = 'conversations_pkey'
}

/** input type for incrementing numeric columns in table "conversations" */
export type Conversations_Inc_Input = {
  unreadCount?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "conversations" */
export type Conversations_Insert_Input = {
  conversation_participant?: InputMaybe<Conversation_Participant_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<Messages_Arr_Rel_Insert_Input>;
  type?: InputMaybe<Scalars['String']>;
  unreadCount?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Conversations_Max_Fields = {
  __typename?: 'conversations_max_fields';
  id: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  unreadCount: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Conversations_Min_Fields = {
  __typename?: 'conversations_min_fields';
  id: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  unreadCount: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "conversations" */
export type Conversations_Mutation_Response = {
  __typename?: 'conversations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Conversations>;
};

/** input type for inserting object relation for remote table "conversations" */
export type Conversations_Obj_Rel_Insert_Input = {
  data: Conversations_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Conversations_On_Conflict>;
};

/** on_conflict condition type for table "conversations" */
export type Conversations_On_Conflict = {
  constraint: Conversations_Constraint;
  update_columns?: Array<Conversations_Update_Column>;
  where?: InputMaybe<Conversations_Bool_Exp>;
};

/** Ordering options when selecting data from "conversations". */
export type Conversations_Order_By = {
  conversation_participant_aggregate?: InputMaybe<Conversation_Participant_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  messages_aggregate?: InputMaybe<Messages_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
  unreadCount?: InputMaybe<Order_By>;
};

/** primary key columns input for table: conversations */
export type Conversations_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "conversations" */
export enum Conversations_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  UnreadCount = 'unreadCount'
}

/** input type for updating data in table "conversations" */
export type Conversations_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  unreadCount?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Conversations_Stddev_Fields = {
  __typename?: 'conversations_stddev_fields';
  unreadCount: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Conversations_Stddev_Pop_Fields = {
  __typename?: 'conversations_stddev_pop_fields';
  unreadCount: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Conversations_Stddev_Samp_Fields = {
  __typename?: 'conversations_stddev_samp_fields';
  unreadCount: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Conversations_Sum_Fields = {
  __typename?: 'conversations_sum_fields';
  unreadCount: Maybe<Scalars['Int']>;
};

/** update columns of table "conversations" */
export enum Conversations_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  UnreadCount = 'unreadCount'
}

/** aggregate var_pop on columns */
export type Conversations_Var_Pop_Fields = {
  __typename?: 'conversations_var_pop_fields';
  unreadCount: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Conversations_Var_Samp_Fields = {
  __typename?: 'conversations_var_samp_fields';
  unreadCount: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Conversations_Variance_Fields = {
  __typename?: 'conversations_variance_fields';
  unreadCount: Maybe<Scalars['Float']>;
};

/** columns and relationships of "messages" */
export type Messages = {
  __typename?: 'messages';
  attachments: Maybe<Scalars['_text']>;
  body: Maybe<Scalars['String']>;
  contentType: Scalars['String'];
  /** An object relationship */
  conversation: Maybe<Conversations>;
  conversation_id: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  id: Scalars['String'];
  senderId: Scalars['String'];
};

/** aggregated selection of "messages" */
export type Messages_Aggregate = {
  __typename?: 'messages_aggregate';
  aggregate: Maybe<Messages_Aggregate_Fields>;
  nodes: Array<Messages>;
};

/** aggregate fields of "messages" */
export type Messages_Aggregate_Fields = {
  __typename?: 'messages_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<Messages_Max_Fields>;
  min: Maybe<Messages_Min_Fields>;
};


/** aggregate fields of "messages" */
export type Messages_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Messages_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "messages" */
export type Messages_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Messages_Max_Order_By>;
  min?: InputMaybe<Messages_Min_Order_By>;
};

/** input type for inserting array relation for remote table "messages" */
export type Messages_Arr_Rel_Insert_Input = {
  data: Array<Messages_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Messages_On_Conflict>;
};

/** Boolean expression to filter rows from the table "messages". All fields are combined with a logical 'AND'. */
export type Messages_Bool_Exp = {
  _and?: InputMaybe<Array<Messages_Bool_Exp>>;
  _not?: InputMaybe<Messages_Bool_Exp>;
  _or?: InputMaybe<Array<Messages_Bool_Exp>>;
  attachments?: InputMaybe<_Text_Comparison_Exp>;
  body?: InputMaybe<String_Comparison_Exp>;
  contentType?: InputMaybe<String_Comparison_Exp>;
  conversation?: InputMaybe<Conversations_Bool_Exp>;
  conversation_id?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  senderId?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "messages" */
export enum Messages_Constraint {
  /** unique or primary key constraint */
  MessagesPkey = 'messages_pkey'
}

/** input type for inserting data into table "messages" */
export type Messages_Insert_Input = {
  attachments?: InputMaybe<Scalars['_text']>;
  body?: InputMaybe<Scalars['String']>;
  contentType?: InputMaybe<Scalars['String']>;
  conversation?: InputMaybe<Conversations_Obj_Rel_Insert_Input>;
  conversation_id?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  senderId?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Messages_Max_Fields = {
  __typename?: 'messages_max_fields';
  body: Maybe<Scalars['String']>;
  contentType: Maybe<Scalars['String']>;
  conversation_id: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['String']>;
  senderId: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "messages" */
export type Messages_Max_Order_By = {
  body?: InputMaybe<Order_By>;
  contentType?: InputMaybe<Order_By>;
  conversation_id?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  senderId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Messages_Min_Fields = {
  __typename?: 'messages_min_fields';
  body: Maybe<Scalars['String']>;
  contentType: Maybe<Scalars['String']>;
  conversation_id: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['String']>;
  senderId: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "messages" */
export type Messages_Min_Order_By = {
  body?: InputMaybe<Order_By>;
  contentType?: InputMaybe<Order_By>;
  conversation_id?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  senderId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "messages" */
export type Messages_Mutation_Response = {
  __typename?: 'messages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Messages>;
};

/** on_conflict condition type for table "messages" */
export type Messages_On_Conflict = {
  constraint: Messages_Constraint;
  update_columns?: Array<Messages_Update_Column>;
  where?: InputMaybe<Messages_Bool_Exp>;
};

/** Ordering options when selecting data from "messages". */
export type Messages_Order_By = {
  attachments?: InputMaybe<Order_By>;
  body?: InputMaybe<Order_By>;
  contentType?: InputMaybe<Order_By>;
  conversation?: InputMaybe<Conversations_Order_By>;
  conversation_id?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  senderId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: messages */
export type Messages_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "messages" */
export enum Messages_Select_Column {
  /** column name */
  Attachments = 'attachments',
  /** column name */
  Body = 'body',
  /** column name */
  ContentType = 'contentType',
  /** column name */
  ConversationId = 'conversation_id',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  SenderId = 'senderId'
}

/** input type for updating data in table "messages" */
export type Messages_Set_Input = {
  attachments?: InputMaybe<Scalars['_text']>;
  body?: InputMaybe<Scalars['String']>;
  contentType?: InputMaybe<Scalars['String']>;
  conversation_id?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  senderId?: InputMaybe<Scalars['String']>;
};

/** update columns of table "messages" */
export enum Messages_Update_Column {
  /** column name */
  Attachments = 'attachments',
  /** column name */
  Body = 'body',
  /** column name */
  ContentType = 'contentType',
  /** column name */
  ConversationId = 'conversation_id',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  SenderId = 'senderId'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "conversation_participant" */
  delete_conversation_participant: Maybe<Conversation_Participant_Mutation_Response>;
  /** delete single row from the table: "conversation_participant" */
  delete_conversation_participant_by_pk: Maybe<Conversation_Participant>;
  /** delete data from the table: "conversations" */
  delete_conversations: Maybe<Conversations_Mutation_Response>;
  /** delete single row from the table: "conversations" */
  delete_conversations_by_pk: Maybe<Conversations>;
  /** delete data from the table: "messages" */
  delete_messages: Maybe<Messages_Mutation_Response>;
  /** delete single row from the table: "messages" */
  delete_messages_by_pk: Maybe<Messages>;
  /** delete data from the table: "profiles" */
  delete_profiles: Maybe<Profiles_Mutation_Response>;
  /** delete single row from the table: "profiles" */
  delete_profiles_by_pk: Maybe<Profiles>;
  /** delete data from the table: "users" */
  delete_users: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk: Maybe<Users>;
  getPresignUrl: Maybe<PesignUrlOutput>;
  /** insert data into the table: "conversation_participant" */
  insert_conversation_participant: Maybe<Conversation_Participant_Mutation_Response>;
  /** insert a single row into the table: "conversation_participant" */
  insert_conversation_participant_one: Maybe<Conversation_Participant>;
  /** insert data into the table: "conversations" */
  insert_conversations: Maybe<Conversations_Mutation_Response>;
  /** insert a single row into the table: "conversations" */
  insert_conversations_one: Maybe<Conversations>;
  /** insert data into the table: "messages" */
  insert_messages: Maybe<Messages_Mutation_Response>;
  /** insert a single row into the table: "messages" */
  insert_messages_one: Maybe<Messages>;
  /** insert data into the table: "profiles" */
  insert_profiles: Maybe<Profiles_Mutation_Response>;
  /** insert a single row into the table: "profiles" */
  insert_profiles_one: Maybe<Profiles>;
  /** insert data into the table: "users" */
  insert_users: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one: Maybe<Users>;
  login: Maybe<LoginOrRegisterUserOutput>;
  /** update data of the table: "conversation_participant" */
  update_conversation_participant: Maybe<Conversation_Participant_Mutation_Response>;
  /** update single row of the table: "conversation_participant" */
  update_conversation_participant_by_pk: Maybe<Conversation_Participant>;
  /** update data of the table: "conversations" */
  update_conversations: Maybe<Conversations_Mutation_Response>;
  /** update single row of the table: "conversations" */
  update_conversations_by_pk: Maybe<Conversations>;
  /** update data of the table: "messages" */
  update_messages: Maybe<Messages_Mutation_Response>;
  /** update single row of the table: "messages" */
  update_messages_by_pk: Maybe<Messages>;
  /** update data of the table: "profiles" */
  update_profiles: Maybe<Profiles_Mutation_Response>;
  /** update single row of the table: "profiles" */
  update_profiles_by_pk: Maybe<Profiles>;
  /** update data of the table: "users" */
  update_users: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_Conversation_ParticipantArgs = {
  where: Conversation_Participant_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Conversation_Participant_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_ConversationsArgs = {
  where: Conversations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Conversations_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_MessagesArgs = {
  where: Messages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Messages_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_ProfilesArgs = {
  where: Profiles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Profiles_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootGetPresignUrlArgs = {
  params: PresignUrlArgs;
};


/** mutation root */
export type Mutation_RootInsert_Conversation_ParticipantArgs = {
  objects: Array<Conversation_Participant_Insert_Input>;
  on_conflict: InputMaybe<Conversation_Participant_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Conversation_Participant_OneArgs = {
  object: Conversation_Participant_Insert_Input;
  on_conflict: InputMaybe<Conversation_Participant_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ConversationsArgs = {
  objects: Array<Conversations_Insert_Input>;
  on_conflict: InputMaybe<Conversations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Conversations_OneArgs = {
  object: Conversations_Insert_Input;
  on_conflict: InputMaybe<Conversations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MessagesArgs = {
  objects: Array<Messages_Insert_Input>;
  on_conflict: InputMaybe<Messages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Messages_OneArgs = {
  object: Messages_Insert_Input;
  on_conflict: InputMaybe<Messages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProfilesArgs = {
  objects: Array<Profiles_Insert_Input>;
  on_conflict: InputMaybe<Profiles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Profiles_OneArgs = {
  object: Profiles_Insert_Input;
  on_conflict: InputMaybe<Profiles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootLoginArgs = {
  params: LoginArgs;
};


/** mutation root */
export type Mutation_RootUpdate_Conversation_ParticipantArgs = {
  _set: InputMaybe<Conversation_Participant_Set_Input>;
  where: Conversation_Participant_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Conversation_Participant_By_PkArgs = {
  _set: InputMaybe<Conversation_Participant_Set_Input>;
  pk_columns: Conversation_Participant_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ConversationsArgs = {
  _inc: InputMaybe<Conversations_Inc_Input>;
  _set: InputMaybe<Conversations_Set_Input>;
  where: Conversations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Conversations_By_PkArgs = {
  _inc: InputMaybe<Conversations_Inc_Input>;
  _set: InputMaybe<Conversations_Set_Input>;
  pk_columns: Conversations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MessagesArgs = {
  _set: InputMaybe<Messages_Set_Input>;
  where: Messages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Messages_By_PkArgs = {
  _set: InputMaybe<Messages_Set_Input>;
  pk_columns: Messages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProfilesArgs = {
  _inc: InputMaybe<Profiles_Inc_Input>;
  _set: InputMaybe<Profiles_Set_Input>;
  where: Profiles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Profiles_By_PkArgs = {
  _inc: InputMaybe<Profiles_Inc_Input>;
  _set: InputMaybe<Profiles_Set_Input>;
  pk_columns: Profiles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "profiles" */
export type Profiles = {
  __typename?: 'profiles';
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "profiles" */
export type Profiles_Aggregate = {
  __typename?: 'profiles_aggregate';
  aggregate: Maybe<Profiles_Aggregate_Fields>;
  nodes: Array<Profiles>;
};

/** aggregate fields of "profiles" */
export type Profiles_Aggregate_Fields = {
  __typename?: 'profiles_aggregate_fields';
  avg: Maybe<Profiles_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Profiles_Max_Fields>;
  min: Maybe<Profiles_Min_Fields>;
  stddev: Maybe<Profiles_Stddev_Fields>;
  stddev_pop: Maybe<Profiles_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Profiles_Stddev_Samp_Fields>;
  sum: Maybe<Profiles_Sum_Fields>;
  var_pop: Maybe<Profiles_Var_Pop_Fields>;
  var_samp: Maybe<Profiles_Var_Samp_Fields>;
  variance: Maybe<Profiles_Variance_Fields>;
};


/** aggregate fields of "profiles" */
export type Profiles_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Profiles_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Profiles_Avg_Fields = {
  __typename?: 'profiles_avg_fields';
  id: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "profiles". All fields are combined with a logical 'AND'. */
export type Profiles_Bool_Exp = {
  _and?: InputMaybe<Array<Profiles_Bool_Exp>>;
  _not?: InputMaybe<Profiles_Bool_Exp>;
  _or?: InputMaybe<Array<Profiles_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "profiles" */
export enum Profiles_Constraint {
  /** unique or primary key constraint */
  ProfilesPkey = 'profiles_pkey'
}

/** input type for incrementing numeric columns in table "profiles" */
export type Profiles_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "profiles" */
export type Profiles_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Profiles_Max_Fields = {
  __typename?: 'profiles_max_fields';
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Profiles_Min_Fields = {
  __typename?: 'profiles_min_fields';
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "profiles" */
export type Profiles_Mutation_Response = {
  __typename?: 'profiles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Profiles>;
};

/** on_conflict condition type for table "profiles" */
export type Profiles_On_Conflict = {
  constraint: Profiles_Constraint;
  update_columns?: Array<Profiles_Update_Column>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};

/** Ordering options when selecting data from "profiles". */
export type Profiles_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: profiles */
export type Profiles_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "profiles" */
export enum Profiles_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "profiles" */
export type Profiles_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Profiles_Stddev_Fields = {
  __typename?: 'profiles_stddev_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Profiles_Stddev_Pop_Fields = {
  __typename?: 'profiles_stddev_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Profiles_Stddev_Samp_Fields = {
  __typename?: 'profiles_stddev_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Profiles_Sum_Fields = {
  __typename?: 'profiles_sum_fields';
  id: Maybe<Scalars['Int']>;
};

/** update columns of table "profiles" */
export enum Profiles_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Profiles_Var_Pop_Fields = {
  __typename?: 'profiles_var_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Profiles_Var_Samp_Fields = {
  __typename?: 'profiles_var_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Profiles_Variance_Fields = {
  __typename?: 'profiles_variance_fields';
  id: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  conversation_participant: Array<Conversation_Participant>;
  /** An aggregate relationship */
  conversation_participant_aggregate: Conversation_Participant_Aggregate;
  /** fetch data from the table: "conversation_participant" using primary key columns */
  conversation_participant_by_pk: Maybe<Conversation_Participant>;
  /** fetch data from the table: "conversations" */
  conversations: Array<Conversations>;
  /** fetch aggregated fields from the table: "conversations" */
  conversations_aggregate: Conversations_Aggregate;
  /** fetch data from the table: "conversations" using primary key columns */
  conversations_by_pk: Maybe<Conversations>;
  /** An array relationship */
  messages: Array<Messages>;
  /** An aggregate relationship */
  messages_aggregate: Messages_Aggregate;
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk: Maybe<Messages>;
  /** fetch data from the table: "profiles" */
  profiles: Array<Profiles>;
  /** fetch aggregated fields from the table: "profiles" */
  profiles_aggregate: Profiles_Aggregate;
  /** fetch data from the table: "profiles" using primary key columns */
  profiles_by_pk: Maybe<Profiles>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: Maybe<Users>;
};


export type Query_RootConversation_ParticipantArgs = {
  distinct_on: InputMaybe<Array<Conversation_Participant_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Conversation_Participant_Order_By>>;
  where: InputMaybe<Conversation_Participant_Bool_Exp>;
};


export type Query_RootConversation_Participant_AggregateArgs = {
  distinct_on: InputMaybe<Array<Conversation_Participant_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Conversation_Participant_Order_By>>;
  where: InputMaybe<Conversation_Participant_Bool_Exp>;
};


export type Query_RootConversation_Participant_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootConversationsArgs = {
  distinct_on: InputMaybe<Array<Conversations_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Conversations_Order_By>>;
  where: InputMaybe<Conversations_Bool_Exp>;
};


export type Query_RootConversations_AggregateArgs = {
  distinct_on: InputMaybe<Array<Conversations_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Conversations_Order_By>>;
  where: InputMaybe<Conversations_Bool_Exp>;
};


export type Query_RootConversations_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootMessagesArgs = {
  distinct_on: InputMaybe<Array<Messages_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Messages_Order_By>>;
  where: InputMaybe<Messages_Bool_Exp>;
};


export type Query_RootMessages_AggregateArgs = {
  distinct_on: InputMaybe<Array<Messages_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Messages_Order_By>>;
  where: InputMaybe<Messages_Bool_Exp>;
};


export type Query_RootMessages_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootProfilesArgs = {
  distinct_on: InputMaybe<Array<Profiles_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Profiles_Order_By>>;
  where: InputMaybe<Profiles_Bool_Exp>;
};


export type Query_RootProfiles_AggregateArgs = {
  distinct_on: InputMaybe<Array<Profiles_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Profiles_Order_By>>;
  where: InputMaybe<Profiles_Bool_Exp>;
};


export type Query_RootProfiles_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUsersArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  conversation_participant: Array<Conversation_Participant>;
  /** An aggregate relationship */
  conversation_participant_aggregate: Conversation_Participant_Aggregate;
  /** fetch data from the table: "conversation_participant" using primary key columns */
  conversation_participant_by_pk: Maybe<Conversation_Participant>;
  /** fetch data from the table: "conversations" */
  conversations: Array<Conversations>;
  /** fetch aggregated fields from the table: "conversations" */
  conversations_aggregate: Conversations_Aggregate;
  /** fetch data from the table: "conversations" using primary key columns */
  conversations_by_pk: Maybe<Conversations>;
  /** An array relationship */
  messages: Array<Messages>;
  /** An aggregate relationship */
  messages_aggregate: Messages_Aggregate;
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk: Maybe<Messages>;
  /** fetch data from the table: "profiles" */
  profiles: Array<Profiles>;
  /** fetch aggregated fields from the table: "profiles" */
  profiles_aggregate: Profiles_Aggregate;
  /** fetch data from the table: "profiles" using primary key columns */
  profiles_by_pk: Maybe<Profiles>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: Maybe<Users>;
};


export type Subscription_RootConversation_ParticipantArgs = {
  distinct_on: InputMaybe<Array<Conversation_Participant_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Conversation_Participant_Order_By>>;
  where: InputMaybe<Conversation_Participant_Bool_Exp>;
};


export type Subscription_RootConversation_Participant_AggregateArgs = {
  distinct_on: InputMaybe<Array<Conversation_Participant_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Conversation_Participant_Order_By>>;
  where: InputMaybe<Conversation_Participant_Bool_Exp>;
};


export type Subscription_RootConversation_Participant_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootConversationsArgs = {
  distinct_on: InputMaybe<Array<Conversations_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Conversations_Order_By>>;
  where: InputMaybe<Conversations_Bool_Exp>;
};


export type Subscription_RootConversations_AggregateArgs = {
  distinct_on: InputMaybe<Array<Conversations_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Conversations_Order_By>>;
  where: InputMaybe<Conversations_Bool_Exp>;
};


export type Subscription_RootConversations_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootMessagesArgs = {
  distinct_on: InputMaybe<Array<Messages_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Messages_Order_By>>;
  where: InputMaybe<Messages_Bool_Exp>;
};


export type Subscription_RootMessages_AggregateArgs = {
  distinct_on: InputMaybe<Array<Messages_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Messages_Order_By>>;
  where: InputMaybe<Messages_Bool_Exp>;
};


export type Subscription_RootMessages_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootProfilesArgs = {
  distinct_on: InputMaybe<Array<Profiles_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Profiles_Order_By>>;
  where: InputMaybe<Profiles_Bool_Exp>;
};


export type Subscription_RootProfiles_AggregateArgs = {
  distinct_on: InputMaybe<Array<Profiles_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Profiles_Order_By>>;
  where: InputMaybe<Profiles_Bool_Exp>;
};


export type Subscription_RootProfiles_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUsersArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  address: Maybe<Scalars['String']>;
  avatar: Scalars['String'];
  created_at: Scalars['timestamptz'];
  email: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lastActivity: Scalars['timestamptz'];
  name: Scalars['String'];
  /** An array relationship */
  participant_conversation: Array<Conversation_Participant>;
  /** An aggregate relationship */
  participant_conversation_aggregate: Conversation_Participant_Aggregate;
  password: Scalars['String'];
  phone: Scalars['String'];
  position: Scalars['String'];
  status: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  username: Scalars['String'];
};


/** columns and relationships of "users" */
export type UsersParticipant_ConversationArgs = {
  distinct_on: InputMaybe<Array<Conversation_Participant_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Conversation_Participant_Order_By>>;
  where: InputMaybe<Conversation_Participant_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersParticipant_Conversation_AggregateArgs = {
  distinct_on: InputMaybe<Array<Conversation_Participant_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Conversation_Participant_Order_By>>;
  where: InputMaybe<Conversation_Participant_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<Users_Max_Fields>;
  min: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Users_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  avatar?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  lastActivity?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  participant_conversation?: InputMaybe<Conversation_Participant_Bool_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  position?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  address?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastActivity?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  participant_conversation?: InputMaybe<Conversation_Participant_Arr_Rel_Insert_Input>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  address: Maybe<Scalars['String']>;
  avatar: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['timestamptz']>;
  email: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  lastActivity: Maybe<Scalars['timestamptz']>;
  name: Maybe<Scalars['String']>;
  password: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
  position: Maybe<Scalars['String']>;
  status: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
  username: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  address: Maybe<Scalars['String']>;
  avatar: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['timestamptz']>;
  email: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  lastActivity: Maybe<Scalars['timestamptz']>;
  name: Maybe<Scalars['String']>;
  password: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
  position: Maybe<Scalars['String']>;
  status: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
  username: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  address?: InputMaybe<Order_By>;
  avatar?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastActivity?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  participant_conversation_aggregate?: InputMaybe<Conversation_Participant_Aggregate_Order_By>;
  password?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Avatar = 'avatar',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  LastActivity = 'lastActivity',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  Phone = 'phone',
  /** column name */
  Position = 'position',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  address?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastActivity?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  username?: InputMaybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Avatar = 'avatar',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  LastActivity = 'lastActivity',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  Phone = 'phone',
  /** column name */
  Position = 'position',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

export type LoginMutationVariables = Exact<{
  params: LoginArgs;
}>;


export type LoginMutation = { __typename?: 'mutation_root', login: { __typename?: 'LoginOrRegisterUserOutput', token: string | null, userId: string | null, error: string | null } | null };

export type SendMessageMutationVariables = Exact<{
  object: Messages_Insert_Input;
}>;


export type SendMessageMutation = { __typename?: 'mutation_root', insert_messages_one: { __typename?: 'messages', attachments: any | null, body: string | null, contentType: string, conversation_id: string | null, createdAt: string, id: string, senderId: string } | null };

export type GetPresignUrlMutationVariables = Exact<{
  params: PresignUrlArgs;
}>;


export type GetPresignUrlMutation = { __typename?: 'mutation_root', getPresignUrl: { __typename?: 'PesignUrlOutput', url: string } | null };

export type FindUserByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type FindUserByEmailQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: string, password: string }> };

export type GetMeQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetMeQuery = { __typename?: 'query_root', users_by_pk: { __typename?: 'users', avatar: string, created_at: string, email: string | null, id: string, name: string, position: string } | null };

export type GetConversationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetConversationQuery = { __typename?: 'query_root', conversations: Array<{ __typename?: 'conversations', unreadCount: number, type: string, id: string, messages: Array<{ __typename?: 'messages', body: string | null, senderId: string, contentType: string, createdAt: string }>, conversation_participant: Array<{ __typename?: 'conversation_participant', id: string, user_id: string, participant: { __typename?: 'users', username: string, avatar: string, id: string, status: string } | null }> }> };

export type GetConversationByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetConversationByIdQuery = { __typename?: 'query_root', conversations_by_pk: { __typename?: 'conversations', id: string, type: string, unreadCount: number, messages: Array<{ __typename?: 'messages', body: string | null, attachments: any | null, contentType: string, createdAt: string, id: string, senderId: string }>, conversation_participant: Array<{ __typename?: 'conversation_participant', user_id: string, participant: { __typename?: 'users', id: string, avatar: string, lastActivity: string, status: string, username: string, phone: string, position: string, email: string | null, address: string | null } | null }> } | null };

export type GetConversationSubcriptionSubscriptionVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetConversationSubcriptionSubscription = { __typename?: 'subscription_root', conversations_by_pk: { __typename?: 'conversations', id: string, type: string, unreadCount: number, messages: Array<{ __typename?: 'messages', body: string | null, attachments: any | null, conversation_id: string | null, createdAt: string, senderId: string, id: string, contentType: string }>, conversation_participant: Array<{ __typename?: 'conversation_participant', conversation_id: string, id: string, participant: { __typename?: 'users', address: string | null, avatar: string, created_at: string, email: string | null, id: string, lastActivity: string, name: string, phone: string, position: string, status: string, updated_at: string, username: string } | null }> } | null };


export const LoginDocument = `
    mutation Login($params: LoginArgs!) {
  login(params: $params) {
    token
    userId
    error
  }
}
    `;
export const useLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>) =>
    useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
      ['Login'],
      useFetchData<LoginMutation, LoginMutationVariables>(LoginDocument),
      options
    );
export const SendMessageDocument = `
    mutation SendMessage($object: messages_insert_input!) {
  insert_messages_one(object: $object) {
    attachments
    body
    contentType
    conversation_id
    createdAt
    id
    senderId
  }
}
    `;
export const useSendMessageMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<SendMessageMutation, TError, SendMessageMutationVariables, TContext>) =>
    useMutation<SendMessageMutation, TError, SendMessageMutationVariables, TContext>(
      ['SendMessage'],
      useFetchData<SendMessageMutation, SendMessageMutationVariables>(SendMessageDocument),
      options
    );
export const GetPresignUrlDocument = `
    mutation getPresignUrl($params: PresignUrlArgs!) {
  getPresignUrl(params: $params) {
    url
  }
}
    `;
export const useGetPresignUrlMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<GetPresignUrlMutation, TError, GetPresignUrlMutationVariables, TContext>) =>
    useMutation<GetPresignUrlMutation, TError, GetPresignUrlMutationVariables, TContext>(
      ['getPresignUrl'],
      useFetchData<GetPresignUrlMutation, GetPresignUrlMutationVariables>(GetPresignUrlDocument),
      options
    );
export const FindUserByEmailDocument = `
    query findUserByEmail($email: String!) {
  users(where: {email: {_eq: $email}}) {
    id
    password
  }
}
    `;
export const useFindUserByEmailQuery = <
      TData = FindUserByEmailQuery,
      TError = unknown
    >(
      variables: FindUserByEmailQueryVariables,
      options?: UseQueryOptions<FindUserByEmailQuery, TError, TData>
    ) =>
    useQuery<FindUserByEmailQuery, TError, TData>(
      ['findUserByEmail', variables],
      useFetchData<FindUserByEmailQuery, FindUserByEmailQueryVariables>(FindUserByEmailDocument).bind(null, variables),
      options
    );
export const GetMeDocument = `
    query getMe($id: String!) {
  users_by_pk(id: $id) {
    avatar
    created_at
    email
    id
    name
    position
  }
}
    `;
export const useGetMeQuery = <
      TData = GetMeQuery,
      TError = unknown
    >(
      variables: GetMeQueryVariables,
      options?: UseQueryOptions<GetMeQuery, TError, TData>
    ) =>
    useQuery<GetMeQuery, TError, TData>(
      ['getMe', variables],
      useFetchData<GetMeQuery, GetMeQueryVariables>(GetMeDocument).bind(null, variables),
      options
    );
export const GetConversationDocument = `
    query getConversation {
  conversations {
    unreadCount
    type
    id
    messages {
      body
      senderId
      contentType
      createdAt
    }
    conversation_participant {
      id
      user_id
      participant {
        username
        avatar
        id
        status
      }
    }
  }
}
    `;
export const useGetConversationQuery = <
      TData = GetConversationQuery,
      TError = unknown
    >(
      variables?: GetConversationQueryVariables,
      options?: UseQueryOptions<GetConversationQuery, TError, TData>
    ) =>
    useQuery<GetConversationQuery, TError, TData>(
      variables === undefined ? ['getConversation'] : ['getConversation', variables],
      useFetchData<GetConversationQuery, GetConversationQueryVariables>(GetConversationDocument).bind(null, variables),
      options
    );
export const GetConversationByIdDocument = `
    query getConversationById($id: String!) {
  conversations_by_pk(id: $id) {
    id
    messages {
      body
      attachments
      contentType
      createdAt
      id
      senderId
    }
    type
    unreadCount
    conversation_participant {
      user_id
      participant {
        id
        avatar
        lastActivity
        status
        username
        phone
        position
        email
        address
      }
    }
  }
}
    `;
export const useGetConversationByIdQuery = <
      TData = GetConversationByIdQuery,
      TError = unknown
    >(
      variables: GetConversationByIdQueryVariables,
      options?: UseQueryOptions<GetConversationByIdQuery, TError, TData>
    ) =>
    useQuery<GetConversationByIdQuery, TError, TData>(
      ['getConversationById', variables],
      useFetchData<GetConversationByIdQuery, GetConversationByIdQueryVariables>(GetConversationByIdDocument).bind(null, variables),
      options
    );
export const GetConversationSubcriptionDocument = `
    subscription getConversationSubcription($id: String!) {
  conversations_by_pk(id: $id) {
    id
    messages {
      body
      attachments
      conversation_id
      createdAt
      senderId
      id
      contentType
    }
    type
    unreadCount
    conversation_participant {
      participant {
        address
        avatar
        created_at
        email
        id
        lastActivity
        name
        phone
        position
        status
        updated_at
        username
      }
      conversation_id
      id
    }
  }
}
    `;