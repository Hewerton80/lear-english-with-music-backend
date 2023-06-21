
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type SongPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    authors: SongAuthorPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    title: string
    /**
     * @TypeGraphQL.omit(input: ["update", "create"])
     */
    slug: string
    url: string
    lyric: string | null
    createdAt: Date
  }, ExtArgs["result"]["song"]>
  composites: {}
}

/**
 * Model Song
 * 
 */
export type Song = runtime.Types.DefaultSelection<SongPayload>
export type AuthorPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    songs: SongAuthorPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    name: string
    /**
     * @TypeGraphQL.omit(input: ["update", "create"])
     */
    slug: string
    createdAt: Date
  }, ExtArgs["result"]["author"]>
  composites: {}
}

/**
 * Model Author
 * 
 */
export type Author = runtime.Types.DefaultSelection<AuthorPayload>
export type SongAuthorPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    author: AuthorPayload<ExtArgs>
    song: SongPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    authorId: string
    songId: string
    createdAt: Date
  }, ExtArgs["result"]["songAuthor"]>
  composites: {}
}

/**
 * Model SongAuthor
 * 
 */
export type SongAuthor = runtime.Types.DefaultSelection<SongAuthorPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Songs
 * const songs = await prisma.song.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Songs
   * const songs = await prisma.song.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.song`: Exposes CRUD operations for the **Song** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Songs
    * const songs = await prisma.song.findMany()
    * ```
    */
  get song(): Prisma.SongDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.author`: Exposes CRUD operations for the **Author** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authors
    * const authors = await prisma.author.findMany()
    * ```
    */
  get author(): Prisma.AuthorDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.songAuthor`: Exposes CRUD operations for the **SongAuthor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SongAuthors
    * const songAuthors = await prisma.songAuthor.findMany()
    * ```
    */
  get songAuthor(): Prisma.SongAuthorDelegate<GlobalReject, ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 4.16.0
   * Query Engine version: b20ead4d3ab9e78ac112966e242ded703f4a052c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Song: 'Song',
    Author: 'Author',
    SongAuthor: 'SongAuthor'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
      meta: {
        modelProps: 'song' | 'author' | 'songAuthor'
        txIsolationLevel: Prisma.TransactionIsolationLevel
      },
      model: {
      Song: {
        findUnique: {
          args: Prisma.SongFindUniqueArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Song>
          payload: SongPayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.SongFindUniqueOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Song>
          payload: SongPayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.SongFindFirstArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Song>
          payload: SongPayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.SongFindFirstOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Song>
          payload: SongPayload<ExtArgs>
        }
        findMany: {
          args: Prisma.SongFindManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Song>
          payload: SongPayload<ExtArgs>
        }
        create: {
          args: Prisma.SongCreateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Song>
          payload: SongPayload<ExtArgs>
        }
        createMany: {
          args: Prisma.SongCreateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Song>
          payload: SongPayload<ExtArgs>
        }
        delete: {
          args: Prisma.SongDeleteArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Song>
          payload: SongPayload<ExtArgs>
        }
        update: {
          args: Prisma.SongUpdateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Song>
          payload: SongPayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.SongDeleteManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Song>
          payload: SongPayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.SongUpdateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Song>
          payload: SongPayload<ExtArgs>
        }
        upsert: {
          args: Prisma.SongUpsertArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Song>
          payload: SongPayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.SongAggregateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Song>
          payload: SongPayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.SongGroupByArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Song>
          payload: SongPayload<ExtArgs>
        }
        count: {
          args: Prisma.SongCountArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Song>
          payload: SongPayload<ExtArgs>
        }
      }
      Author: {
        findUnique: {
          args: Prisma.AuthorFindUniqueArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Author>
          payload: AuthorPayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.AuthorFindUniqueOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Author>
          payload: AuthorPayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.AuthorFindFirstArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Author>
          payload: AuthorPayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.AuthorFindFirstOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Author>
          payload: AuthorPayload<ExtArgs>
        }
        findMany: {
          args: Prisma.AuthorFindManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Author>
          payload: AuthorPayload<ExtArgs>
        }
        create: {
          args: Prisma.AuthorCreateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Author>
          payload: AuthorPayload<ExtArgs>
        }
        createMany: {
          args: Prisma.AuthorCreateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Author>
          payload: AuthorPayload<ExtArgs>
        }
        delete: {
          args: Prisma.AuthorDeleteArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Author>
          payload: AuthorPayload<ExtArgs>
        }
        update: {
          args: Prisma.AuthorUpdateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Author>
          payload: AuthorPayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.AuthorDeleteManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Author>
          payload: AuthorPayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.AuthorUpdateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Author>
          payload: AuthorPayload<ExtArgs>
        }
        upsert: {
          args: Prisma.AuthorUpsertArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Author>
          payload: AuthorPayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.AuthorAggregateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Author>
          payload: AuthorPayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.AuthorGroupByArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Author>
          payload: AuthorPayload<ExtArgs>
        }
        count: {
          args: Prisma.AuthorCountArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Author>
          payload: AuthorPayload<ExtArgs>
        }
      }
      SongAuthor: {
        findUnique: {
          args: Prisma.SongAuthorFindUniqueArgs<ExtArgs>,
          result: $Utils.OptionalFlat<SongAuthor>
          payload: SongAuthorPayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.SongAuthorFindUniqueOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<SongAuthor>
          payload: SongAuthorPayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.SongAuthorFindFirstArgs<ExtArgs>,
          result: $Utils.OptionalFlat<SongAuthor>
          payload: SongAuthorPayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.SongAuthorFindFirstOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<SongAuthor>
          payload: SongAuthorPayload<ExtArgs>
        }
        findMany: {
          args: Prisma.SongAuthorFindManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<SongAuthor>
          payload: SongAuthorPayload<ExtArgs>
        }
        create: {
          args: Prisma.SongAuthorCreateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<SongAuthor>
          payload: SongAuthorPayload<ExtArgs>
        }
        createMany: {
          args: Prisma.SongAuthorCreateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<SongAuthor>
          payload: SongAuthorPayload<ExtArgs>
        }
        delete: {
          args: Prisma.SongAuthorDeleteArgs<ExtArgs>,
          result: $Utils.OptionalFlat<SongAuthor>
          payload: SongAuthorPayload<ExtArgs>
        }
        update: {
          args: Prisma.SongAuthorUpdateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<SongAuthor>
          payload: SongAuthorPayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.SongAuthorDeleteManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<SongAuthor>
          payload: SongAuthorPayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.SongAuthorUpdateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<SongAuthor>
          payload: SongAuthorPayload<ExtArgs>
        }
        upsert: {
          args: Prisma.SongAuthorUpsertArgs<ExtArgs>,
          result: $Utils.OptionalFlat<SongAuthor>
          payload: SongAuthorPayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.SongAuthorAggregateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<SongAuthor>
          payload: SongAuthorPayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.SongAuthorGroupByArgs<ExtArgs>,
          result: $Utils.OptionalFlat<SongAuthor>
          payload: SongAuthorPayload<ExtArgs>
        }
        count: {
          args: Prisma.SongAuthorCountArgs<ExtArgs>,
          result: $Utils.OptionalFlat<SongAuthor>
          payload: SongAuthorPayload<ExtArgs>
        }
      }
    }
  } & {
    other: {
      $executeRawUnsafe: {
        args: [query: string, ...values: any[]],
        result: any
        payload: any
      }
      $executeRaw: {
        args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
        result: any
        payload: any
      }
      $queryRawUnsafe: {
        args: [query: string, ...values: any[]],
        result: any
        payload: any
      }
      $queryRaw: {
        args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
        result: any
        payload: any
      }
    }
  }
    export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SongCountOutputType
   */


  export type SongCountOutputType = {
    authors: number
  }

  export type SongCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    authors?: boolean | SongCountOutputTypeCountAuthorsArgs
  }

  // Custom InputTypes

  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongCountOutputType
     */
    select?: SongCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountAuthorsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SongAuthorWhereInput
  }



  /**
   * Count Type AuthorCountOutputType
   */


  export type AuthorCountOutputType = {
    songs: number
  }

  export type AuthorCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    songs?: boolean | AuthorCountOutputTypeCountSongsArgs
  }

  // Custom InputTypes

  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorCountOutputType
     */
    select?: AuthorCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeCountSongsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SongAuthorWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Song
   */


  export type AggregateSong = {
    _count: SongCountAggregateOutputType | null
    _min: SongMinAggregateOutputType | null
    _max: SongMaxAggregateOutputType | null
  }

  export type SongMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    url: string | null
    lyric: string | null
    createdAt: Date | null
  }

  export type SongMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    url: string | null
    lyric: string | null
    createdAt: Date | null
  }

  export type SongCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    url: number
    lyric: number
    createdAt: number
    _all: number
  }


  export type SongMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    url?: true
    lyric?: true
    createdAt?: true
  }

  export type SongMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    url?: true
    lyric?: true
    createdAt?: true
  }

  export type SongCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    url?: true
    lyric?: true
    createdAt?: true
    _all?: true
  }

  export type SongAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Song to aggregate.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: Enumerable<SongOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Songs
    **/
    _count?: true | SongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SongMaxAggregateInputType
  }

  export type GetSongAggregateType<T extends SongAggregateArgs> = {
        [P in keyof T & keyof AggregateSong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSong[P]>
      : GetScalarType<T[P], AggregateSong[P]>
  }




  export type SongGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
    orderBy?: Enumerable<SongOrderByWithAggregationInput>
    by: SongScalarFieldEnum[]
    having?: SongScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SongCountAggregateInputType | true
    _min?: SongMinAggregateInputType
    _max?: SongMaxAggregateInputType
  }


  export type SongGroupByOutputType = {
    id: string
    title: string
    slug: string
    url: string
    lyric: string | null
    createdAt: Date
    _count: SongCountAggregateOutputType | null
    _min: SongMinAggregateOutputType | null
    _max: SongMaxAggregateOutputType | null
  }

  type GetSongGroupByPayload<T extends SongGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SongGroupByOutputType[P]>
            : GetScalarType<T[P], SongGroupByOutputType[P]>
        }
      >
    >


  export type SongSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    url?: boolean
    lyric?: boolean
    createdAt?: boolean
    authors?: boolean | Song$authorsArgs<ExtArgs>
    _count?: boolean | SongCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["song"]>

  export type SongSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    url?: boolean
    lyric?: boolean
    createdAt?: boolean
  }

  export type SongInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    authors?: boolean | Song$authorsArgs<ExtArgs>
    _count?: boolean | SongCountOutputTypeArgs<ExtArgs>
  }


  type SongGetPayload<S extends boolean | null | undefined | SongArgs> = $Types.GetResult<SongPayload, S>

  type SongCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SongFindManyArgs, 'select' | 'include'> & {
      select?: SongCountAggregateInputType | true
    }

  export interface SongDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Song'], meta: { name: 'Song' } }
    /**
     * Find zero or one Song that matches the filter.
     * @param {SongFindUniqueArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SongFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SongFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Song'> extends True ? Prisma__SongClient<$Types.GetResult<SongPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__SongClient<$Types.GetResult<SongPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Song that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SongFindUniqueOrThrowArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SongFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SongFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SongClient<$Types.GetResult<SongPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Song that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindFirstArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SongFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SongFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Song'> extends True ? Prisma__SongClient<$Types.GetResult<SongPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__SongClient<$Types.GetResult<SongPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Song that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindFirstOrThrowArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SongFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SongFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SongClient<$Types.GetResult<SongPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Songs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Songs
     * const songs = await prisma.song.findMany()
     * 
     * // Get first 10 Songs
     * const songs = await prisma.song.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const songWithIdOnly = await prisma.song.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SongFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SongFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<SongPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Song.
     * @param {SongCreateArgs} args - Arguments to create a Song.
     * @example
     * // Create one Song
     * const Song = await prisma.song.create({
     *   data: {
     *     // ... data to create a Song
     *   }
     * })
     * 
    **/
    create<T extends SongCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SongCreateArgs<ExtArgs>>
    ): Prisma__SongClient<$Types.GetResult<SongPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Songs.
     *     @param {SongCreateManyArgs} args - Arguments to create many Songs.
     *     @example
     *     // Create many Songs
     *     const song = await prisma.song.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SongCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SongCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Song.
     * @param {SongDeleteArgs} args - Arguments to delete one Song.
     * @example
     * // Delete one Song
     * const Song = await prisma.song.delete({
     *   where: {
     *     // ... filter to delete one Song
     *   }
     * })
     * 
    **/
    delete<T extends SongDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SongDeleteArgs<ExtArgs>>
    ): Prisma__SongClient<$Types.GetResult<SongPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Song.
     * @param {SongUpdateArgs} args - Arguments to update one Song.
     * @example
     * // Update one Song
     * const song = await prisma.song.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SongUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SongUpdateArgs<ExtArgs>>
    ): Prisma__SongClient<$Types.GetResult<SongPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Songs.
     * @param {SongDeleteManyArgs} args - Arguments to filter Songs to delete.
     * @example
     * // Delete a few Songs
     * const { count } = await prisma.song.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SongDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SongDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Songs
     * const song = await prisma.song.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SongUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SongUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Song.
     * @param {SongUpsertArgs} args - Arguments to update or create a Song.
     * @example
     * // Update or create a Song
     * const song = await prisma.song.upsert({
     *   create: {
     *     // ... data to create a Song
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Song we want to update
     *   }
     * })
    **/
    upsert<T extends SongUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SongUpsertArgs<ExtArgs>>
    ): Prisma__SongClient<$Types.GetResult<SongPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongCountArgs} args - Arguments to filter Songs to count.
     * @example
     * // Count the number of Songs
     * const count = await prisma.song.count({
     *   where: {
     *     // ... the filter for the Songs we want to count
     *   }
     * })
    **/
    count<T extends SongCountArgs>(
      args?: Subset<T, SongCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Song.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SongAggregateArgs>(args: Subset<T, SongAggregateArgs>): Prisma.PrismaPromise<GetSongAggregateType<T>>

    /**
     * Group by Song.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SongGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SongGroupByArgs['orderBy'] }
        : { orderBy?: SongGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Song.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SongClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    authors<T extends Song$authorsArgs<ExtArgs> = {}>(args?: Subset<T, Song$authorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<SongAuthorPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Song base type for findUnique actions
   */
  export type SongFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where: SongWhereUniqueInput
  }

  /**
   * Song findUnique
   */
  export interface SongFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SongFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Song findUniqueOrThrow
   */
  export type SongFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where: SongWhereUniqueInput
  }


  /**
   * Song base type for findFirst actions
   */
  export type SongFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: Enumerable<SongOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Songs.
     */
    distinct?: Enumerable<SongScalarFieldEnum>
  }

  /**
   * Song findFirst
   */
  export interface SongFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SongFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Song findFirstOrThrow
   */
  export type SongFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: Enumerable<SongOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Songs.
     */
    distinct?: Enumerable<SongScalarFieldEnum>
  }


  /**
   * Song findMany
   */
  export type SongFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Songs to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: Enumerable<SongOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    distinct?: Enumerable<SongScalarFieldEnum>
  }


  /**
   * Song create
   */
  export type SongCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The data needed to create a Song.
     */
    data: XOR<SongCreateInput, SongUncheckedCreateInput>
  }


  /**
   * Song createMany
   */
  export type SongCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Songs.
     */
    data: Enumerable<SongCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Song update
   */
  export type SongUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The data needed to update a Song.
     */
    data: XOR<SongUpdateInput, SongUncheckedUpdateInput>
    /**
     * Choose, which Song to update.
     */
    where: SongWhereUniqueInput
  }


  /**
   * Song updateMany
   */
  export type SongUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Songs.
     */
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyInput>
    /**
     * Filter which Songs to update
     */
    where?: SongWhereInput
  }


  /**
   * Song upsert
   */
  export type SongUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The filter to search for the Song to update in case it exists.
     */
    where: SongWhereUniqueInput
    /**
     * In case the Song found by the `where` argument doesn't exist, create a new Song with this data.
     */
    create: XOR<SongCreateInput, SongUncheckedCreateInput>
    /**
     * In case the Song was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SongUpdateInput, SongUncheckedUpdateInput>
  }


  /**
   * Song delete
   */
  export type SongDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter which Song to delete.
     */
    where: SongWhereUniqueInput
  }


  /**
   * Song deleteMany
   */
  export type SongDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Songs to delete
     */
    where?: SongWhereInput
  }


  /**
   * Song.authors
   */
  export type Song$authorsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongAuthor
     */
    select?: SongAuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongAuthorInclude<ExtArgs> | null
    where?: SongAuthorWhereInput
    orderBy?: Enumerable<SongAuthorOrderByWithRelationInput>
    cursor?: SongAuthorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SongAuthorScalarFieldEnum>
  }


  /**
   * Song without action
   */
  export type SongArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
  }



  /**
   * Model Author
   */


  export type AggregateAuthor = {
    _count: AuthorCountAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  export type AuthorMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
  }

  export type AuthorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
  }

  export type AuthorCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    createdAt: number
    _all: number
  }


  export type AuthorMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
  }

  export type AuthorMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
  }

  export type AuthorCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    _all?: true
  }

  export type AuthorAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Author to aggregate.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: Enumerable<AuthorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Authors
    **/
    _count?: true | AuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorMaxAggregateInputType
  }

  export type GetAuthorAggregateType<T extends AuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthor[P]>
      : GetScalarType<T[P], AggregateAuthor[P]>
  }




  export type AuthorGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AuthorWhereInput
    orderBy?: Enumerable<AuthorOrderByWithAggregationInput>
    by: AuthorScalarFieldEnum[]
    having?: AuthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorCountAggregateInputType | true
    _min?: AuthorMinAggregateInputType
    _max?: AuthorMaxAggregateInputType
  }


  export type AuthorGroupByOutputType = {
    id: string
    name: string
    slug: string
    createdAt: Date
    _count: AuthorCountAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  type GetAuthorGroupByPayload<T extends AuthorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorGroupByOutputType[P]>
        }
      >
    >


  export type AuthorSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    songs?: boolean | Author$songsArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
  }

  export type AuthorInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    songs?: boolean | Author$songsArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeArgs<ExtArgs>
  }


  type AuthorGetPayload<S extends boolean | null | undefined | AuthorArgs> = $Types.GetResult<AuthorPayload, S>

  type AuthorCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AuthorFindManyArgs, 'select' | 'include'> & {
      select?: AuthorCountAggregateInputType | true
    }

  export interface AuthorDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Author'], meta: { name: 'Author' } }
    /**
     * Find zero or one Author that matches the filter.
     * @param {AuthorFindUniqueArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AuthorFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AuthorFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Author'> extends True ? Prisma__AuthorClient<$Types.GetResult<AuthorPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__AuthorClient<$Types.GetResult<AuthorPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Author that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AuthorFindUniqueOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AuthorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AuthorClient<$Types.GetResult<AuthorPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Author that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AuthorFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AuthorFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Author'> extends True ? Prisma__AuthorClient<$Types.GetResult<AuthorPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__AuthorClient<$Types.GetResult<AuthorPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Author that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AuthorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AuthorClient<$Types.GetResult<AuthorPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.author.findMany()
     * 
     * // Get first 10 Authors
     * const authors = await prisma.author.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorWithIdOnly = await prisma.author.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AuthorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<AuthorPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Author.
     * @param {AuthorCreateArgs} args - Arguments to create a Author.
     * @example
     * // Create one Author
     * const Author = await prisma.author.create({
     *   data: {
     *     // ... data to create a Author
     *   }
     * })
     * 
    **/
    create<T extends AuthorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AuthorCreateArgs<ExtArgs>>
    ): Prisma__AuthorClient<$Types.GetResult<AuthorPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Authors.
     *     @param {AuthorCreateManyArgs} args - Arguments to create many Authors.
     *     @example
     *     // Create many Authors
     *     const author = await prisma.author.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AuthorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Author.
     * @param {AuthorDeleteArgs} args - Arguments to delete one Author.
     * @example
     * // Delete one Author
     * const Author = await prisma.author.delete({
     *   where: {
     *     // ... filter to delete one Author
     *   }
     * })
     * 
    **/
    delete<T extends AuthorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AuthorDeleteArgs<ExtArgs>>
    ): Prisma__AuthorClient<$Types.GetResult<AuthorPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Author.
     * @param {AuthorUpdateArgs} args - Arguments to update one Author.
     * @example
     * // Update one Author
     * const author = await prisma.author.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AuthorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AuthorUpdateArgs<ExtArgs>>
    ): Prisma__AuthorClient<$Types.GetResult<AuthorPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Authors.
     * @param {AuthorDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.author.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AuthorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AuthorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AuthorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Author.
     * @param {AuthorUpsertArgs} args - Arguments to update or create a Author.
     * @example
     * // Update or create a Author
     * const author = await prisma.author.upsert({
     *   create: {
     *     // ... data to create a Author
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Author we want to update
     *   }
     * })
    **/
    upsert<T extends AuthorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AuthorUpsertArgs<ExtArgs>>
    ): Prisma__AuthorClient<$Types.GetResult<AuthorPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.author.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
    **/
    count<T extends AuthorCountArgs>(
      args?: Subset<T, AuthorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthorAggregateArgs>(args: Subset<T, AuthorAggregateArgs>): Prisma.PrismaPromise<GetAuthorAggregateType<T>>

    /**
     * Group by Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorGroupByArgs['orderBy'] }
        : { orderBy?: AuthorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Author.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AuthorClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    songs<T extends Author$songsArgs<ExtArgs> = {}>(args?: Subset<T, Author$songsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<SongAuthorPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Author base type for findUnique actions
   */
  export type AuthorFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author findUnique
   */
  export interface AuthorFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends AuthorFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Author findUniqueOrThrow
   */
  export type AuthorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput
  }


  /**
   * Author base type for findFirst actions
   */
  export type AuthorFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: Enumerable<AuthorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: Enumerable<AuthorScalarFieldEnum>
  }

  /**
   * Author findFirst
   */
  export interface AuthorFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends AuthorFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Author findFirstOrThrow
   */
  export type AuthorFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: Enumerable<AuthorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: Enumerable<AuthorScalarFieldEnum>
  }


  /**
   * Author findMany
   */
  export type AuthorFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Authors to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: Enumerable<AuthorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    distinct?: Enumerable<AuthorScalarFieldEnum>
  }


  /**
   * Author create
   */
  export type AuthorCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The data needed to create a Author.
     */
    data: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
  }


  /**
   * Author createMany
   */
  export type AuthorCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Authors.
     */
    data: Enumerable<AuthorCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Author update
   */
  export type AuthorUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The data needed to update a Author.
     */
    data: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
    /**
     * Choose, which Author to update.
     */
    where: AuthorWhereUniqueInput
  }


  /**
   * Author updateMany
   */
  export type AuthorUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     */
    where?: AuthorWhereInput
  }


  /**
   * Author upsert
   */
  export type AuthorUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The filter to search for the Author to update in case it exists.
     */
    where: AuthorWhereUniqueInput
    /**
     * In case the Author found by the `where` argument doesn't exist, create a new Author with this data.
     */
    create: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
    /**
     * In case the Author was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
  }


  /**
   * Author delete
   */
  export type AuthorDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter which Author to delete.
     */
    where: AuthorWhereUniqueInput
  }


  /**
   * Author deleteMany
   */
  export type AuthorDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authors to delete
     */
    where?: AuthorWhereInput
  }


  /**
   * Author.songs
   */
  export type Author$songsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongAuthor
     */
    select?: SongAuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongAuthorInclude<ExtArgs> | null
    where?: SongAuthorWhereInput
    orderBy?: Enumerable<SongAuthorOrderByWithRelationInput>
    cursor?: SongAuthorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SongAuthorScalarFieldEnum>
  }


  /**
   * Author without action
   */
  export type AuthorArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorInclude<ExtArgs> | null
  }



  /**
   * Model SongAuthor
   */


  export type AggregateSongAuthor = {
    _count: SongAuthorCountAggregateOutputType | null
    _min: SongAuthorMinAggregateOutputType | null
    _max: SongAuthorMaxAggregateOutputType | null
  }

  export type SongAuthorMinAggregateOutputType = {
    authorId: string | null
    songId: string | null
    createdAt: Date | null
  }

  export type SongAuthorMaxAggregateOutputType = {
    authorId: string | null
    songId: string | null
    createdAt: Date | null
  }

  export type SongAuthorCountAggregateOutputType = {
    authorId: number
    songId: number
    createdAt: number
    _all: number
  }


  export type SongAuthorMinAggregateInputType = {
    authorId?: true
    songId?: true
    createdAt?: true
  }

  export type SongAuthorMaxAggregateInputType = {
    authorId?: true
    songId?: true
    createdAt?: true
  }

  export type SongAuthorCountAggregateInputType = {
    authorId?: true
    songId?: true
    createdAt?: true
    _all?: true
  }

  export type SongAuthorAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SongAuthor to aggregate.
     */
    where?: SongAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongAuthors to fetch.
     */
    orderBy?: Enumerable<SongAuthorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SongAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongAuthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SongAuthors
    **/
    _count?: true | SongAuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SongAuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SongAuthorMaxAggregateInputType
  }

  export type GetSongAuthorAggregateType<T extends SongAuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateSongAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSongAuthor[P]>
      : GetScalarType<T[P], AggregateSongAuthor[P]>
  }




  export type SongAuthorGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SongAuthorWhereInput
    orderBy?: Enumerable<SongAuthorOrderByWithAggregationInput>
    by: SongAuthorScalarFieldEnum[]
    having?: SongAuthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SongAuthorCountAggregateInputType | true
    _min?: SongAuthorMinAggregateInputType
    _max?: SongAuthorMaxAggregateInputType
  }


  export type SongAuthorGroupByOutputType = {
    authorId: string
    songId: string
    createdAt: Date
    _count: SongAuthorCountAggregateOutputType | null
    _min: SongAuthorMinAggregateOutputType | null
    _max: SongAuthorMaxAggregateOutputType | null
  }

  type GetSongAuthorGroupByPayload<T extends SongAuthorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SongAuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SongAuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SongAuthorGroupByOutputType[P]>
            : GetScalarType<T[P], SongAuthorGroupByOutputType[P]>
        }
      >
    >


  export type SongAuthorSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    authorId?: boolean
    songId?: boolean
    createdAt?: boolean
    author?: boolean | AuthorArgs<ExtArgs>
    song?: boolean | SongArgs<ExtArgs>
  }, ExtArgs["result"]["songAuthor"]>

  export type SongAuthorSelectScalar = {
    authorId?: boolean
    songId?: boolean
    createdAt?: boolean
  }

  export type SongAuthorInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    author?: boolean | AuthorArgs<ExtArgs>
    song?: boolean | SongArgs<ExtArgs>
  }


  type SongAuthorGetPayload<S extends boolean | null | undefined | SongAuthorArgs> = $Types.GetResult<SongAuthorPayload, S>

  type SongAuthorCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SongAuthorFindManyArgs, 'select' | 'include'> & {
      select?: SongAuthorCountAggregateInputType | true
    }

  export interface SongAuthorDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SongAuthor'], meta: { name: 'SongAuthor' } }
    /**
     * Find zero or one SongAuthor that matches the filter.
     * @param {SongAuthorFindUniqueArgs} args - Arguments to find a SongAuthor
     * @example
     * // Get one SongAuthor
     * const songAuthor = await prisma.songAuthor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SongAuthorFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SongAuthorFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SongAuthor'> extends True ? Prisma__SongAuthorClient<$Types.GetResult<SongAuthorPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__SongAuthorClient<$Types.GetResult<SongAuthorPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one SongAuthor that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SongAuthorFindUniqueOrThrowArgs} args - Arguments to find a SongAuthor
     * @example
     * // Get one SongAuthor
     * const songAuthor = await prisma.songAuthor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SongAuthorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SongAuthorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SongAuthorClient<$Types.GetResult<SongAuthorPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first SongAuthor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongAuthorFindFirstArgs} args - Arguments to find a SongAuthor
     * @example
     * // Get one SongAuthor
     * const songAuthor = await prisma.songAuthor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SongAuthorFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SongAuthorFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SongAuthor'> extends True ? Prisma__SongAuthorClient<$Types.GetResult<SongAuthorPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__SongAuthorClient<$Types.GetResult<SongAuthorPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first SongAuthor that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongAuthorFindFirstOrThrowArgs} args - Arguments to find a SongAuthor
     * @example
     * // Get one SongAuthor
     * const songAuthor = await prisma.songAuthor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SongAuthorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SongAuthorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SongAuthorClient<$Types.GetResult<SongAuthorPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more SongAuthors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongAuthorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SongAuthors
     * const songAuthors = await prisma.songAuthor.findMany()
     * 
     * // Get first 10 SongAuthors
     * const songAuthors = await prisma.songAuthor.findMany({ take: 10 })
     * 
     * // Only select the `authorId`
     * const songAuthorWithAuthorIdOnly = await prisma.songAuthor.findMany({ select: { authorId: true } })
     * 
    **/
    findMany<T extends SongAuthorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SongAuthorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<SongAuthorPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a SongAuthor.
     * @param {SongAuthorCreateArgs} args - Arguments to create a SongAuthor.
     * @example
     * // Create one SongAuthor
     * const SongAuthor = await prisma.songAuthor.create({
     *   data: {
     *     // ... data to create a SongAuthor
     *   }
     * })
     * 
    **/
    create<T extends SongAuthorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SongAuthorCreateArgs<ExtArgs>>
    ): Prisma__SongAuthorClient<$Types.GetResult<SongAuthorPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many SongAuthors.
     *     @param {SongAuthorCreateManyArgs} args - Arguments to create many SongAuthors.
     *     @example
     *     // Create many SongAuthors
     *     const songAuthor = await prisma.songAuthor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SongAuthorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SongAuthorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SongAuthor.
     * @param {SongAuthorDeleteArgs} args - Arguments to delete one SongAuthor.
     * @example
     * // Delete one SongAuthor
     * const SongAuthor = await prisma.songAuthor.delete({
     *   where: {
     *     // ... filter to delete one SongAuthor
     *   }
     * })
     * 
    **/
    delete<T extends SongAuthorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SongAuthorDeleteArgs<ExtArgs>>
    ): Prisma__SongAuthorClient<$Types.GetResult<SongAuthorPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one SongAuthor.
     * @param {SongAuthorUpdateArgs} args - Arguments to update one SongAuthor.
     * @example
     * // Update one SongAuthor
     * const songAuthor = await prisma.songAuthor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SongAuthorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SongAuthorUpdateArgs<ExtArgs>>
    ): Prisma__SongAuthorClient<$Types.GetResult<SongAuthorPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more SongAuthors.
     * @param {SongAuthorDeleteManyArgs} args - Arguments to filter SongAuthors to delete.
     * @example
     * // Delete a few SongAuthors
     * const { count } = await prisma.songAuthor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SongAuthorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SongAuthorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SongAuthors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongAuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SongAuthors
     * const songAuthor = await prisma.songAuthor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SongAuthorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SongAuthorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SongAuthor.
     * @param {SongAuthorUpsertArgs} args - Arguments to update or create a SongAuthor.
     * @example
     * // Update or create a SongAuthor
     * const songAuthor = await prisma.songAuthor.upsert({
     *   create: {
     *     // ... data to create a SongAuthor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SongAuthor we want to update
     *   }
     * })
    **/
    upsert<T extends SongAuthorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SongAuthorUpsertArgs<ExtArgs>>
    ): Prisma__SongAuthorClient<$Types.GetResult<SongAuthorPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of SongAuthors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongAuthorCountArgs} args - Arguments to filter SongAuthors to count.
     * @example
     * // Count the number of SongAuthors
     * const count = await prisma.songAuthor.count({
     *   where: {
     *     // ... the filter for the SongAuthors we want to count
     *   }
     * })
    **/
    count<T extends SongAuthorCountArgs>(
      args?: Subset<T, SongAuthorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SongAuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SongAuthor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongAuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SongAuthorAggregateArgs>(args: Subset<T, SongAuthorAggregateArgs>): Prisma.PrismaPromise<GetSongAuthorAggregateType<T>>

    /**
     * Group by SongAuthor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongAuthorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SongAuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SongAuthorGroupByArgs['orderBy'] }
        : { orderBy?: SongAuthorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SongAuthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSongAuthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for SongAuthor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SongAuthorClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    author<T extends AuthorArgs<ExtArgs> = {}>(args?: Subset<T, AuthorArgs<ExtArgs>>): Prisma__AuthorClient<$Types.GetResult<AuthorPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    song<T extends SongArgs<ExtArgs> = {}>(args?: Subset<T, SongArgs<ExtArgs>>): Prisma__SongClient<$Types.GetResult<SongPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * SongAuthor base type for findUnique actions
   */
  export type SongAuthorFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongAuthor
     */
    select?: SongAuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongAuthorInclude<ExtArgs> | null
    /**
     * Filter, which SongAuthor to fetch.
     */
    where: SongAuthorWhereUniqueInput
  }

  /**
   * SongAuthor findUnique
   */
  export interface SongAuthorFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SongAuthorFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SongAuthor findUniqueOrThrow
   */
  export type SongAuthorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongAuthor
     */
    select?: SongAuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongAuthorInclude<ExtArgs> | null
    /**
     * Filter, which SongAuthor to fetch.
     */
    where: SongAuthorWhereUniqueInput
  }


  /**
   * SongAuthor base type for findFirst actions
   */
  export type SongAuthorFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongAuthor
     */
    select?: SongAuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongAuthorInclude<ExtArgs> | null
    /**
     * Filter, which SongAuthor to fetch.
     */
    where?: SongAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongAuthors to fetch.
     */
    orderBy?: Enumerable<SongAuthorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SongAuthors.
     */
    cursor?: SongAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongAuthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SongAuthors.
     */
    distinct?: Enumerable<SongAuthorScalarFieldEnum>
  }

  /**
   * SongAuthor findFirst
   */
  export interface SongAuthorFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SongAuthorFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SongAuthor findFirstOrThrow
   */
  export type SongAuthorFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongAuthor
     */
    select?: SongAuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongAuthorInclude<ExtArgs> | null
    /**
     * Filter, which SongAuthor to fetch.
     */
    where?: SongAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongAuthors to fetch.
     */
    orderBy?: Enumerable<SongAuthorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SongAuthors.
     */
    cursor?: SongAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongAuthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SongAuthors.
     */
    distinct?: Enumerable<SongAuthorScalarFieldEnum>
  }


  /**
   * SongAuthor findMany
   */
  export type SongAuthorFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongAuthor
     */
    select?: SongAuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongAuthorInclude<ExtArgs> | null
    /**
     * Filter, which SongAuthors to fetch.
     */
    where?: SongAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongAuthors to fetch.
     */
    orderBy?: Enumerable<SongAuthorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SongAuthors.
     */
    cursor?: SongAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongAuthors.
     */
    skip?: number
    distinct?: Enumerable<SongAuthorScalarFieldEnum>
  }


  /**
   * SongAuthor create
   */
  export type SongAuthorCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongAuthor
     */
    select?: SongAuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongAuthorInclude<ExtArgs> | null
    /**
     * The data needed to create a SongAuthor.
     */
    data: XOR<SongAuthorCreateInput, SongAuthorUncheckedCreateInput>
  }


  /**
   * SongAuthor createMany
   */
  export type SongAuthorCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SongAuthors.
     */
    data: Enumerable<SongAuthorCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SongAuthor update
   */
  export type SongAuthorUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongAuthor
     */
    select?: SongAuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongAuthorInclude<ExtArgs> | null
    /**
     * The data needed to update a SongAuthor.
     */
    data: XOR<SongAuthorUpdateInput, SongAuthorUncheckedUpdateInput>
    /**
     * Choose, which SongAuthor to update.
     */
    where: SongAuthorWhereUniqueInput
  }


  /**
   * SongAuthor updateMany
   */
  export type SongAuthorUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SongAuthors.
     */
    data: XOR<SongAuthorUpdateManyMutationInput, SongAuthorUncheckedUpdateManyInput>
    /**
     * Filter which SongAuthors to update
     */
    where?: SongAuthorWhereInput
  }


  /**
   * SongAuthor upsert
   */
  export type SongAuthorUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongAuthor
     */
    select?: SongAuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongAuthorInclude<ExtArgs> | null
    /**
     * The filter to search for the SongAuthor to update in case it exists.
     */
    where: SongAuthorWhereUniqueInput
    /**
     * In case the SongAuthor found by the `where` argument doesn't exist, create a new SongAuthor with this data.
     */
    create: XOR<SongAuthorCreateInput, SongAuthorUncheckedCreateInput>
    /**
     * In case the SongAuthor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SongAuthorUpdateInput, SongAuthorUncheckedUpdateInput>
  }


  /**
   * SongAuthor delete
   */
  export type SongAuthorDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongAuthor
     */
    select?: SongAuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongAuthorInclude<ExtArgs> | null
    /**
     * Filter which SongAuthor to delete.
     */
    where: SongAuthorWhereUniqueInput
  }


  /**
   * SongAuthor deleteMany
   */
  export type SongAuthorDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SongAuthors to delete
     */
    where?: SongAuthorWhereInput
  }


  /**
   * SongAuthor without action
   */
  export type SongAuthorArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongAuthor
     */
    select?: SongAuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongAuthorInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SongScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    url: 'url',
    lyric: 'lyric',
    createdAt: 'createdAt'
  };

  export type SongScalarFieldEnum = (typeof SongScalarFieldEnum)[keyof typeof SongScalarFieldEnum]


  export const AuthorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt'
  };

  export type AuthorScalarFieldEnum = (typeof AuthorScalarFieldEnum)[keyof typeof AuthorScalarFieldEnum]


  export const SongAuthorScalarFieldEnum: {
    authorId: 'authorId',
    songId: 'songId',
    createdAt: 'createdAt'
  };

  export type SongAuthorScalarFieldEnum = (typeof SongAuthorScalarFieldEnum)[keyof typeof SongAuthorScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Deep Input Types
   */


  export type SongWhereInput = {
    AND?: Enumerable<SongWhereInput>
    OR?: Enumerable<SongWhereInput>
    NOT?: Enumerable<SongWhereInput>
    id?: StringFilter | string
    title?: StringFilter | string
    slug?: StringFilter | string
    url?: StringFilter | string
    lyric?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    authors?: SongAuthorListRelationFilter
  }

  export type SongOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    url?: SortOrder
    lyric?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    authors?: SongAuthorOrderByRelationAggregateInput
  }

  export type SongWhereUniqueInput = {
    id?: string
    title?: string
    slug?: string
  }

  export type SongOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    url?: SortOrder
    lyric?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SongCountOrderByAggregateInput
    _max?: SongMaxOrderByAggregateInput
    _min?: SongMinOrderByAggregateInput
  }

  export type SongScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SongScalarWhereWithAggregatesInput>
    OR?: Enumerable<SongScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SongScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    slug?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
    lyric?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type AuthorWhereInput = {
    AND?: Enumerable<AuthorWhereInput>
    OR?: Enumerable<AuthorWhereInput>
    NOT?: Enumerable<AuthorWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    slug?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    songs?: SongAuthorListRelationFilter
  }

  export type AuthorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    songs?: SongAuthorOrderByRelationAggregateInput
  }

  export type AuthorWhereUniqueInput = {
    id?: string
    name?: string
    slug?: string
  }

  export type AuthorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    _count?: AuthorCountOrderByAggregateInput
    _max?: AuthorMaxOrderByAggregateInput
    _min?: AuthorMinOrderByAggregateInput
  }

  export type AuthorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AuthorScalarWhereWithAggregatesInput>
    OR?: Enumerable<AuthorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AuthorScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    slug?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type SongAuthorWhereInput = {
    AND?: Enumerable<SongAuthorWhereInput>
    OR?: Enumerable<SongAuthorWhereInput>
    NOT?: Enumerable<SongAuthorWhereInput>
    authorId?: StringFilter | string
    songId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    author?: XOR<AuthorRelationFilter, AuthorWhereInput>
    song?: XOR<SongRelationFilter, SongWhereInput>
  }

  export type SongAuthorOrderByWithRelationInput = {
    authorId?: SortOrder
    songId?: SortOrder
    createdAt?: SortOrder
    author?: AuthorOrderByWithRelationInput
    song?: SongOrderByWithRelationInput
  }

  export type SongAuthorWhereUniqueInput = {
    songId_authorId?: SongAuthorSongIdAuthorIdCompoundUniqueInput
  }

  export type SongAuthorOrderByWithAggregationInput = {
    authorId?: SortOrder
    songId?: SortOrder
    createdAt?: SortOrder
    _count?: SongAuthorCountOrderByAggregateInput
    _max?: SongAuthorMaxOrderByAggregateInput
    _min?: SongAuthorMinOrderByAggregateInput
  }

  export type SongAuthorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SongAuthorScalarWhereWithAggregatesInput>
    OR?: Enumerable<SongAuthorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SongAuthorScalarWhereWithAggregatesInput>
    authorId?: StringWithAggregatesFilter | string
    songId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type SongCreateInput = {
    id?: string
    title: string
    slug: string
    url: string
    lyric?: string | null
    createdAt?: Date | string
    authors?: SongAuthorCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    url: string
    lyric?: string | null
    createdAt?: Date | string
    authors?: SongAuthorUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    lyric?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authors?: SongAuthorUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    lyric?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authors?: SongAuthorUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongCreateManyInput = {
    id?: string
    title: string
    slug: string
    url: string
    lyric?: string | null
    createdAt?: Date | string
  }

  export type SongUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    lyric?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    lyric?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    songs?: SongAuthorCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    songs?: SongAuthorUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongAuthorUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongAuthorUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorCreateManyInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
  }

  export type AuthorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongAuthorCreateInput = {
    createdAt?: Date | string
    author: AuthorCreateNestedOneWithoutSongsInput
    song: SongCreateNestedOneWithoutAuthorsInput
  }

  export type SongAuthorUncheckedCreateInput = {
    authorId: string
    songId: string
    createdAt?: Date | string
  }

  export type SongAuthorUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: AuthorUpdateOneRequiredWithoutSongsNestedInput
    song?: SongUpdateOneRequiredWithoutAuthorsNestedInput
  }

  export type SongAuthorUncheckedUpdateInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongAuthorCreateManyInput = {
    authorId: string
    songId: string
    createdAt?: Date | string
  }

  export type SongAuthorUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongAuthorUncheckedUpdateManyInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type SongAuthorListRelationFilter = {
    every?: SongAuthorWhereInput
    some?: SongAuthorWhereInput
    none?: SongAuthorWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SongAuthorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SongCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    url?: SortOrder
    lyric?: SortOrder
    createdAt?: SortOrder
  }

  export type SongMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    url?: SortOrder
    lyric?: SortOrder
    createdAt?: SortOrder
  }

  export type SongMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    url?: SortOrder
    lyric?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type AuthorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
  }

  export type AuthorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
  }

  export type AuthorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
  }

  export type AuthorRelationFilter = {
    is?: AuthorWhereInput | null
    isNot?: AuthorWhereInput | null
  }

  export type SongRelationFilter = {
    is?: SongWhereInput | null
    isNot?: SongWhereInput | null
  }

  export type SongAuthorSongIdAuthorIdCompoundUniqueInput = {
    songId: string
    authorId: string
  }

  export type SongAuthorCountOrderByAggregateInput = {
    authorId?: SortOrder
    songId?: SortOrder
    createdAt?: SortOrder
  }

  export type SongAuthorMaxOrderByAggregateInput = {
    authorId?: SortOrder
    songId?: SortOrder
    createdAt?: SortOrder
  }

  export type SongAuthorMinOrderByAggregateInput = {
    authorId?: SortOrder
    songId?: SortOrder
    createdAt?: SortOrder
  }

  export type SongAuthorCreateNestedManyWithoutSongInput = {
    create?: XOR<Enumerable<SongAuthorCreateWithoutSongInput>, Enumerable<SongAuthorUncheckedCreateWithoutSongInput>>
    connectOrCreate?: Enumerable<SongAuthorCreateOrConnectWithoutSongInput>
    createMany?: SongAuthorCreateManySongInputEnvelope
    connect?: Enumerable<SongAuthorWhereUniqueInput>
  }

  export type SongAuthorUncheckedCreateNestedManyWithoutSongInput = {
    create?: XOR<Enumerable<SongAuthorCreateWithoutSongInput>, Enumerable<SongAuthorUncheckedCreateWithoutSongInput>>
    connectOrCreate?: Enumerable<SongAuthorCreateOrConnectWithoutSongInput>
    createMany?: SongAuthorCreateManySongInputEnvelope
    connect?: Enumerable<SongAuthorWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SongAuthorUpdateManyWithoutSongNestedInput = {
    create?: XOR<Enumerable<SongAuthorCreateWithoutSongInput>, Enumerable<SongAuthorUncheckedCreateWithoutSongInput>>
    connectOrCreate?: Enumerable<SongAuthorCreateOrConnectWithoutSongInput>
    upsert?: Enumerable<SongAuthorUpsertWithWhereUniqueWithoutSongInput>
    createMany?: SongAuthorCreateManySongInputEnvelope
    set?: Enumerable<SongAuthorWhereUniqueInput>
    disconnect?: Enumerable<SongAuthorWhereUniqueInput>
    delete?: Enumerable<SongAuthorWhereUniqueInput>
    connect?: Enumerable<SongAuthorWhereUniqueInput>
    update?: Enumerable<SongAuthorUpdateWithWhereUniqueWithoutSongInput>
    updateMany?: Enumerable<SongAuthorUpdateManyWithWhereWithoutSongInput>
    deleteMany?: Enumerable<SongAuthorScalarWhereInput>
  }

  export type SongAuthorUncheckedUpdateManyWithoutSongNestedInput = {
    create?: XOR<Enumerable<SongAuthorCreateWithoutSongInput>, Enumerable<SongAuthorUncheckedCreateWithoutSongInput>>
    connectOrCreate?: Enumerable<SongAuthorCreateOrConnectWithoutSongInput>
    upsert?: Enumerable<SongAuthorUpsertWithWhereUniqueWithoutSongInput>
    createMany?: SongAuthorCreateManySongInputEnvelope
    set?: Enumerable<SongAuthorWhereUniqueInput>
    disconnect?: Enumerable<SongAuthorWhereUniqueInput>
    delete?: Enumerable<SongAuthorWhereUniqueInput>
    connect?: Enumerable<SongAuthorWhereUniqueInput>
    update?: Enumerable<SongAuthorUpdateWithWhereUniqueWithoutSongInput>
    updateMany?: Enumerable<SongAuthorUpdateManyWithWhereWithoutSongInput>
    deleteMany?: Enumerable<SongAuthorScalarWhereInput>
  }

  export type SongAuthorCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<SongAuthorCreateWithoutAuthorInput>, Enumerable<SongAuthorUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<SongAuthorCreateOrConnectWithoutAuthorInput>
    createMany?: SongAuthorCreateManyAuthorInputEnvelope
    connect?: Enumerable<SongAuthorWhereUniqueInput>
  }

  export type SongAuthorUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<SongAuthorCreateWithoutAuthorInput>, Enumerable<SongAuthorUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<SongAuthorCreateOrConnectWithoutAuthorInput>
    createMany?: SongAuthorCreateManyAuthorInputEnvelope
    connect?: Enumerable<SongAuthorWhereUniqueInput>
  }

  export type SongAuthorUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<SongAuthorCreateWithoutAuthorInput>, Enumerable<SongAuthorUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<SongAuthorCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<SongAuthorUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: SongAuthorCreateManyAuthorInputEnvelope
    set?: Enumerable<SongAuthorWhereUniqueInput>
    disconnect?: Enumerable<SongAuthorWhereUniqueInput>
    delete?: Enumerable<SongAuthorWhereUniqueInput>
    connect?: Enumerable<SongAuthorWhereUniqueInput>
    update?: Enumerable<SongAuthorUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<SongAuthorUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<SongAuthorScalarWhereInput>
  }

  export type SongAuthorUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<SongAuthorCreateWithoutAuthorInput>, Enumerable<SongAuthorUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<SongAuthorCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<SongAuthorUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: SongAuthorCreateManyAuthorInputEnvelope
    set?: Enumerable<SongAuthorWhereUniqueInput>
    disconnect?: Enumerable<SongAuthorWhereUniqueInput>
    delete?: Enumerable<SongAuthorWhereUniqueInput>
    connect?: Enumerable<SongAuthorWhereUniqueInput>
    update?: Enumerable<SongAuthorUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<SongAuthorUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<SongAuthorScalarWhereInput>
  }

  export type AuthorCreateNestedOneWithoutSongsInput = {
    create?: XOR<AuthorCreateWithoutSongsInput, AuthorUncheckedCreateWithoutSongsInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutSongsInput
    connect?: AuthorWhereUniqueInput
  }

  export type SongCreateNestedOneWithoutAuthorsInput = {
    create?: XOR<SongCreateWithoutAuthorsInput, SongUncheckedCreateWithoutAuthorsInput>
    connectOrCreate?: SongCreateOrConnectWithoutAuthorsInput
    connect?: SongWhereUniqueInput
  }

  export type AuthorUpdateOneRequiredWithoutSongsNestedInput = {
    create?: XOR<AuthorCreateWithoutSongsInput, AuthorUncheckedCreateWithoutSongsInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutSongsInput
    upsert?: AuthorUpsertWithoutSongsInput
    connect?: AuthorWhereUniqueInput
    update?: XOR<AuthorUpdateWithoutSongsInput, AuthorUncheckedUpdateWithoutSongsInput>
  }

  export type SongUpdateOneRequiredWithoutAuthorsNestedInput = {
    create?: XOR<SongCreateWithoutAuthorsInput, SongUncheckedCreateWithoutAuthorsInput>
    connectOrCreate?: SongCreateOrConnectWithoutAuthorsInput
    upsert?: SongUpsertWithoutAuthorsInput
    connect?: SongWhereUniqueInput
    update?: XOR<SongUpdateWithoutAuthorsInput, SongUncheckedUpdateWithoutAuthorsInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type SongAuthorCreateWithoutSongInput = {
    createdAt?: Date | string
    author: AuthorCreateNestedOneWithoutSongsInput
  }

  export type SongAuthorUncheckedCreateWithoutSongInput = {
    authorId: string
    createdAt?: Date | string
  }

  export type SongAuthorCreateOrConnectWithoutSongInput = {
    where: SongAuthorWhereUniqueInput
    create: XOR<SongAuthorCreateWithoutSongInput, SongAuthorUncheckedCreateWithoutSongInput>
  }

  export type SongAuthorCreateManySongInputEnvelope = {
    data: Enumerable<SongAuthorCreateManySongInput>
    skipDuplicates?: boolean
  }

  export type SongAuthorUpsertWithWhereUniqueWithoutSongInput = {
    where: SongAuthorWhereUniqueInput
    update: XOR<SongAuthorUpdateWithoutSongInput, SongAuthorUncheckedUpdateWithoutSongInput>
    create: XOR<SongAuthorCreateWithoutSongInput, SongAuthorUncheckedCreateWithoutSongInput>
  }

  export type SongAuthorUpdateWithWhereUniqueWithoutSongInput = {
    where: SongAuthorWhereUniqueInput
    data: XOR<SongAuthorUpdateWithoutSongInput, SongAuthorUncheckedUpdateWithoutSongInput>
  }

  export type SongAuthorUpdateManyWithWhereWithoutSongInput = {
    where: SongAuthorScalarWhereInput
    data: XOR<SongAuthorUpdateManyMutationInput, SongAuthorUncheckedUpdateManyWithoutAuthorsInput>
  }

  export type SongAuthorScalarWhereInput = {
    AND?: Enumerable<SongAuthorScalarWhereInput>
    OR?: Enumerable<SongAuthorScalarWhereInput>
    NOT?: Enumerable<SongAuthorScalarWhereInput>
    authorId?: StringFilter | string
    songId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
  }

  export type SongAuthorCreateWithoutAuthorInput = {
    createdAt?: Date | string
    song: SongCreateNestedOneWithoutAuthorsInput
  }

  export type SongAuthorUncheckedCreateWithoutAuthorInput = {
    songId: string
    createdAt?: Date | string
  }

  export type SongAuthorCreateOrConnectWithoutAuthorInput = {
    where: SongAuthorWhereUniqueInput
    create: XOR<SongAuthorCreateWithoutAuthorInput, SongAuthorUncheckedCreateWithoutAuthorInput>
  }

  export type SongAuthorCreateManyAuthorInputEnvelope = {
    data: Enumerable<SongAuthorCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type SongAuthorUpsertWithWhereUniqueWithoutAuthorInput = {
    where: SongAuthorWhereUniqueInput
    update: XOR<SongAuthorUpdateWithoutAuthorInput, SongAuthorUncheckedUpdateWithoutAuthorInput>
    create: XOR<SongAuthorCreateWithoutAuthorInput, SongAuthorUncheckedCreateWithoutAuthorInput>
  }

  export type SongAuthorUpdateWithWhereUniqueWithoutAuthorInput = {
    where: SongAuthorWhereUniqueInput
    data: XOR<SongAuthorUpdateWithoutAuthorInput, SongAuthorUncheckedUpdateWithoutAuthorInput>
  }

  export type SongAuthorUpdateManyWithWhereWithoutAuthorInput = {
    where: SongAuthorScalarWhereInput
    data: XOR<SongAuthorUpdateManyMutationInput, SongAuthorUncheckedUpdateManyWithoutSongsInput>
  }

  export type AuthorCreateWithoutSongsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
  }

  export type AuthorUncheckedCreateWithoutSongsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
  }

  export type AuthorCreateOrConnectWithoutSongsInput = {
    where: AuthorWhereUniqueInput
    create: XOR<AuthorCreateWithoutSongsInput, AuthorUncheckedCreateWithoutSongsInput>
  }

  export type SongCreateWithoutAuthorsInput = {
    id?: string
    title: string
    slug: string
    url: string
    lyric?: string | null
    createdAt?: Date | string
  }

  export type SongUncheckedCreateWithoutAuthorsInput = {
    id?: string
    title: string
    slug: string
    url: string
    lyric?: string | null
    createdAt?: Date | string
  }

  export type SongCreateOrConnectWithoutAuthorsInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutAuthorsInput, SongUncheckedCreateWithoutAuthorsInput>
  }

  export type AuthorUpsertWithoutSongsInput = {
    update: XOR<AuthorUpdateWithoutSongsInput, AuthorUncheckedUpdateWithoutSongsInput>
    create: XOR<AuthorCreateWithoutSongsInput, AuthorUncheckedCreateWithoutSongsInput>
  }

  export type AuthorUpdateWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorUncheckedUpdateWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongUpsertWithoutAuthorsInput = {
    update: XOR<SongUpdateWithoutAuthorsInput, SongUncheckedUpdateWithoutAuthorsInput>
    create: XOR<SongCreateWithoutAuthorsInput, SongUncheckedCreateWithoutAuthorsInput>
  }

  export type SongUpdateWithoutAuthorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    lyric?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongUncheckedUpdateWithoutAuthorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    lyric?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongAuthorCreateManySongInput = {
    authorId: string
    createdAt?: Date | string
  }

  export type SongAuthorUpdateWithoutSongInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: AuthorUpdateOneRequiredWithoutSongsNestedInput
  }

  export type SongAuthorUncheckedUpdateWithoutSongInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongAuthorUncheckedUpdateManyWithoutAuthorsInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongAuthorCreateManyAuthorInput = {
    songId: string
    createdAt?: Date | string
  }

  export type SongAuthorUpdateWithoutAuthorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    song?: SongUpdateOneRequiredWithoutAuthorsNestedInput
  }

  export type SongAuthorUncheckedUpdateWithoutAuthorInput = {
    songId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongAuthorUncheckedUpdateManyWithoutSongsInput = {
    songId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}