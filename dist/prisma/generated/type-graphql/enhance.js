"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib = require("tslib");
const crudResolvers = require("./resolvers/crud/resolvers-crud.index");
const argsTypes = require("./resolvers/crud/args.index");
const actionResolvers = require("./resolvers/crud/resolvers-actions.index");
const relationResolvers = require("./resolvers/relations/resolvers.index");
const models = require("./models");
const outputTypes = require("./resolvers/outputs");
const inputTypes = require("./resolvers/inputs");
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
function applyResolversEnhanceMap(resolversEnhanceMap) {
    const mutationOperationPrefixes = [
        "createOne", "createMany", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
    ];
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        const allActionsDecorators = resolverActionsConfig._all;
        const resolverActionNames = crudResolversInfo[modelName];
        for (const resolverActionName of resolverActionNames) {
            const maybeDecoratorsOrFn = resolverActionsConfig[resolverActionName];
            const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
            const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
            const mainDecorators = [
                ...allActionsDecorators !== null && allActionsDecorators !== void 0 ? allActionsDecorators : [],
                ...operationKindDecorators !== null && operationKindDecorators !== void 0 ? operationKindDecorators : [],
            ];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(mainDecorators);
            }
            else {
                decorators = [...mainDecorators, ...maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : []];
            }
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
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
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    var _a;
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        const allActionsDecorators = (_a = relationResolverActionsConfig._all) !== null && _a !== void 0 ? _a : [];
        const relationResolverActionNames = relationResolversInfo[modelName];
        for (const relationResolverActionName of relationResolverActionNames) {
            const maybeDecoratorsOrFn = relationResolverActionsConfig[relationResolverActionName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allActionsDecorators);
            }
            else {
                decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : []];
            }
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    var _a;
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        const allFieldsDecorators = (_a = enhanceConfig.fields._all) !== null && _a !== void 0 ? _a : [];
        for (const typeFieldName of typeFieldNames) {
            const maybeDecoratorsOrFn = enhanceConfig.fields[typeFieldName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allFieldsDecorators);
            }
            else {
                decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : []];
            }
            tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    Song: ["id", "title", "slug", "url", "lyric", "createdAt"],
    Author: ["id", "name", "slug", "createdAt"],
    SongAuthor: ["authorId", "songId", "createdAt"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateSong: ["_count", "_min", "_max"],
    SongGroupBy: ["id", "title", "slug", "url", "lyric", "createdAt", "_count", "_min", "_max"],
    AggregateAuthor: ["_count", "_min", "_max"],
    AuthorGroupBy: ["id", "name", "slug", "createdAt", "_count", "_min", "_max"],
    AggregateSongAuthor: ["_count", "_min", "_max"],
    SongAuthorGroupBy: ["authorId", "songId", "createdAt", "_count", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    SongCount: ["authors"],
    SongCountAggregate: ["id", "title", "slug", "url", "lyric", "createdAt", "_all"],
    SongMinAggregate: ["id", "title", "slug", "url", "lyric", "createdAt"],
    SongMaxAggregate: ["id", "title", "slug", "url", "lyric", "createdAt"],
    AuthorCount: ["songs"],
    AuthorCountAggregate: ["id", "name", "slug", "createdAt", "_all"],
    AuthorMinAggregate: ["id", "name", "slug", "createdAt"],
    AuthorMaxAggregate: ["id", "name", "slug", "createdAt"],
    SongAuthorCountAggregate: ["authorId", "songId", "createdAt", "_all"],
    SongAuthorMinAggregate: ["authorId", "songId", "createdAt"],
    SongAuthorMaxAggregate: ["authorId", "songId", "createdAt"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    SongWhereInput: ["AND", "OR", "NOT", "id", "title", "slug", "url", "lyric", "createdAt", "authors"],
    SongOrderByWithRelationInput: ["id", "title", "slug", "url", "lyric", "createdAt", "authors"],
    SongWhereUniqueInput: ["id", "title", "slug"],
    SongOrderByWithAggregationInput: ["id", "title", "slug", "url", "lyric", "createdAt", "_count", "_max", "_min"],
    SongScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "slug", "url", "lyric", "createdAt"],
    AuthorWhereInput: ["AND", "OR", "NOT", "id", "name", "slug", "createdAt", "songs"],
    AuthorOrderByWithRelationInput: ["id", "name", "slug", "createdAt", "songs"],
    AuthorWhereUniqueInput: ["id", "name", "slug"],
    AuthorOrderByWithAggregationInput: ["id", "name", "slug", "createdAt", "_count", "_max", "_min"],
    AuthorScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "slug", "createdAt"],
    SongAuthorWhereInput: ["AND", "OR", "NOT", "authorId", "songId", "createdAt", "author", "song"],
    SongAuthorOrderByWithRelationInput: ["authorId", "songId", "createdAt", "author", "song"],
    SongAuthorWhereUniqueInput: ["songId_authorId"],
    SongAuthorOrderByWithAggregationInput: ["authorId", "songId", "createdAt", "_count", "_max", "_min"],
    SongAuthorScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "authorId", "songId", "createdAt"],
    SongCreateInput: ["id", "title", "slug", "url", "lyric", "createdAt", "authors"],
    SongUpdateInput: ["id", "title", "slug", "url", "lyric", "createdAt", "authors"],
    SongCreateManyInput: ["id", "title", "slug", "url", "lyric", "createdAt"],
    SongUpdateManyMutationInput: ["id", "title", "slug", "url", "lyric", "createdAt"],
    AuthorCreateInput: ["id", "name", "slug", "createdAt", "songs"],
    AuthorUpdateInput: ["id", "name", "slug", "createdAt", "songs"],
    AuthorCreateManyInput: ["id", "name", "slug", "createdAt"],
    AuthorUpdateManyMutationInput: ["id", "name", "slug", "createdAt"],
    SongAuthorCreateInput: ["createdAt", "author", "song"],
    SongAuthorUpdateInput: ["createdAt", "author", "song"],
    SongAuthorCreateManyInput: ["authorId", "songId", "createdAt"],
    SongAuthorUpdateManyMutationInput: ["createdAt"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    SongAuthorListRelationFilter: ["every", "some", "none"],
    SortOrderInput: ["sort", "nulls"],
    SongAuthorOrderByRelationAggregateInput: ["_count"],
    SongCountOrderByAggregateInput: ["id", "title", "slug", "url", "lyric", "createdAt"],
    SongMaxOrderByAggregateInput: ["id", "title", "slug", "url", "lyric", "createdAt"],
    SongMinOrderByAggregateInput: ["id", "title", "slug", "url", "lyric", "createdAt"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
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
    NullableStringFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    SongAuthorUpdateManyWithoutSongNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    SongAuthorCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
    SongAuthorUpdateManyWithoutAuthorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    AuthorCreateNestedOneWithoutSongsInput: ["create", "connectOrCreate", "connect"],
    SongCreateNestedOneWithoutAuthorsInput: ["create", "connectOrCreate", "connect"],
    AuthorUpdateOneRequiredWithoutSongsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    SongUpdateOneRequiredWithoutAuthorsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
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
    SongCreateWithoutAuthorsInput: ["id", "title", "slug", "url", "lyric", "createdAt"],
    SongCreateOrConnectWithoutAuthorsInput: ["where", "create"],
    AuthorUpsertWithoutSongsInput: ["update", "create"],
    AuthorUpdateWithoutSongsInput: ["id", "name", "slug", "createdAt"],
    SongUpsertWithoutAuthorsInput: ["update", "create"],
    SongUpdateWithoutAuthorsInput: ["id", "title", "slug", "url", "lyric", "createdAt"],
    SongAuthorCreateManySongInput: ["authorId", "createdAt"],
    SongAuthorUpdateWithoutSongInput: ["createdAt", "author"],
    SongAuthorCreateManyAuthorInput: ["songId", "createdAt"],
    SongAuthorUpdateWithoutAuthorInput: ["createdAt", "song"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
//# sourceMappingURL=enhance.js.map