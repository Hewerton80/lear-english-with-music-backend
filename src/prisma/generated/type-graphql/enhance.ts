import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  Song: crudResolvers.SongCrudResolver,
  Author: crudResolvers.AuthorCrudResolver,
  SongAuthor: crudResolvers.SongAuthorCrudResolver
};
const actionResolversMap = {
  Song: {
    aggregateSong: actionResolvers.AggregateSongResolver,
    createManySong: actionResolvers.CreateManySongResolver,
    createOneSong: actionResolvers.CreateOneSongResolver,
    deleteManySong: actionResolvers.DeleteManySongResolver,
    deleteOneSong: actionResolvers.DeleteOneSongResolver,
    findFirstSong: actionResolvers.FindFirstSongResolver,
    findFirstSongOrThrow: actionResolvers.FindFirstSongOrThrowResolver,
    songs: actionResolvers.FindManySongResolver,
    song: actionResolvers.FindUniqueSongResolver,
    getSong: actionResolvers.FindUniqueSongOrThrowResolver,
    groupBySong: actionResolvers.GroupBySongResolver,
    updateManySong: actionResolvers.UpdateManySongResolver,
    updateOneSong: actionResolvers.UpdateOneSongResolver,
    upsertOneSong: actionResolvers.UpsertOneSongResolver
  },
  Author: {
    aggregateAuthor: actionResolvers.AggregateAuthorResolver,
    createManyAuthor: actionResolvers.CreateManyAuthorResolver,
    createOneAuthor: actionResolvers.CreateOneAuthorResolver,
    deleteManyAuthor: actionResolvers.DeleteManyAuthorResolver,
    deleteOneAuthor: actionResolvers.DeleteOneAuthorResolver,
    findFirstAuthor: actionResolvers.FindFirstAuthorResolver,
    findFirstAuthorOrThrow: actionResolvers.FindFirstAuthorOrThrowResolver,
    authors: actionResolvers.FindManyAuthorResolver,
    author: actionResolvers.FindUniqueAuthorResolver,
    getAuthor: actionResolvers.FindUniqueAuthorOrThrowResolver,
    groupByAuthor: actionResolvers.GroupByAuthorResolver,
    updateManyAuthor: actionResolvers.UpdateManyAuthorResolver,
    updateOneAuthor: actionResolvers.UpdateOneAuthorResolver,
    upsertOneAuthor: actionResolvers.UpsertOneAuthorResolver
  },
  SongAuthor: {
    aggregateSongAuthor: actionResolvers.AggregateSongAuthorResolver,
    createManySongAuthor: actionResolvers.CreateManySongAuthorResolver,
    createOneSongAuthor: actionResolvers.CreateOneSongAuthorResolver,
    deleteManySongAuthor: actionResolvers.DeleteManySongAuthorResolver,
    deleteOneSongAuthor: actionResolvers.DeleteOneSongAuthorResolver,
    findFirstSongAuthor: actionResolvers.FindFirstSongAuthorResolver,
    findFirstSongAuthorOrThrow: actionResolvers.FindFirstSongAuthorOrThrowResolver,
    songAuthors: actionResolvers.FindManySongAuthorResolver,
    songAuthor: actionResolvers.FindUniqueSongAuthorResolver,
    getSongAuthor: actionResolvers.FindUniqueSongAuthorOrThrowResolver,
    groupBySongAuthor: actionResolvers.GroupBySongAuthorResolver,
    updateManySongAuthor: actionResolvers.UpdateManySongAuthorResolver,
    updateOneSongAuthor: actionResolvers.UpdateOneSongAuthorResolver,
    upsertOneSongAuthor: actionResolvers.UpsertOneSongAuthorResolver
  }
};
const crudResolversInfo = {
  Song: ["aggregateSong", "createManySong", "createOneSong", "deleteManySong", "deleteOneSong", "findFirstSong", "findFirstSongOrThrow", "songs", "song", "getSong", "groupBySong", "updateManySong", "updateOneSong", "upsertOneSong"],
  Author: ["aggregateAuthor", "createManyAuthor", "createOneAuthor", "deleteManyAuthor", "deleteOneAuthor", "findFirstAuthor", "findFirstAuthorOrThrow", "authors", "author", "getAuthor", "groupByAuthor", "updateManyAuthor", "updateOneAuthor", "upsertOneAuthor"],
  SongAuthor: ["aggregateSongAuthor", "createManySongAuthor", "createOneSongAuthor", "deleteManySongAuthor", "deleteOneSongAuthor", "findFirstSongAuthor", "findFirstSongAuthorOrThrow", "songAuthors", "songAuthor", "getSongAuthor", "groupBySongAuthor", "updateManySongAuthor", "updateOneSongAuthor", "upsertOneSongAuthor"]
};
const argsInfo = {
  AggregateSongArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManySongArgs: ["data", "skipDuplicates"],
  CreateOneSongArgs: ["data"],
  DeleteManySongArgs: ["where"],
  DeleteOneSongArgs: ["where"],
  FindFirstSongArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstSongOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySongArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueSongArgs: ["where"],
  FindUniqueSongOrThrowArgs: ["where"],
  GroupBySongArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManySongArgs: ["data", "where"],
  UpdateOneSongArgs: ["data", "where"],
  UpsertOneSongArgs: ["where", "create", "update"],
  AggregateAuthorArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyAuthorArgs: ["data", "skipDuplicates"],
  CreateOneAuthorArgs: ["data"],
  DeleteManyAuthorArgs: ["where"],
  DeleteOneAuthorArgs: ["where"],
  FindFirstAuthorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstAuthorOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAuthorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueAuthorArgs: ["where"],
  FindUniqueAuthorOrThrowArgs: ["where"],
  GroupByAuthorArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyAuthorArgs: ["data", "where"],
  UpdateOneAuthorArgs: ["data", "where"],
  UpsertOneAuthorArgs: ["where", "create", "update"],
  AggregateSongAuthorArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManySongAuthorArgs: ["data", "skipDuplicates"],
  CreateOneSongAuthorArgs: ["data"],
  DeleteManySongAuthorArgs: ["where"],
  DeleteOneSongAuthorArgs: ["where"],
  FindFirstSongAuthorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstSongAuthorOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySongAuthorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueSongAuthorArgs: ["where"],
  FindUniqueSongAuthorOrThrowArgs: ["where"],
  GroupBySongAuthorArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManySongAuthorArgs: ["data", "where"],
  UpdateOneSongAuthorArgs: ["data", "where"],
  UpsertOneSongAuthorArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & {
    _all?: MethodDecorator[];
    _query?: MethodDecorator[];
    _mutation?: MethodDecorator[];
  };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  const mutationOperationPrefixes = [
    "createOne", "createMany", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
  ];
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all;
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
      const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
      const mainDecorators = [
        ...allActionsDecorators ?? [],
        ...operationKindDecorators ?? [],
      ]
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(mainDecorators);
      } else {
        decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Song: relationResolvers.SongRelationsResolver,
  Author: relationResolvers.AuthorRelationsResolver,
  SongAuthor: relationResolvers.SongAuthorRelationsResolver
};
const relationResolversInfo = {
  Song: ["authors"],
  Author: ["songs"],
  SongAuthor: ["author", "song"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    const allActionsDecorators = relationResolverActionsConfig._all ?? [];
    const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
    for (const relationResolverActionName of relationResolverActionNames) {
      const maybeDecoratorsOrFn = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Song: ["id", "title", "slug", "createdAt"],
  Author: ["id", "name", "slug", "createdAt"],
  SongAuthor: ["authorId", "songId", "createdAt"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateSong: ["_count", "_min", "_max"],
  SongGroupBy: ["id", "title", "slug", "createdAt", "_count", "_min", "_max"],
  AggregateAuthor: ["_count", "_min", "_max"],
  AuthorGroupBy: ["id", "name", "slug", "createdAt", "_count", "_min", "_max"],
  AggregateSongAuthor: ["_count", "_min", "_max"],
  SongAuthorGroupBy: ["authorId", "songId", "createdAt", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  SongCount: ["authors"],
  SongCountAggregate: ["id", "title", "slug", "createdAt", "_all"],
  SongMinAggregate: ["id", "title", "slug", "createdAt"],
  SongMaxAggregate: ["id", "title", "slug", "createdAt"],
  AuthorCount: ["songs"],
  AuthorCountAggregate: ["id", "name", "slug", "createdAt", "_all"],
  AuthorMinAggregate: ["id", "name", "slug", "createdAt"],
  AuthorMaxAggregate: ["id", "name", "slug", "createdAt"],
  SongAuthorCountAggregate: ["authorId", "songId", "createdAt", "_all"],
  SongAuthorMinAggregate: ["authorId", "songId", "createdAt"],
  SongAuthorMaxAggregate: ["authorId", "songId", "createdAt"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  SongWhereInput: ["AND", "OR", "NOT", "id", "title", "slug", "createdAt", "authors"],
  SongOrderByWithRelationInput: ["id", "title", "slug", "createdAt", "authors"],
  SongWhereUniqueInput: ["id", "slug"],
  SongOrderByWithAggregationInput: ["id", "title", "slug", "createdAt", "_count", "_max", "_min"],
  SongScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "slug", "createdAt"],
  AuthorWhereInput: ["AND", "OR", "NOT", "id", "name", "slug", "createdAt", "songs"],
  AuthorOrderByWithRelationInput: ["id", "name", "slug", "createdAt", "songs"],
  AuthorWhereUniqueInput: ["id", "slug"],
  AuthorOrderByWithAggregationInput: ["id", "name", "slug", "createdAt", "_count", "_max", "_min"],
  AuthorScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "slug", "createdAt"],
  SongAuthorWhereInput: ["AND", "OR", "NOT", "authorId", "songId", "createdAt", "author", "song"],
  SongAuthorOrderByWithRelationInput: ["authorId", "songId", "createdAt", "author", "song"],
  SongAuthorWhereUniqueInput: ["songId_authorId"],
  SongAuthorOrderByWithAggregationInput: ["authorId", "songId", "createdAt", "_count", "_max", "_min"],
  SongAuthorScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "authorId", "songId", "createdAt"],
  SongCreateInput: ["id", "title", "slug", "createdAt", "authors"],
  SongUpdateInput: ["id", "title", "slug", "createdAt", "authors"],
  SongCreateManyInput: ["id", "title", "slug", "createdAt"],
  SongUpdateManyMutationInput: ["id", "title", "slug", "createdAt"],
  AuthorCreateInput: ["id", "name", "slug", "createdAt", "songs"],
  AuthorUpdateInput: ["id", "name", "slug", "createdAt", "songs"],
  AuthorCreateManyInput: ["id", "name", "slug", "createdAt"],
  AuthorUpdateManyMutationInput: ["id", "name", "slug", "createdAt"],
  SongAuthorCreateInput: ["createdAt", "author", "song"],
  SongAuthorUpdateInput: ["createdAt", "author", "song"],
  SongAuthorCreateManyInput: ["authorId", "songId", "createdAt"],
  SongAuthorUpdateManyMutationInput: ["createdAt"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  SongAuthorListRelationFilter: ["every", "some", "none"],
  SongAuthorOrderByRelationAggregateInput: ["_count"],
  SongCountOrderByAggregateInput: ["id", "title", "slug", "createdAt"],
  SongMaxOrderByAggregateInput: ["id", "title", "slug", "createdAt"],
  SongMinOrderByAggregateInput: ["id", "title", "slug", "createdAt"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  AuthorCountOrderByAggregateInput: ["id", "name", "slug", "createdAt"],
  AuthorMaxOrderByAggregateInput: ["id", "name", "slug", "createdAt"],
  AuthorMinOrderByAggregateInput: ["id", "name", "slug", "createdAt"],
  AuthorRelationFilter: ["is", "isNot"],
  SongRelationFilter: ["is", "isNot"],
  SongAuthorSongIdAuthorIdCompoundUniqueInput: ["songId", "authorId"],
  SongAuthorCountOrderByAggregateInput: ["authorId", "songId", "createdAt"],
  SongAuthorMaxOrderByAggregateInput: ["authorId", "songId", "createdAt"],
  SongAuthorMinOrderByAggregateInput: ["authorId", "songId", "createdAt"],
  SongAuthorCreateNestedManyWithoutSongInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  SongAuthorUpdateManyWithoutSongNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SongAuthorCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  SongAuthorUpdateManyWithoutAuthorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  AuthorCreateNestedOneWithoutSongsInput: ["create", "connectOrCreate", "connect"],
  SongCreateNestedOneWithoutAuthorsInput: ["create", "connectOrCreate", "connect"],
  AuthorUpdateOneRequiredWithoutSongsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  SongUpdateOneRequiredWithoutAuthorsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  SongAuthorCreateWithoutSongInput: ["createdAt", "author"],
  SongAuthorCreateOrConnectWithoutSongInput: ["where", "create"],
  SongAuthorCreateManySongInputEnvelope: ["data", "skipDuplicates"],
  SongAuthorUpsertWithWhereUniqueWithoutSongInput: ["where", "update", "create"],
  SongAuthorUpdateWithWhereUniqueWithoutSongInput: ["where", "data"],
  SongAuthorUpdateManyWithWhereWithoutSongInput: ["where", "data"],
  SongAuthorScalarWhereInput: ["AND", "OR", "NOT", "authorId", "songId", "createdAt"],
  SongAuthorCreateWithoutAuthorInput: ["createdAt", "song"],
  SongAuthorCreateOrConnectWithoutAuthorInput: ["where", "create"],
  SongAuthorCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  SongAuthorUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  SongAuthorUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  SongAuthorUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  AuthorCreateWithoutSongsInput: ["id", "name", "slug", "createdAt"],
  AuthorCreateOrConnectWithoutSongsInput: ["where", "create"],
  SongCreateWithoutAuthorsInput: ["id", "title", "slug", "createdAt"],
  SongCreateOrConnectWithoutAuthorsInput: ["where", "create"],
  AuthorUpsertWithoutSongsInput: ["update", "create"],
  AuthorUpdateWithoutSongsInput: ["id", "name", "slug", "createdAt"],
  SongUpsertWithoutAuthorsInput: ["update", "create"],
  SongUpdateWithoutAuthorsInput: ["id", "title", "slug", "createdAt"],
  SongAuthorCreateManySongInput: ["authorId", "createdAt"],
  SongAuthorUpdateWithoutSongInput: ["createdAt", "author"],
  SongAuthorCreateManyAuthorInput: ["songId", "createdAt"],
  SongAuthorUpdateWithoutAuthorInput: ["createdAt", "song"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

