
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model CargosAdmin
 * 
 */
export type CargosAdmin = $Result.DefaultSelection<Prisma.$CargosAdminPayload>
/**
 * Model PersonaClub
 * 
 */
export type PersonaClub = $Result.DefaultSelection<Prisma.$PersonaClubPayload>
/**
 * Model ContactosEmergencia
 * 
 */
export type ContactosEmergencia = $Result.DefaultSelection<Prisma.$ContactosEmergenciaPayload>
/**
 * Model Entrenador
 * 
 */
export type Entrenador = $Result.DefaultSelection<Prisma.$EntrenadorPayload>
/**
 * Model Tutor
 * 
 */
export type Tutor = $Result.DefaultSelection<Prisma.$TutorPayload>
/**
 * Model Deportista
 * 
 */
export type Deportista = $Result.DefaultSelection<Prisma.$DeportistaPayload>
/**
 * Model DesercionDeportista
 * 
 */
export type DesercionDeportista = $Result.DefaultSelection<Prisma.$DesercionDeportistaPayload>
/**
 * Model GestionAdmin
 * 
 */
export type GestionAdmin = $Result.DefaultSelection<Prisma.$GestionAdminPayload>
/**
 * Model PagoDeportista
 * 
 */
export type PagoDeportista = $Result.DefaultSelection<Prisma.$PagoDeportistaPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Departamento
 * 
 */
export type Departamento = $Result.DefaultSelection<Prisma.$DepartamentoPayload>
/**
 * Model Municipio
 * 
 */
export type Municipio = $Result.DefaultSelection<Prisma.$MunicipioPayload>
/**
 * Model TipoDocumento
 * 
 */
export type TipoDocumento = $Result.DefaultSelection<Prisma.$TipoDocumentoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CargosAdmins
 * const cargosAdmins = await prisma.cargosAdmin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more CargosAdmins
   * const cargosAdmins = await prisma.cargosAdmin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cargosAdmin`: Exposes CRUD operations for the **CargosAdmin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CargosAdmins
    * const cargosAdmins = await prisma.cargosAdmin.findMany()
    * ```
    */
  get cargosAdmin(): Prisma.CargosAdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.personaClub`: Exposes CRUD operations for the **PersonaClub** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PersonaClubs
    * const personaClubs = await prisma.personaClub.findMany()
    * ```
    */
  get personaClub(): Prisma.PersonaClubDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactosEmergencia`: Exposes CRUD operations for the **ContactosEmergencia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactosEmergencias
    * const contactosEmergencias = await prisma.contactosEmergencia.findMany()
    * ```
    */
  get contactosEmergencia(): Prisma.ContactosEmergenciaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.entrenador`: Exposes CRUD operations for the **Entrenador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entrenadors
    * const entrenadors = await prisma.entrenador.findMany()
    * ```
    */
  get entrenador(): Prisma.EntrenadorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tutor`: Exposes CRUD operations for the **Tutor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tutors
    * const tutors = await prisma.tutor.findMany()
    * ```
    */
  get tutor(): Prisma.TutorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deportista`: Exposes CRUD operations for the **Deportista** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deportistas
    * const deportistas = await prisma.deportista.findMany()
    * ```
    */
  get deportista(): Prisma.DeportistaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.desercionDeportista`: Exposes CRUD operations for the **DesercionDeportista** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DesercionDeportistas
    * const desercionDeportistas = await prisma.desercionDeportista.findMany()
    * ```
    */
  get desercionDeportista(): Prisma.DesercionDeportistaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gestionAdmin`: Exposes CRUD operations for the **GestionAdmin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GestionAdmins
    * const gestionAdmins = await prisma.gestionAdmin.findMany()
    * ```
    */
  get gestionAdmin(): Prisma.GestionAdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pagoDeportista`: Exposes CRUD operations for the **PagoDeportista** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PagoDeportistas
    * const pagoDeportistas = await prisma.pagoDeportista.findMany()
    * ```
    */
  get pagoDeportista(): Prisma.PagoDeportistaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.departamento`: Exposes CRUD operations for the **Departamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departamentos
    * const departamentos = await prisma.departamento.findMany()
    * ```
    */
  get departamento(): Prisma.DepartamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.municipio`: Exposes CRUD operations for the **Municipio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Municipios
    * const municipios = await prisma.municipio.findMany()
    * ```
    */
  get municipio(): Prisma.MunicipioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipoDocumento`: Exposes CRUD operations for the **TipoDocumento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoDocumentos
    * const tipoDocumentos = await prisma.tipoDocumento.findMany()
    * ```
    */
  get tipoDocumento(): Prisma.TipoDocumentoDelegate<ExtArgs, ClientOptions>;
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
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    CargosAdmin: 'CargosAdmin',
    PersonaClub: 'PersonaClub',
    ContactosEmergencia: 'ContactosEmergencia',
    Entrenador: 'Entrenador',
    Tutor: 'Tutor',
    Deportista: 'Deportista',
    DesercionDeportista: 'DesercionDeportista',
    GestionAdmin: 'GestionAdmin',
    PagoDeportista: 'PagoDeportista',
    Usuario: 'Usuario',
    Departamento: 'Departamento',
    Municipio: 'Municipio',
    TipoDocumento: 'TipoDocumento'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cargosAdmin" | "personaClub" | "contactosEmergencia" | "entrenador" | "tutor" | "deportista" | "desercionDeportista" | "gestionAdmin" | "pagoDeportista" | "usuario" | "departamento" | "municipio" | "tipoDocumento"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CargosAdmin: {
        payload: Prisma.$CargosAdminPayload<ExtArgs>
        fields: Prisma.CargosAdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CargosAdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargosAdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CargosAdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargosAdminPayload>
          }
          findFirst: {
            args: Prisma.CargosAdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargosAdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CargosAdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargosAdminPayload>
          }
          findMany: {
            args: Prisma.CargosAdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargosAdminPayload>[]
          }
          create: {
            args: Prisma.CargosAdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargosAdminPayload>
          }
          createMany: {
            args: Prisma.CargosAdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CargosAdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargosAdminPayload>
          }
          update: {
            args: Prisma.CargosAdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargosAdminPayload>
          }
          deleteMany: {
            args: Prisma.CargosAdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CargosAdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CargosAdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargosAdminPayload>
          }
          aggregate: {
            args: Prisma.CargosAdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCargosAdmin>
          }
          groupBy: {
            args: Prisma.CargosAdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<CargosAdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.CargosAdminCountArgs<ExtArgs>
            result: $Utils.Optional<CargosAdminCountAggregateOutputType> | number
          }
        }
      }
      PersonaClub: {
        payload: Prisma.$PersonaClubPayload<ExtArgs>
        fields: Prisma.PersonaClubFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonaClubFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaClubPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonaClubFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaClubPayload>
          }
          findFirst: {
            args: Prisma.PersonaClubFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaClubPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonaClubFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaClubPayload>
          }
          findMany: {
            args: Prisma.PersonaClubFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaClubPayload>[]
          }
          create: {
            args: Prisma.PersonaClubCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaClubPayload>
          }
          createMany: {
            args: Prisma.PersonaClubCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PersonaClubDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaClubPayload>
          }
          update: {
            args: Prisma.PersonaClubUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaClubPayload>
          }
          deleteMany: {
            args: Prisma.PersonaClubDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonaClubUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PersonaClubUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaClubPayload>
          }
          aggregate: {
            args: Prisma.PersonaClubAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonaClub>
          }
          groupBy: {
            args: Prisma.PersonaClubGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonaClubGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonaClubCountArgs<ExtArgs>
            result: $Utils.Optional<PersonaClubCountAggregateOutputType> | number
          }
        }
      }
      ContactosEmergencia: {
        payload: Prisma.$ContactosEmergenciaPayload<ExtArgs>
        fields: Prisma.ContactosEmergenciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactosEmergenciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactosEmergenciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactosEmergenciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactosEmergenciaPayload>
          }
          findFirst: {
            args: Prisma.ContactosEmergenciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactosEmergenciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactosEmergenciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactosEmergenciaPayload>
          }
          findMany: {
            args: Prisma.ContactosEmergenciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactosEmergenciaPayload>[]
          }
          create: {
            args: Prisma.ContactosEmergenciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactosEmergenciaPayload>
          }
          createMany: {
            args: Prisma.ContactosEmergenciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContactosEmergenciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactosEmergenciaPayload>
          }
          update: {
            args: Prisma.ContactosEmergenciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactosEmergenciaPayload>
          }
          deleteMany: {
            args: Prisma.ContactosEmergenciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactosEmergenciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContactosEmergenciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactosEmergenciaPayload>
          }
          aggregate: {
            args: Prisma.ContactosEmergenciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactosEmergencia>
          }
          groupBy: {
            args: Prisma.ContactosEmergenciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactosEmergenciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactosEmergenciaCountArgs<ExtArgs>
            result: $Utils.Optional<ContactosEmergenciaCountAggregateOutputType> | number
          }
        }
      }
      Entrenador: {
        payload: Prisma.$EntrenadorPayload<ExtArgs>
        fields: Prisma.EntrenadorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntrenadorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntrenadorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadorPayload>
          }
          findFirst: {
            args: Prisma.EntrenadorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntrenadorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadorPayload>
          }
          findMany: {
            args: Prisma.EntrenadorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadorPayload>[]
          }
          create: {
            args: Prisma.EntrenadorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadorPayload>
          }
          createMany: {
            args: Prisma.EntrenadorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EntrenadorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadorPayload>
          }
          update: {
            args: Prisma.EntrenadorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadorPayload>
          }
          deleteMany: {
            args: Prisma.EntrenadorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EntrenadorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EntrenadorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadorPayload>
          }
          aggregate: {
            args: Prisma.EntrenadorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntrenador>
          }
          groupBy: {
            args: Prisma.EntrenadorGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntrenadorGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntrenadorCountArgs<ExtArgs>
            result: $Utils.Optional<EntrenadorCountAggregateOutputType> | number
          }
        }
      }
      Tutor: {
        payload: Prisma.$TutorPayload<ExtArgs>
        fields: Prisma.TutorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TutorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TutorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>
          }
          findFirst: {
            args: Prisma.TutorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TutorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>
          }
          findMany: {
            args: Prisma.TutorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>[]
          }
          create: {
            args: Prisma.TutorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>
          }
          createMany: {
            args: Prisma.TutorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TutorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>
          }
          update: {
            args: Prisma.TutorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>
          }
          deleteMany: {
            args: Prisma.TutorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TutorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TutorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>
          }
          aggregate: {
            args: Prisma.TutorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTutor>
          }
          groupBy: {
            args: Prisma.TutorGroupByArgs<ExtArgs>
            result: $Utils.Optional<TutorGroupByOutputType>[]
          }
          count: {
            args: Prisma.TutorCountArgs<ExtArgs>
            result: $Utils.Optional<TutorCountAggregateOutputType> | number
          }
        }
      }
      Deportista: {
        payload: Prisma.$DeportistaPayload<ExtArgs>
        fields: Prisma.DeportistaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeportistaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeportistaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeportistaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeportistaPayload>
          }
          findFirst: {
            args: Prisma.DeportistaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeportistaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeportistaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeportistaPayload>
          }
          findMany: {
            args: Prisma.DeportistaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeportistaPayload>[]
          }
          create: {
            args: Prisma.DeportistaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeportistaPayload>
          }
          createMany: {
            args: Prisma.DeportistaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DeportistaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeportistaPayload>
          }
          update: {
            args: Prisma.DeportistaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeportistaPayload>
          }
          deleteMany: {
            args: Prisma.DeportistaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeportistaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeportistaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeportistaPayload>
          }
          aggregate: {
            args: Prisma.DeportistaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeportista>
          }
          groupBy: {
            args: Prisma.DeportistaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeportistaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeportistaCountArgs<ExtArgs>
            result: $Utils.Optional<DeportistaCountAggregateOutputType> | number
          }
        }
      }
      DesercionDeportista: {
        payload: Prisma.$DesercionDeportistaPayload<ExtArgs>
        fields: Prisma.DesercionDeportistaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DesercionDeportistaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesercionDeportistaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DesercionDeportistaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesercionDeportistaPayload>
          }
          findFirst: {
            args: Prisma.DesercionDeportistaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesercionDeportistaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DesercionDeportistaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesercionDeportistaPayload>
          }
          findMany: {
            args: Prisma.DesercionDeportistaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesercionDeportistaPayload>[]
          }
          create: {
            args: Prisma.DesercionDeportistaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesercionDeportistaPayload>
          }
          createMany: {
            args: Prisma.DesercionDeportistaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DesercionDeportistaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesercionDeportistaPayload>
          }
          update: {
            args: Prisma.DesercionDeportistaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesercionDeportistaPayload>
          }
          deleteMany: {
            args: Prisma.DesercionDeportistaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DesercionDeportistaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DesercionDeportistaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesercionDeportistaPayload>
          }
          aggregate: {
            args: Prisma.DesercionDeportistaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDesercionDeportista>
          }
          groupBy: {
            args: Prisma.DesercionDeportistaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DesercionDeportistaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DesercionDeportistaCountArgs<ExtArgs>
            result: $Utils.Optional<DesercionDeportistaCountAggregateOutputType> | number
          }
        }
      }
      GestionAdmin: {
        payload: Prisma.$GestionAdminPayload<ExtArgs>
        fields: Prisma.GestionAdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GestionAdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GestionAdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GestionAdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GestionAdminPayload>
          }
          findFirst: {
            args: Prisma.GestionAdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GestionAdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GestionAdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GestionAdminPayload>
          }
          findMany: {
            args: Prisma.GestionAdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GestionAdminPayload>[]
          }
          create: {
            args: Prisma.GestionAdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GestionAdminPayload>
          }
          createMany: {
            args: Prisma.GestionAdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GestionAdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GestionAdminPayload>
          }
          update: {
            args: Prisma.GestionAdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GestionAdminPayload>
          }
          deleteMany: {
            args: Prisma.GestionAdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GestionAdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GestionAdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GestionAdminPayload>
          }
          aggregate: {
            args: Prisma.GestionAdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGestionAdmin>
          }
          groupBy: {
            args: Prisma.GestionAdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<GestionAdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.GestionAdminCountArgs<ExtArgs>
            result: $Utils.Optional<GestionAdminCountAggregateOutputType> | number
          }
        }
      }
      PagoDeportista: {
        payload: Prisma.$PagoDeportistaPayload<ExtArgs>
        fields: Prisma.PagoDeportistaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PagoDeportistaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoDeportistaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PagoDeportistaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoDeportistaPayload>
          }
          findFirst: {
            args: Prisma.PagoDeportistaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoDeportistaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PagoDeportistaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoDeportistaPayload>
          }
          findMany: {
            args: Prisma.PagoDeportistaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoDeportistaPayload>[]
          }
          create: {
            args: Prisma.PagoDeportistaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoDeportistaPayload>
          }
          createMany: {
            args: Prisma.PagoDeportistaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PagoDeportistaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoDeportistaPayload>
          }
          update: {
            args: Prisma.PagoDeportistaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoDeportistaPayload>
          }
          deleteMany: {
            args: Prisma.PagoDeportistaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PagoDeportistaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PagoDeportistaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoDeportistaPayload>
          }
          aggregate: {
            args: Prisma.PagoDeportistaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePagoDeportista>
          }
          groupBy: {
            args: Prisma.PagoDeportistaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagoDeportistaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PagoDeportistaCountArgs<ExtArgs>
            result: $Utils.Optional<PagoDeportistaCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Departamento: {
        payload: Prisma.$DepartamentoPayload<ExtArgs>
        fields: Prisma.DepartamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>
          }
          findFirst: {
            args: Prisma.DepartamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>
          }
          findMany: {
            args: Prisma.DepartamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>[]
          }
          create: {
            args: Prisma.DepartamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>
          }
          createMany: {
            args: Prisma.DepartamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DepartamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>
          }
          update: {
            args: Prisma.DepartamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>
          }
          deleteMany: {
            args: Prisma.DepartamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DepartamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>
          }
          aggregate: {
            args: Prisma.DepartamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartamento>
          }
          groupBy: {
            args: Prisma.DepartamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartamentoCountArgs<ExtArgs>
            result: $Utils.Optional<DepartamentoCountAggregateOutputType> | number
          }
        }
      }
      Municipio: {
        payload: Prisma.$MunicipioPayload<ExtArgs>
        fields: Prisma.MunicipioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MunicipioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MunicipioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload>
          }
          findFirst: {
            args: Prisma.MunicipioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MunicipioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload>
          }
          findMany: {
            args: Prisma.MunicipioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload>[]
          }
          create: {
            args: Prisma.MunicipioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload>
          }
          createMany: {
            args: Prisma.MunicipioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MunicipioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload>
          }
          update: {
            args: Prisma.MunicipioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload>
          }
          deleteMany: {
            args: Prisma.MunicipioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MunicipioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MunicipioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload>
          }
          aggregate: {
            args: Prisma.MunicipioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMunicipio>
          }
          groupBy: {
            args: Prisma.MunicipioGroupByArgs<ExtArgs>
            result: $Utils.Optional<MunicipioGroupByOutputType>[]
          }
          count: {
            args: Prisma.MunicipioCountArgs<ExtArgs>
            result: $Utils.Optional<MunicipioCountAggregateOutputType> | number
          }
        }
      }
      TipoDocumento: {
        payload: Prisma.$TipoDocumentoPayload<ExtArgs>
        fields: Prisma.TipoDocumentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoDocumentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDocumentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoDocumentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDocumentoPayload>
          }
          findFirst: {
            args: Prisma.TipoDocumentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDocumentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoDocumentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDocumentoPayload>
          }
          findMany: {
            args: Prisma.TipoDocumentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDocumentoPayload>[]
          }
          create: {
            args: Prisma.TipoDocumentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDocumentoPayload>
          }
          createMany: {
            args: Prisma.TipoDocumentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TipoDocumentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDocumentoPayload>
          }
          update: {
            args: Prisma.TipoDocumentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDocumentoPayload>
          }
          deleteMany: {
            args: Prisma.TipoDocumentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoDocumentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TipoDocumentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDocumentoPayload>
          }
          aggregate: {
            args: Prisma.TipoDocumentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoDocumento>
          }
          groupBy: {
            args: Prisma.TipoDocumentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoDocumentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoDocumentoCountArgs<ExtArgs>
            result: $Utils.Optional<TipoDocumentoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    cargosAdmin?: CargosAdminOmit
    personaClub?: PersonaClubOmit
    contactosEmergencia?: ContactosEmergenciaOmit
    entrenador?: EntrenadorOmit
    tutor?: TutorOmit
    deportista?: DeportistaOmit
    desercionDeportista?: DesercionDeportistaOmit
    gestionAdmin?: GestionAdminOmit
    pagoDeportista?: PagoDeportistaOmit
    usuario?: UsuarioOmit
    departamento?: DepartamentoOmit
    municipio?: MunicipioOmit
    tipoDocumento?: TipoDocumentoOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type DeportistaCountOutputType
   */

  export type DeportistaCountOutputType = {
    pagosDeportista: number
  }

  export type DeportistaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagosDeportista?: boolean | DeportistaCountOutputTypeCountPagosDeportistaArgs
  }

  // Custom InputTypes
  /**
   * DeportistaCountOutputType without action
   */
  export type DeportistaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeportistaCountOutputType
     */
    select?: DeportistaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeportistaCountOutputType without action
   */
  export type DeportistaCountOutputTypeCountPagosDeportistaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagoDeportistaWhereInput
  }


  /**
   * Count Type MunicipioCountOutputType
   */

  export type MunicipioCountOutputType = {
    personaClub: number
  }

  export type MunicipioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personaClub?: boolean | MunicipioCountOutputTypeCountPersonaClubArgs
  }

  // Custom InputTypes
  /**
   * MunicipioCountOutputType without action
   */
  export type MunicipioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipioCountOutputType
     */
    select?: MunicipioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MunicipioCountOutputType without action
   */
  export type MunicipioCountOutputTypeCountPersonaClubArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonaClubWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CargosAdmin
   */

  export type AggregateCargosAdmin = {
    _count: CargosAdminCountAggregateOutputType | null
    _avg: CargosAdminAvgAggregateOutputType | null
    _sum: CargosAdminSumAggregateOutputType | null
    _min: CargosAdminMinAggregateOutputType | null
    _max: CargosAdminMaxAggregateOutputType | null
  }

  export type CargosAdminAvgAggregateOutputType = {
    id: number | null
  }

  export type CargosAdminSumAggregateOutputType = {
    id: number | null
  }

  export type CargosAdminMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type CargosAdminMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type CargosAdminCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type CargosAdminAvgAggregateInputType = {
    id?: true
  }

  export type CargosAdminSumAggregateInputType = {
    id?: true
  }

  export type CargosAdminMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type CargosAdminMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type CargosAdminCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type CargosAdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CargosAdmin to aggregate.
     */
    where?: CargosAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CargosAdmins to fetch.
     */
    orderBy?: CargosAdminOrderByWithRelationInput | CargosAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CargosAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CargosAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CargosAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CargosAdmins
    **/
    _count?: true | CargosAdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CargosAdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CargosAdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CargosAdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CargosAdminMaxAggregateInputType
  }

  export type GetCargosAdminAggregateType<T extends CargosAdminAggregateArgs> = {
        [P in keyof T & keyof AggregateCargosAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCargosAdmin[P]>
      : GetScalarType<T[P], AggregateCargosAdmin[P]>
  }




  export type CargosAdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CargosAdminWhereInput
    orderBy?: CargosAdminOrderByWithAggregationInput | CargosAdminOrderByWithAggregationInput[]
    by: CargosAdminScalarFieldEnum[] | CargosAdminScalarFieldEnum
    having?: CargosAdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CargosAdminCountAggregateInputType | true
    _avg?: CargosAdminAvgAggregateInputType
    _sum?: CargosAdminSumAggregateInputType
    _min?: CargosAdminMinAggregateInputType
    _max?: CargosAdminMaxAggregateInputType
  }

  export type CargosAdminGroupByOutputType = {
    id: number
    nombre: string | null
    _count: CargosAdminCountAggregateOutputType | null
    _avg: CargosAdminAvgAggregateOutputType | null
    _sum: CargosAdminSumAggregateOutputType | null
    _min: CargosAdminMinAggregateOutputType | null
    _max: CargosAdminMaxAggregateOutputType | null
  }

  type GetCargosAdminGroupByPayload<T extends CargosAdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CargosAdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CargosAdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CargosAdminGroupByOutputType[P]>
            : GetScalarType<T[P], CargosAdminGroupByOutputType[P]>
        }
      >
    >


  export type CargosAdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["cargosAdmin"]>



  export type CargosAdminSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type CargosAdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["cargosAdmin"]>

  export type $CargosAdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CargosAdmin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string | null
    }, ExtArgs["result"]["cargosAdmin"]>
    composites: {}
  }

  type CargosAdminGetPayload<S extends boolean | null | undefined | CargosAdminDefaultArgs> = $Result.GetResult<Prisma.$CargosAdminPayload, S>

  type CargosAdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CargosAdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: CargosAdminCountAggregateInputType | true
    }

  export interface CargosAdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CargosAdmin'], meta: { name: 'CargosAdmin' } }
    /**
     * Find zero or one CargosAdmin that matches the filter.
     * @param {CargosAdminFindUniqueArgs} args - Arguments to find a CargosAdmin
     * @example
     * // Get one CargosAdmin
     * const cargosAdmin = await prisma.cargosAdmin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CargosAdminFindUniqueArgs>(args: SelectSubset<T, CargosAdminFindUniqueArgs<ExtArgs>>): Prisma__CargosAdminClient<$Result.GetResult<Prisma.$CargosAdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CargosAdmin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CargosAdminFindUniqueOrThrowArgs} args - Arguments to find a CargosAdmin
     * @example
     * // Get one CargosAdmin
     * const cargosAdmin = await prisma.cargosAdmin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CargosAdminFindUniqueOrThrowArgs>(args: SelectSubset<T, CargosAdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CargosAdminClient<$Result.GetResult<Prisma.$CargosAdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CargosAdmin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargosAdminFindFirstArgs} args - Arguments to find a CargosAdmin
     * @example
     * // Get one CargosAdmin
     * const cargosAdmin = await prisma.cargosAdmin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CargosAdminFindFirstArgs>(args?: SelectSubset<T, CargosAdminFindFirstArgs<ExtArgs>>): Prisma__CargosAdminClient<$Result.GetResult<Prisma.$CargosAdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CargosAdmin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargosAdminFindFirstOrThrowArgs} args - Arguments to find a CargosAdmin
     * @example
     * // Get one CargosAdmin
     * const cargosAdmin = await prisma.cargosAdmin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CargosAdminFindFirstOrThrowArgs>(args?: SelectSubset<T, CargosAdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__CargosAdminClient<$Result.GetResult<Prisma.$CargosAdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CargosAdmins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargosAdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CargosAdmins
     * const cargosAdmins = await prisma.cargosAdmin.findMany()
     * 
     * // Get first 10 CargosAdmins
     * const cargosAdmins = await prisma.cargosAdmin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cargosAdminWithIdOnly = await prisma.cargosAdmin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CargosAdminFindManyArgs>(args?: SelectSubset<T, CargosAdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CargosAdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CargosAdmin.
     * @param {CargosAdminCreateArgs} args - Arguments to create a CargosAdmin.
     * @example
     * // Create one CargosAdmin
     * const CargosAdmin = await prisma.cargosAdmin.create({
     *   data: {
     *     // ... data to create a CargosAdmin
     *   }
     * })
     * 
     */
    create<T extends CargosAdminCreateArgs>(args: SelectSubset<T, CargosAdminCreateArgs<ExtArgs>>): Prisma__CargosAdminClient<$Result.GetResult<Prisma.$CargosAdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CargosAdmins.
     * @param {CargosAdminCreateManyArgs} args - Arguments to create many CargosAdmins.
     * @example
     * // Create many CargosAdmins
     * const cargosAdmin = await prisma.cargosAdmin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CargosAdminCreateManyArgs>(args?: SelectSubset<T, CargosAdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CargosAdmin.
     * @param {CargosAdminDeleteArgs} args - Arguments to delete one CargosAdmin.
     * @example
     * // Delete one CargosAdmin
     * const CargosAdmin = await prisma.cargosAdmin.delete({
     *   where: {
     *     // ... filter to delete one CargosAdmin
     *   }
     * })
     * 
     */
    delete<T extends CargosAdminDeleteArgs>(args: SelectSubset<T, CargosAdminDeleteArgs<ExtArgs>>): Prisma__CargosAdminClient<$Result.GetResult<Prisma.$CargosAdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CargosAdmin.
     * @param {CargosAdminUpdateArgs} args - Arguments to update one CargosAdmin.
     * @example
     * // Update one CargosAdmin
     * const cargosAdmin = await prisma.cargosAdmin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CargosAdminUpdateArgs>(args: SelectSubset<T, CargosAdminUpdateArgs<ExtArgs>>): Prisma__CargosAdminClient<$Result.GetResult<Prisma.$CargosAdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CargosAdmins.
     * @param {CargosAdminDeleteManyArgs} args - Arguments to filter CargosAdmins to delete.
     * @example
     * // Delete a few CargosAdmins
     * const { count } = await prisma.cargosAdmin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CargosAdminDeleteManyArgs>(args?: SelectSubset<T, CargosAdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CargosAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargosAdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CargosAdmins
     * const cargosAdmin = await prisma.cargosAdmin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CargosAdminUpdateManyArgs>(args: SelectSubset<T, CargosAdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CargosAdmin.
     * @param {CargosAdminUpsertArgs} args - Arguments to update or create a CargosAdmin.
     * @example
     * // Update or create a CargosAdmin
     * const cargosAdmin = await prisma.cargosAdmin.upsert({
     *   create: {
     *     // ... data to create a CargosAdmin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CargosAdmin we want to update
     *   }
     * })
     */
    upsert<T extends CargosAdminUpsertArgs>(args: SelectSubset<T, CargosAdminUpsertArgs<ExtArgs>>): Prisma__CargosAdminClient<$Result.GetResult<Prisma.$CargosAdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CargosAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargosAdminCountArgs} args - Arguments to filter CargosAdmins to count.
     * @example
     * // Count the number of CargosAdmins
     * const count = await prisma.cargosAdmin.count({
     *   where: {
     *     // ... the filter for the CargosAdmins we want to count
     *   }
     * })
    **/
    count<T extends CargosAdminCountArgs>(
      args?: Subset<T, CargosAdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CargosAdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CargosAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargosAdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CargosAdminAggregateArgs>(args: Subset<T, CargosAdminAggregateArgs>): Prisma.PrismaPromise<GetCargosAdminAggregateType<T>>

    /**
     * Group by CargosAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargosAdminGroupByArgs} args - Group by arguments.
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
      T extends CargosAdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CargosAdminGroupByArgs['orderBy'] }
        : { orderBy?: CargosAdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CargosAdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCargosAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CargosAdmin model
   */
  readonly fields: CargosAdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CargosAdmin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CargosAdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CargosAdmin model
   */
  interface CargosAdminFieldRefs {
    readonly id: FieldRef<"CargosAdmin", 'Int'>
    readonly nombre: FieldRef<"CargosAdmin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CargosAdmin findUnique
   */
  export type CargosAdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargosAdmin
     */
    select?: CargosAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CargosAdmin
     */
    omit?: CargosAdminOmit<ExtArgs> | null
    /**
     * Filter, which CargosAdmin to fetch.
     */
    where: CargosAdminWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CargosAdmin findUniqueOrThrow
   */
  export type CargosAdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargosAdmin
     */
    select?: CargosAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CargosAdmin
     */
    omit?: CargosAdminOmit<ExtArgs> | null
    /**
     * Filter, which CargosAdmin to fetch.
     */
    where: CargosAdminWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CargosAdmin findFirst
   */
  export type CargosAdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargosAdmin
     */
    select?: CargosAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CargosAdmin
     */
    omit?: CargosAdminOmit<ExtArgs> | null
    /**
     * Filter, which CargosAdmin to fetch.
     */
    where?: CargosAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CargosAdmins to fetch.
     */
    orderBy?: CargosAdminOrderByWithRelationInput | CargosAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CargosAdmins.
     */
    cursor?: CargosAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CargosAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CargosAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CargosAdmins.
     */
    distinct?: CargosAdminScalarFieldEnum | CargosAdminScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CargosAdmin findFirstOrThrow
   */
  export type CargosAdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargosAdmin
     */
    select?: CargosAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CargosAdmin
     */
    omit?: CargosAdminOmit<ExtArgs> | null
    /**
     * Filter, which CargosAdmin to fetch.
     */
    where?: CargosAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CargosAdmins to fetch.
     */
    orderBy?: CargosAdminOrderByWithRelationInput | CargosAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CargosAdmins.
     */
    cursor?: CargosAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CargosAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CargosAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CargosAdmins.
     */
    distinct?: CargosAdminScalarFieldEnum | CargosAdminScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CargosAdmin findMany
   */
  export type CargosAdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargosAdmin
     */
    select?: CargosAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CargosAdmin
     */
    omit?: CargosAdminOmit<ExtArgs> | null
    /**
     * Filter, which CargosAdmins to fetch.
     */
    where?: CargosAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CargosAdmins to fetch.
     */
    orderBy?: CargosAdminOrderByWithRelationInput | CargosAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CargosAdmins.
     */
    cursor?: CargosAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CargosAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CargosAdmins.
     */
    skip?: number
    distinct?: CargosAdminScalarFieldEnum | CargosAdminScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CargosAdmin create
   */
  export type CargosAdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargosAdmin
     */
    select?: CargosAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CargosAdmin
     */
    omit?: CargosAdminOmit<ExtArgs> | null
    /**
     * The data needed to create a CargosAdmin.
     */
    data?: XOR<CargosAdminCreateInput, CargosAdminUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CargosAdmin createMany
   */
  export type CargosAdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CargosAdmins.
     */
    data: CargosAdminCreateManyInput | CargosAdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CargosAdmin update
   */
  export type CargosAdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargosAdmin
     */
    select?: CargosAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CargosAdmin
     */
    omit?: CargosAdminOmit<ExtArgs> | null
    /**
     * The data needed to update a CargosAdmin.
     */
    data: XOR<CargosAdminUpdateInput, CargosAdminUncheckedUpdateInput>
    /**
     * Choose, which CargosAdmin to update.
     */
    where: CargosAdminWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CargosAdmin updateMany
   */
  export type CargosAdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CargosAdmins.
     */
    data: XOR<CargosAdminUpdateManyMutationInput, CargosAdminUncheckedUpdateManyInput>
    /**
     * Filter which CargosAdmins to update
     */
    where?: CargosAdminWhereInput
    /**
     * Limit how many CargosAdmins to update.
     */
    limit?: number
  }

  /**
   * CargosAdmin upsert
   */
  export type CargosAdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargosAdmin
     */
    select?: CargosAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CargosAdmin
     */
    omit?: CargosAdminOmit<ExtArgs> | null
    /**
     * The filter to search for the CargosAdmin to update in case it exists.
     */
    where: CargosAdminWhereUniqueInput
    /**
     * In case the CargosAdmin found by the `where` argument doesn't exist, create a new CargosAdmin with this data.
     */
    create: XOR<CargosAdminCreateInput, CargosAdminUncheckedCreateInput>
    /**
     * In case the CargosAdmin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CargosAdminUpdateInput, CargosAdminUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CargosAdmin delete
   */
  export type CargosAdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargosAdmin
     */
    select?: CargosAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CargosAdmin
     */
    omit?: CargosAdminOmit<ExtArgs> | null
    /**
     * Filter which CargosAdmin to delete.
     */
    where: CargosAdminWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CargosAdmin deleteMany
   */
  export type CargosAdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CargosAdmins to delete
     */
    where?: CargosAdminWhereInput
    /**
     * Limit how many CargosAdmins to delete.
     */
    limit?: number
  }

  /**
   * CargosAdmin without action
   */
  export type CargosAdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargosAdmin
     */
    select?: CargosAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CargosAdmin
     */
    omit?: CargosAdminOmit<ExtArgs> | null
  }


  /**
   * Model PersonaClub
   */

  export type AggregatePersonaClub = {
    _count: PersonaClubCountAggregateOutputType | null
    _avg: PersonaClubAvgAggregateOutputType | null
    _sum: PersonaClubSumAggregateOutputType | null
    _min: PersonaClubMinAggregateOutputType | null
    _max: PersonaClubMaxAggregateOutputType | null
  }

  export type PersonaClubAvgAggregateOutputType = {
    id: number | null
    idMunicipio: number | null
    peso: number | null
    altura: number | null
  }

  export type PersonaClubSumAggregateOutputType = {
    id: number | null
    idMunicipio: number | null
    peso: number | null
    altura: number | null
  }

  export type PersonaClubMinAggregateOutputType = {
    id: number | null
    numeroDocumento: string | null
    tipoDocumento: string | null
    idMunicipio: number | null
    nombres: string | null
    apellidos: string | null
    fechaNacimento: Date | null
    tipoRh: string | null
    peso: number | null
    altura: number | null
    correo: string | null
    numeroTelefono: string | null
    tallaCamisa: string | null
    tallaCalzado: string | null
    tallaPantaloneta: string | null
    genero: string | null
    direccion: string | null
  }

  export type PersonaClubMaxAggregateOutputType = {
    id: number | null
    numeroDocumento: string | null
    tipoDocumento: string | null
    idMunicipio: number | null
    nombres: string | null
    apellidos: string | null
    fechaNacimento: Date | null
    tipoRh: string | null
    peso: number | null
    altura: number | null
    correo: string | null
    numeroTelefono: string | null
    tallaCamisa: string | null
    tallaCalzado: string | null
    tallaPantaloneta: string | null
    genero: string | null
    direccion: string | null
  }

  export type PersonaClubCountAggregateOutputType = {
    id: number
    numeroDocumento: number
    tipoDocumento: number
    idMunicipio: number
    nombres: number
    apellidos: number
    fechaNacimento: number
    tipoRh: number
    peso: number
    altura: number
    correo: number
    numeroTelefono: number
    tallaCamisa: number
    tallaCalzado: number
    tallaPantaloneta: number
    genero: number
    direccion: number
    _all: number
  }


  export type PersonaClubAvgAggregateInputType = {
    id?: true
    idMunicipio?: true
    peso?: true
    altura?: true
  }

  export type PersonaClubSumAggregateInputType = {
    id?: true
    idMunicipio?: true
    peso?: true
    altura?: true
  }

  export type PersonaClubMinAggregateInputType = {
    id?: true
    numeroDocumento?: true
    tipoDocumento?: true
    idMunicipio?: true
    nombres?: true
    apellidos?: true
    fechaNacimento?: true
    tipoRh?: true
    peso?: true
    altura?: true
    correo?: true
    numeroTelefono?: true
    tallaCamisa?: true
    tallaCalzado?: true
    tallaPantaloneta?: true
    genero?: true
    direccion?: true
  }

  export type PersonaClubMaxAggregateInputType = {
    id?: true
    numeroDocumento?: true
    tipoDocumento?: true
    idMunicipio?: true
    nombres?: true
    apellidos?: true
    fechaNacimento?: true
    tipoRh?: true
    peso?: true
    altura?: true
    correo?: true
    numeroTelefono?: true
    tallaCamisa?: true
    tallaCalzado?: true
    tallaPantaloneta?: true
    genero?: true
    direccion?: true
  }

  export type PersonaClubCountAggregateInputType = {
    id?: true
    numeroDocumento?: true
    tipoDocumento?: true
    idMunicipio?: true
    nombres?: true
    apellidos?: true
    fechaNacimento?: true
    tipoRh?: true
    peso?: true
    altura?: true
    correo?: true
    numeroTelefono?: true
    tallaCamisa?: true
    tallaCalzado?: true
    tallaPantaloneta?: true
    genero?: true
    direccion?: true
    _all?: true
  }

  export type PersonaClubAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonaClub to aggregate.
     */
    where?: PersonaClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonaClubs to fetch.
     */
    orderBy?: PersonaClubOrderByWithRelationInput | PersonaClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonaClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonaClubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonaClubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PersonaClubs
    **/
    _count?: true | PersonaClubCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonaClubAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonaClubSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonaClubMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonaClubMaxAggregateInputType
  }

  export type GetPersonaClubAggregateType<T extends PersonaClubAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonaClub]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonaClub[P]>
      : GetScalarType<T[P], AggregatePersonaClub[P]>
  }




  export type PersonaClubGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonaClubWhereInput
    orderBy?: PersonaClubOrderByWithAggregationInput | PersonaClubOrderByWithAggregationInput[]
    by: PersonaClubScalarFieldEnum[] | PersonaClubScalarFieldEnum
    having?: PersonaClubScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonaClubCountAggregateInputType | true
    _avg?: PersonaClubAvgAggregateInputType
    _sum?: PersonaClubSumAggregateInputType
    _min?: PersonaClubMinAggregateInputType
    _max?: PersonaClubMaxAggregateInputType
  }

  export type PersonaClubGroupByOutputType = {
    id: number
    numeroDocumento: string
    tipoDocumento: string
    idMunicipio: number
    nombres: string
    apellidos: string
    fechaNacimento: Date | null
    tipoRh: string | null
    peso: number | null
    altura: number | null
    correo: string
    numeroTelefono: string
    tallaCamisa: string | null
    tallaCalzado: string | null
    tallaPantaloneta: string | null
    genero: string | null
    direccion: string | null
    _count: PersonaClubCountAggregateOutputType | null
    _avg: PersonaClubAvgAggregateOutputType | null
    _sum: PersonaClubSumAggregateOutputType | null
    _min: PersonaClubMinAggregateOutputType | null
    _max: PersonaClubMaxAggregateOutputType | null
  }

  type GetPersonaClubGroupByPayload<T extends PersonaClubGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonaClubGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonaClubGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonaClubGroupByOutputType[P]>
            : GetScalarType<T[P], PersonaClubGroupByOutputType[P]>
        }
      >
    >


  export type PersonaClubSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numeroDocumento?: boolean
    tipoDocumento?: boolean
    idMunicipio?: boolean
    nombres?: boolean
    apellidos?: boolean
    fechaNacimento?: boolean
    tipoRh?: boolean
    peso?: boolean
    altura?: boolean
    correo?: boolean
    numeroTelefono?: boolean
    tallaCamisa?: boolean
    tallaCalzado?: boolean
    tallaPantaloneta?: boolean
    genero?: boolean
    direccion?: boolean
    municipio?: boolean | MunicipioDefaultArgs<ExtArgs>
    entrenador?: boolean | PersonaClub$entrenadorArgs<ExtArgs>
    deportista?: boolean | PersonaClub$deportistaArgs<ExtArgs>
    usuario?: boolean | PersonaClub$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["personaClub"]>



  export type PersonaClubSelectScalar = {
    id?: boolean
    numeroDocumento?: boolean
    tipoDocumento?: boolean
    idMunicipio?: boolean
    nombres?: boolean
    apellidos?: boolean
    fechaNacimento?: boolean
    tipoRh?: boolean
    peso?: boolean
    altura?: boolean
    correo?: boolean
    numeroTelefono?: boolean
    tallaCamisa?: boolean
    tallaCalzado?: boolean
    tallaPantaloneta?: boolean
    genero?: boolean
    direccion?: boolean
  }

  export type PersonaClubOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numeroDocumento" | "tipoDocumento" | "idMunicipio" | "nombres" | "apellidos" | "fechaNacimento" | "tipoRh" | "peso" | "altura" | "correo" | "numeroTelefono" | "tallaCamisa" | "tallaCalzado" | "tallaPantaloneta" | "genero" | "direccion", ExtArgs["result"]["personaClub"]>
  export type PersonaClubInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipio?: boolean | MunicipioDefaultArgs<ExtArgs>
    entrenador?: boolean | PersonaClub$entrenadorArgs<ExtArgs>
    deportista?: boolean | PersonaClub$deportistaArgs<ExtArgs>
    usuario?: boolean | PersonaClub$usuarioArgs<ExtArgs>
  }

  export type $PersonaClubPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PersonaClub"
    objects: {
      municipio: Prisma.$MunicipioPayload<ExtArgs>
      entrenador: Prisma.$EntrenadorPayload<ExtArgs> | null
      deportista: Prisma.$DeportistaPayload<ExtArgs> | null
      usuario: Prisma.$UsuarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numeroDocumento: string
      tipoDocumento: string
      idMunicipio: number
      nombres: string
      apellidos: string
      fechaNacimento: Date | null
      tipoRh: string | null
      peso: number | null
      altura: number | null
      correo: string
      numeroTelefono: string
      tallaCamisa: string | null
      tallaCalzado: string | null
      tallaPantaloneta: string | null
      genero: string | null
      direccion: string | null
    }, ExtArgs["result"]["personaClub"]>
    composites: {}
  }

  type PersonaClubGetPayload<S extends boolean | null | undefined | PersonaClubDefaultArgs> = $Result.GetResult<Prisma.$PersonaClubPayload, S>

  type PersonaClubCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonaClubFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: PersonaClubCountAggregateInputType | true
    }

  export interface PersonaClubDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PersonaClub'], meta: { name: 'PersonaClub' } }
    /**
     * Find zero or one PersonaClub that matches the filter.
     * @param {PersonaClubFindUniqueArgs} args - Arguments to find a PersonaClub
     * @example
     * // Get one PersonaClub
     * const personaClub = await prisma.personaClub.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonaClubFindUniqueArgs>(args: SelectSubset<T, PersonaClubFindUniqueArgs<ExtArgs>>): Prisma__PersonaClubClient<$Result.GetResult<Prisma.$PersonaClubPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PersonaClub that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonaClubFindUniqueOrThrowArgs} args - Arguments to find a PersonaClub
     * @example
     * // Get one PersonaClub
     * const personaClub = await prisma.personaClub.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonaClubFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonaClubFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonaClubClient<$Result.GetResult<Prisma.$PersonaClubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonaClub that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaClubFindFirstArgs} args - Arguments to find a PersonaClub
     * @example
     * // Get one PersonaClub
     * const personaClub = await prisma.personaClub.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonaClubFindFirstArgs>(args?: SelectSubset<T, PersonaClubFindFirstArgs<ExtArgs>>): Prisma__PersonaClubClient<$Result.GetResult<Prisma.$PersonaClubPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonaClub that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaClubFindFirstOrThrowArgs} args - Arguments to find a PersonaClub
     * @example
     * // Get one PersonaClub
     * const personaClub = await prisma.personaClub.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonaClubFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonaClubFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonaClubClient<$Result.GetResult<Prisma.$PersonaClubPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PersonaClubs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaClubFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PersonaClubs
     * const personaClubs = await prisma.personaClub.findMany()
     * 
     * // Get first 10 PersonaClubs
     * const personaClubs = await prisma.personaClub.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personaClubWithIdOnly = await prisma.personaClub.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonaClubFindManyArgs>(args?: SelectSubset<T, PersonaClubFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonaClubPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PersonaClub.
     * @param {PersonaClubCreateArgs} args - Arguments to create a PersonaClub.
     * @example
     * // Create one PersonaClub
     * const PersonaClub = await prisma.personaClub.create({
     *   data: {
     *     // ... data to create a PersonaClub
     *   }
     * })
     * 
     */
    create<T extends PersonaClubCreateArgs>(args: SelectSubset<T, PersonaClubCreateArgs<ExtArgs>>): Prisma__PersonaClubClient<$Result.GetResult<Prisma.$PersonaClubPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PersonaClubs.
     * @param {PersonaClubCreateManyArgs} args - Arguments to create many PersonaClubs.
     * @example
     * // Create many PersonaClubs
     * const personaClub = await prisma.personaClub.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonaClubCreateManyArgs>(args?: SelectSubset<T, PersonaClubCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PersonaClub.
     * @param {PersonaClubDeleteArgs} args - Arguments to delete one PersonaClub.
     * @example
     * // Delete one PersonaClub
     * const PersonaClub = await prisma.personaClub.delete({
     *   where: {
     *     // ... filter to delete one PersonaClub
     *   }
     * })
     * 
     */
    delete<T extends PersonaClubDeleteArgs>(args: SelectSubset<T, PersonaClubDeleteArgs<ExtArgs>>): Prisma__PersonaClubClient<$Result.GetResult<Prisma.$PersonaClubPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PersonaClub.
     * @param {PersonaClubUpdateArgs} args - Arguments to update one PersonaClub.
     * @example
     * // Update one PersonaClub
     * const personaClub = await prisma.personaClub.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonaClubUpdateArgs>(args: SelectSubset<T, PersonaClubUpdateArgs<ExtArgs>>): Prisma__PersonaClubClient<$Result.GetResult<Prisma.$PersonaClubPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PersonaClubs.
     * @param {PersonaClubDeleteManyArgs} args - Arguments to filter PersonaClubs to delete.
     * @example
     * // Delete a few PersonaClubs
     * const { count } = await prisma.personaClub.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonaClubDeleteManyArgs>(args?: SelectSubset<T, PersonaClubDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonaClubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaClubUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PersonaClubs
     * const personaClub = await prisma.personaClub.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonaClubUpdateManyArgs>(args: SelectSubset<T, PersonaClubUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PersonaClub.
     * @param {PersonaClubUpsertArgs} args - Arguments to update or create a PersonaClub.
     * @example
     * // Update or create a PersonaClub
     * const personaClub = await prisma.personaClub.upsert({
     *   create: {
     *     // ... data to create a PersonaClub
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PersonaClub we want to update
     *   }
     * })
     */
    upsert<T extends PersonaClubUpsertArgs>(args: SelectSubset<T, PersonaClubUpsertArgs<ExtArgs>>): Prisma__PersonaClubClient<$Result.GetResult<Prisma.$PersonaClubPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PersonaClubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaClubCountArgs} args - Arguments to filter PersonaClubs to count.
     * @example
     * // Count the number of PersonaClubs
     * const count = await prisma.personaClub.count({
     *   where: {
     *     // ... the filter for the PersonaClubs we want to count
     *   }
     * })
    **/
    count<T extends PersonaClubCountArgs>(
      args?: Subset<T, PersonaClubCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonaClubCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PersonaClub.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaClubAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonaClubAggregateArgs>(args: Subset<T, PersonaClubAggregateArgs>): Prisma.PrismaPromise<GetPersonaClubAggregateType<T>>

    /**
     * Group by PersonaClub.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaClubGroupByArgs} args - Group by arguments.
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
      T extends PersonaClubGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonaClubGroupByArgs['orderBy'] }
        : { orderBy?: PersonaClubGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PersonaClubGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonaClubGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PersonaClub model
   */
  readonly fields: PersonaClubFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PersonaClub.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonaClubClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    municipio<T extends MunicipioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MunicipioDefaultArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    entrenador<T extends PersonaClub$entrenadorArgs<ExtArgs> = {}>(args?: Subset<T, PersonaClub$entrenadorArgs<ExtArgs>>): Prisma__EntrenadorClient<$Result.GetResult<Prisma.$EntrenadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    deportista<T extends PersonaClub$deportistaArgs<ExtArgs> = {}>(args?: Subset<T, PersonaClub$deportistaArgs<ExtArgs>>): Prisma__DeportistaClient<$Result.GetResult<Prisma.$DeportistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    usuario<T extends PersonaClub$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, PersonaClub$usuarioArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PersonaClub model
   */
  interface PersonaClubFieldRefs {
    readonly id: FieldRef<"PersonaClub", 'Int'>
    readonly numeroDocumento: FieldRef<"PersonaClub", 'String'>
    readonly tipoDocumento: FieldRef<"PersonaClub", 'String'>
    readonly idMunicipio: FieldRef<"PersonaClub", 'Int'>
    readonly nombres: FieldRef<"PersonaClub", 'String'>
    readonly apellidos: FieldRef<"PersonaClub", 'String'>
    readonly fechaNacimento: FieldRef<"PersonaClub", 'DateTime'>
    readonly tipoRh: FieldRef<"PersonaClub", 'String'>
    readonly peso: FieldRef<"PersonaClub", 'Float'>
    readonly altura: FieldRef<"PersonaClub", 'Float'>
    readonly correo: FieldRef<"PersonaClub", 'String'>
    readonly numeroTelefono: FieldRef<"PersonaClub", 'String'>
    readonly tallaCamisa: FieldRef<"PersonaClub", 'String'>
    readonly tallaCalzado: FieldRef<"PersonaClub", 'String'>
    readonly tallaPantaloneta: FieldRef<"PersonaClub", 'String'>
    readonly genero: FieldRef<"PersonaClub", 'String'>
    readonly direccion: FieldRef<"PersonaClub", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PersonaClub findUnique
   */
  export type PersonaClubFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonaClub
     */
    select?: PersonaClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonaClub
     */
    omit?: PersonaClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaClubInclude<ExtArgs> | null
    /**
     * Filter, which PersonaClub to fetch.
     */
    where: PersonaClubWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * PersonaClub findUniqueOrThrow
   */
  export type PersonaClubFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonaClub
     */
    select?: PersonaClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonaClub
     */
    omit?: PersonaClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaClubInclude<ExtArgs> | null
    /**
     * Filter, which PersonaClub to fetch.
     */
    where: PersonaClubWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * PersonaClub findFirst
   */
  export type PersonaClubFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonaClub
     */
    select?: PersonaClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonaClub
     */
    omit?: PersonaClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaClubInclude<ExtArgs> | null
    /**
     * Filter, which PersonaClub to fetch.
     */
    where?: PersonaClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonaClubs to fetch.
     */
    orderBy?: PersonaClubOrderByWithRelationInput | PersonaClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonaClubs.
     */
    cursor?: PersonaClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonaClubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonaClubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonaClubs.
     */
    distinct?: PersonaClubScalarFieldEnum | PersonaClubScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * PersonaClub findFirstOrThrow
   */
  export type PersonaClubFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonaClub
     */
    select?: PersonaClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonaClub
     */
    omit?: PersonaClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaClubInclude<ExtArgs> | null
    /**
     * Filter, which PersonaClub to fetch.
     */
    where?: PersonaClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonaClubs to fetch.
     */
    orderBy?: PersonaClubOrderByWithRelationInput | PersonaClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonaClubs.
     */
    cursor?: PersonaClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonaClubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonaClubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonaClubs.
     */
    distinct?: PersonaClubScalarFieldEnum | PersonaClubScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * PersonaClub findMany
   */
  export type PersonaClubFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonaClub
     */
    select?: PersonaClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonaClub
     */
    omit?: PersonaClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaClubInclude<ExtArgs> | null
    /**
     * Filter, which PersonaClubs to fetch.
     */
    where?: PersonaClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonaClubs to fetch.
     */
    orderBy?: PersonaClubOrderByWithRelationInput | PersonaClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PersonaClubs.
     */
    cursor?: PersonaClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonaClubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonaClubs.
     */
    skip?: number
    distinct?: PersonaClubScalarFieldEnum | PersonaClubScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * PersonaClub create
   */
  export type PersonaClubCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonaClub
     */
    select?: PersonaClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonaClub
     */
    omit?: PersonaClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaClubInclude<ExtArgs> | null
    /**
     * The data needed to create a PersonaClub.
     */
    data: XOR<PersonaClubCreateInput, PersonaClubUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * PersonaClub createMany
   */
  export type PersonaClubCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PersonaClubs.
     */
    data: PersonaClubCreateManyInput | PersonaClubCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PersonaClub update
   */
  export type PersonaClubUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonaClub
     */
    select?: PersonaClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonaClub
     */
    omit?: PersonaClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaClubInclude<ExtArgs> | null
    /**
     * The data needed to update a PersonaClub.
     */
    data: XOR<PersonaClubUpdateInput, PersonaClubUncheckedUpdateInput>
    /**
     * Choose, which PersonaClub to update.
     */
    where: PersonaClubWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * PersonaClub updateMany
   */
  export type PersonaClubUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PersonaClubs.
     */
    data: XOR<PersonaClubUpdateManyMutationInput, PersonaClubUncheckedUpdateManyInput>
    /**
     * Filter which PersonaClubs to update
     */
    where?: PersonaClubWhereInput
    /**
     * Limit how many PersonaClubs to update.
     */
    limit?: number
  }

  /**
   * PersonaClub upsert
   */
  export type PersonaClubUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonaClub
     */
    select?: PersonaClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonaClub
     */
    omit?: PersonaClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaClubInclude<ExtArgs> | null
    /**
     * The filter to search for the PersonaClub to update in case it exists.
     */
    where: PersonaClubWhereUniqueInput
    /**
     * In case the PersonaClub found by the `where` argument doesn't exist, create a new PersonaClub with this data.
     */
    create: XOR<PersonaClubCreateInput, PersonaClubUncheckedCreateInput>
    /**
     * In case the PersonaClub was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonaClubUpdateInput, PersonaClubUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * PersonaClub delete
   */
  export type PersonaClubDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonaClub
     */
    select?: PersonaClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonaClub
     */
    omit?: PersonaClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaClubInclude<ExtArgs> | null
    /**
     * Filter which PersonaClub to delete.
     */
    where: PersonaClubWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * PersonaClub deleteMany
   */
  export type PersonaClubDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonaClubs to delete
     */
    where?: PersonaClubWhereInput
    /**
     * Limit how many PersonaClubs to delete.
     */
    limit?: number
  }

  /**
   * PersonaClub.entrenador
   */
  export type PersonaClub$entrenadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenador
     */
    select?: EntrenadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenador
     */
    omit?: EntrenadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadorInclude<ExtArgs> | null
    where?: EntrenadorWhereInput
  }

  /**
   * PersonaClub.deportista
   */
  export type PersonaClub$deportistaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deportista
     */
    select?: DeportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deportista
     */
    omit?: DeportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeportistaInclude<ExtArgs> | null
    where?: DeportistaWhereInput
  }

  /**
   * PersonaClub.usuario
   */
  export type PersonaClub$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * PersonaClub without action
   */
  export type PersonaClubDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonaClub
     */
    select?: PersonaClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonaClub
     */
    omit?: PersonaClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaClubInclude<ExtArgs> | null
  }


  /**
   * Model ContactosEmergencia
   */

  export type AggregateContactosEmergencia = {
    _count: ContactosEmergenciaCountAggregateOutputType | null
    _avg: ContactosEmergenciaAvgAggregateOutputType | null
    _sum: ContactosEmergenciaSumAggregateOutputType | null
    _min: ContactosEmergenciaMinAggregateOutputType | null
    _max: ContactosEmergenciaMaxAggregateOutputType | null
  }

  export type ContactosEmergenciaAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactosEmergenciaSumAggregateOutputType = {
    id: number | null
  }

  export type ContactosEmergenciaMinAggregateOutputType = {
    id: number | null
    tipoDocumento: string | null
    numeroDocumento: string | null
    nombres: string | null
    apellidos: string | null
    correo: string | null
    telefono: string | null
  }

  export type ContactosEmergenciaMaxAggregateOutputType = {
    id: number | null
    tipoDocumento: string | null
    numeroDocumento: string | null
    nombres: string | null
    apellidos: string | null
    correo: string | null
    telefono: string | null
  }

  export type ContactosEmergenciaCountAggregateOutputType = {
    id: number
    tipoDocumento: number
    numeroDocumento: number
    nombres: number
    apellidos: number
    correo: number
    telefono: number
    _all: number
  }


  export type ContactosEmergenciaAvgAggregateInputType = {
    id?: true
  }

  export type ContactosEmergenciaSumAggregateInputType = {
    id?: true
  }

  export type ContactosEmergenciaMinAggregateInputType = {
    id?: true
    tipoDocumento?: true
    numeroDocumento?: true
    nombres?: true
    apellidos?: true
    correo?: true
    telefono?: true
  }

  export type ContactosEmergenciaMaxAggregateInputType = {
    id?: true
    tipoDocumento?: true
    numeroDocumento?: true
    nombres?: true
    apellidos?: true
    correo?: true
    telefono?: true
  }

  export type ContactosEmergenciaCountAggregateInputType = {
    id?: true
    tipoDocumento?: true
    numeroDocumento?: true
    nombres?: true
    apellidos?: true
    correo?: true
    telefono?: true
    _all?: true
  }

  export type ContactosEmergenciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactosEmergencia to aggregate.
     */
    where?: ContactosEmergenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactosEmergencias to fetch.
     */
    orderBy?: ContactosEmergenciaOrderByWithRelationInput | ContactosEmergenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactosEmergenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactosEmergencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactosEmergencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactosEmergencias
    **/
    _count?: true | ContactosEmergenciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactosEmergenciaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactosEmergenciaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactosEmergenciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactosEmergenciaMaxAggregateInputType
  }

  export type GetContactosEmergenciaAggregateType<T extends ContactosEmergenciaAggregateArgs> = {
        [P in keyof T & keyof AggregateContactosEmergencia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactosEmergencia[P]>
      : GetScalarType<T[P], AggregateContactosEmergencia[P]>
  }




  export type ContactosEmergenciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactosEmergenciaWhereInput
    orderBy?: ContactosEmergenciaOrderByWithAggregationInput | ContactosEmergenciaOrderByWithAggregationInput[]
    by: ContactosEmergenciaScalarFieldEnum[] | ContactosEmergenciaScalarFieldEnum
    having?: ContactosEmergenciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactosEmergenciaCountAggregateInputType | true
    _avg?: ContactosEmergenciaAvgAggregateInputType
    _sum?: ContactosEmergenciaSumAggregateInputType
    _min?: ContactosEmergenciaMinAggregateInputType
    _max?: ContactosEmergenciaMaxAggregateInputType
  }

  export type ContactosEmergenciaGroupByOutputType = {
    id: number
    tipoDocumento: string
    numeroDocumento: string | null
    nombres: string | null
    apellidos: string | null
    correo: string | null
    telefono: string | null
    _count: ContactosEmergenciaCountAggregateOutputType | null
    _avg: ContactosEmergenciaAvgAggregateOutputType | null
    _sum: ContactosEmergenciaSumAggregateOutputType | null
    _min: ContactosEmergenciaMinAggregateOutputType | null
    _max: ContactosEmergenciaMaxAggregateOutputType | null
  }

  type GetContactosEmergenciaGroupByPayload<T extends ContactosEmergenciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactosEmergenciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactosEmergenciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactosEmergenciaGroupByOutputType[P]>
            : GetScalarType<T[P], ContactosEmergenciaGroupByOutputType[P]>
        }
      >
    >


  export type ContactosEmergenciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipoDocumento?: boolean
    numeroDocumento?: boolean
    nombres?: boolean
    apellidos?: boolean
    correo?: boolean
    telefono?: boolean
    entrenador?: boolean | ContactosEmergencia$entrenadorArgs<ExtArgs>
  }, ExtArgs["result"]["contactosEmergencia"]>



  export type ContactosEmergenciaSelectScalar = {
    id?: boolean
    tipoDocumento?: boolean
    numeroDocumento?: boolean
    nombres?: boolean
    apellidos?: boolean
    correo?: boolean
    telefono?: boolean
  }

  export type ContactosEmergenciaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipoDocumento" | "numeroDocumento" | "nombres" | "apellidos" | "correo" | "telefono", ExtArgs["result"]["contactosEmergencia"]>
  export type ContactosEmergenciaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entrenador?: boolean | ContactosEmergencia$entrenadorArgs<ExtArgs>
  }

  export type $ContactosEmergenciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactosEmergencia"
    objects: {
      entrenador: Prisma.$EntrenadorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipoDocumento: string
      numeroDocumento: string | null
      nombres: string | null
      apellidos: string | null
      correo: string | null
      telefono: string | null
    }, ExtArgs["result"]["contactosEmergencia"]>
    composites: {}
  }

  type ContactosEmergenciaGetPayload<S extends boolean | null | undefined | ContactosEmergenciaDefaultArgs> = $Result.GetResult<Prisma.$ContactosEmergenciaPayload, S>

  type ContactosEmergenciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactosEmergenciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: ContactosEmergenciaCountAggregateInputType | true
    }

  export interface ContactosEmergenciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactosEmergencia'], meta: { name: 'ContactosEmergencia' } }
    /**
     * Find zero or one ContactosEmergencia that matches the filter.
     * @param {ContactosEmergenciaFindUniqueArgs} args - Arguments to find a ContactosEmergencia
     * @example
     * // Get one ContactosEmergencia
     * const contactosEmergencia = await prisma.contactosEmergencia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactosEmergenciaFindUniqueArgs>(args: SelectSubset<T, ContactosEmergenciaFindUniqueArgs<ExtArgs>>): Prisma__ContactosEmergenciaClient<$Result.GetResult<Prisma.$ContactosEmergenciaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactosEmergencia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactosEmergenciaFindUniqueOrThrowArgs} args - Arguments to find a ContactosEmergencia
     * @example
     * // Get one ContactosEmergencia
     * const contactosEmergencia = await prisma.contactosEmergencia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactosEmergenciaFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactosEmergenciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactosEmergenciaClient<$Result.GetResult<Prisma.$ContactosEmergenciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactosEmergencia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactosEmergenciaFindFirstArgs} args - Arguments to find a ContactosEmergencia
     * @example
     * // Get one ContactosEmergencia
     * const contactosEmergencia = await prisma.contactosEmergencia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactosEmergenciaFindFirstArgs>(args?: SelectSubset<T, ContactosEmergenciaFindFirstArgs<ExtArgs>>): Prisma__ContactosEmergenciaClient<$Result.GetResult<Prisma.$ContactosEmergenciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactosEmergencia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactosEmergenciaFindFirstOrThrowArgs} args - Arguments to find a ContactosEmergencia
     * @example
     * // Get one ContactosEmergencia
     * const contactosEmergencia = await prisma.contactosEmergencia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactosEmergenciaFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactosEmergenciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactosEmergenciaClient<$Result.GetResult<Prisma.$ContactosEmergenciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactosEmergencias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactosEmergenciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactosEmergencias
     * const contactosEmergencias = await prisma.contactosEmergencia.findMany()
     * 
     * // Get first 10 ContactosEmergencias
     * const contactosEmergencias = await prisma.contactosEmergencia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactosEmergenciaWithIdOnly = await prisma.contactosEmergencia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactosEmergenciaFindManyArgs>(args?: SelectSubset<T, ContactosEmergenciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactosEmergenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactosEmergencia.
     * @param {ContactosEmergenciaCreateArgs} args - Arguments to create a ContactosEmergencia.
     * @example
     * // Create one ContactosEmergencia
     * const ContactosEmergencia = await prisma.contactosEmergencia.create({
     *   data: {
     *     // ... data to create a ContactosEmergencia
     *   }
     * })
     * 
     */
    create<T extends ContactosEmergenciaCreateArgs>(args: SelectSubset<T, ContactosEmergenciaCreateArgs<ExtArgs>>): Prisma__ContactosEmergenciaClient<$Result.GetResult<Prisma.$ContactosEmergenciaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactosEmergencias.
     * @param {ContactosEmergenciaCreateManyArgs} args - Arguments to create many ContactosEmergencias.
     * @example
     * // Create many ContactosEmergencias
     * const contactosEmergencia = await prisma.contactosEmergencia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactosEmergenciaCreateManyArgs>(args?: SelectSubset<T, ContactosEmergenciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ContactosEmergencia.
     * @param {ContactosEmergenciaDeleteArgs} args - Arguments to delete one ContactosEmergencia.
     * @example
     * // Delete one ContactosEmergencia
     * const ContactosEmergencia = await prisma.contactosEmergencia.delete({
     *   where: {
     *     // ... filter to delete one ContactosEmergencia
     *   }
     * })
     * 
     */
    delete<T extends ContactosEmergenciaDeleteArgs>(args: SelectSubset<T, ContactosEmergenciaDeleteArgs<ExtArgs>>): Prisma__ContactosEmergenciaClient<$Result.GetResult<Prisma.$ContactosEmergenciaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactosEmergencia.
     * @param {ContactosEmergenciaUpdateArgs} args - Arguments to update one ContactosEmergencia.
     * @example
     * // Update one ContactosEmergencia
     * const contactosEmergencia = await prisma.contactosEmergencia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactosEmergenciaUpdateArgs>(args: SelectSubset<T, ContactosEmergenciaUpdateArgs<ExtArgs>>): Prisma__ContactosEmergenciaClient<$Result.GetResult<Prisma.$ContactosEmergenciaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactosEmergencias.
     * @param {ContactosEmergenciaDeleteManyArgs} args - Arguments to filter ContactosEmergencias to delete.
     * @example
     * // Delete a few ContactosEmergencias
     * const { count } = await prisma.contactosEmergencia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactosEmergenciaDeleteManyArgs>(args?: SelectSubset<T, ContactosEmergenciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactosEmergencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactosEmergenciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactosEmergencias
     * const contactosEmergencia = await prisma.contactosEmergencia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactosEmergenciaUpdateManyArgs>(args: SelectSubset<T, ContactosEmergenciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContactosEmergencia.
     * @param {ContactosEmergenciaUpsertArgs} args - Arguments to update or create a ContactosEmergencia.
     * @example
     * // Update or create a ContactosEmergencia
     * const contactosEmergencia = await prisma.contactosEmergencia.upsert({
     *   create: {
     *     // ... data to create a ContactosEmergencia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactosEmergencia we want to update
     *   }
     * })
     */
    upsert<T extends ContactosEmergenciaUpsertArgs>(args: SelectSubset<T, ContactosEmergenciaUpsertArgs<ExtArgs>>): Prisma__ContactosEmergenciaClient<$Result.GetResult<Prisma.$ContactosEmergenciaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactosEmergencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactosEmergenciaCountArgs} args - Arguments to filter ContactosEmergencias to count.
     * @example
     * // Count the number of ContactosEmergencias
     * const count = await prisma.contactosEmergencia.count({
     *   where: {
     *     // ... the filter for the ContactosEmergencias we want to count
     *   }
     * })
    **/
    count<T extends ContactosEmergenciaCountArgs>(
      args?: Subset<T, ContactosEmergenciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactosEmergenciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactosEmergencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactosEmergenciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactosEmergenciaAggregateArgs>(args: Subset<T, ContactosEmergenciaAggregateArgs>): Prisma.PrismaPromise<GetContactosEmergenciaAggregateType<T>>

    /**
     * Group by ContactosEmergencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactosEmergenciaGroupByArgs} args - Group by arguments.
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
      T extends ContactosEmergenciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactosEmergenciaGroupByArgs['orderBy'] }
        : { orderBy?: ContactosEmergenciaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ContactosEmergenciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactosEmergenciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactosEmergencia model
   */
  readonly fields: ContactosEmergenciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactosEmergencia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactosEmergenciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entrenador<T extends ContactosEmergencia$entrenadorArgs<ExtArgs> = {}>(args?: Subset<T, ContactosEmergencia$entrenadorArgs<ExtArgs>>): Prisma__EntrenadorClient<$Result.GetResult<Prisma.$EntrenadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContactosEmergencia model
   */
  interface ContactosEmergenciaFieldRefs {
    readonly id: FieldRef<"ContactosEmergencia", 'Int'>
    readonly tipoDocumento: FieldRef<"ContactosEmergencia", 'String'>
    readonly numeroDocumento: FieldRef<"ContactosEmergencia", 'String'>
    readonly nombres: FieldRef<"ContactosEmergencia", 'String'>
    readonly apellidos: FieldRef<"ContactosEmergencia", 'String'>
    readonly correo: FieldRef<"ContactosEmergencia", 'String'>
    readonly telefono: FieldRef<"ContactosEmergencia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ContactosEmergencia findUnique
   */
  export type ContactosEmergenciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactosEmergencia
     */
    select?: ContactosEmergenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactosEmergencia
     */
    omit?: ContactosEmergenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactosEmergenciaInclude<ExtArgs> | null
    /**
     * Filter, which ContactosEmergencia to fetch.
     */
    where: ContactosEmergenciaWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ContactosEmergencia findUniqueOrThrow
   */
  export type ContactosEmergenciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactosEmergencia
     */
    select?: ContactosEmergenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactosEmergencia
     */
    omit?: ContactosEmergenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactosEmergenciaInclude<ExtArgs> | null
    /**
     * Filter, which ContactosEmergencia to fetch.
     */
    where: ContactosEmergenciaWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ContactosEmergencia findFirst
   */
  export type ContactosEmergenciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactosEmergencia
     */
    select?: ContactosEmergenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactosEmergencia
     */
    omit?: ContactosEmergenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactosEmergenciaInclude<ExtArgs> | null
    /**
     * Filter, which ContactosEmergencia to fetch.
     */
    where?: ContactosEmergenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactosEmergencias to fetch.
     */
    orderBy?: ContactosEmergenciaOrderByWithRelationInput | ContactosEmergenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactosEmergencias.
     */
    cursor?: ContactosEmergenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactosEmergencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactosEmergencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactosEmergencias.
     */
    distinct?: ContactosEmergenciaScalarFieldEnum | ContactosEmergenciaScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ContactosEmergencia findFirstOrThrow
   */
  export type ContactosEmergenciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactosEmergencia
     */
    select?: ContactosEmergenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactosEmergencia
     */
    omit?: ContactosEmergenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactosEmergenciaInclude<ExtArgs> | null
    /**
     * Filter, which ContactosEmergencia to fetch.
     */
    where?: ContactosEmergenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactosEmergencias to fetch.
     */
    orderBy?: ContactosEmergenciaOrderByWithRelationInput | ContactosEmergenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactosEmergencias.
     */
    cursor?: ContactosEmergenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactosEmergencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactosEmergencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactosEmergencias.
     */
    distinct?: ContactosEmergenciaScalarFieldEnum | ContactosEmergenciaScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ContactosEmergencia findMany
   */
  export type ContactosEmergenciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactosEmergencia
     */
    select?: ContactosEmergenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactosEmergencia
     */
    omit?: ContactosEmergenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactosEmergenciaInclude<ExtArgs> | null
    /**
     * Filter, which ContactosEmergencias to fetch.
     */
    where?: ContactosEmergenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactosEmergencias to fetch.
     */
    orderBy?: ContactosEmergenciaOrderByWithRelationInput | ContactosEmergenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactosEmergencias.
     */
    cursor?: ContactosEmergenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactosEmergencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactosEmergencias.
     */
    skip?: number
    distinct?: ContactosEmergenciaScalarFieldEnum | ContactosEmergenciaScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ContactosEmergencia create
   */
  export type ContactosEmergenciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactosEmergencia
     */
    select?: ContactosEmergenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactosEmergencia
     */
    omit?: ContactosEmergenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactosEmergenciaInclude<ExtArgs> | null
    /**
     * The data needed to create a ContactosEmergencia.
     */
    data: XOR<ContactosEmergenciaCreateInput, ContactosEmergenciaUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ContactosEmergencia createMany
   */
  export type ContactosEmergenciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactosEmergencias.
     */
    data: ContactosEmergenciaCreateManyInput | ContactosEmergenciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactosEmergencia update
   */
  export type ContactosEmergenciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactosEmergencia
     */
    select?: ContactosEmergenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactosEmergencia
     */
    omit?: ContactosEmergenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactosEmergenciaInclude<ExtArgs> | null
    /**
     * The data needed to update a ContactosEmergencia.
     */
    data: XOR<ContactosEmergenciaUpdateInput, ContactosEmergenciaUncheckedUpdateInput>
    /**
     * Choose, which ContactosEmergencia to update.
     */
    where: ContactosEmergenciaWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ContactosEmergencia updateMany
   */
  export type ContactosEmergenciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactosEmergencias.
     */
    data: XOR<ContactosEmergenciaUpdateManyMutationInput, ContactosEmergenciaUncheckedUpdateManyInput>
    /**
     * Filter which ContactosEmergencias to update
     */
    where?: ContactosEmergenciaWhereInput
    /**
     * Limit how many ContactosEmergencias to update.
     */
    limit?: number
  }

  /**
   * ContactosEmergencia upsert
   */
  export type ContactosEmergenciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactosEmergencia
     */
    select?: ContactosEmergenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactosEmergencia
     */
    omit?: ContactosEmergenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactosEmergenciaInclude<ExtArgs> | null
    /**
     * The filter to search for the ContactosEmergencia to update in case it exists.
     */
    where: ContactosEmergenciaWhereUniqueInput
    /**
     * In case the ContactosEmergencia found by the `where` argument doesn't exist, create a new ContactosEmergencia with this data.
     */
    create: XOR<ContactosEmergenciaCreateInput, ContactosEmergenciaUncheckedCreateInput>
    /**
     * In case the ContactosEmergencia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactosEmergenciaUpdateInput, ContactosEmergenciaUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ContactosEmergencia delete
   */
  export type ContactosEmergenciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactosEmergencia
     */
    select?: ContactosEmergenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactosEmergencia
     */
    omit?: ContactosEmergenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactosEmergenciaInclude<ExtArgs> | null
    /**
     * Filter which ContactosEmergencia to delete.
     */
    where: ContactosEmergenciaWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ContactosEmergencia deleteMany
   */
  export type ContactosEmergenciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactosEmergencias to delete
     */
    where?: ContactosEmergenciaWhereInput
    /**
     * Limit how many ContactosEmergencias to delete.
     */
    limit?: number
  }

  /**
   * ContactosEmergencia.entrenador
   */
  export type ContactosEmergencia$entrenadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenador
     */
    select?: EntrenadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenador
     */
    omit?: EntrenadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadorInclude<ExtArgs> | null
    where?: EntrenadorWhereInput
  }

  /**
   * ContactosEmergencia without action
   */
  export type ContactosEmergenciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactosEmergencia
     */
    select?: ContactosEmergenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactosEmergencia
     */
    omit?: ContactosEmergenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactosEmergenciaInclude<ExtArgs> | null
  }


  /**
   * Model Entrenador
   */

  export type AggregateEntrenador = {
    _count: EntrenadorCountAggregateOutputType | null
    _avg: EntrenadorAvgAggregateOutputType | null
    _sum: EntrenadorSumAggregateOutputType | null
    _min: EntrenadorMinAggregateOutputType | null
    _max: EntrenadorMaxAggregateOutputType | null
  }

  export type EntrenadorAvgAggregateOutputType = {
    id: number | null
    idPersonaClub: number | null
    idContactoEmergencia: number | null
  }

  export type EntrenadorSumAggregateOutputType = {
    id: number | null
    idPersonaClub: number | null
    idContactoEmergencia: number | null
  }

  export type EntrenadorMinAggregateOutputType = {
    id: number | null
    idPersonaClub: number | null
    idContactoEmergencia: number | null
    fechaIngreso: Date | null
    activo: boolean | null
  }

  export type EntrenadorMaxAggregateOutputType = {
    id: number | null
    idPersonaClub: number | null
    idContactoEmergencia: number | null
    fechaIngreso: Date | null
    activo: boolean | null
  }

  export type EntrenadorCountAggregateOutputType = {
    id: number
    idPersonaClub: number
    idContactoEmergencia: number
    fechaIngreso: number
    activo: number
    _all: number
  }


  export type EntrenadorAvgAggregateInputType = {
    id?: true
    idPersonaClub?: true
    idContactoEmergencia?: true
  }

  export type EntrenadorSumAggregateInputType = {
    id?: true
    idPersonaClub?: true
    idContactoEmergencia?: true
  }

  export type EntrenadorMinAggregateInputType = {
    id?: true
    idPersonaClub?: true
    idContactoEmergencia?: true
    fechaIngreso?: true
    activo?: true
  }

  export type EntrenadorMaxAggregateInputType = {
    id?: true
    idPersonaClub?: true
    idContactoEmergencia?: true
    fechaIngreso?: true
    activo?: true
  }

  export type EntrenadorCountAggregateInputType = {
    id?: true
    idPersonaClub?: true
    idContactoEmergencia?: true
    fechaIngreso?: true
    activo?: true
    _all?: true
  }

  export type EntrenadorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entrenador to aggregate.
     */
    where?: EntrenadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entrenadors to fetch.
     */
    orderBy?: EntrenadorOrderByWithRelationInput | EntrenadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntrenadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entrenadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entrenadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Entrenadors
    **/
    _count?: true | EntrenadorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EntrenadorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EntrenadorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntrenadorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntrenadorMaxAggregateInputType
  }

  export type GetEntrenadorAggregateType<T extends EntrenadorAggregateArgs> = {
        [P in keyof T & keyof AggregateEntrenador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntrenador[P]>
      : GetScalarType<T[P], AggregateEntrenador[P]>
  }




  export type EntrenadorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntrenadorWhereInput
    orderBy?: EntrenadorOrderByWithAggregationInput | EntrenadorOrderByWithAggregationInput[]
    by: EntrenadorScalarFieldEnum[] | EntrenadorScalarFieldEnum
    having?: EntrenadorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntrenadorCountAggregateInputType | true
    _avg?: EntrenadorAvgAggregateInputType
    _sum?: EntrenadorSumAggregateInputType
    _min?: EntrenadorMinAggregateInputType
    _max?: EntrenadorMaxAggregateInputType
  }

  export type EntrenadorGroupByOutputType = {
    id: number
    idPersonaClub: number
    idContactoEmergencia: number | null
    fechaIngreso: Date | null
    activo: boolean | null
    _count: EntrenadorCountAggregateOutputType | null
    _avg: EntrenadorAvgAggregateOutputType | null
    _sum: EntrenadorSumAggregateOutputType | null
    _min: EntrenadorMinAggregateOutputType | null
    _max: EntrenadorMaxAggregateOutputType | null
  }

  type GetEntrenadorGroupByPayload<T extends EntrenadorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntrenadorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntrenadorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntrenadorGroupByOutputType[P]>
            : GetScalarType<T[P], EntrenadorGroupByOutputType[P]>
        }
      >
    >


  export type EntrenadorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idPersonaClub?: boolean
    idContactoEmergencia?: boolean
    fechaIngreso?: boolean
    activo?: boolean
    contactosEmergencia?: boolean | Entrenador$contactosEmergenciaArgs<ExtArgs>
    personaClub?: boolean | PersonaClubDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entrenador"]>



  export type EntrenadorSelectScalar = {
    id?: boolean
    idPersonaClub?: boolean
    idContactoEmergencia?: boolean
    fechaIngreso?: boolean
    activo?: boolean
  }

  export type EntrenadorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idPersonaClub" | "idContactoEmergencia" | "fechaIngreso" | "activo", ExtArgs["result"]["entrenador"]>
  export type EntrenadorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contactosEmergencia?: boolean | Entrenador$contactosEmergenciaArgs<ExtArgs>
    personaClub?: boolean | PersonaClubDefaultArgs<ExtArgs>
  }

  export type $EntrenadorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Entrenador"
    objects: {
      contactosEmergencia: Prisma.$ContactosEmergenciaPayload<ExtArgs> | null
      personaClub: Prisma.$PersonaClubPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idPersonaClub: number
      idContactoEmergencia: number | null
      fechaIngreso: Date | null
      activo: boolean | null
    }, ExtArgs["result"]["entrenador"]>
    composites: {}
  }

  type EntrenadorGetPayload<S extends boolean | null | undefined | EntrenadorDefaultArgs> = $Result.GetResult<Prisma.$EntrenadorPayload, S>

  type EntrenadorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EntrenadorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: EntrenadorCountAggregateInputType | true
    }

  export interface EntrenadorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Entrenador'], meta: { name: 'Entrenador' } }
    /**
     * Find zero or one Entrenador that matches the filter.
     * @param {EntrenadorFindUniqueArgs} args - Arguments to find a Entrenador
     * @example
     * // Get one Entrenador
     * const entrenador = await prisma.entrenador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntrenadorFindUniqueArgs>(args: SelectSubset<T, EntrenadorFindUniqueArgs<ExtArgs>>): Prisma__EntrenadorClient<$Result.GetResult<Prisma.$EntrenadorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entrenador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EntrenadorFindUniqueOrThrowArgs} args - Arguments to find a Entrenador
     * @example
     * // Get one Entrenador
     * const entrenador = await prisma.entrenador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntrenadorFindUniqueOrThrowArgs>(args: SelectSubset<T, EntrenadorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EntrenadorClient<$Result.GetResult<Prisma.$EntrenadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entrenador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrenadorFindFirstArgs} args - Arguments to find a Entrenador
     * @example
     * // Get one Entrenador
     * const entrenador = await prisma.entrenador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntrenadorFindFirstArgs>(args?: SelectSubset<T, EntrenadorFindFirstArgs<ExtArgs>>): Prisma__EntrenadorClient<$Result.GetResult<Prisma.$EntrenadorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entrenador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrenadorFindFirstOrThrowArgs} args - Arguments to find a Entrenador
     * @example
     * // Get one Entrenador
     * const entrenador = await prisma.entrenador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntrenadorFindFirstOrThrowArgs>(args?: SelectSubset<T, EntrenadorFindFirstOrThrowArgs<ExtArgs>>): Prisma__EntrenadorClient<$Result.GetResult<Prisma.$EntrenadorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entrenadors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrenadorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entrenadors
     * const entrenadors = await prisma.entrenador.findMany()
     * 
     * // Get first 10 Entrenadors
     * const entrenadors = await prisma.entrenador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entrenadorWithIdOnly = await prisma.entrenador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EntrenadorFindManyArgs>(args?: SelectSubset<T, EntrenadorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntrenadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entrenador.
     * @param {EntrenadorCreateArgs} args - Arguments to create a Entrenador.
     * @example
     * // Create one Entrenador
     * const Entrenador = await prisma.entrenador.create({
     *   data: {
     *     // ... data to create a Entrenador
     *   }
     * })
     * 
     */
    create<T extends EntrenadorCreateArgs>(args: SelectSubset<T, EntrenadorCreateArgs<ExtArgs>>): Prisma__EntrenadorClient<$Result.GetResult<Prisma.$EntrenadorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entrenadors.
     * @param {EntrenadorCreateManyArgs} args - Arguments to create many Entrenadors.
     * @example
     * // Create many Entrenadors
     * const entrenador = await prisma.entrenador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EntrenadorCreateManyArgs>(args?: SelectSubset<T, EntrenadorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Entrenador.
     * @param {EntrenadorDeleteArgs} args - Arguments to delete one Entrenador.
     * @example
     * // Delete one Entrenador
     * const Entrenador = await prisma.entrenador.delete({
     *   where: {
     *     // ... filter to delete one Entrenador
     *   }
     * })
     * 
     */
    delete<T extends EntrenadorDeleteArgs>(args: SelectSubset<T, EntrenadorDeleteArgs<ExtArgs>>): Prisma__EntrenadorClient<$Result.GetResult<Prisma.$EntrenadorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entrenador.
     * @param {EntrenadorUpdateArgs} args - Arguments to update one Entrenador.
     * @example
     * // Update one Entrenador
     * const entrenador = await prisma.entrenador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EntrenadorUpdateArgs>(args: SelectSubset<T, EntrenadorUpdateArgs<ExtArgs>>): Prisma__EntrenadorClient<$Result.GetResult<Prisma.$EntrenadorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entrenadors.
     * @param {EntrenadorDeleteManyArgs} args - Arguments to filter Entrenadors to delete.
     * @example
     * // Delete a few Entrenadors
     * const { count } = await prisma.entrenador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EntrenadorDeleteManyArgs>(args?: SelectSubset<T, EntrenadorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entrenadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrenadorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entrenadors
     * const entrenador = await prisma.entrenador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EntrenadorUpdateManyArgs>(args: SelectSubset<T, EntrenadorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Entrenador.
     * @param {EntrenadorUpsertArgs} args - Arguments to update or create a Entrenador.
     * @example
     * // Update or create a Entrenador
     * const entrenador = await prisma.entrenador.upsert({
     *   create: {
     *     // ... data to create a Entrenador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entrenador we want to update
     *   }
     * })
     */
    upsert<T extends EntrenadorUpsertArgs>(args: SelectSubset<T, EntrenadorUpsertArgs<ExtArgs>>): Prisma__EntrenadorClient<$Result.GetResult<Prisma.$EntrenadorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Entrenadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrenadorCountArgs} args - Arguments to filter Entrenadors to count.
     * @example
     * // Count the number of Entrenadors
     * const count = await prisma.entrenador.count({
     *   where: {
     *     // ... the filter for the Entrenadors we want to count
     *   }
     * })
    **/
    count<T extends EntrenadorCountArgs>(
      args?: Subset<T, EntrenadorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntrenadorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entrenador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrenadorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EntrenadorAggregateArgs>(args: Subset<T, EntrenadorAggregateArgs>): Prisma.PrismaPromise<GetEntrenadorAggregateType<T>>

    /**
     * Group by Entrenador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrenadorGroupByArgs} args - Group by arguments.
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
      T extends EntrenadorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntrenadorGroupByArgs['orderBy'] }
        : { orderBy?: EntrenadorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EntrenadorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntrenadorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Entrenador model
   */
  readonly fields: EntrenadorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Entrenador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntrenadorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contactosEmergencia<T extends Entrenador$contactosEmergenciaArgs<ExtArgs> = {}>(args?: Subset<T, Entrenador$contactosEmergenciaArgs<ExtArgs>>): Prisma__ContactosEmergenciaClient<$Result.GetResult<Prisma.$ContactosEmergenciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    personaClub<T extends PersonaClubDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonaClubDefaultArgs<ExtArgs>>): Prisma__PersonaClubClient<$Result.GetResult<Prisma.$PersonaClubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Entrenador model
   */
  interface EntrenadorFieldRefs {
    readonly id: FieldRef<"Entrenador", 'Int'>
    readonly idPersonaClub: FieldRef<"Entrenador", 'Int'>
    readonly idContactoEmergencia: FieldRef<"Entrenador", 'Int'>
    readonly fechaIngreso: FieldRef<"Entrenador", 'DateTime'>
    readonly activo: FieldRef<"Entrenador", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Entrenador findUnique
   */
  export type EntrenadorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenador
     */
    select?: EntrenadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenador
     */
    omit?: EntrenadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadorInclude<ExtArgs> | null
    /**
     * Filter, which Entrenador to fetch.
     */
    where: EntrenadorWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Entrenador findUniqueOrThrow
   */
  export type EntrenadorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenador
     */
    select?: EntrenadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenador
     */
    omit?: EntrenadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadorInclude<ExtArgs> | null
    /**
     * Filter, which Entrenador to fetch.
     */
    where: EntrenadorWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Entrenador findFirst
   */
  export type EntrenadorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenador
     */
    select?: EntrenadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenador
     */
    omit?: EntrenadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadorInclude<ExtArgs> | null
    /**
     * Filter, which Entrenador to fetch.
     */
    where?: EntrenadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entrenadors to fetch.
     */
    orderBy?: EntrenadorOrderByWithRelationInput | EntrenadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entrenadors.
     */
    cursor?: EntrenadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entrenadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entrenadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entrenadors.
     */
    distinct?: EntrenadorScalarFieldEnum | EntrenadorScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Entrenador findFirstOrThrow
   */
  export type EntrenadorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenador
     */
    select?: EntrenadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenador
     */
    omit?: EntrenadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadorInclude<ExtArgs> | null
    /**
     * Filter, which Entrenador to fetch.
     */
    where?: EntrenadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entrenadors to fetch.
     */
    orderBy?: EntrenadorOrderByWithRelationInput | EntrenadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entrenadors.
     */
    cursor?: EntrenadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entrenadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entrenadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entrenadors.
     */
    distinct?: EntrenadorScalarFieldEnum | EntrenadorScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Entrenador findMany
   */
  export type EntrenadorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenador
     */
    select?: EntrenadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenador
     */
    omit?: EntrenadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadorInclude<ExtArgs> | null
    /**
     * Filter, which Entrenadors to fetch.
     */
    where?: EntrenadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entrenadors to fetch.
     */
    orderBy?: EntrenadorOrderByWithRelationInput | EntrenadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Entrenadors.
     */
    cursor?: EntrenadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entrenadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entrenadors.
     */
    skip?: number
    distinct?: EntrenadorScalarFieldEnum | EntrenadorScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Entrenador create
   */
  export type EntrenadorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenador
     */
    select?: EntrenadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenador
     */
    omit?: EntrenadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadorInclude<ExtArgs> | null
    /**
     * The data needed to create a Entrenador.
     */
    data: XOR<EntrenadorCreateInput, EntrenadorUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Entrenador createMany
   */
  export type EntrenadorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Entrenadors.
     */
    data: EntrenadorCreateManyInput | EntrenadorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entrenador update
   */
  export type EntrenadorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenador
     */
    select?: EntrenadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenador
     */
    omit?: EntrenadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadorInclude<ExtArgs> | null
    /**
     * The data needed to update a Entrenador.
     */
    data: XOR<EntrenadorUpdateInput, EntrenadorUncheckedUpdateInput>
    /**
     * Choose, which Entrenador to update.
     */
    where: EntrenadorWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Entrenador updateMany
   */
  export type EntrenadorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Entrenadors.
     */
    data: XOR<EntrenadorUpdateManyMutationInput, EntrenadorUncheckedUpdateManyInput>
    /**
     * Filter which Entrenadors to update
     */
    where?: EntrenadorWhereInput
    /**
     * Limit how many Entrenadors to update.
     */
    limit?: number
  }

  /**
   * Entrenador upsert
   */
  export type EntrenadorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenador
     */
    select?: EntrenadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenador
     */
    omit?: EntrenadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadorInclude<ExtArgs> | null
    /**
     * The filter to search for the Entrenador to update in case it exists.
     */
    where: EntrenadorWhereUniqueInput
    /**
     * In case the Entrenador found by the `where` argument doesn't exist, create a new Entrenador with this data.
     */
    create: XOR<EntrenadorCreateInput, EntrenadorUncheckedCreateInput>
    /**
     * In case the Entrenador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntrenadorUpdateInput, EntrenadorUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Entrenador delete
   */
  export type EntrenadorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenador
     */
    select?: EntrenadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenador
     */
    omit?: EntrenadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadorInclude<ExtArgs> | null
    /**
     * Filter which Entrenador to delete.
     */
    where: EntrenadorWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Entrenador deleteMany
   */
  export type EntrenadorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entrenadors to delete
     */
    where?: EntrenadorWhereInput
    /**
     * Limit how many Entrenadors to delete.
     */
    limit?: number
  }

  /**
   * Entrenador.contactosEmergencia
   */
  export type Entrenador$contactosEmergenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactosEmergencia
     */
    select?: ContactosEmergenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactosEmergencia
     */
    omit?: ContactosEmergenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactosEmergenciaInclude<ExtArgs> | null
    where?: ContactosEmergenciaWhereInput
  }

  /**
   * Entrenador without action
   */
  export type EntrenadorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenador
     */
    select?: EntrenadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenador
     */
    omit?: EntrenadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadorInclude<ExtArgs> | null
  }


  /**
   * Model Tutor
   */

  export type AggregateTutor = {
    _count: TutorCountAggregateOutputType | null
    _avg: TutorAvgAggregateOutputType | null
    _sum: TutorSumAggregateOutputType | null
    _min: TutorMinAggregateOutputType | null
    _max: TutorMaxAggregateOutputType | null
  }

  export type TutorAvgAggregateOutputType = {
    id: number | null
  }

  export type TutorSumAggregateOutputType = {
    id: number | null
  }

  export type TutorMinAggregateOutputType = {
    id: number | null
    tipoDocumento: string | null
    numeroDocumento: string | null
    nombres: string | null
    apellidos: string | null
    correo: string | null
    telefono: string | null
  }

  export type TutorMaxAggregateOutputType = {
    id: number | null
    tipoDocumento: string | null
    numeroDocumento: string | null
    nombres: string | null
    apellidos: string | null
    correo: string | null
    telefono: string | null
  }

  export type TutorCountAggregateOutputType = {
    id: number
    tipoDocumento: number
    numeroDocumento: number
    nombres: number
    apellidos: number
    correo: number
    telefono: number
    _all: number
  }


  export type TutorAvgAggregateInputType = {
    id?: true
  }

  export type TutorSumAggregateInputType = {
    id?: true
  }

  export type TutorMinAggregateInputType = {
    id?: true
    tipoDocumento?: true
    numeroDocumento?: true
    nombres?: true
    apellidos?: true
    correo?: true
    telefono?: true
  }

  export type TutorMaxAggregateInputType = {
    id?: true
    tipoDocumento?: true
    numeroDocumento?: true
    nombres?: true
    apellidos?: true
    correo?: true
    telefono?: true
  }

  export type TutorCountAggregateInputType = {
    id?: true
    tipoDocumento?: true
    numeroDocumento?: true
    nombres?: true
    apellidos?: true
    correo?: true
    telefono?: true
    _all?: true
  }

  export type TutorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tutor to aggregate.
     */
    where?: TutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tutors to fetch.
     */
    orderBy?: TutorOrderByWithRelationInput | TutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tutors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tutors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tutors
    **/
    _count?: true | TutorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TutorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TutorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TutorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TutorMaxAggregateInputType
  }

  export type GetTutorAggregateType<T extends TutorAggregateArgs> = {
        [P in keyof T & keyof AggregateTutor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTutor[P]>
      : GetScalarType<T[P], AggregateTutor[P]>
  }




  export type TutorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TutorWhereInput
    orderBy?: TutorOrderByWithAggregationInput | TutorOrderByWithAggregationInput[]
    by: TutorScalarFieldEnum[] | TutorScalarFieldEnum
    having?: TutorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TutorCountAggregateInputType | true
    _avg?: TutorAvgAggregateInputType
    _sum?: TutorSumAggregateInputType
    _min?: TutorMinAggregateInputType
    _max?: TutorMaxAggregateInputType
  }

  export type TutorGroupByOutputType = {
    id: number
    tipoDocumento: string
    numeroDocumento: string | null
    nombres: string | null
    apellidos: string | null
    correo: string | null
    telefono: string | null
    _count: TutorCountAggregateOutputType | null
    _avg: TutorAvgAggregateOutputType | null
    _sum: TutorSumAggregateOutputType | null
    _min: TutorMinAggregateOutputType | null
    _max: TutorMaxAggregateOutputType | null
  }

  type GetTutorGroupByPayload<T extends TutorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TutorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TutorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TutorGroupByOutputType[P]>
            : GetScalarType<T[P], TutorGroupByOutputType[P]>
        }
      >
    >


  export type TutorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipoDocumento?: boolean
    numeroDocumento?: boolean
    nombres?: boolean
    apellidos?: boolean
    correo?: boolean
    telefono?: boolean
    deportista?: boolean | Tutor$deportistaArgs<ExtArgs>
  }, ExtArgs["result"]["tutor"]>



  export type TutorSelectScalar = {
    id?: boolean
    tipoDocumento?: boolean
    numeroDocumento?: boolean
    nombres?: boolean
    apellidos?: boolean
    correo?: boolean
    telefono?: boolean
  }

  export type TutorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipoDocumento" | "numeroDocumento" | "nombres" | "apellidos" | "correo" | "telefono", ExtArgs["result"]["tutor"]>
  export type TutorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deportista?: boolean | Tutor$deportistaArgs<ExtArgs>
  }

  export type $TutorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tutor"
    objects: {
      deportista: Prisma.$DeportistaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipoDocumento: string
      numeroDocumento: string | null
      nombres: string | null
      apellidos: string | null
      correo: string | null
      telefono: string | null
    }, ExtArgs["result"]["tutor"]>
    composites: {}
  }

  type TutorGetPayload<S extends boolean | null | undefined | TutorDefaultArgs> = $Result.GetResult<Prisma.$TutorPayload, S>

  type TutorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TutorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: TutorCountAggregateInputType | true
    }

  export interface TutorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tutor'], meta: { name: 'Tutor' } }
    /**
     * Find zero or one Tutor that matches the filter.
     * @param {TutorFindUniqueArgs} args - Arguments to find a Tutor
     * @example
     * // Get one Tutor
     * const tutor = await prisma.tutor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TutorFindUniqueArgs>(args: SelectSubset<T, TutorFindUniqueArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tutor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TutorFindUniqueOrThrowArgs} args - Arguments to find a Tutor
     * @example
     * // Get one Tutor
     * const tutor = await prisma.tutor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TutorFindUniqueOrThrowArgs>(args: SelectSubset<T, TutorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tutor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorFindFirstArgs} args - Arguments to find a Tutor
     * @example
     * // Get one Tutor
     * const tutor = await prisma.tutor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TutorFindFirstArgs>(args?: SelectSubset<T, TutorFindFirstArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tutor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorFindFirstOrThrowArgs} args - Arguments to find a Tutor
     * @example
     * // Get one Tutor
     * const tutor = await prisma.tutor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TutorFindFirstOrThrowArgs>(args?: SelectSubset<T, TutorFindFirstOrThrowArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tutors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tutors
     * const tutors = await prisma.tutor.findMany()
     * 
     * // Get first 10 Tutors
     * const tutors = await prisma.tutor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tutorWithIdOnly = await prisma.tutor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TutorFindManyArgs>(args?: SelectSubset<T, TutorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tutor.
     * @param {TutorCreateArgs} args - Arguments to create a Tutor.
     * @example
     * // Create one Tutor
     * const Tutor = await prisma.tutor.create({
     *   data: {
     *     // ... data to create a Tutor
     *   }
     * })
     * 
     */
    create<T extends TutorCreateArgs>(args: SelectSubset<T, TutorCreateArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tutors.
     * @param {TutorCreateManyArgs} args - Arguments to create many Tutors.
     * @example
     * // Create many Tutors
     * const tutor = await prisma.tutor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TutorCreateManyArgs>(args?: SelectSubset<T, TutorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tutor.
     * @param {TutorDeleteArgs} args - Arguments to delete one Tutor.
     * @example
     * // Delete one Tutor
     * const Tutor = await prisma.tutor.delete({
     *   where: {
     *     // ... filter to delete one Tutor
     *   }
     * })
     * 
     */
    delete<T extends TutorDeleteArgs>(args: SelectSubset<T, TutorDeleteArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tutor.
     * @param {TutorUpdateArgs} args - Arguments to update one Tutor.
     * @example
     * // Update one Tutor
     * const tutor = await prisma.tutor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TutorUpdateArgs>(args: SelectSubset<T, TutorUpdateArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tutors.
     * @param {TutorDeleteManyArgs} args - Arguments to filter Tutors to delete.
     * @example
     * // Delete a few Tutors
     * const { count } = await prisma.tutor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TutorDeleteManyArgs>(args?: SelectSubset<T, TutorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tutors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tutors
     * const tutor = await prisma.tutor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TutorUpdateManyArgs>(args: SelectSubset<T, TutorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tutor.
     * @param {TutorUpsertArgs} args - Arguments to update or create a Tutor.
     * @example
     * // Update or create a Tutor
     * const tutor = await prisma.tutor.upsert({
     *   create: {
     *     // ... data to create a Tutor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tutor we want to update
     *   }
     * })
     */
    upsert<T extends TutorUpsertArgs>(args: SelectSubset<T, TutorUpsertArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tutors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorCountArgs} args - Arguments to filter Tutors to count.
     * @example
     * // Count the number of Tutors
     * const count = await prisma.tutor.count({
     *   where: {
     *     // ... the filter for the Tutors we want to count
     *   }
     * })
    **/
    count<T extends TutorCountArgs>(
      args?: Subset<T, TutorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TutorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tutor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TutorAggregateArgs>(args: Subset<T, TutorAggregateArgs>): Prisma.PrismaPromise<GetTutorAggregateType<T>>

    /**
     * Group by Tutor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorGroupByArgs} args - Group by arguments.
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
      T extends TutorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TutorGroupByArgs['orderBy'] }
        : { orderBy?: TutorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TutorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTutorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tutor model
   */
  readonly fields: TutorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tutor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TutorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deportista<T extends Tutor$deportistaArgs<ExtArgs> = {}>(args?: Subset<T, Tutor$deportistaArgs<ExtArgs>>): Prisma__DeportistaClient<$Result.GetResult<Prisma.$DeportistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tutor model
   */
  interface TutorFieldRefs {
    readonly id: FieldRef<"Tutor", 'Int'>
    readonly tipoDocumento: FieldRef<"Tutor", 'String'>
    readonly numeroDocumento: FieldRef<"Tutor", 'String'>
    readonly nombres: FieldRef<"Tutor", 'String'>
    readonly apellidos: FieldRef<"Tutor", 'String'>
    readonly correo: FieldRef<"Tutor", 'String'>
    readonly telefono: FieldRef<"Tutor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tutor findUnique
   */
  export type TutorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * Filter, which Tutor to fetch.
     */
    where: TutorWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Tutor findUniqueOrThrow
   */
  export type TutorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * Filter, which Tutor to fetch.
     */
    where: TutorWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Tutor findFirst
   */
  export type TutorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * Filter, which Tutor to fetch.
     */
    where?: TutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tutors to fetch.
     */
    orderBy?: TutorOrderByWithRelationInput | TutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tutors.
     */
    cursor?: TutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tutors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tutors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tutors.
     */
    distinct?: TutorScalarFieldEnum | TutorScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Tutor findFirstOrThrow
   */
  export type TutorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * Filter, which Tutor to fetch.
     */
    where?: TutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tutors to fetch.
     */
    orderBy?: TutorOrderByWithRelationInput | TutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tutors.
     */
    cursor?: TutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tutors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tutors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tutors.
     */
    distinct?: TutorScalarFieldEnum | TutorScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Tutor findMany
   */
  export type TutorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * Filter, which Tutors to fetch.
     */
    where?: TutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tutors to fetch.
     */
    orderBy?: TutorOrderByWithRelationInput | TutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tutors.
     */
    cursor?: TutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tutors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tutors.
     */
    skip?: number
    distinct?: TutorScalarFieldEnum | TutorScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Tutor create
   */
  export type TutorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * The data needed to create a Tutor.
     */
    data: XOR<TutorCreateInput, TutorUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Tutor createMany
   */
  export type TutorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tutors.
     */
    data: TutorCreateManyInput | TutorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tutor update
   */
  export type TutorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * The data needed to update a Tutor.
     */
    data: XOR<TutorUpdateInput, TutorUncheckedUpdateInput>
    /**
     * Choose, which Tutor to update.
     */
    where: TutorWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Tutor updateMany
   */
  export type TutorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tutors.
     */
    data: XOR<TutorUpdateManyMutationInput, TutorUncheckedUpdateManyInput>
    /**
     * Filter which Tutors to update
     */
    where?: TutorWhereInput
    /**
     * Limit how many Tutors to update.
     */
    limit?: number
  }

  /**
   * Tutor upsert
   */
  export type TutorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * The filter to search for the Tutor to update in case it exists.
     */
    where: TutorWhereUniqueInput
    /**
     * In case the Tutor found by the `where` argument doesn't exist, create a new Tutor with this data.
     */
    create: XOR<TutorCreateInput, TutorUncheckedCreateInput>
    /**
     * In case the Tutor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TutorUpdateInput, TutorUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Tutor delete
   */
  export type TutorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * Filter which Tutor to delete.
     */
    where: TutorWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Tutor deleteMany
   */
  export type TutorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tutors to delete
     */
    where?: TutorWhereInput
    /**
     * Limit how many Tutors to delete.
     */
    limit?: number
  }

  /**
   * Tutor.deportista
   */
  export type Tutor$deportistaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deportista
     */
    select?: DeportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deportista
     */
    omit?: DeportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeportistaInclude<ExtArgs> | null
    where?: DeportistaWhereInput
  }

  /**
   * Tutor without action
   */
  export type TutorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
  }


  /**
   * Model Deportista
   */

  export type AggregateDeportista = {
    _count: DeportistaCountAggregateOutputType | null
    _avg: DeportistaAvgAggregateOutputType | null
    _sum: DeportistaSumAggregateOutputType | null
    _min: DeportistaMinAggregateOutputType | null
    _max: DeportistaMaxAggregateOutputType | null
  }

  export type DeportistaAvgAggregateOutputType = {
    id: number | null
    idTutor: number | null
    idPersonaClub: number | null
  }

  export type DeportistaSumAggregateOutputType = {
    id: number | null
    idTutor: number | null
    idPersonaClub: number | null
  }

  export type DeportistaMinAggregateOutputType = {
    id: number | null
    idTutor: number | null
    idPersonaClub: number | null
    categoria: string | null
    activo: boolean | null
  }

  export type DeportistaMaxAggregateOutputType = {
    id: number | null
    idTutor: number | null
    idPersonaClub: number | null
    categoria: string | null
    activo: boolean | null
  }

  export type DeportistaCountAggregateOutputType = {
    id: number
    idTutor: number
    idPersonaClub: number
    categoria: number
    activo: number
    _all: number
  }


  export type DeportistaAvgAggregateInputType = {
    id?: true
    idTutor?: true
    idPersonaClub?: true
  }

  export type DeportistaSumAggregateInputType = {
    id?: true
    idTutor?: true
    idPersonaClub?: true
  }

  export type DeportistaMinAggregateInputType = {
    id?: true
    idTutor?: true
    idPersonaClub?: true
    categoria?: true
    activo?: true
  }

  export type DeportistaMaxAggregateInputType = {
    id?: true
    idTutor?: true
    idPersonaClub?: true
    categoria?: true
    activo?: true
  }

  export type DeportistaCountAggregateInputType = {
    id?: true
    idTutor?: true
    idPersonaClub?: true
    categoria?: true
    activo?: true
    _all?: true
  }

  export type DeportistaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deportista to aggregate.
     */
    where?: DeportistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deportistas to fetch.
     */
    orderBy?: DeportistaOrderByWithRelationInput | DeportistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeportistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deportistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deportistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deportistas
    **/
    _count?: true | DeportistaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeportistaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeportistaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeportistaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeportistaMaxAggregateInputType
  }

  export type GetDeportistaAggregateType<T extends DeportistaAggregateArgs> = {
        [P in keyof T & keyof AggregateDeportista]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeportista[P]>
      : GetScalarType<T[P], AggregateDeportista[P]>
  }




  export type DeportistaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeportistaWhereInput
    orderBy?: DeportistaOrderByWithAggregationInput | DeportistaOrderByWithAggregationInput[]
    by: DeportistaScalarFieldEnum[] | DeportistaScalarFieldEnum
    having?: DeportistaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeportistaCountAggregateInputType | true
    _avg?: DeportistaAvgAggregateInputType
    _sum?: DeportistaSumAggregateInputType
    _min?: DeportistaMinAggregateInputType
    _max?: DeportistaMaxAggregateInputType
  }

  export type DeportistaGroupByOutputType = {
    id: number
    idTutor: number | null
    idPersonaClub: number
    categoria: string
    activo: boolean | null
    _count: DeportistaCountAggregateOutputType | null
    _avg: DeportistaAvgAggregateOutputType | null
    _sum: DeportistaSumAggregateOutputType | null
    _min: DeportistaMinAggregateOutputType | null
    _max: DeportistaMaxAggregateOutputType | null
  }

  type GetDeportistaGroupByPayload<T extends DeportistaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeportistaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeportistaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeportistaGroupByOutputType[P]>
            : GetScalarType<T[P], DeportistaGroupByOutputType[P]>
        }
      >
    >


  export type DeportistaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idTutor?: boolean
    idPersonaClub?: boolean
    categoria?: boolean
    activo?: boolean
    tutor?: boolean | Deportista$tutorArgs<ExtArgs>
    personaClub?: boolean | PersonaClubDefaultArgs<ExtArgs>
    desercionDeportista?: boolean | Deportista$desercionDeportistaArgs<ExtArgs>
    pagosDeportista?: boolean | Deportista$pagosDeportistaArgs<ExtArgs>
    _count?: boolean | DeportistaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deportista"]>



  export type DeportistaSelectScalar = {
    id?: boolean
    idTutor?: boolean
    idPersonaClub?: boolean
    categoria?: boolean
    activo?: boolean
  }

  export type DeportistaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idTutor" | "idPersonaClub" | "categoria" | "activo", ExtArgs["result"]["deportista"]>
  export type DeportistaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | Deportista$tutorArgs<ExtArgs>
    personaClub?: boolean | PersonaClubDefaultArgs<ExtArgs>
    desercionDeportista?: boolean | Deportista$desercionDeportistaArgs<ExtArgs>
    pagosDeportista?: boolean | Deportista$pagosDeportistaArgs<ExtArgs>
    _count?: boolean | DeportistaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DeportistaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deportista"
    objects: {
      tutor: Prisma.$TutorPayload<ExtArgs> | null
      personaClub: Prisma.$PersonaClubPayload<ExtArgs>
      desercionDeportista: Prisma.$DesercionDeportistaPayload<ExtArgs> | null
      pagosDeportista: Prisma.$PagoDeportistaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idTutor: number | null
      idPersonaClub: number
      categoria: string
      activo: boolean | null
    }, ExtArgs["result"]["deportista"]>
    composites: {}
  }

  type DeportistaGetPayload<S extends boolean | null | undefined | DeportistaDefaultArgs> = $Result.GetResult<Prisma.$DeportistaPayload, S>

  type DeportistaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeportistaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: DeportistaCountAggregateInputType | true
    }

  export interface DeportistaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deportista'], meta: { name: 'Deportista' } }
    /**
     * Find zero or one Deportista that matches the filter.
     * @param {DeportistaFindUniqueArgs} args - Arguments to find a Deportista
     * @example
     * // Get one Deportista
     * const deportista = await prisma.deportista.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeportistaFindUniqueArgs>(args: SelectSubset<T, DeportistaFindUniqueArgs<ExtArgs>>): Prisma__DeportistaClient<$Result.GetResult<Prisma.$DeportistaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Deportista that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeportistaFindUniqueOrThrowArgs} args - Arguments to find a Deportista
     * @example
     * // Get one Deportista
     * const deportista = await prisma.deportista.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeportistaFindUniqueOrThrowArgs>(args: SelectSubset<T, DeportistaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeportistaClient<$Result.GetResult<Prisma.$DeportistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deportista that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeportistaFindFirstArgs} args - Arguments to find a Deportista
     * @example
     * // Get one Deportista
     * const deportista = await prisma.deportista.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeportistaFindFirstArgs>(args?: SelectSubset<T, DeportistaFindFirstArgs<ExtArgs>>): Prisma__DeportistaClient<$Result.GetResult<Prisma.$DeportistaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deportista that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeportistaFindFirstOrThrowArgs} args - Arguments to find a Deportista
     * @example
     * // Get one Deportista
     * const deportista = await prisma.deportista.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeportistaFindFirstOrThrowArgs>(args?: SelectSubset<T, DeportistaFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeportistaClient<$Result.GetResult<Prisma.$DeportistaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deportistas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeportistaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deportistas
     * const deportistas = await prisma.deportista.findMany()
     * 
     * // Get first 10 Deportistas
     * const deportistas = await prisma.deportista.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deportistaWithIdOnly = await prisma.deportista.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeportistaFindManyArgs>(args?: SelectSubset<T, DeportistaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeportistaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Deportista.
     * @param {DeportistaCreateArgs} args - Arguments to create a Deportista.
     * @example
     * // Create one Deportista
     * const Deportista = await prisma.deportista.create({
     *   data: {
     *     // ... data to create a Deportista
     *   }
     * })
     * 
     */
    create<T extends DeportistaCreateArgs>(args: SelectSubset<T, DeportistaCreateArgs<ExtArgs>>): Prisma__DeportistaClient<$Result.GetResult<Prisma.$DeportistaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deportistas.
     * @param {DeportistaCreateManyArgs} args - Arguments to create many Deportistas.
     * @example
     * // Create many Deportistas
     * const deportista = await prisma.deportista.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeportistaCreateManyArgs>(args?: SelectSubset<T, DeportistaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Deportista.
     * @param {DeportistaDeleteArgs} args - Arguments to delete one Deportista.
     * @example
     * // Delete one Deportista
     * const Deportista = await prisma.deportista.delete({
     *   where: {
     *     // ... filter to delete one Deportista
     *   }
     * })
     * 
     */
    delete<T extends DeportistaDeleteArgs>(args: SelectSubset<T, DeportistaDeleteArgs<ExtArgs>>): Prisma__DeportistaClient<$Result.GetResult<Prisma.$DeportistaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Deportista.
     * @param {DeportistaUpdateArgs} args - Arguments to update one Deportista.
     * @example
     * // Update one Deportista
     * const deportista = await prisma.deportista.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeportistaUpdateArgs>(args: SelectSubset<T, DeportistaUpdateArgs<ExtArgs>>): Prisma__DeportistaClient<$Result.GetResult<Prisma.$DeportistaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deportistas.
     * @param {DeportistaDeleteManyArgs} args - Arguments to filter Deportistas to delete.
     * @example
     * // Delete a few Deportistas
     * const { count } = await prisma.deportista.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeportistaDeleteManyArgs>(args?: SelectSubset<T, DeportistaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deportistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeportistaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deportistas
     * const deportista = await prisma.deportista.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeportistaUpdateManyArgs>(args: SelectSubset<T, DeportistaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Deportista.
     * @param {DeportistaUpsertArgs} args - Arguments to update or create a Deportista.
     * @example
     * // Update or create a Deportista
     * const deportista = await prisma.deportista.upsert({
     *   create: {
     *     // ... data to create a Deportista
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deportista we want to update
     *   }
     * })
     */
    upsert<T extends DeportistaUpsertArgs>(args: SelectSubset<T, DeportistaUpsertArgs<ExtArgs>>): Prisma__DeportistaClient<$Result.GetResult<Prisma.$DeportistaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deportistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeportistaCountArgs} args - Arguments to filter Deportistas to count.
     * @example
     * // Count the number of Deportistas
     * const count = await prisma.deportista.count({
     *   where: {
     *     // ... the filter for the Deportistas we want to count
     *   }
     * })
    **/
    count<T extends DeportistaCountArgs>(
      args?: Subset<T, DeportistaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeportistaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deportista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeportistaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeportistaAggregateArgs>(args: Subset<T, DeportistaAggregateArgs>): Prisma.PrismaPromise<GetDeportistaAggregateType<T>>

    /**
     * Group by Deportista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeportistaGroupByArgs} args - Group by arguments.
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
      T extends DeportistaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeportistaGroupByArgs['orderBy'] }
        : { orderBy?: DeportistaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, DeportistaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeportistaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Deportista model
   */
  readonly fields: DeportistaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Deportista.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeportistaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tutor<T extends Deportista$tutorArgs<ExtArgs> = {}>(args?: Subset<T, Deportista$tutorArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    personaClub<T extends PersonaClubDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonaClubDefaultArgs<ExtArgs>>): Prisma__PersonaClubClient<$Result.GetResult<Prisma.$PersonaClubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    desercionDeportista<T extends Deportista$desercionDeportistaArgs<ExtArgs> = {}>(args?: Subset<T, Deportista$desercionDeportistaArgs<ExtArgs>>): Prisma__DesercionDeportistaClient<$Result.GetResult<Prisma.$DesercionDeportistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pagosDeportista<T extends Deportista$pagosDeportistaArgs<ExtArgs> = {}>(args?: Subset<T, Deportista$pagosDeportistaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoDeportistaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Deportista model
   */
  interface DeportistaFieldRefs {
    readonly id: FieldRef<"Deportista", 'Int'>
    readonly idTutor: FieldRef<"Deportista", 'Int'>
    readonly idPersonaClub: FieldRef<"Deportista", 'Int'>
    readonly categoria: FieldRef<"Deportista", 'String'>
    readonly activo: FieldRef<"Deportista", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Deportista findUnique
   */
  export type DeportistaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deportista
     */
    select?: DeportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deportista
     */
    omit?: DeportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeportistaInclude<ExtArgs> | null
    /**
     * Filter, which Deportista to fetch.
     */
    where: DeportistaWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Deportista findUniqueOrThrow
   */
  export type DeportistaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deportista
     */
    select?: DeportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deportista
     */
    omit?: DeportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeportistaInclude<ExtArgs> | null
    /**
     * Filter, which Deportista to fetch.
     */
    where: DeportistaWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Deportista findFirst
   */
  export type DeportistaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deportista
     */
    select?: DeportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deportista
     */
    omit?: DeportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeportistaInclude<ExtArgs> | null
    /**
     * Filter, which Deportista to fetch.
     */
    where?: DeportistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deportistas to fetch.
     */
    orderBy?: DeportistaOrderByWithRelationInput | DeportistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deportistas.
     */
    cursor?: DeportistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deportistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deportistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deportistas.
     */
    distinct?: DeportistaScalarFieldEnum | DeportistaScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Deportista findFirstOrThrow
   */
  export type DeportistaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deportista
     */
    select?: DeportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deportista
     */
    omit?: DeportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeportistaInclude<ExtArgs> | null
    /**
     * Filter, which Deportista to fetch.
     */
    where?: DeportistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deportistas to fetch.
     */
    orderBy?: DeportistaOrderByWithRelationInput | DeportistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deportistas.
     */
    cursor?: DeportistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deportistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deportistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deportistas.
     */
    distinct?: DeportistaScalarFieldEnum | DeportistaScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Deportista findMany
   */
  export type DeportistaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deportista
     */
    select?: DeportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deportista
     */
    omit?: DeportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeportistaInclude<ExtArgs> | null
    /**
     * Filter, which Deportistas to fetch.
     */
    where?: DeportistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deportistas to fetch.
     */
    orderBy?: DeportistaOrderByWithRelationInput | DeportistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deportistas.
     */
    cursor?: DeportistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deportistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deportistas.
     */
    skip?: number
    distinct?: DeportistaScalarFieldEnum | DeportistaScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Deportista create
   */
  export type DeportistaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deportista
     */
    select?: DeportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deportista
     */
    omit?: DeportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeportistaInclude<ExtArgs> | null
    /**
     * The data needed to create a Deportista.
     */
    data: XOR<DeportistaCreateInput, DeportistaUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Deportista createMany
   */
  export type DeportistaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deportistas.
     */
    data: DeportistaCreateManyInput | DeportistaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deportista update
   */
  export type DeportistaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deportista
     */
    select?: DeportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deportista
     */
    omit?: DeportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeportistaInclude<ExtArgs> | null
    /**
     * The data needed to update a Deportista.
     */
    data: XOR<DeportistaUpdateInput, DeportistaUncheckedUpdateInput>
    /**
     * Choose, which Deportista to update.
     */
    where: DeportistaWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Deportista updateMany
   */
  export type DeportistaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deportistas.
     */
    data: XOR<DeportistaUpdateManyMutationInput, DeportistaUncheckedUpdateManyInput>
    /**
     * Filter which Deportistas to update
     */
    where?: DeportistaWhereInput
    /**
     * Limit how many Deportistas to update.
     */
    limit?: number
  }

  /**
   * Deportista upsert
   */
  export type DeportistaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deportista
     */
    select?: DeportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deportista
     */
    omit?: DeportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeportistaInclude<ExtArgs> | null
    /**
     * The filter to search for the Deportista to update in case it exists.
     */
    where: DeportistaWhereUniqueInput
    /**
     * In case the Deportista found by the `where` argument doesn't exist, create a new Deportista with this data.
     */
    create: XOR<DeportistaCreateInput, DeportistaUncheckedCreateInput>
    /**
     * In case the Deportista was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeportistaUpdateInput, DeportistaUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Deportista delete
   */
  export type DeportistaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deportista
     */
    select?: DeportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deportista
     */
    omit?: DeportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeportistaInclude<ExtArgs> | null
    /**
     * Filter which Deportista to delete.
     */
    where: DeportistaWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Deportista deleteMany
   */
  export type DeportistaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deportistas to delete
     */
    where?: DeportistaWhereInput
    /**
     * Limit how many Deportistas to delete.
     */
    limit?: number
  }

  /**
   * Deportista.tutor
   */
  export type Deportista$tutorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    where?: TutorWhereInput
  }

  /**
   * Deportista.desercionDeportista
   */
  export type Deportista$desercionDeportistaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesercionDeportista
     */
    select?: DesercionDeportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesercionDeportista
     */
    omit?: DesercionDeportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesercionDeportistaInclude<ExtArgs> | null
    where?: DesercionDeportistaWhereInput
  }

  /**
   * Deportista.pagosDeportista
   */
  export type Deportista$pagosDeportistaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoDeportista
     */
    select?: PagoDeportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagoDeportista
     */
    omit?: PagoDeportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoDeportistaInclude<ExtArgs> | null
    where?: PagoDeportistaWhereInput
    orderBy?: PagoDeportistaOrderByWithRelationInput | PagoDeportistaOrderByWithRelationInput[]
    cursor?: PagoDeportistaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagoDeportistaScalarFieldEnum | PagoDeportistaScalarFieldEnum[]
  }

  /**
   * Deportista without action
   */
  export type DeportistaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deportista
     */
    select?: DeportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deportista
     */
    omit?: DeportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeportistaInclude<ExtArgs> | null
  }


  /**
   * Model DesercionDeportista
   */

  export type AggregateDesercionDeportista = {
    _count: DesercionDeportistaCountAggregateOutputType | null
    _avg: DesercionDeportistaAvgAggregateOutputType | null
    _sum: DesercionDeportistaSumAggregateOutputType | null
    _min: DesercionDeportistaMinAggregateOutputType | null
    _max: DesercionDeportistaMaxAggregateOutputType | null
  }

  export type DesercionDeportistaAvgAggregateOutputType = {
    id: number | null
    idDeportista: number | null
  }

  export type DesercionDeportistaSumAggregateOutputType = {
    id: number | null
    idDeportista: number | null
  }

  export type DesercionDeportistaMinAggregateOutputType = {
    id: number | null
    idDeportista: number | null
    fechaDesercion: Date | null
    razon: string | null
    descripcion: string | null
  }

  export type DesercionDeportistaMaxAggregateOutputType = {
    id: number | null
    idDeportista: number | null
    fechaDesercion: Date | null
    razon: string | null
    descripcion: string | null
  }

  export type DesercionDeportistaCountAggregateOutputType = {
    id: number
    idDeportista: number
    fechaDesercion: number
    razon: number
    descripcion: number
    _all: number
  }


  export type DesercionDeportistaAvgAggregateInputType = {
    id?: true
    idDeportista?: true
  }

  export type DesercionDeportistaSumAggregateInputType = {
    id?: true
    idDeportista?: true
  }

  export type DesercionDeportistaMinAggregateInputType = {
    id?: true
    idDeportista?: true
    fechaDesercion?: true
    razon?: true
    descripcion?: true
  }

  export type DesercionDeportistaMaxAggregateInputType = {
    id?: true
    idDeportista?: true
    fechaDesercion?: true
    razon?: true
    descripcion?: true
  }

  export type DesercionDeportistaCountAggregateInputType = {
    id?: true
    idDeportista?: true
    fechaDesercion?: true
    razon?: true
    descripcion?: true
    _all?: true
  }

  export type DesercionDeportistaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DesercionDeportista to aggregate.
     */
    where?: DesercionDeportistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DesercionDeportistas to fetch.
     */
    orderBy?: DesercionDeportistaOrderByWithRelationInput | DesercionDeportistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DesercionDeportistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DesercionDeportistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DesercionDeportistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DesercionDeportistas
    **/
    _count?: true | DesercionDeportistaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DesercionDeportistaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DesercionDeportistaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DesercionDeportistaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DesercionDeportistaMaxAggregateInputType
  }

  export type GetDesercionDeportistaAggregateType<T extends DesercionDeportistaAggregateArgs> = {
        [P in keyof T & keyof AggregateDesercionDeportista]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDesercionDeportista[P]>
      : GetScalarType<T[P], AggregateDesercionDeportista[P]>
  }




  export type DesercionDeportistaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DesercionDeportistaWhereInput
    orderBy?: DesercionDeportistaOrderByWithAggregationInput | DesercionDeportistaOrderByWithAggregationInput[]
    by: DesercionDeportistaScalarFieldEnum[] | DesercionDeportistaScalarFieldEnum
    having?: DesercionDeportistaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DesercionDeportistaCountAggregateInputType | true
    _avg?: DesercionDeportistaAvgAggregateInputType
    _sum?: DesercionDeportistaSumAggregateInputType
    _min?: DesercionDeportistaMinAggregateInputType
    _max?: DesercionDeportistaMaxAggregateInputType
  }

  export type DesercionDeportistaGroupByOutputType = {
    id: number
    idDeportista: number
    fechaDesercion: Date | null
    razon: string | null
    descripcion: string | null
    _count: DesercionDeportistaCountAggregateOutputType | null
    _avg: DesercionDeportistaAvgAggregateOutputType | null
    _sum: DesercionDeportistaSumAggregateOutputType | null
    _min: DesercionDeportistaMinAggregateOutputType | null
    _max: DesercionDeportistaMaxAggregateOutputType | null
  }

  type GetDesercionDeportistaGroupByPayload<T extends DesercionDeportistaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DesercionDeportistaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DesercionDeportistaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DesercionDeportistaGroupByOutputType[P]>
            : GetScalarType<T[P], DesercionDeportistaGroupByOutputType[P]>
        }
      >
    >


  export type DesercionDeportistaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idDeportista?: boolean
    fechaDesercion?: boolean
    razon?: boolean
    descripcion?: boolean
    deportista?: boolean | DeportistaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["desercionDeportista"]>



  export type DesercionDeportistaSelectScalar = {
    id?: boolean
    idDeportista?: boolean
    fechaDesercion?: boolean
    razon?: boolean
    descripcion?: boolean
  }

  export type DesercionDeportistaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idDeportista" | "fechaDesercion" | "razon" | "descripcion", ExtArgs["result"]["desercionDeportista"]>
  export type DesercionDeportistaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deportista?: boolean | DeportistaDefaultArgs<ExtArgs>
  }

  export type $DesercionDeportistaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DesercionDeportista"
    objects: {
      deportista: Prisma.$DeportistaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idDeportista: number
      fechaDesercion: Date | null
      razon: string | null
      descripcion: string | null
    }, ExtArgs["result"]["desercionDeportista"]>
    composites: {}
  }

  type DesercionDeportistaGetPayload<S extends boolean | null | undefined | DesercionDeportistaDefaultArgs> = $Result.GetResult<Prisma.$DesercionDeportistaPayload, S>

  type DesercionDeportistaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DesercionDeportistaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: DesercionDeportistaCountAggregateInputType | true
    }

  export interface DesercionDeportistaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DesercionDeportista'], meta: { name: 'DesercionDeportista' } }
    /**
     * Find zero or one DesercionDeportista that matches the filter.
     * @param {DesercionDeportistaFindUniqueArgs} args - Arguments to find a DesercionDeportista
     * @example
     * // Get one DesercionDeportista
     * const desercionDeportista = await prisma.desercionDeportista.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DesercionDeportistaFindUniqueArgs>(args: SelectSubset<T, DesercionDeportistaFindUniqueArgs<ExtArgs>>): Prisma__DesercionDeportistaClient<$Result.GetResult<Prisma.$DesercionDeportistaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DesercionDeportista that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DesercionDeportistaFindUniqueOrThrowArgs} args - Arguments to find a DesercionDeportista
     * @example
     * // Get one DesercionDeportista
     * const desercionDeportista = await prisma.desercionDeportista.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DesercionDeportistaFindUniqueOrThrowArgs>(args: SelectSubset<T, DesercionDeportistaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DesercionDeportistaClient<$Result.GetResult<Prisma.$DesercionDeportistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DesercionDeportista that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesercionDeportistaFindFirstArgs} args - Arguments to find a DesercionDeportista
     * @example
     * // Get one DesercionDeportista
     * const desercionDeportista = await prisma.desercionDeportista.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DesercionDeportistaFindFirstArgs>(args?: SelectSubset<T, DesercionDeportistaFindFirstArgs<ExtArgs>>): Prisma__DesercionDeportistaClient<$Result.GetResult<Prisma.$DesercionDeportistaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DesercionDeportista that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesercionDeportistaFindFirstOrThrowArgs} args - Arguments to find a DesercionDeportista
     * @example
     * // Get one DesercionDeportista
     * const desercionDeportista = await prisma.desercionDeportista.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DesercionDeportistaFindFirstOrThrowArgs>(args?: SelectSubset<T, DesercionDeportistaFindFirstOrThrowArgs<ExtArgs>>): Prisma__DesercionDeportistaClient<$Result.GetResult<Prisma.$DesercionDeportistaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DesercionDeportistas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesercionDeportistaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DesercionDeportistas
     * const desercionDeportistas = await prisma.desercionDeportista.findMany()
     * 
     * // Get first 10 DesercionDeportistas
     * const desercionDeportistas = await prisma.desercionDeportista.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const desercionDeportistaWithIdOnly = await prisma.desercionDeportista.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DesercionDeportistaFindManyArgs>(args?: SelectSubset<T, DesercionDeportistaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesercionDeportistaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DesercionDeportista.
     * @param {DesercionDeportistaCreateArgs} args - Arguments to create a DesercionDeportista.
     * @example
     * // Create one DesercionDeportista
     * const DesercionDeportista = await prisma.desercionDeportista.create({
     *   data: {
     *     // ... data to create a DesercionDeportista
     *   }
     * })
     * 
     */
    create<T extends DesercionDeportistaCreateArgs>(args: SelectSubset<T, DesercionDeportistaCreateArgs<ExtArgs>>): Prisma__DesercionDeportistaClient<$Result.GetResult<Prisma.$DesercionDeportistaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DesercionDeportistas.
     * @param {DesercionDeportistaCreateManyArgs} args - Arguments to create many DesercionDeportistas.
     * @example
     * // Create many DesercionDeportistas
     * const desercionDeportista = await prisma.desercionDeportista.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DesercionDeportistaCreateManyArgs>(args?: SelectSubset<T, DesercionDeportistaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DesercionDeportista.
     * @param {DesercionDeportistaDeleteArgs} args - Arguments to delete one DesercionDeportista.
     * @example
     * // Delete one DesercionDeportista
     * const DesercionDeportista = await prisma.desercionDeportista.delete({
     *   where: {
     *     // ... filter to delete one DesercionDeportista
     *   }
     * })
     * 
     */
    delete<T extends DesercionDeportistaDeleteArgs>(args: SelectSubset<T, DesercionDeportistaDeleteArgs<ExtArgs>>): Prisma__DesercionDeportistaClient<$Result.GetResult<Prisma.$DesercionDeportistaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DesercionDeportista.
     * @param {DesercionDeportistaUpdateArgs} args - Arguments to update one DesercionDeportista.
     * @example
     * // Update one DesercionDeportista
     * const desercionDeportista = await prisma.desercionDeportista.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DesercionDeportistaUpdateArgs>(args: SelectSubset<T, DesercionDeportistaUpdateArgs<ExtArgs>>): Prisma__DesercionDeportistaClient<$Result.GetResult<Prisma.$DesercionDeportistaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DesercionDeportistas.
     * @param {DesercionDeportistaDeleteManyArgs} args - Arguments to filter DesercionDeportistas to delete.
     * @example
     * // Delete a few DesercionDeportistas
     * const { count } = await prisma.desercionDeportista.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DesercionDeportistaDeleteManyArgs>(args?: SelectSubset<T, DesercionDeportistaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DesercionDeportistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesercionDeportistaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DesercionDeportistas
     * const desercionDeportista = await prisma.desercionDeportista.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DesercionDeportistaUpdateManyArgs>(args: SelectSubset<T, DesercionDeportistaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DesercionDeportista.
     * @param {DesercionDeportistaUpsertArgs} args - Arguments to update or create a DesercionDeportista.
     * @example
     * // Update or create a DesercionDeportista
     * const desercionDeportista = await prisma.desercionDeportista.upsert({
     *   create: {
     *     // ... data to create a DesercionDeportista
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DesercionDeportista we want to update
     *   }
     * })
     */
    upsert<T extends DesercionDeportistaUpsertArgs>(args: SelectSubset<T, DesercionDeportistaUpsertArgs<ExtArgs>>): Prisma__DesercionDeportistaClient<$Result.GetResult<Prisma.$DesercionDeportistaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DesercionDeportistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesercionDeportistaCountArgs} args - Arguments to filter DesercionDeportistas to count.
     * @example
     * // Count the number of DesercionDeportistas
     * const count = await prisma.desercionDeportista.count({
     *   where: {
     *     // ... the filter for the DesercionDeportistas we want to count
     *   }
     * })
    **/
    count<T extends DesercionDeportistaCountArgs>(
      args?: Subset<T, DesercionDeportistaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DesercionDeportistaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DesercionDeportista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesercionDeportistaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DesercionDeportistaAggregateArgs>(args: Subset<T, DesercionDeportistaAggregateArgs>): Prisma.PrismaPromise<GetDesercionDeportistaAggregateType<T>>

    /**
     * Group by DesercionDeportista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesercionDeportistaGroupByArgs} args - Group by arguments.
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
      T extends DesercionDeportistaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DesercionDeportistaGroupByArgs['orderBy'] }
        : { orderBy?: DesercionDeportistaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, DesercionDeportistaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDesercionDeportistaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DesercionDeportista model
   */
  readonly fields: DesercionDeportistaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DesercionDeportista.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DesercionDeportistaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deportista<T extends DeportistaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeportistaDefaultArgs<ExtArgs>>): Prisma__DeportistaClient<$Result.GetResult<Prisma.$DeportistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DesercionDeportista model
   */
  interface DesercionDeportistaFieldRefs {
    readonly id: FieldRef<"DesercionDeportista", 'Int'>
    readonly idDeportista: FieldRef<"DesercionDeportista", 'Int'>
    readonly fechaDesercion: FieldRef<"DesercionDeportista", 'DateTime'>
    readonly razon: FieldRef<"DesercionDeportista", 'String'>
    readonly descripcion: FieldRef<"DesercionDeportista", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DesercionDeportista findUnique
   */
  export type DesercionDeportistaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesercionDeportista
     */
    select?: DesercionDeportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesercionDeportista
     */
    omit?: DesercionDeportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesercionDeportistaInclude<ExtArgs> | null
    /**
     * Filter, which DesercionDeportista to fetch.
     */
    where: DesercionDeportistaWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * DesercionDeportista findUniqueOrThrow
   */
  export type DesercionDeportistaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesercionDeportista
     */
    select?: DesercionDeportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesercionDeportista
     */
    omit?: DesercionDeportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesercionDeportistaInclude<ExtArgs> | null
    /**
     * Filter, which DesercionDeportista to fetch.
     */
    where: DesercionDeportistaWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * DesercionDeportista findFirst
   */
  export type DesercionDeportistaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesercionDeportista
     */
    select?: DesercionDeportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesercionDeportista
     */
    omit?: DesercionDeportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesercionDeportistaInclude<ExtArgs> | null
    /**
     * Filter, which DesercionDeportista to fetch.
     */
    where?: DesercionDeportistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DesercionDeportistas to fetch.
     */
    orderBy?: DesercionDeportistaOrderByWithRelationInput | DesercionDeportistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DesercionDeportistas.
     */
    cursor?: DesercionDeportistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DesercionDeportistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DesercionDeportistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DesercionDeportistas.
     */
    distinct?: DesercionDeportistaScalarFieldEnum | DesercionDeportistaScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * DesercionDeportista findFirstOrThrow
   */
  export type DesercionDeportistaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesercionDeportista
     */
    select?: DesercionDeportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesercionDeportista
     */
    omit?: DesercionDeportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesercionDeportistaInclude<ExtArgs> | null
    /**
     * Filter, which DesercionDeportista to fetch.
     */
    where?: DesercionDeportistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DesercionDeportistas to fetch.
     */
    orderBy?: DesercionDeportistaOrderByWithRelationInput | DesercionDeportistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DesercionDeportistas.
     */
    cursor?: DesercionDeportistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DesercionDeportistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DesercionDeportistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DesercionDeportistas.
     */
    distinct?: DesercionDeportistaScalarFieldEnum | DesercionDeportistaScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * DesercionDeportista findMany
   */
  export type DesercionDeportistaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesercionDeportista
     */
    select?: DesercionDeportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesercionDeportista
     */
    omit?: DesercionDeportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesercionDeportistaInclude<ExtArgs> | null
    /**
     * Filter, which DesercionDeportistas to fetch.
     */
    where?: DesercionDeportistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DesercionDeportistas to fetch.
     */
    orderBy?: DesercionDeportistaOrderByWithRelationInput | DesercionDeportistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DesercionDeportistas.
     */
    cursor?: DesercionDeportistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DesercionDeportistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DesercionDeportistas.
     */
    skip?: number
    distinct?: DesercionDeportistaScalarFieldEnum | DesercionDeportistaScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * DesercionDeportista create
   */
  export type DesercionDeportistaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesercionDeportista
     */
    select?: DesercionDeportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesercionDeportista
     */
    omit?: DesercionDeportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesercionDeportistaInclude<ExtArgs> | null
    /**
     * The data needed to create a DesercionDeportista.
     */
    data: XOR<DesercionDeportistaCreateInput, DesercionDeportistaUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * DesercionDeportista createMany
   */
  export type DesercionDeportistaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DesercionDeportistas.
     */
    data: DesercionDeportistaCreateManyInput | DesercionDeportistaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DesercionDeportista update
   */
  export type DesercionDeportistaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesercionDeportista
     */
    select?: DesercionDeportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesercionDeportista
     */
    omit?: DesercionDeportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesercionDeportistaInclude<ExtArgs> | null
    /**
     * The data needed to update a DesercionDeportista.
     */
    data: XOR<DesercionDeportistaUpdateInput, DesercionDeportistaUncheckedUpdateInput>
    /**
     * Choose, which DesercionDeportista to update.
     */
    where: DesercionDeportistaWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * DesercionDeportista updateMany
   */
  export type DesercionDeportistaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DesercionDeportistas.
     */
    data: XOR<DesercionDeportistaUpdateManyMutationInput, DesercionDeportistaUncheckedUpdateManyInput>
    /**
     * Filter which DesercionDeportistas to update
     */
    where?: DesercionDeportistaWhereInput
    /**
     * Limit how many DesercionDeportistas to update.
     */
    limit?: number
  }

  /**
   * DesercionDeportista upsert
   */
  export type DesercionDeportistaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesercionDeportista
     */
    select?: DesercionDeportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesercionDeportista
     */
    omit?: DesercionDeportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesercionDeportistaInclude<ExtArgs> | null
    /**
     * The filter to search for the DesercionDeportista to update in case it exists.
     */
    where: DesercionDeportistaWhereUniqueInput
    /**
     * In case the DesercionDeportista found by the `where` argument doesn't exist, create a new DesercionDeportista with this data.
     */
    create: XOR<DesercionDeportistaCreateInput, DesercionDeportistaUncheckedCreateInput>
    /**
     * In case the DesercionDeportista was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DesercionDeportistaUpdateInput, DesercionDeportistaUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * DesercionDeportista delete
   */
  export type DesercionDeportistaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesercionDeportista
     */
    select?: DesercionDeportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesercionDeportista
     */
    omit?: DesercionDeportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesercionDeportistaInclude<ExtArgs> | null
    /**
     * Filter which DesercionDeportista to delete.
     */
    where: DesercionDeportistaWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * DesercionDeportista deleteMany
   */
  export type DesercionDeportistaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DesercionDeportistas to delete
     */
    where?: DesercionDeportistaWhereInput
    /**
     * Limit how many DesercionDeportistas to delete.
     */
    limit?: number
  }

  /**
   * DesercionDeportista without action
   */
  export type DesercionDeportistaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesercionDeportista
     */
    select?: DesercionDeportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesercionDeportista
     */
    omit?: DesercionDeportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesercionDeportistaInclude<ExtArgs> | null
  }


  /**
   * Model GestionAdmin
   */

  export type AggregateGestionAdmin = {
    _count: GestionAdminCountAggregateOutputType | null
    _avg: GestionAdminAvgAggregateOutputType | null
    _sum: GestionAdminSumAggregateOutputType | null
    _min: GestionAdminMinAggregateOutputType | null
    _max: GestionAdminMaxAggregateOutputType | null
  }

  export type GestionAdminAvgAggregateOutputType = {
    id: number | null
    idTutor: number | null
    idDeportista: number | null
    idCargo: number | null
  }

  export type GestionAdminSumAggregateOutputType = {
    id: number | null
    idTutor: number | null
    idDeportista: number | null
    idCargo: number | null
  }

  export type GestionAdminMinAggregateOutputType = {
    id: number | null
    idTutor: number | null
    idDeportista: number | null
    idCargo: number | null
    fechaInicio: Date | null
    fechaFin: Date | null
    activo: boolean | null
  }

  export type GestionAdminMaxAggregateOutputType = {
    id: number | null
    idTutor: number | null
    idDeportista: number | null
    idCargo: number | null
    fechaInicio: Date | null
    fechaFin: Date | null
    activo: boolean | null
  }

  export type GestionAdminCountAggregateOutputType = {
    id: number
    idTutor: number
    idDeportista: number
    idCargo: number
    fechaInicio: number
    fechaFin: number
    activo: number
    _all: number
  }


  export type GestionAdminAvgAggregateInputType = {
    id?: true
    idTutor?: true
    idDeportista?: true
    idCargo?: true
  }

  export type GestionAdminSumAggregateInputType = {
    id?: true
    idTutor?: true
    idDeportista?: true
    idCargo?: true
  }

  export type GestionAdminMinAggregateInputType = {
    id?: true
    idTutor?: true
    idDeportista?: true
    idCargo?: true
    fechaInicio?: true
    fechaFin?: true
    activo?: true
  }

  export type GestionAdminMaxAggregateInputType = {
    id?: true
    idTutor?: true
    idDeportista?: true
    idCargo?: true
    fechaInicio?: true
    fechaFin?: true
    activo?: true
  }

  export type GestionAdminCountAggregateInputType = {
    id?: true
    idTutor?: true
    idDeportista?: true
    idCargo?: true
    fechaInicio?: true
    fechaFin?: true
    activo?: true
    _all?: true
  }

  export type GestionAdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GestionAdmin to aggregate.
     */
    where?: GestionAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GestionAdmins to fetch.
     */
    orderBy?: GestionAdminOrderByWithRelationInput | GestionAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GestionAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GestionAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GestionAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GestionAdmins
    **/
    _count?: true | GestionAdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GestionAdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GestionAdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GestionAdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GestionAdminMaxAggregateInputType
  }

  export type GetGestionAdminAggregateType<T extends GestionAdminAggregateArgs> = {
        [P in keyof T & keyof AggregateGestionAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGestionAdmin[P]>
      : GetScalarType<T[P], AggregateGestionAdmin[P]>
  }




  export type GestionAdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GestionAdminWhereInput
    orderBy?: GestionAdminOrderByWithAggregationInput | GestionAdminOrderByWithAggregationInput[]
    by: GestionAdminScalarFieldEnum[] | GestionAdminScalarFieldEnum
    having?: GestionAdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GestionAdminCountAggregateInputType | true
    _avg?: GestionAdminAvgAggregateInputType
    _sum?: GestionAdminSumAggregateInputType
    _min?: GestionAdminMinAggregateInputType
    _max?: GestionAdminMaxAggregateInputType
  }

  export type GestionAdminGroupByOutputType = {
    id: number
    idTutor: number | null
    idDeportista: number | null
    idCargo: number | null
    fechaInicio: Date | null
    fechaFin: Date | null
    activo: boolean | null
    _count: GestionAdminCountAggregateOutputType | null
    _avg: GestionAdminAvgAggregateOutputType | null
    _sum: GestionAdminSumAggregateOutputType | null
    _min: GestionAdminMinAggregateOutputType | null
    _max: GestionAdminMaxAggregateOutputType | null
  }

  type GetGestionAdminGroupByPayload<T extends GestionAdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GestionAdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GestionAdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GestionAdminGroupByOutputType[P]>
            : GetScalarType<T[P], GestionAdminGroupByOutputType[P]>
        }
      >
    >


  export type GestionAdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idTutor?: boolean
    idDeportista?: boolean
    idCargo?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    activo?: boolean
  }, ExtArgs["result"]["gestionAdmin"]>



  export type GestionAdminSelectScalar = {
    id?: boolean
    idTutor?: boolean
    idDeportista?: boolean
    idCargo?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    activo?: boolean
  }

  export type GestionAdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idTutor" | "idDeportista" | "idCargo" | "fechaInicio" | "fechaFin" | "activo", ExtArgs["result"]["gestionAdmin"]>

  export type $GestionAdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GestionAdmin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idTutor: number | null
      idDeportista: number | null
      idCargo: number | null
      fechaInicio: Date | null
      fechaFin: Date | null
      activo: boolean | null
    }, ExtArgs["result"]["gestionAdmin"]>
    composites: {}
  }

  type GestionAdminGetPayload<S extends boolean | null | undefined | GestionAdminDefaultArgs> = $Result.GetResult<Prisma.$GestionAdminPayload, S>

  type GestionAdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GestionAdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: GestionAdminCountAggregateInputType | true
    }

  export interface GestionAdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GestionAdmin'], meta: { name: 'GestionAdmin' } }
    /**
     * Find zero or one GestionAdmin that matches the filter.
     * @param {GestionAdminFindUniqueArgs} args - Arguments to find a GestionAdmin
     * @example
     * // Get one GestionAdmin
     * const gestionAdmin = await prisma.gestionAdmin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GestionAdminFindUniqueArgs>(args: SelectSubset<T, GestionAdminFindUniqueArgs<ExtArgs>>): Prisma__GestionAdminClient<$Result.GetResult<Prisma.$GestionAdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GestionAdmin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GestionAdminFindUniqueOrThrowArgs} args - Arguments to find a GestionAdmin
     * @example
     * // Get one GestionAdmin
     * const gestionAdmin = await prisma.gestionAdmin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GestionAdminFindUniqueOrThrowArgs>(args: SelectSubset<T, GestionAdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GestionAdminClient<$Result.GetResult<Prisma.$GestionAdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GestionAdmin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GestionAdminFindFirstArgs} args - Arguments to find a GestionAdmin
     * @example
     * // Get one GestionAdmin
     * const gestionAdmin = await prisma.gestionAdmin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GestionAdminFindFirstArgs>(args?: SelectSubset<T, GestionAdminFindFirstArgs<ExtArgs>>): Prisma__GestionAdminClient<$Result.GetResult<Prisma.$GestionAdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GestionAdmin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GestionAdminFindFirstOrThrowArgs} args - Arguments to find a GestionAdmin
     * @example
     * // Get one GestionAdmin
     * const gestionAdmin = await prisma.gestionAdmin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GestionAdminFindFirstOrThrowArgs>(args?: SelectSubset<T, GestionAdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__GestionAdminClient<$Result.GetResult<Prisma.$GestionAdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GestionAdmins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GestionAdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GestionAdmins
     * const gestionAdmins = await prisma.gestionAdmin.findMany()
     * 
     * // Get first 10 GestionAdmins
     * const gestionAdmins = await prisma.gestionAdmin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gestionAdminWithIdOnly = await prisma.gestionAdmin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GestionAdminFindManyArgs>(args?: SelectSubset<T, GestionAdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GestionAdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GestionAdmin.
     * @param {GestionAdminCreateArgs} args - Arguments to create a GestionAdmin.
     * @example
     * // Create one GestionAdmin
     * const GestionAdmin = await prisma.gestionAdmin.create({
     *   data: {
     *     // ... data to create a GestionAdmin
     *   }
     * })
     * 
     */
    create<T extends GestionAdminCreateArgs>(args: SelectSubset<T, GestionAdminCreateArgs<ExtArgs>>): Prisma__GestionAdminClient<$Result.GetResult<Prisma.$GestionAdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GestionAdmins.
     * @param {GestionAdminCreateManyArgs} args - Arguments to create many GestionAdmins.
     * @example
     * // Create many GestionAdmins
     * const gestionAdmin = await prisma.gestionAdmin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GestionAdminCreateManyArgs>(args?: SelectSubset<T, GestionAdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GestionAdmin.
     * @param {GestionAdminDeleteArgs} args - Arguments to delete one GestionAdmin.
     * @example
     * // Delete one GestionAdmin
     * const GestionAdmin = await prisma.gestionAdmin.delete({
     *   where: {
     *     // ... filter to delete one GestionAdmin
     *   }
     * })
     * 
     */
    delete<T extends GestionAdminDeleteArgs>(args: SelectSubset<T, GestionAdminDeleteArgs<ExtArgs>>): Prisma__GestionAdminClient<$Result.GetResult<Prisma.$GestionAdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GestionAdmin.
     * @param {GestionAdminUpdateArgs} args - Arguments to update one GestionAdmin.
     * @example
     * // Update one GestionAdmin
     * const gestionAdmin = await prisma.gestionAdmin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GestionAdminUpdateArgs>(args: SelectSubset<T, GestionAdminUpdateArgs<ExtArgs>>): Prisma__GestionAdminClient<$Result.GetResult<Prisma.$GestionAdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GestionAdmins.
     * @param {GestionAdminDeleteManyArgs} args - Arguments to filter GestionAdmins to delete.
     * @example
     * // Delete a few GestionAdmins
     * const { count } = await prisma.gestionAdmin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GestionAdminDeleteManyArgs>(args?: SelectSubset<T, GestionAdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GestionAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GestionAdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GestionAdmins
     * const gestionAdmin = await prisma.gestionAdmin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GestionAdminUpdateManyArgs>(args: SelectSubset<T, GestionAdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GestionAdmin.
     * @param {GestionAdminUpsertArgs} args - Arguments to update or create a GestionAdmin.
     * @example
     * // Update or create a GestionAdmin
     * const gestionAdmin = await prisma.gestionAdmin.upsert({
     *   create: {
     *     // ... data to create a GestionAdmin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GestionAdmin we want to update
     *   }
     * })
     */
    upsert<T extends GestionAdminUpsertArgs>(args: SelectSubset<T, GestionAdminUpsertArgs<ExtArgs>>): Prisma__GestionAdminClient<$Result.GetResult<Prisma.$GestionAdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GestionAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GestionAdminCountArgs} args - Arguments to filter GestionAdmins to count.
     * @example
     * // Count the number of GestionAdmins
     * const count = await prisma.gestionAdmin.count({
     *   where: {
     *     // ... the filter for the GestionAdmins we want to count
     *   }
     * })
    **/
    count<T extends GestionAdminCountArgs>(
      args?: Subset<T, GestionAdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GestionAdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GestionAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GestionAdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GestionAdminAggregateArgs>(args: Subset<T, GestionAdminAggregateArgs>): Prisma.PrismaPromise<GetGestionAdminAggregateType<T>>

    /**
     * Group by GestionAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GestionAdminGroupByArgs} args - Group by arguments.
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
      T extends GestionAdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GestionAdminGroupByArgs['orderBy'] }
        : { orderBy?: GestionAdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, GestionAdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGestionAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GestionAdmin model
   */
  readonly fields: GestionAdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GestionAdmin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GestionAdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GestionAdmin model
   */
  interface GestionAdminFieldRefs {
    readonly id: FieldRef<"GestionAdmin", 'Int'>
    readonly idTutor: FieldRef<"GestionAdmin", 'Int'>
    readonly idDeportista: FieldRef<"GestionAdmin", 'Int'>
    readonly idCargo: FieldRef<"GestionAdmin", 'Int'>
    readonly fechaInicio: FieldRef<"GestionAdmin", 'DateTime'>
    readonly fechaFin: FieldRef<"GestionAdmin", 'DateTime'>
    readonly activo: FieldRef<"GestionAdmin", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * GestionAdmin findUnique
   */
  export type GestionAdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GestionAdmin
     */
    select?: GestionAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GestionAdmin
     */
    omit?: GestionAdminOmit<ExtArgs> | null
    /**
     * Filter, which GestionAdmin to fetch.
     */
    where: GestionAdminWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * GestionAdmin findUniqueOrThrow
   */
  export type GestionAdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GestionAdmin
     */
    select?: GestionAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GestionAdmin
     */
    omit?: GestionAdminOmit<ExtArgs> | null
    /**
     * Filter, which GestionAdmin to fetch.
     */
    where: GestionAdminWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * GestionAdmin findFirst
   */
  export type GestionAdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GestionAdmin
     */
    select?: GestionAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GestionAdmin
     */
    omit?: GestionAdminOmit<ExtArgs> | null
    /**
     * Filter, which GestionAdmin to fetch.
     */
    where?: GestionAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GestionAdmins to fetch.
     */
    orderBy?: GestionAdminOrderByWithRelationInput | GestionAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GestionAdmins.
     */
    cursor?: GestionAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GestionAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GestionAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GestionAdmins.
     */
    distinct?: GestionAdminScalarFieldEnum | GestionAdminScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * GestionAdmin findFirstOrThrow
   */
  export type GestionAdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GestionAdmin
     */
    select?: GestionAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GestionAdmin
     */
    omit?: GestionAdminOmit<ExtArgs> | null
    /**
     * Filter, which GestionAdmin to fetch.
     */
    where?: GestionAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GestionAdmins to fetch.
     */
    orderBy?: GestionAdminOrderByWithRelationInput | GestionAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GestionAdmins.
     */
    cursor?: GestionAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GestionAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GestionAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GestionAdmins.
     */
    distinct?: GestionAdminScalarFieldEnum | GestionAdminScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * GestionAdmin findMany
   */
  export type GestionAdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GestionAdmin
     */
    select?: GestionAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GestionAdmin
     */
    omit?: GestionAdminOmit<ExtArgs> | null
    /**
     * Filter, which GestionAdmins to fetch.
     */
    where?: GestionAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GestionAdmins to fetch.
     */
    orderBy?: GestionAdminOrderByWithRelationInput | GestionAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GestionAdmins.
     */
    cursor?: GestionAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GestionAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GestionAdmins.
     */
    skip?: number
    distinct?: GestionAdminScalarFieldEnum | GestionAdminScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * GestionAdmin create
   */
  export type GestionAdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GestionAdmin
     */
    select?: GestionAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GestionAdmin
     */
    omit?: GestionAdminOmit<ExtArgs> | null
    /**
     * The data needed to create a GestionAdmin.
     */
    data?: XOR<GestionAdminCreateInput, GestionAdminUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * GestionAdmin createMany
   */
  export type GestionAdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GestionAdmins.
     */
    data: GestionAdminCreateManyInput | GestionAdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GestionAdmin update
   */
  export type GestionAdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GestionAdmin
     */
    select?: GestionAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GestionAdmin
     */
    omit?: GestionAdminOmit<ExtArgs> | null
    /**
     * The data needed to update a GestionAdmin.
     */
    data: XOR<GestionAdminUpdateInput, GestionAdminUncheckedUpdateInput>
    /**
     * Choose, which GestionAdmin to update.
     */
    where: GestionAdminWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * GestionAdmin updateMany
   */
  export type GestionAdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GestionAdmins.
     */
    data: XOR<GestionAdminUpdateManyMutationInput, GestionAdminUncheckedUpdateManyInput>
    /**
     * Filter which GestionAdmins to update
     */
    where?: GestionAdminWhereInput
    /**
     * Limit how many GestionAdmins to update.
     */
    limit?: number
  }

  /**
   * GestionAdmin upsert
   */
  export type GestionAdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GestionAdmin
     */
    select?: GestionAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GestionAdmin
     */
    omit?: GestionAdminOmit<ExtArgs> | null
    /**
     * The filter to search for the GestionAdmin to update in case it exists.
     */
    where: GestionAdminWhereUniqueInput
    /**
     * In case the GestionAdmin found by the `where` argument doesn't exist, create a new GestionAdmin with this data.
     */
    create: XOR<GestionAdminCreateInput, GestionAdminUncheckedCreateInput>
    /**
     * In case the GestionAdmin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GestionAdminUpdateInput, GestionAdminUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * GestionAdmin delete
   */
  export type GestionAdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GestionAdmin
     */
    select?: GestionAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GestionAdmin
     */
    omit?: GestionAdminOmit<ExtArgs> | null
    /**
     * Filter which GestionAdmin to delete.
     */
    where: GestionAdminWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * GestionAdmin deleteMany
   */
  export type GestionAdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GestionAdmins to delete
     */
    where?: GestionAdminWhereInput
    /**
     * Limit how many GestionAdmins to delete.
     */
    limit?: number
  }

  /**
   * GestionAdmin without action
   */
  export type GestionAdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GestionAdmin
     */
    select?: GestionAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GestionAdmin
     */
    omit?: GestionAdminOmit<ExtArgs> | null
  }


  /**
   * Model PagoDeportista
   */

  export type AggregatePagoDeportista = {
    _count: PagoDeportistaCountAggregateOutputType | null
    _avg: PagoDeportistaAvgAggregateOutputType | null
    _sum: PagoDeportistaSumAggregateOutputType | null
    _min: PagoDeportistaMinAggregateOutputType | null
    _max: PagoDeportistaMaxAggregateOutputType | null
  }

  export type PagoDeportistaAvgAggregateOutputType = {
    id: number | null
    idDeportista: number | null
    valor: Decimal | null
  }

  export type PagoDeportistaSumAggregateOutputType = {
    id: number | null
    idDeportista: number | null
    valor: Decimal | null
  }

  export type PagoDeportistaMinAggregateOutputType = {
    id: number | null
    idDeportista: number | null
    fechaPago: Date | null
    valor: Decimal | null
    tipoPago: string | null
  }

  export type PagoDeportistaMaxAggregateOutputType = {
    id: number | null
    idDeportista: number | null
    fechaPago: Date | null
    valor: Decimal | null
    tipoPago: string | null
  }

  export type PagoDeportistaCountAggregateOutputType = {
    id: number
    idDeportista: number
    fechaPago: number
    valor: number
    tipoPago: number
    _all: number
  }


  export type PagoDeportistaAvgAggregateInputType = {
    id?: true
    idDeportista?: true
    valor?: true
  }

  export type PagoDeportistaSumAggregateInputType = {
    id?: true
    idDeportista?: true
    valor?: true
  }

  export type PagoDeportistaMinAggregateInputType = {
    id?: true
    idDeportista?: true
    fechaPago?: true
    valor?: true
    tipoPago?: true
  }

  export type PagoDeportistaMaxAggregateInputType = {
    id?: true
    idDeportista?: true
    fechaPago?: true
    valor?: true
    tipoPago?: true
  }

  export type PagoDeportistaCountAggregateInputType = {
    id?: true
    idDeportista?: true
    fechaPago?: true
    valor?: true
    tipoPago?: true
    _all?: true
  }

  export type PagoDeportistaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PagoDeportista to aggregate.
     */
    where?: PagoDeportistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PagoDeportistas to fetch.
     */
    orderBy?: PagoDeportistaOrderByWithRelationInput | PagoDeportistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PagoDeportistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PagoDeportistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PagoDeportistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PagoDeportistas
    **/
    _count?: true | PagoDeportistaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagoDeportistaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagoDeportistaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagoDeportistaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagoDeportistaMaxAggregateInputType
  }

  export type GetPagoDeportistaAggregateType<T extends PagoDeportistaAggregateArgs> = {
        [P in keyof T & keyof AggregatePagoDeportista]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePagoDeportista[P]>
      : GetScalarType<T[P], AggregatePagoDeportista[P]>
  }




  export type PagoDeportistaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagoDeportistaWhereInput
    orderBy?: PagoDeportistaOrderByWithAggregationInput | PagoDeportistaOrderByWithAggregationInput[]
    by: PagoDeportistaScalarFieldEnum[] | PagoDeportistaScalarFieldEnum
    having?: PagoDeportistaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagoDeportistaCountAggregateInputType | true
    _avg?: PagoDeportistaAvgAggregateInputType
    _sum?: PagoDeportistaSumAggregateInputType
    _min?: PagoDeportistaMinAggregateInputType
    _max?: PagoDeportistaMaxAggregateInputType
  }

  export type PagoDeportistaGroupByOutputType = {
    id: number
    idDeportista: number
    fechaPago: Date | null
    valor: Decimal | null
    tipoPago: string | null
    _count: PagoDeportistaCountAggregateOutputType | null
    _avg: PagoDeportistaAvgAggregateOutputType | null
    _sum: PagoDeportistaSumAggregateOutputType | null
    _min: PagoDeportistaMinAggregateOutputType | null
    _max: PagoDeportistaMaxAggregateOutputType | null
  }

  type GetPagoDeportistaGroupByPayload<T extends PagoDeportistaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagoDeportistaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagoDeportistaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagoDeportistaGroupByOutputType[P]>
            : GetScalarType<T[P], PagoDeportistaGroupByOutputType[P]>
        }
      >
    >


  export type PagoDeportistaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idDeportista?: boolean
    fechaPago?: boolean
    valor?: boolean
    tipoPago?: boolean
    deportista?: boolean | PagoDeportista$deportistaArgs<ExtArgs>
  }, ExtArgs["result"]["pagoDeportista"]>



  export type PagoDeportistaSelectScalar = {
    id?: boolean
    idDeportista?: boolean
    fechaPago?: boolean
    valor?: boolean
    tipoPago?: boolean
  }

  export type PagoDeportistaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idDeportista" | "fechaPago" | "valor" | "tipoPago", ExtArgs["result"]["pagoDeportista"]>
  export type PagoDeportistaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deportista?: boolean | PagoDeportista$deportistaArgs<ExtArgs>
  }

  export type $PagoDeportistaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PagoDeportista"
    objects: {
      deportista: Prisma.$DeportistaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idDeportista: number
      fechaPago: Date | null
      valor: Prisma.Decimal | null
      tipoPago: string | null
    }, ExtArgs["result"]["pagoDeportista"]>
    composites: {}
  }

  type PagoDeportistaGetPayload<S extends boolean | null | undefined | PagoDeportistaDefaultArgs> = $Result.GetResult<Prisma.$PagoDeportistaPayload, S>

  type PagoDeportistaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PagoDeportistaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: PagoDeportistaCountAggregateInputType | true
    }

  export interface PagoDeportistaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PagoDeportista'], meta: { name: 'PagoDeportista' } }
    /**
     * Find zero or one PagoDeportista that matches the filter.
     * @param {PagoDeportistaFindUniqueArgs} args - Arguments to find a PagoDeportista
     * @example
     * // Get one PagoDeportista
     * const pagoDeportista = await prisma.pagoDeportista.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PagoDeportistaFindUniqueArgs>(args: SelectSubset<T, PagoDeportistaFindUniqueArgs<ExtArgs>>): Prisma__PagoDeportistaClient<$Result.GetResult<Prisma.$PagoDeportistaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PagoDeportista that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PagoDeportistaFindUniqueOrThrowArgs} args - Arguments to find a PagoDeportista
     * @example
     * // Get one PagoDeportista
     * const pagoDeportista = await prisma.pagoDeportista.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PagoDeportistaFindUniqueOrThrowArgs>(args: SelectSubset<T, PagoDeportistaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PagoDeportistaClient<$Result.GetResult<Prisma.$PagoDeportistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PagoDeportista that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoDeportistaFindFirstArgs} args - Arguments to find a PagoDeportista
     * @example
     * // Get one PagoDeportista
     * const pagoDeportista = await prisma.pagoDeportista.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PagoDeportistaFindFirstArgs>(args?: SelectSubset<T, PagoDeportistaFindFirstArgs<ExtArgs>>): Prisma__PagoDeportistaClient<$Result.GetResult<Prisma.$PagoDeportistaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PagoDeportista that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoDeportistaFindFirstOrThrowArgs} args - Arguments to find a PagoDeportista
     * @example
     * // Get one PagoDeportista
     * const pagoDeportista = await prisma.pagoDeportista.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PagoDeportistaFindFirstOrThrowArgs>(args?: SelectSubset<T, PagoDeportistaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PagoDeportistaClient<$Result.GetResult<Prisma.$PagoDeportistaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PagoDeportistas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoDeportistaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PagoDeportistas
     * const pagoDeportistas = await prisma.pagoDeportista.findMany()
     * 
     * // Get first 10 PagoDeportistas
     * const pagoDeportistas = await prisma.pagoDeportista.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pagoDeportistaWithIdOnly = await prisma.pagoDeportista.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PagoDeportistaFindManyArgs>(args?: SelectSubset<T, PagoDeportistaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoDeportistaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PagoDeportista.
     * @param {PagoDeportistaCreateArgs} args - Arguments to create a PagoDeportista.
     * @example
     * // Create one PagoDeportista
     * const PagoDeportista = await prisma.pagoDeportista.create({
     *   data: {
     *     // ... data to create a PagoDeportista
     *   }
     * })
     * 
     */
    create<T extends PagoDeportistaCreateArgs>(args: SelectSubset<T, PagoDeportistaCreateArgs<ExtArgs>>): Prisma__PagoDeportistaClient<$Result.GetResult<Prisma.$PagoDeportistaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PagoDeportistas.
     * @param {PagoDeportistaCreateManyArgs} args - Arguments to create many PagoDeportistas.
     * @example
     * // Create many PagoDeportistas
     * const pagoDeportista = await prisma.pagoDeportista.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PagoDeportistaCreateManyArgs>(args?: SelectSubset<T, PagoDeportistaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PagoDeportista.
     * @param {PagoDeportistaDeleteArgs} args - Arguments to delete one PagoDeportista.
     * @example
     * // Delete one PagoDeportista
     * const PagoDeportista = await prisma.pagoDeportista.delete({
     *   where: {
     *     // ... filter to delete one PagoDeportista
     *   }
     * })
     * 
     */
    delete<T extends PagoDeportistaDeleteArgs>(args: SelectSubset<T, PagoDeportistaDeleteArgs<ExtArgs>>): Prisma__PagoDeportistaClient<$Result.GetResult<Prisma.$PagoDeportistaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PagoDeportista.
     * @param {PagoDeportistaUpdateArgs} args - Arguments to update one PagoDeportista.
     * @example
     * // Update one PagoDeportista
     * const pagoDeportista = await prisma.pagoDeportista.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PagoDeportistaUpdateArgs>(args: SelectSubset<T, PagoDeportistaUpdateArgs<ExtArgs>>): Prisma__PagoDeportistaClient<$Result.GetResult<Prisma.$PagoDeportistaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PagoDeportistas.
     * @param {PagoDeportistaDeleteManyArgs} args - Arguments to filter PagoDeportistas to delete.
     * @example
     * // Delete a few PagoDeportistas
     * const { count } = await prisma.pagoDeportista.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PagoDeportistaDeleteManyArgs>(args?: SelectSubset<T, PagoDeportistaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PagoDeportistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoDeportistaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PagoDeportistas
     * const pagoDeportista = await prisma.pagoDeportista.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PagoDeportistaUpdateManyArgs>(args: SelectSubset<T, PagoDeportistaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PagoDeportista.
     * @param {PagoDeportistaUpsertArgs} args - Arguments to update or create a PagoDeportista.
     * @example
     * // Update or create a PagoDeportista
     * const pagoDeportista = await prisma.pagoDeportista.upsert({
     *   create: {
     *     // ... data to create a PagoDeportista
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PagoDeportista we want to update
     *   }
     * })
     */
    upsert<T extends PagoDeportistaUpsertArgs>(args: SelectSubset<T, PagoDeportistaUpsertArgs<ExtArgs>>): Prisma__PagoDeportistaClient<$Result.GetResult<Prisma.$PagoDeportistaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PagoDeportistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoDeportistaCountArgs} args - Arguments to filter PagoDeportistas to count.
     * @example
     * // Count the number of PagoDeportistas
     * const count = await prisma.pagoDeportista.count({
     *   where: {
     *     // ... the filter for the PagoDeportistas we want to count
     *   }
     * })
    **/
    count<T extends PagoDeportistaCountArgs>(
      args?: Subset<T, PagoDeportistaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagoDeportistaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PagoDeportista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoDeportistaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PagoDeportistaAggregateArgs>(args: Subset<T, PagoDeportistaAggregateArgs>): Prisma.PrismaPromise<GetPagoDeportistaAggregateType<T>>

    /**
     * Group by PagoDeportista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoDeportistaGroupByArgs} args - Group by arguments.
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
      T extends PagoDeportistaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PagoDeportistaGroupByArgs['orderBy'] }
        : { orderBy?: PagoDeportistaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PagoDeportistaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagoDeportistaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PagoDeportista model
   */
  readonly fields: PagoDeportistaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PagoDeportista.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PagoDeportistaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deportista<T extends PagoDeportista$deportistaArgs<ExtArgs> = {}>(args?: Subset<T, PagoDeportista$deportistaArgs<ExtArgs>>): Prisma__DeportistaClient<$Result.GetResult<Prisma.$DeportistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PagoDeportista model
   */
  interface PagoDeportistaFieldRefs {
    readonly id: FieldRef<"PagoDeportista", 'Int'>
    readonly idDeportista: FieldRef<"PagoDeportista", 'Int'>
    readonly fechaPago: FieldRef<"PagoDeportista", 'DateTime'>
    readonly valor: FieldRef<"PagoDeportista", 'Decimal'>
    readonly tipoPago: FieldRef<"PagoDeportista", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PagoDeportista findUnique
   */
  export type PagoDeportistaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoDeportista
     */
    select?: PagoDeportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagoDeportista
     */
    omit?: PagoDeportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoDeportistaInclude<ExtArgs> | null
    /**
     * Filter, which PagoDeportista to fetch.
     */
    where: PagoDeportistaWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * PagoDeportista findUniqueOrThrow
   */
  export type PagoDeportistaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoDeportista
     */
    select?: PagoDeportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagoDeportista
     */
    omit?: PagoDeportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoDeportistaInclude<ExtArgs> | null
    /**
     * Filter, which PagoDeportista to fetch.
     */
    where: PagoDeportistaWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * PagoDeportista findFirst
   */
  export type PagoDeportistaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoDeportista
     */
    select?: PagoDeportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagoDeportista
     */
    omit?: PagoDeportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoDeportistaInclude<ExtArgs> | null
    /**
     * Filter, which PagoDeportista to fetch.
     */
    where?: PagoDeportistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PagoDeportistas to fetch.
     */
    orderBy?: PagoDeportistaOrderByWithRelationInput | PagoDeportistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PagoDeportistas.
     */
    cursor?: PagoDeportistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PagoDeportistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PagoDeportistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PagoDeportistas.
     */
    distinct?: PagoDeportistaScalarFieldEnum | PagoDeportistaScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * PagoDeportista findFirstOrThrow
   */
  export type PagoDeportistaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoDeportista
     */
    select?: PagoDeportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagoDeportista
     */
    omit?: PagoDeportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoDeportistaInclude<ExtArgs> | null
    /**
     * Filter, which PagoDeportista to fetch.
     */
    where?: PagoDeportistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PagoDeportistas to fetch.
     */
    orderBy?: PagoDeportistaOrderByWithRelationInput | PagoDeportistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PagoDeportistas.
     */
    cursor?: PagoDeportistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PagoDeportistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PagoDeportistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PagoDeportistas.
     */
    distinct?: PagoDeportistaScalarFieldEnum | PagoDeportistaScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * PagoDeportista findMany
   */
  export type PagoDeportistaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoDeportista
     */
    select?: PagoDeportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagoDeportista
     */
    omit?: PagoDeportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoDeportistaInclude<ExtArgs> | null
    /**
     * Filter, which PagoDeportistas to fetch.
     */
    where?: PagoDeportistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PagoDeportistas to fetch.
     */
    orderBy?: PagoDeportistaOrderByWithRelationInput | PagoDeportistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PagoDeportistas.
     */
    cursor?: PagoDeportistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PagoDeportistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PagoDeportistas.
     */
    skip?: number
    distinct?: PagoDeportistaScalarFieldEnum | PagoDeportistaScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * PagoDeportista create
   */
  export type PagoDeportistaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoDeportista
     */
    select?: PagoDeportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagoDeportista
     */
    omit?: PagoDeportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoDeportistaInclude<ExtArgs> | null
    /**
     * The data needed to create a PagoDeportista.
     */
    data: XOR<PagoDeportistaCreateInput, PagoDeportistaUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * PagoDeportista createMany
   */
  export type PagoDeportistaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PagoDeportistas.
     */
    data: PagoDeportistaCreateManyInput | PagoDeportistaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PagoDeportista update
   */
  export type PagoDeportistaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoDeportista
     */
    select?: PagoDeportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagoDeportista
     */
    omit?: PagoDeportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoDeportistaInclude<ExtArgs> | null
    /**
     * The data needed to update a PagoDeportista.
     */
    data: XOR<PagoDeportistaUpdateInput, PagoDeportistaUncheckedUpdateInput>
    /**
     * Choose, which PagoDeportista to update.
     */
    where: PagoDeportistaWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * PagoDeportista updateMany
   */
  export type PagoDeportistaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PagoDeportistas.
     */
    data: XOR<PagoDeportistaUpdateManyMutationInput, PagoDeportistaUncheckedUpdateManyInput>
    /**
     * Filter which PagoDeportistas to update
     */
    where?: PagoDeportistaWhereInput
    /**
     * Limit how many PagoDeportistas to update.
     */
    limit?: number
  }

  /**
   * PagoDeportista upsert
   */
  export type PagoDeportistaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoDeportista
     */
    select?: PagoDeportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagoDeportista
     */
    omit?: PagoDeportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoDeportistaInclude<ExtArgs> | null
    /**
     * The filter to search for the PagoDeportista to update in case it exists.
     */
    where: PagoDeportistaWhereUniqueInput
    /**
     * In case the PagoDeportista found by the `where` argument doesn't exist, create a new PagoDeportista with this data.
     */
    create: XOR<PagoDeportistaCreateInput, PagoDeportistaUncheckedCreateInput>
    /**
     * In case the PagoDeportista was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PagoDeportistaUpdateInput, PagoDeportistaUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * PagoDeportista delete
   */
  export type PagoDeportistaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoDeportista
     */
    select?: PagoDeportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagoDeportista
     */
    omit?: PagoDeportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoDeportistaInclude<ExtArgs> | null
    /**
     * Filter which PagoDeportista to delete.
     */
    where: PagoDeportistaWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * PagoDeportista deleteMany
   */
  export type PagoDeportistaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PagoDeportistas to delete
     */
    where?: PagoDeportistaWhereInput
    /**
     * Limit how many PagoDeportistas to delete.
     */
    limit?: number
  }

  /**
   * PagoDeportista.deportista
   */
  export type PagoDeportista$deportistaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deportista
     */
    select?: DeportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deportista
     */
    omit?: DeportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeportistaInclude<ExtArgs> | null
    where?: DeportistaWhereInput
  }

  /**
   * PagoDeportista without action
   */
  export type PagoDeportistaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoDeportista
     */
    select?: PagoDeportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagoDeportista
     */
    omit?: PagoDeportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoDeportistaInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
    idPersona: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
    idPersona: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    usuario: string | null
    contrasenia: string | null
    activo: boolean | null
    idPersona: number | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    usuario: string | null
    contrasenia: string | null
    activo: boolean | null
    idPersona: number | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    usuario: number
    contrasenia: number
    activo: number
    idPersona: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
    idPersona?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
    idPersona?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    usuario?: true
    contrasenia?: true
    activo?: true
    idPersona?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    usuario?: true
    contrasenia?: true
    activo?: true
    idPersona?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    usuario?: true
    contrasenia?: true
    activo?: true
    idPersona?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    usuario: string | null
    contrasenia: string | null
    activo: boolean | null
    idPersona: number | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario?: boolean
    contrasenia?: boolean
    activo?: boolean
    idPersona?: boolean
    persona?: boolean | Usuario$personaArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    id?: boolean
    usuario?: boolean
    contrasenia?: boolean
    activo?: boolean
    idPersona?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario" | "contrasenia" | "activo" | "idPersona", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persona?: boolean | Usuario$personaArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      persona: Prisma.$PersonaClubPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuario: string | null
      contrasenia: string | null
      activo: boolean | null
      idPersona: number | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    persona<T extends Usuario$personaArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$personaArgs<ExtArgs>>): Prisma__PersonaClubClient<$Result.GetResult<Prisma.$PersonaClubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly usuario: FieldRef<"Usuario", 'String'>
    readonly contrasenia: FieldRef<"Usuario", 'String'>
    readonly activo: FieldRef<"Usuario", 'Boolean'>
    readonly idPersona: FieldRef<"Usuario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data?: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.persona
   */
  export type Usuario$personaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonaClub
     */
    select?: PersonaClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonaClub
     */
    omit?: PersonaClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaClubInclude<ExtArgs> | null
    where?: PersonaClubWhereInput
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Departamento
   */

  export type AggregateDepartamento = {
    _count: DepartamentoCountAggregateOutputType | null
    _avg: DepartamentoAvgAggregateOutputType | null
    _sum: DepartamentoSumAggregateOutputType | null
    _min: DepartamentoMinAggregateOutputType | null
    _max: DepartamentoMaxAggregateOutputType | null
  }

  export type DepartamentoAvgAggregateOutputType = {
    id: number | null
  }

  export type DepartamentoSumAggregateOutputType = {
    id: number | null
  }

  export type DepartamentoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type DepartamentoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type DepartamentoCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type DepartamentoAvgAggregateInputType = {
    id?: true
  }

  export type DepartamentoSumAggregateInputType = {
    id?: true
  }

  export type DepartamentoMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type DepartamentoMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type DepartamentoCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type DepartamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departamento to aggregate.
     */
    where?: DepartamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departamentos to fetch.
     */
    orderBy?: DepartamentoOrderByWithRelationInput | DepartamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departamentos
    **/
    _count?: true | DepartamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartamentoMaxAggregateInputType
  }

  export type GetDepartamentoAggregateType<T extends DepartamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartamento[P]>
      : GetScalarType<T[P], AggregateDepartamento[P]>
  }




  export type DepartamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartamentoWhereInput
    orderBy?: DepartamentoOrderByWithAggregationInput | DepartamentoOrderByWithAggregationInput[]
    by: DepartamentoScalarFieldEnum[] | DepartamentoScalarFieldEnum
    having?: DepartamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartamentoCountAggregateInputType | true
    _avg?: DepartamentoAvgAggregateInputType
    _sum?: DepartamentoSumAggregateInputType
    _min?: DepartamentoMinAggregateInputType
    _max?: DepartamentoMaxAggregateInputType
  }

  export type DepartamentoGroupByOutputType = {
    id: number
    nombre: string | null
    _count: DepartamentoCountAggregateOutputType | null
    _avg: DepartamentoAvgAggregateOutputType | null
    _sum: DepartamentoSumAggregateOutputType | null
    _min: DepartamentoMinAggregateOutputType | null
    _max: DepartamentoMaxAggregateOutputType | null
  }

  type GetDepartamentoGroupByPayload<T extends DepartamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartamentoGroupByOutputType[P]>
            : GetScalarType<T[P], DepartamentoGroupByOutputType[P]>
        }
      >
    >


  export type DepartamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    municipio?: boolean | Departamento$municipioArgs<ExtArgs>
  }, ExtArgs["result"]["departamento"]>



  export type DepartamentoSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type DepartamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["departamento"]>
  export type DepartamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipio?: boolean | Departamento$municipioArgs<ExtArgs>
  }

  export type $DepartamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Departamento"
    objects: {
      municipio: Prisma.$MunicipioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string | null
    }, ExtArgs["result"]["departamento"]>
    composites: {}
  }

  type DepartamentoGetPayload<S extends boolean | null | undefined | DepartamentoDefaultArgs> = $Result.GetResult<Prisma.$DepartamentoPayload, S>

  type DepartamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: DepartamentoCountAggregateInputType | true
    }

  export interface DepartamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Departamento'], meta: { name: 'Departamento' } }
    /**
     * Find zero or one Departamento that matches the filter.
     * @param {DepartamentoFindUniqueArgs} args - Arguments to find a Departamento
     * @example
     * // Get one Departamento
     * const departamento = await prisma.departamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartamentoFindUniqueArgs>(args: SelectSubset<T, DepartamentoFindUniqueArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Departamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartamentoFindUniqueOrThrowArgs} args - Arguments to find a Departamento
     * @example
     * // Get one Departamento
     * const departamento = await prisma.departamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentoFindFirstArgs} args - Arguments to find a Departamento
     * @example
     * // Get one Departamento
     * const departamento = await prisma.departamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartamentoFindFirstArgs>(args?: SelectSubset<T, DepartamentoFindFirstArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentoFindFirstOrThrowArgs} args - Arguments to find a Departamento
     * @example
     * // Get one Departamento
     * const departamento = await prisma.departamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departamentos
     * const departamentos = await prisma.departamento.findMany()
     * 
     * // Get first 10 Departamentos
     * const departamentos = await prisma.departamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departamentoWithIdOnly = await prisma.departamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartamentoFindManyArgs>(args?: SelectSubset<T, DepartamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Departamento.
     * @param {DepartamentoCreateArgs} args - Arguments to create a Departamento.
     * @example
     * // Create one Departamento
     * const Departamento = await prisma.departamento.create({
     *   data: {
     *     // ... data to create a Departamento
     *   }
     * })
     * 
     */
    create<T extends DepartamentoCreateArgs>(args: SelectSubset<T, DepartamentoCreateArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departamentos.
     * @param {DepartamentoCreateManyArgs} args - Arguments to create many Departamentos.
     * @example
     * // Create many Departamentos
     * const departamento = await prisma.departamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartamentoCreateManyArgs>(args?: SelectSubset<T, DepartamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Departamento.
     * @param {DepartamentoDeleteArgs} args - Arguments to delete one Departamento.
     * @example
     * // Delete one Departamento
     * const Departamento = await prisma.departamento.delete({
     *   where: {
     *     // ... filter to delete one Departamento
     *   }
     * })
     * 
     */
    delete<T extends DepartamentoDeleteArgs>(args: SelectSubset<T, DepartamentoDeleteArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Departamento.
     * @param {DepartamentoUpdateArgs} args - Arguments to update one Departamento.
     * @example
     * // Update one Departamento
     * const departamento = await prisma.departamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartamentoUpdateArgs>(args: SelectSubset<T, DepartamentoUpdateArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departamentos.
     * @param {DepartamentoDeleteManyArgs} args - Arguments to filter Departamentos to delete.
     * @example
     * // Delete a few Departamentos
     * const { count } = await prisma.departamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartamentoDeleteManyArgs>(args?: SelectSubset<T, DepartamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departamentos
     * const departamento = await prisma.departamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartamentoUpdateManyArgs>(args: SelectSubset<T, DepartamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Departamento.
     * @param {DepartamentoUpsertArgs} args - Arguments to update or create a Departamento.
     * @example
     * // Update or create a Departamento
     * const departamento = await prisma.departamento.upsert({
     *   create: {
     *     // ... data to create a Departamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Departamento we want to update
     *   }
     * })
     */
    upsert<T extends DepartamentoUpsertArgs>(args: SelectSubset<T, DepartamentoUpsertArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentoCountArgs} args - Arguments to filter Departamentos to count.
     * @example
     * // Count the number of Departamentos
     * const count = await prisma.departamento.count({
     *   where: {
     *     // ... the filter for the Departamentos we want to count
     *   }
     * })
    **/
    count<T extends DepartamentoCountArgs>(
      args?: Subset<T, DepartamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Departamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartamentoAggregateArgs>(args: Subset<T, DepartamentoAggregateArgs>): Prisma.PrismaPromise<GetDepartamentoAggregateType<T>>

    /**
     * Group by Departamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentoGroupByArgs} args - Group by arguments.
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
      T extends DepartamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartamentoGroupByArgs['orderBy'] }
        : { orderBy?: DepartamentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, DepartamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Departamento model
   */
  readonly fields: DepartamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Departamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    municipio<T extends Departamento$municipioArgs<ExtArgs> = {}>(args?: Subset<T, Departamento$municipioArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Departamento model
   */
  interface DepartamentoFieldRefs {
    readonly id: FieldRef<"Departamento", 'Int'>
    readonly nombre: FieldRef<"Departamento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Departamento findUnique
   */
  export type DepartamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which Departamento to fetch.
     */
    where: DepartamentoWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Departamento findUniqueOrThrow
   */
  export type DepartamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which Departamento to fetch.
     */
    where: DepartamentoWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Departamento findFirst
   */
  export type DepartamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which Departamento to fetch.
     */
    where?: DepartamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departamentos to fetch.
     */
    orderBy?: DepartamentoOrderByWithRelationInput | DepartamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departamentos.
     */
    cursor?: DepartamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departamentos.
     */
    distinct?: DepartamentoScalarFieldEnum | DepartamentoScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Departamento findFirstOrThrow
   */
  export type DepartamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which Departamento to fetch.
     */
    where?: DepartamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departamentos to fetch.
     */
    orderBy?: DepartamentoOrderByWithRelationInput | DepartamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departamentos.
     */
    cursor?: DepartamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departamentos.
     */
    distinct?: DepartamentoScalarFieldEnum | DepartamentoScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Departamento findMany
   */
  export type DepartamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which Departamentos to fetch.
     */
    where?: DepartamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departamentos to fetch.
     */
    orderBy?: DepartamentoOrderByWithRelationInput | DepartamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departamentos.
     */
    cursor?: DepartamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departamentos.
     */
    skip?: number
    distinct?: DepartamentoScalarFieldEnum | DepartamentoScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Departamento create
   */
  export type DepartamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Departamento.
     */
    data?: XOR<DepartamentoCreateInput, DepartamentoUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Departamento createMany
   */
  export type DepartamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departamentos.
     */
    data: DepartamentoCreateManyInput | DepartamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Departamento update
   */
  export type DepartamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Departamento.
     */
    data: XOR<DepartamentoUpdateInput, DepartamentoUncheckedUpdateInput>
    /**
     * Choose, which Departamento to update.
     */
    where: DepartamentoWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Departamento updateMany
   */
  export type DepartamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departamentos.
     */
    data: XOR<DepartamentoUpdateManyMutationInput, DepartamentoUncheckedUpdateManyInput>
    /**
     * Filter which Departamentos to update
     */
    where?: DepartamentoWhereInput
    /**
     * Limit how many Departamentos to update.
     */
    limit?: number
  }

  /**
   * Departamento upsert
   */
  export type DepartamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Departamento to update in case it exists.
     */
    where: DepartamentoWhereUniqueInput
    /**
     * In case the Departamento found by the `where` argument doesn't exist, create a new Departamento with this data.
     */
    create: XOR<DepartamentoCreateInput, DepartamentoUncheckedCreateInput>
    /**
     * In case the Departamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartamentoUpdateInput, DepartamentoUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Departamento delete
   */
  export type DepartamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * Filter which Departamento to delete.
     */
    where: DepartamentoWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Departamento deleteMany
   */
  export type DepartamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departamentos to delete
     */
    where?: DepartamentoWhereInput
    /**
     * Limit how many Departamentos to delete.
     */
    limit?: number
  }

  /**
   * Departamento.municipio
   */
  export type Departamento$municipioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    where?: MunicipioWhereInput
  }

  /**
   * Departamento without action
   */
  export type DepartamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
  }


  /**
   * Model Municipio
   */

  export type AggregateMunicipio = {
    _count: MunicipioCountAggregateOutputType | null
    _avg: MunicipioAvgAggregateOutputType | null
    _sum: MunicipioSumAggregateOutputType | null
    _min: MunicipioMinAggregateOutputType | null
    _max: MunicipioMaxAggregateOutputType | null
  }

  export type MunicipioAvgAggregateOutputType = {
    id: number | null
    idDepartamento: number | null
  }

  export type MunicipioSumAggregateOutputType = {
    id: number | null
    idDepartamento: number | null
  }

  export type MunicipioMinAggregateOutputType = {
    id: number | null
    idDepartamento: number | null
    nombre: string | null
    estado: boolean | null
  }

  export type MunicipioMaxAggregateOutputType = {
    id: number | null
    idDepartamento: number | null
    nombre: string | null
    estado: boolean | null
  }

  export type MunicipioCountAggregateOutputType = {
    id: number
    idDepartamento: number
    nombre: number
    estado: number
    _all: number
  }


  export type MunicipioAvgAggregateInputType = {
    id?: true
    idDepartamento?: true
  }

  export type MunicipioSumAggregateInputType = {
    id?: true
    idDepartamento?: true
  }

  export type MunicipioMinAggregateInputType = {
    id?: true
    idDepartamento?: true
    nombre?: true
    estado?: true
  }

  export type MunicipioMaxAggregateInputType = {
    id?: true
    idDepartamento?: true
    nombre?: true
    estado?: true
  }

  export type MunicipioCountAggregateInputType = {
    id?: true
    idDepartamento?: true
    nombre?: true
    estado?: true
    _all?: true
  }

  export type MunicipioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Municipio to aggregate.
     */
    where?: MunicipioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Municipios to fetch.
     */
    orderBy?: MunicipioOrderByWithRelationInput | MunicipioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MunicipioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Municipios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Municipios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Municipios
    **/
    _count?: true | MunicipioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MunicipioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MunicipioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MunicipioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MunicipioMaxAggregateInputType
  }

  export type GetMunicipioAggregateType<T extends MunicipioAggregateArgs> = {
        [P in keyof T & keyof AggregateMunicipio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMunicipio[P]>
      : GetScalarType<T[P], AggregateMunicipio[P]>
  }




  export type MunicipioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MunicipioWhereInput
    orderBy?: MunicipioOrderByWithAggregationInput | MunicipioOrderByWithAggregationInput[]
    by: MunicipioScalarFieldEnum[] | MunicipioScalarFieldEnum
    having?: MunicipioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MunicipioCountAggregateInputType | true
    _avg?: MunicipioAvgAggregateInputType
    _sum?: MunicipioSumAggregateInputType
    _min?: MunicipioMinAggregateInputType
    _max?: MunicipioMaxAggregateInputType
  }

  export type MunicipioGroupByOutputType = {
    id: number
    idDepartamento: number
    nombre: string | null
    estado: boolean | null
    _count: MunicipioCountAggregateOutputType | null
    _avg: MunicipioAvgAggregateOutputType | null
    _sum: MunicipioSumAggregateOutputType | null
    _min: MunicipioMinAggregateOutputType | null
    _max: MunicipioMaxAggregateOutputType | null
  }

  type GetMunicipioGroupByPayload<T extends MunicipioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MunicipioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MunicipioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MunicipioGroupByOutputType[P]>
            : GetScalarType<T[P], MunicipioGroupByOutputType[P]>
        }
      >
    >


  export type MunicipioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idDepartamento?: boolean
    nombre?: boolean
    estado?: boolean
    personaClub?: boolean | Municipio$personaClubArgs<ExtArgs>
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
    _count?: boolean | MunicipioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["municipio"]>



  export type MunicipioSelectScalar = {
    id?: boolean
    idDepartamento?: boolean
    nombre?: boolean
    estado?: boolean
  }

  export type MunicipioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idDepartamento" | "nombre" | "estado", ExtArgs["result"]["municipio"]>
  export type MunicipioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personaClub?: boolean | Municipio$personaClubArgs<ExtArgs>
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
    _count?: boolean | MunicipioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MunicipioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Municipio"
    objects: {
      personaClub: Prisma.$PersonaClubPayload<ExtArgs>[]
      departamento: Prisma.$DepartamentoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idDepartamento: number
      nombre: string | null
      estado: boolean | null
    }, ExtArgs["result"]["municipio"]>
    composites: {}
  }

  type MunicipioGetPayload<S extends boolean | null | undefined | MunicipioDefaultArgs> = $Result.GetResult<Prisma.$MunicipioPayload, S>

  type MunicipioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MunicipioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: MunicipioCountAggregateInputType | true
    }

  export interface MunicipioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Municipio'], meta: { name: 'Municipio' } }
    /**
     * Find zero or one Municipio that matches the filter.
     * @param {MunicipioFindUniqueArgs} args - Arguments to find a Municipio
     * @example
     * // Get one Municipio
     * const municipio = await prisma.municipio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MunicipioFindUniqueArgs>(args: SelectSubset<T, MunicipioFindUniqueArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Municipio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MunicipioFindUniqueOrThrowArgs} args - Arguments to find a Municipio
     * @example
     * // Get one Municipio
     * const municipio = await prisma.municipio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MunicipioFindUniqueOrThrowArgs>(args: SelectSubset<T, MunicipioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Municipio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipioFindFirstArgs} args - Arguments to find a Municipio
     * @example
     * // Get one Municipio
     * const municipio = await prisma.municipio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MunicipioFindFirstArgs>(args?: SelectSubset<T, MunicipioFindFirstArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Municipio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipioFindFirstOrThrowArgs} args - Arguments to find a Municipio
     * @example
     * // Get one Municipio
     * const municipio = await prisma.municipio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MunicipioFindFirstOrThrowArgs>(args?: SelectSubset<T, MunicipioFindFirstOrThrowArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Municipios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Municipios
     * const municipios = await prisma.municipio.findMany()
     * 
     * // Get first 10 Municipios
     * const municipios = await prisma.municipio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const municipioWithIdOnly = await prisma.municipio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MunicipioFindManyArgs>(args?: SelectSubset<T, MunicipioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Municipio.
     * @param {MunicipioCreateArgs} args - Arguments to create a Municipio.
     * @example
     * // Create one Municipio
     * const Municipio = await prisma.municipio.create({
     *   data: {
     *     // ... data to create a Municipio
     *   }
     * })
     * 
     */
    create<T extends MunicipioCreateArgs>(args: SelectSubset<T, MunicipioCreateArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Municipios.
     * @param {MunicipioCreateManyArgs} args - Arguments to create many Municipios.
     * @example
     * // Create many Municipios
     * const municipio = await prisma.municipio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MunicipioCreateManyArgs>(args?: SelectSubset<T, MunicipioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Municipio.
     * @param {MunicipioDeleteArgs} args - Arguments to delete one Municipio.
     * @example
     * // Delete one Municipio
     * const Municipio = await prisma.municipio.delete({
     *   where: {
     *     // ... filter to delete one Municipio
     *   }
     * })
     * 
     */
    delete<T extends MunicipioDeleteArgs>(args: SelectSubset<T, MunicipioDeleteArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Municipio.
     * @param {MunicipioUpdateArgs} args - Arguments to update one Municipio.
     * @example
     * // Update one Municipio
     * const municipio = await prisma.municipio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MunicipioUpdateArgs>(args: SelectSubset<T, MunicipioUpdateArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Municipios.
     * @param {MunicipioDeleteManyArgs} args - Arguments to filter Municipios to delete.
     * @example
     * // Delete a few Municipios
     * const { count } = await prisma.municipio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MunicipioDeleteManyArgs>(args?: SelectSubset<T, MunicipioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Municipios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Municipios
     * const municipio = await prisma.municipio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MunicipioUpdateManyArgs>(args: SelectSubset<T, MunicipioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Municipio.
     * @param {MunicipioUpsertArgs} args - Arguments to update or create a Municipio.
     * @example
     * // Update or create a Municipio
     * const municipio = await prisma.municipio.upsert({
     *   create: {
     *     // ... data to create a Municipio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Municipio we want to update
     *   }
     * })
     */
    upsert<T extends MunicipioUpsertArgs>(args: SelectSubset<T, MunicipioUpsertArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Municipios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipioCountArgs} args - Arguments to filter Municipios to count.
     * @example
     * // Count the number of Municipios
     * const count = await prisma.municipio.count({
     *   where: {
     *     // ... the filter for the Municipios we want to count
     *   }
     * })
    **/
    count<T extends MunicipioCountArgs>(
      args?: Subset<T, MunicipioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MunicipioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Municipio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MunicipioAggregateArgs>(args: Subset<T, MunicipioAggregateArgs>): Prisma.PrismaPromise<GetMunicipioAggregateType<T>>

    /**
     * Group by Municipio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipioGroupByArgs} args - Group by arguments.
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
      T extends MunicipioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MunicipioGroupByArgs['orderBy'] }
        : { orderBy?: MunicipioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MunicipioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMunicipioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Municipio model
   */
  readonly fields: MunicipioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Municipio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MunicipioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    personaClub<T extends Municipio$personaClubArgs<ExtArgs> = {}>(args?: Subset<T, Municipio$personaClubArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonaClubPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    departamento<T extends DepartamentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartamentoDefaultArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Municipio model
   */
  interface MunicipioFieldRefs {
    readonly id: FieldRef<"Municipio", 'Int'>
    readonly idDepartamento: FieldRef<"Municipio", 'Int'>
    readonly nombre: FieldRef<"Municipio", 'String'>
    readonly estado: FieldRef<"Municipio", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Municipio findUnique
   */
  export type MunicipioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    /**
     * Filter, which Municipio to fetch.
     */
    where: MunicipioWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Municipio findUniqueOrThrow
   */
  export type MunicipioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    /**
     * Filter, which Municipio to fetch.
     */
    where: MunicipioWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Municipio findFirst
   */
  export type MunicipioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    /**
     * Filter, which Municipio to fetch.
     */
    where?: MunicipioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Municipios to fetch.
     */
    orderBy?: MunicipioOrderByWithRelationInput | MunicipioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Municipios.
     */
    cursor?: MunicipioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Municipios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Municipios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Municipios.
     */
    distinct?: MunicipioScalarFieldEnum | MunicipioScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Municipio findFirstOrThrow
   */
  export type MunicipioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    /**
     * Filter, which Municipio to fetch.
     */
    where?: MunicipioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Municipios to fetch.
     */
    orderBy?: MunicipioOrderByWithRelationInput | MunicipioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Municipios.
     */
    cursor?: MunicipioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Municipios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Municipios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Municipios.
     */
    distinct?: MunicipioScalarFieldEnum | MunicipioScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Municipio findMany
   */
  export type MunicipioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    /**
     * Filter, which Municipios to fetch.
     */
    where?: MunicipioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Municipios to fetch.
     */
    orderBy?: MunicipioOrderByWithRelationInput | MunicipioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Municipios.
     */
    cursor?: MunicipioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Municipios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Municipios.
     */
    skip?: number
    distinct?: MunicipioScalarFieldEnum | MunicipioScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Municipio create
   */
  export type MunicipioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    /**
     * The data needed to create a Municipio.
     */
    data: XOR<MunicipioCreateInput, MunicipioUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Municipio createMany
   */
  export type MunicipioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Municipios.
     */
    data: MunicipioCreateManyInput | MunicipioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Municipio update
   */
  export type MunicipioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    /**
     * The data needed to update a Municipio.
     */
    data: XOR<MunicipioUpdateInput, MunicipioUncheckedUpdateInput>
    /**
     * Choose, which Municipio to update.
     */
    where: MunicipioWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Municipio updateMany
   */
  export type MunicipioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Municipios.
     */
    data: XOR<MunicipioUpdateManyMutationInput, MunicipioUncheckedUpdateManyInput>
    /**
     * Filter which Municipios to update
     */
    where?: MunicipioWhereInput
    /**
     * Limit how many Municipios to update.
     */
    limit?: number
  }

  /**
   * Municipio upsert
   */
  export type MunicipioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    /**
     * The filter to search for the Municipio to update in case it exists.
     */
    where: MunicipioWhereUniqueInput
    /**
     * In case the Municipio found by the `where` argument doesn't exist, create a new Municipio with this data.
     */
    create: XOR<MunicipioCreateInput, MunicipioUncheckedCreateInput>
    /**
     * In case the Municipio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MunicipioUpdateInput, MunicipioUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Municipio delete
   */
  export type MunicipioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    /**
     * Filter which Municipio to delete.
     */
    where: MunicipioWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Municipio deleteMany
   */
  export type MunicipioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Municipios to delete
     */
    where?: MunicipioWhereInput
    /**
     * Limit how many Municipios to delete.
     */
    limit?: number
  }

  /**
   * Municipio.personaClub
   */
  export type Municipio$personaClubArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonaClub
     */
    select?: PersonaClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonaClub
     */
    omit?: PersonaClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaClubInclude<ExtArgs> | null
    where?: PersonaClubWhereInput
    orderBy?: PersonaClubOrderByWithRelationInput | PersonaClubOrderByWithRelationInput[]
    cursor?: PersonaClubWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonaClubScalarFieldEnum | PersonaClubScalarFieldEnum[]
  }

  /**
   * Municipio without action
   */
  export type MunicipioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
  }


  /**
   * Model TipoDocumento
   */

  export type AggregateTipoDocumento = {
    _count: TipoDocumentoCountAggregateOutputType | null
    _avg: TipoDocumentoAvgAggregateOutputType | null
    _sum: TipoDocumentoSumAggregateOutputType | null
    _min: TipoDocumentoMinAggregateOutputType | null
    _max: TipoDocumentoMaxAggregateOutputType | null
  }

  export type TipoDocumentoAvgAggregateOutputType = {
    id: number | null
  }

  export type TipoDocumentoSumAggregateOutputType = {
    id: number | null
  }

  export type TipoDocumentoMinAggregateOutputType = {
    id: number | null
    tipoDocumento: string | null
    descripcion: string | null
  }

  export type TipoDocumentoMaxAggregateOutputType = {
    id: number | null
    tipoDocumento: string | null
    descripcion: string | null
  }

  export type TipoDocumentoCountAggregateOutputType = {
    id: number
    tipoDocumento: number
    descripcion: number
    _all: number
  }


  export type TipoDocumentoAvgAggregateInputType = {
    id?: true
  }

  export type TipoDocumentoSumAggregateInputType = {
    id?: true
  }

  export type TipoDocumentoMinAggregateInputType = {
    id?: true
    tipoDocumento?: true
    descripcion?: true
  }

  export type TipoDocumentoMaxAggregateInputType = {
    id?: true
    tipoDocumento?: true
    descripcion?: true
  }

  export type TipoDocumentoCountAggregateInputType = {
    id?: true
    tipoDocumento?: true
    descripcion?: true
    _all?: true
  }

  export type TipoDocumentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoDocumento to aggregate.
     */
    where?: TipoDocumentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoDocumentos to fetch.
     */
    orderBy?: TipoDocumentoOrderByWithRelationInput | TipoDocumentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoDocumentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoDocumentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoDocumentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoDocumentos
    **/
    _count?: true | TipoDocumentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoDocumentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoDocumentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoDocumentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoDocumentoMaxAggregateInputType
  }

  export type GetTipoDocumentoAggregateType<T extends TipoDocumentoAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoDocumento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoDocumento[P]>
      : GetScalarType<T[P], AggregateTipoDocumento[P]>
  }




  export type TipoDocumentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoDocumentoWhereInput
    orderBy?: TipoDocumentoOrderByWithAggregationInput | TipoDocumentoOrderByWithAggregationInput[]
    by: TipoDocumentoScalarFieldEnum[] | TipoDocumentoScalarFieldEnum
    having?: TipoDocumentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoDocumentoCountAggregateInputType | true
    _avg?: TipoDocumentoAvgAggregateInputType
    _sum?: TipoDocumentoSumAggregateInputType
    _min?: TipoDocumentoMinAggregateInputType
    _max?: TipoDocumentoMaxAggregateInputType
  }

  export type TipoDocumentoGroupByOutputType = {
    id: number
    tipoDocumento: string | null
    descripcion: string | null
    _count: TipoDocumentoCountAggregateOutputType | null
    _avg: TipoDocumentoAvgAggregateOutputType | null
    _sum: TipoDocumentoSumAggregateOutputType | null
    _min: TipoDocumentoMinAggregateOutputType | null
    _max: TipoDocumentoMaxAggregateOutputType | null
  }

  type GetTipoDocumentoGroupByPayload<T extends TipoDocumentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoDocumentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoDocumentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoDocumentoGroupByOutputType[P]>
            : GetScalarType<T[P], TipoDocumentoGroupByOutputType[P]>
        }
      >
    >


  export type TipoDocumentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipoDocumento?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["tipoDocumento"]>



  export type TipoDocumentoSelectScalar = {
    id?: boolean
    tipoDocumento?: boolean
    descripcion?: boolean
  }

  export type TipoDocumentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipoDocumento" | "descripcion", ExtArgs["result"]["tipoDocumento"]>

  export type $TipoDocumentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoDocumento"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipoDocumento: string | null
      descripcion: string | null
    }, ExtArgs["result"]["tipoDocumento"]>
    composites: {}
  }

  type TipoDocumentoGetPayload<S extends boolean | null | undefined | TipoDocumentoDefaultArgs> = $Result.GetResult<Prisma.$TipoDocumentoPayload, S>

  type TipoDocumentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoDocumentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: TipoDocumentoCountAggregateInputType | true
    }

  export interface TipoDocumentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoDocumento'], meta: { name: 'TipoDocumento' } }
    /**
     * Find zero or one TipoDocumento that matches the filter.
     * @param {TipoDocumentoFindUniqueArgs} args - Arguments to find a TipoDocumento
     * @example
     * // Get one TipoDocumento
     * const tipoDocumento = await prisma.tipoDocumento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoDocumentoFindUniqueArgs>(args: SelectSubset<T, TipoDocumentoFindUniqueArgs<ExtArgs>>): Prisma__TipoDocumentoClient<$Result.GetResult<Prisma.$TipoDocumentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipoDocumento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoDocumentoFindUniqueOrThrowArgs} args - Arguments to find a TipoDocumento
     * @example
     * // Get one TipoDocumento
     * const tipoDocumento = await prisma.tipoDocumento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoDocumentoFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoDocumentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoDocumentoClient<$Result.GetResult<Prisma.$TipoDocumentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoDocumento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDocumentoFindFirstArgs} args - Arguments to find a TipoDocumento
     * @example
     * // Get one TipoDocumento
     * const tipoDocumento = await prisma.tipoDocumento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoDocumentoFindFirstArgs>(args?: SelectSubset<T, TipoDocumentoFindFirstArgs<ExtArgs>>): Prisma__TipoDocumentoClient<$Result.GetResult<Prisma.$TipoDocumentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoDocumento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDocumentoFindFirstOrThrowArgs} args - Arguments to find a TipoDocumento
     * @example
     * // Get one TipoDocumento
     * const tipoDocumento = await prisma.tipoDocumento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoDocumentoFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoDocumentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoDocumentoClient<$Result.GetResult<Prisma.$TipoDocumentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipoDocumentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDocumentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoDocumentos
     * const tipoDocumentos = await prisma.tipoDocumento.findMany()
     * 
     * // Get first 10 TipoDocumentos
     * const tipoDocumentos = await prisma.tipoDocumento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipoDocumentoWithIdOnly = await prisma.tipoDocumento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TipoDocumentoFindManyArgs>(args?: SelectSubset<T, TipoDocumentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoDocumentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipoDocumento.
     * @param {TipoDocumentoCreateArgs} args - Arguments to create a TipoDocumento.
     * @example
     * // Create one TipoDocumento
     * const TipoDocumento = await prisma.tipoDocumento.create({
     *   data: {
     *     // ... data to create a TipoDocumento
     *   }
     * })
     * 
     */
    create<T extends TipoDocumentoCreateArgs>(args: SelectSubset<T, TipoDocumentoCreateArgs<ExtArgs>>): Prisma__TipoDocumentoClient<$Result.GetResult<Prisma.$TipoDocumentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipoDocumentos.
     * @param {TipoDocumentoCreateManyArgs} args - Arguments to create many TipoDocumentos.
     * @example
     * // Create many TipoDocumentos
     * const tipoDocumento = await prisma.tipoDocumento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoDocumentoCreateManyArgs>(args?: SelectSubset<T, TipoDocumentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TipoDocumento.
     * @param {TipoDocumentoDeleteArgs} args - Arguments to delete one TipoDocumento.
     * @example
     * // Delete one TipoDocumento
     * const TipoDocumento = await prisma.tipoDocumento.delete({
     *   where: {
     *     // ... filter to delete one TipoDocumento
     *   }
     * })
     * 
     */
    delete<T extends TipoDocumentoDeleteArgs>(args: SelectSubset<T, TipoDocumentoDeleteArgs<ExtArgs>>): Prisma__TipoDocumentoClient<$Result.GetResult<Prisma.$TipoDocumentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipoDocumento.
     * @param {TipoDocumentoUpdateArgs} args - Arguments to update one TipoDocumento.
     * @example
     * // Update one TipoDocumento
     * const tipoDocumento = await prisma.tipoDocumento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoDocumentoUpdateArgs>(args: SelectSubset<T, TipoDocumentoUpdateArgs<ExtArgs>>): Prisma__TipoDocumentoClient<$Result.GetResult<Prisma.$TipoDocumentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipoDocumentos.
     * @param {TipoDocumentoDeleteManyArgs} args - Arguments to filter TipoDocumentos to delete.
     * @example
     * // Delete a few TipoDocumentos
     * const { count } = await prisma.tipoDocumento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoDocumentoDeleteManyArgs>(args?: SelectSubset<T, TipoDocumentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoDocumentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDocumentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoDocumentos
     * const tipoDocumento = await prisma.tipoDocumento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoDocumentoUpdateManyArgs>(args: SelectSubset<T, TipoDocumentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TipoDocumento.
     * @param {TipoDocumentoUpsertArgs} args - Arguments to update or create a TipoDocumento.
     * @example
     * // Update or create a TipoDocumento
     * const tipoDocumento = await prisma.tipoDocumento.upsert({
     *   create: {
     *     // ... data to create a TipoDocumento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoDocumento we want to update
     *   }
     * })
     */
    upsert<T extends TipoDocumentoUpsertArgs>(args: SelectSubset<T, TipoDocumentoUpsertArgs<ExtArgs>>): Prisma__TipoDocumentoClient<$Result.GetResult<Prisma.$TipoDocumentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipoDocumentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDocumentoCountArgs} args - Arguments to filter TipoDocumentos to count.
     * @example
     * // Count the number of TipoDocumentos
     * const count = await prisma.tipoDocumento.count({
     *   where: {
     *     // ... the filter for the TipoDocumentos we want to count
     *   }
     * })
    **/
    count<T extends TipoDocumentoCountArgs>(
      args?: Subset<T, TipoDocumentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoDocumentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoDocumento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDocumentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TipoDocumentoAggregateArgs>(args: Subset<T, TipoDocumentoAggregateArgs>): Prisma.PrismaPromise<GetTipoDocumentoAggregateType<T>>

    /**
     * Group by TipoDocumento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDocumentoGroupByArgs} args - Group by arguments.
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
      T extends TipoDocumentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoDocumentoGroupByArgs['orderBy'] }
        : { orderBy?: TipoDocumentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TipoDocumentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoDocumentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoDocumento model
   */
  readonly fields: TipoDocumentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoDocumento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoDocumentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TipoDocumento model
   */
  interface TipoDocumentoFieldRefs {
    readonly id: FieldRef<"TipoDocumento", 'Int'>
    readonly tipoDocumento: FieldRef<"TipoDocumento", 'String'>
    readonly descripcion: FieldRef<"TipoDocumento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TipoDocumento findUnique
   */
  export type TipoDocumentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDocumento
     */
    select?: TipoDocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDocumento
     */
    omit?: TipoDocumentoOmit<ExtArgs> | null
    /**
     * Filter, which TipoDocumento to fetch.
     */
    where: TipoDocumentoWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TipoDocumento findUniqueOrThrow
   */
  export type TipoDocumentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDocumento
     */
    select?: TipoDocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDocumento
     */
    omit?: TipoDocumentoOmit<ExtArgs> | null
    /**
     * Filter, which TipoDocumento to fetch.
     */
    where: TipoDocumentoWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TipoDocumento findFirst
   */
  export type TipoDocumentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDocumento
     */
    select?: TipoDocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDocumento
     */
    omit?: TipoDocumentoOmit<ExtArgs> | null
    /**
     * Filter, which TipoDocumento to fetch.
     */
    where?: TipoDocumentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoDocumentos to fetch.
     */
    orderBy?: TipoDocumentoOrderByWithRelationInput | TipoDocumentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoDocumentos.
     */
    cursor?: TipoDocumentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoDocumentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoDocumentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoDocumentos.
     */
    distinct?: TipoDocumentoScalarFieldEnum | TipoDocumentoScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TipoDocumento findFirstOrThrow
   */
  export type TipoDocumentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDocumento
     */
    select?: TipoDocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDocumento
     */
    omit?: TipoDocumentoOmit<ExtArgs> | null
    /**
     * Filter, which TipoDocumento to fetch.
     */
    where?: TipoDocumentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoDocumentos to fetch.
     */
    orderBy?: TipoDocumentoOrderByWithRelationInput | TipoDocumentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoDocumentos.
     */
    cursor?: TipoDocumentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoDocumentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoDocumentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoDocumentos.
     */
    distinct?: TipoDocumentoScalarFieldEnum | TipoDocumentoScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TipoDocumento findMany
   */
  export type TipoDocumentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDocumento
     */
    select?: TipoDocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDocumento
     */
    omit?: TipoDocumentoOmit<ExtArgs> | null
    /**
     * Filter, which TipoDocumentos to fetch.
     */
    where?: TipoDocumentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoDocumentos to fetch.
     */
    orderBy?: TipoDocumentoOrderByWithRelationInput | TipoDocumentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoDocumentos.
     */
    cursor?: TipoDocumentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoDocumentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoDocumentos.
     */
    skip?: number
    distinct?: TipoDocumentoScalarFieldEnum | TipoDocumentoScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TipoDocumento create
   */
  export type TipoDocumentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDocumento
     */
    select?: TipoDocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDocumento
     */
    omit?: TipoDocumentoOmit<ExtArgs> | null
    /**
     * The data needed to create a TipoDocumento.
     */
    data?: XOR<TipoDocumentoCreateInput, TipoDocumentoUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TipoDocumento createMany
   */
  export type TipoDocumentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoDocumentos.
     */
    data: TipoDocumentoCreateManyInput | TipoDocumentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoDocumento update
   */
  export type TipoDocumentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDocumento
     */
    select?: TipoDocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDocumento
     */
    omit?: TipoDocumentoOmit<ExtArgs> | null
    /**
     * The data needed to update a TipoDocumento.
     */
    data: XOR<TipoDocumentoUpdateInput, TipoDocumentoUncheckedUpdateInput>
    /**
     * Choose, which TipoDocumento to update.
     */
    where: TipoDocumentoWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TipoDocumento updateMany
   */
  export type TipoDocumentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoDocumentos.
     */
    data: XOR<TipoDocumentoUpdateManyMutationInput, TipoDocumentoUncheckedUpdateManyInput>
    /**
     * Filter which TipoDocumentos to update
     */
    where?: TipoDocumentoWhereInput
    /**
     * Limit how many TipoDocumentos to update.
     */
    limit?: number
  }

  /**
   * TipoDocumento upsert
   */
  export type TipoDocumentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDocumento
     */
    select?: TipoDocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDocumento
     */
    omit?: TipoDocumentoOmit<ExtArgs> | null
    /**
     * The filter to search for the TipoDocumento to update in case it exists.
     */
    where: TipoDocumentoWhereUniqueInput
    /**
     * In case the TipoDocumento found by the `where` argument doesn't exist, create a new TipoDocumento with this data.
     */
    create: XOR<TipoDocumentoCreateInput, TipoDocumentoUncheckedCreateInput>
    /**
     * In case the TipoDocumento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoDocumentoUpdateInput, TipoDocumentoUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TipoDocumento delete
   */
  export type TipoDocumentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDocumento
     */
    select?: TipoDocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDocumento
     */
    omit?: TipoDocumentoOmit<ExtArgs> | null
    /**
     * Filter which TipoDocumento to delete.
     */
    where: TipoDocumentoWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TipoDocumento deleteMany
   */
  export type TipoDocumentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoDocumentos to delete
     */
    where?: TipoDocumentoWhereInput
    /**
     * Limit how many TipoDocumentos to delete.
     */
    limit?: number
  }

  /**
   * TipoDocumento without action
   */
  export type TipoDocumentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDocumento
     */
    select?: TipoDocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDocumento
     */
    omit?: TipoDocumentoOmit<ExtArgs> | null
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


  export const CargosAdminScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type CargosAdminScalarFieldEnum = (typeof CargosAdminScalarFieldEnum)[keyof typeof CargosAdminScalarFieldEnum]


  export const RelationLoadStrategy: {
    query: 'query',
    join: 'join'
  };

  export type RelationLoadStrategy = (typeof RelationLoadStrategy)[keyof typeof RelationLoadStrategy]


  export const PersonaClubScalarFieldEnum: {
    id: 'id',
    numeroDocumento: 'numeroDocumento',
    tipoDocumento: 'tipoDocumento',
    idMunicipio: 'idMunicipio',
    nombres: 'nombres',
    apellidos: 'apellidos',
    fechaNacimento: 'fechaNacimento',
    tipoRh: 'tipoRh',
    peso: 'peso',
    altura: 'altura',
    correo: 'correo',
    numeroTelefono: 'numeroTelefono',
    tallaCamisa: 'tallaCamisa',
    tallaCalzado: 'tallaCalzado',
    tallaPantaloneta: 'tallaPantaloneta',
    genero: 'genero',
    direccion: 'direccion'
  };

  export type PersonaClubScalarFieldEnum = (typeof PersonaClubScalarFieldEnum)[keyof typeof PersonaClubScalarFieldEnum]


  export const ContactosEmergenciaScalarFieldEnum: {
    id: 'id',
    tipoDocumento: 'tipoDocumento',
    numeroDocumento: 'numeroDocumento',
    nombres: 'nombres',
    apellidos: 'apellidos',
    correo: 'correo',
    telefono: 'telefono'
  };

  export type ContactosEmergenciaScalarFieldEnum = (typeof ContactosEmergenciaScalarFieldEnum)[keyof typeof ContactosEmergenciaScalarFieldEnum]


  export const EntrenadorScalarFieldEnum: {
    id: 'id',
    idPersonaClub: 'idPersonaClub',
    idContactoEmergencia: 'idContactoEmergencia',
    fechaIngreso: 'fechaIngreso',
    activo: 'activo'
  };

  export type EntrenadorScalarFieldEnum = (typeof EntrenadorScalarFieldEnum)[keyof typeof EntrenadorScalarFieldEnum]


  export const TutorScalarFieldEnum: {
    id: 'id',
    tipoDocumento: 'tipoDocumento',
    numeroDocumento: 'numeroDocumento',
    nombres: 'nombres',
    apellidos: 'apellidos',
    correo: 'correo',
    telefono: 'telefono'
  };

  export type TutorScalarFieldEnum = (typeof TutorScalarFieldEnum)[keyof typeof TutorScalarFieldEnum]


  export const DeportistaScalarFieldEnum: {
    id: 'id',
    idTutor: 'idTutor',
    idPersonaClub: 'idPersonaClub',
    categoria: 'categoria',
    activo: 'activo'
  };

  export type DeportistaScalarFieldEnum = (typeof DeportistaScalarFieldEnum)[keyof typeof DeportistaScalarFieldEnum]


  export const DesercionDeportistaScalarFieldEnum: {
    id: 'id',
    idDeportista: 'idDeportista',
    fechaDesercion: 'fechaDesercion',
    razon: 'razon',
    descripcion: 'descripcion'
  };

  export type DesercionDeportistaScalarFieldEnum = (typeof DesercionDeportistaScalarFieldEnum)[keyof typeof DesercionDeportistaScalarFieldEnum]


  export const GestionAdminScalarFieldEnum: {
    id: 'id',
    idTutor: 'idTutor',
    idDeportista: 'idDeportista',
    idCargo: 'idCargo',
    fechaInicio: 'fechaInicio',
    fechaFin: 'fechaFin',
    activo: 'activo'
  };

  export type GestionAdminScalarFieldEnum = (typeof GestionAdminScalarFieldEnum)[keyof typeof GestionAdminScalarFieldEnum]


  export const PagoDeportistaScalarFieldEnum: {
    id: 'id',
    idDeportista: 'idDeportista',
    fechaPago: 'fechaPago',
    valor: 'valor',
    tipoPago: 'tipoPago'
  };

  export type PagoDeportistaScalarFieldEnum = (typeof PagoDeportistaScalarFieldEnum)[keyof typeof PagoDeportistaScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    usuario: 'usuario',
    contrasenia: 'contrasenia',
    activo: 'activo',
    idPersona: 'idPersona'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const DepartamentoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type DepartamentoScalarFieldEnum = (typeof DepartamentoScalarFieldEnum)[keyof typeof DepartamentoScalarFieldEnum]


  export const MunicipioScalarFieldEnum: {
    id: 'id',
    idDepartamento: 'idDepartamento',
    nombre: 'nombre',
    estado: 'estado'
  };

  export type MunicipioScalarFieldEnum = (typeof MunicipioScalarFieldEnum)[keyof typeof MunicipioScalarFieldEnum]


  export const TipoDocumentoScalarFieldEnum: {
    id: 'id',
    tipoDocumento: 'tipoDocumento',
    descripcion: 'descripcion'
  };

  export type TipoDocumentoScalarFieldEnum = (typeof TipoDocumentoScalarFieldEnum)[keyof typeof TipoDocumentoScalarFieldEnum]


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


  export const CargosAdminOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type CargosAdminOrderByRelevanceFieldEnum = (typeof CargosAdminOrderByRelevanceFieldEnum)[keyof typeof CargosAdminOrderByRelevanceFieldEnum]


  export const PersonaClubOrderByRelevanceFieldEnum: {
    numeroDocumento: 'numeroDocumento',
    tipoDocumento: 'tipoDocumento',
    nombres: 'nombres',
    apellidos: 'apellidos',
    tipoRh: 'tipoRh',
    correo: 'correo',
    numeroTelefono: 'numeroTelefono',
    tallaCamisa: 'tallaCamisa',
    tallaCalzado: 'tallaCalzado',
    tallaPantaloneta: 'tallaPantaloneta',
    genero: 'genero',
    direccion: 'direccion'
  };

  export type PersonaClubOrderByRelevanceFieldEnum = (typeof PersonaClubOrderByRelevanceFieldEnum)[keyof typeof PersonaClubOrderByRelevanceFieldEnum]


  export const ContactosEmergenciaOrderByRelevanceFieldEnum: {
    tipoDocumento: 'tipoDocumento',
    numeroDocumento: 'numeroDocumento',
    nombres: 'nombres',
    apellidos: 'apellidos',
    correo: 'correo',
    telefono: 'telefono'
  };

  export type ContactosEmergenciaOrderByRelevanceFieldEnum = (typeof ContactosEmergenciaOrderByRelevanceFieldEnum)[keyof typeof ContactosEmergenciaOrderByRelevanceFieldEnum]


  export const TutorOrderByRelevanceFieldEnum: {
    tipoDocumento: 'tipoDocumento',
    numeroDocumento: 'numeroDocumento',
    nombres: 'nombres',
    apellidos: 'apellidos',
    correo: 'correo',
    telefono: 'telefono'
  };

  export type TutorOrderByRelevanceFieldEnum = (typeof TutorOrderByRelevanceFieldEnum)[keyof typeof TutorOrderByRelevanceFieldEnum]


  export const DeportistaOrderByRelevanceFieldEnum: {
    categoria: 'categoria'
  };

  export type DeportistaOrderByRelevanceFieldEnum = (typeof DeportistaOrderByRelevanceFieldEnum)[keyof typeof DeportistaOrderByRelevanceFieldEnum]


  export const DesercionDeportistaOrderByRelevanceFieldEnum: {
    razon: 'razon',
    descripcion: 'descripcion'
  };

  export type DesercionDeportistaOrderByRelevanceFieldEnum = (typeof DesercionDeportistaOrderByRelevanceFieldEnum)[keyof typeof DesercionDeportistaOrderByRelevanceFieldEnum]


  export const PagoDeportistaOrderByRelevanceFieldEnum: {
    tipoPago: 'tipoPago'
  };

  export type PagoDeportistaOrderByRelevanceFieldEnum = (typeof PagoDeportistaOrderByRelevanceFieldEnum)[keyof typeof PagoDeportistaOrderByRelevanceFieldEnum]


  export const UsuarioOrderByRelevanceFieldEnum: {
    usuario: 'usuario',
    contrasenia: 'contrasenia'
  };

  export type UsuarioOrderByRelevanceFieldEnum = (typeof UsuarioOrderByRelevanceFieldEnum)[keyof typeof UsuarioOrderByRelevanceFieldEnum]


  export const DepartamentoOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type DepartamentoOrderByRelevanceFieldEnum = (typeof DepartamentoOrderByRelevanceFieldEnum)[keyof typeof DepartamentoOrderByRelevanceFieldEnum]


  export const MunicipioOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type MunicipioOrderByRelevanceFieldEnum = (typeof MunicipioOrderByRelevanceFieldEnum)[keyof typeof MunicipioOrderByRelevanceFieldEnum]


  export const TipoDocumentoOrderByRelevanceFieldEnum: {
    tipoDocumento: 'tipoDocumento',
    descripcion: 'descripcion'
  };

  export type TipoDocumentoOrderByRelevanceFieldEnum = (typeof TipoDocumentoOrderByRelevanceFieldEnum)[keyof typeof TipoDocumentoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    
  /**
   * Deep Input Types
   */


  export type CargosAdminWhereInput = {
    AND?: CargosAdminWhereInput | CargosAdminWhereInput[]
    OR?: CargosAdminWhereInput[]
    NOT?: CargosAdminWhereInput | CargosAdminWhereInput[]
    id?: IntFilter<"CargosAdmin"> | number
    nombre?: StringNullableFilter<"CargosAdmin"> | string | null
  }

  export type CargosAdminOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    _relevance?: CargosAdminOrderByRelevanceInput
  }

  export type CargosAdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CargosAdminWhereInput | CargosAdminWhereInput[]
    OR?: CargosAdminWhereInput[]
    NOT?: CargosAdminWhereInput | CargosAdminWhereInput[]
    nombre?: StringNullableFilter<"CargosAdmin"> | string | null
  }, "id">

  export type CargosAdminOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    _count?: CargosAdminCountOrderByAggregateInput
    _avg?: CargosAdminAvgOrderByAggregateInput
    _max?: CargosAdminMaxOrderByAggregateInput
    _min?: CargosAdminMinOrderByAggregateInput
    _sum?: CargosAdminSumOrderByAggregateInput
  }

  export type CargosAdminScalarWhereWithAggregatesInput = {
    AND?: CargosAdminScalarWhereWithAggregatesInput | CargosAdminScalarWhereWithAggregatesInput[]
    OR?: CargosAdminScalarWhereWithAggregatesInput[]
    NOT?: CargosAdminScalarWhereWithAggregatesInput | CargosAdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CargosAdmin"> | number
    nombre?: StringNullableWithAggregatesFilter<"CargosAdmin"> | string | null
  }

  export type PersonaClubWhereInput = {
    AND?: PersonaClubWhereInput | PersonaClubWhereInput[]
    OR?: PersonaClubWhereInput[]
    NOT?: PersonaClubWhereInput | PersonaClubWhereInput[]
    id?: IntFilter<"PersonaClub"> | number
    numeroDocumento?: StringFilter<"PersonaClub"> | string
    tipoDocumento?: StringFilter<"PersonaClub"> | string
    idMunicipio?: IntFilter<"PersonaClub"> | number
    nombres?: StringFilter<"PersonaClub"> | string
    apellidos?: StringFilter<"PersonaClub"> | string
    fechaNacimento?: DateTimeNullableFilter<"PersonaClub"> | Date | string | null
    tipoRh?: StringNullableFilter<"PersonaClub"> | string | null
    peso?: FloatNullableFilter<"PersonaClub"> | number | null
    altura?: FloatNullableFilter<"PersonaClub"> | number | null
    correo?: StringFilter<"PersonaClub"> | string
    numeroTelefono?: StringFilter<"PersonaClub"> | string
    tallaCamisa?: StringNullableFilter<"PersonaClub"> | string | null
    tallaCalzado?: StringNullableFilter<"PersonaClub"> | string | null
    tallaPantaloneta?: StringNullableFilter<"PersonaClub"> | string | null
    genero?: StringNullableFilter<"PersonaClub"> | string | null
    direccion?: StringNullableFilter<"PersonaClub"> | string | null
    municipio?: XOR<MunicipioScalarRelationFilter, MunicipioWhereInput>
    entrenador?: XOR<EntrenadorNullableScalarRelationFilter, EntrenadorWhereInput> | null
    deportista?: XOR<DeportistaNullableScalarRelationFilter, DeportistaWhereInput> | null
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }

  export type PersonaClubOrderByWithRelationInput = {
    id?: SortOrder
    numeroDocumento?: SortOrder
    tipoDocumento?: SortOrder
    idMunicipio?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    fechaNacimento?: SortOrderInput | SortOrder
    tipoRh?: SortOrderInput | SortOrder
    peso?: SortOrderInput | SortOrder
    altura?: SortOrderInput | SortOrder
    correo?: SortOrder
    numeroTelefono?: SortOrder
    tallaCamisa?: SortOrderInput | SortOrder
    tallaCalzado?: SortOrderInput | SortOrder
    tallaPantaloneta?: SortOrderInput | SortOrder
    genero?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    municipio?: MunicipioOrderByWithRelationInput
    entrenador?: EntrenadorOrderByWithRelationInput
    deportista?: DeportistaOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
    _relevance?: PersonaClubOrderByRelevanceInput
  }

  export type PersonaClubWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    idMunicipio?: number
    AND?: PersonaClubWhereInput | PersonaClubWhereInput[]
    OR?: PersonaClubWhereInput[]
    NOT?: PersonaClubWhereInput | PersonaClubWhereInput[]
    numeroDocumento?: StringFilter<"PersonaClub"> | string
    tipoDocumento?: StringFilter<"PersonaClub"> | string
    nombres?: StringFilter<"PersonaClub"> | string
    apellidos?: StringFilter<"PersonaClub"> | string
    fechaNacimento?: DateTimeNullableFilter<"PersonaClub"> | Date | string | null
    tipoRh?: StringNullableFilter<"PersonaClub"> | string | null
    peso?: FloatNullableFilter<"PersonaClub"> | number | null
    altura?: FloatNullableFilter<"PersonaClub"> | number | null
    correo?: StringFilter<"PersonaClub"> | string
    numeroTelefono?: StringFilter<"PersonaClub"> | string
    tallaCamisa?: StringNullableFilter<"PersonaClub"> | string | null
    tallaCalzado?: StringNullableFilter<"PersonaClub"> | string | null
    tallaPantaloneta?: StringNullableFilter<"PersonaClub"> | string | null
    genero?: StringNullableFilter<"PersonaClub"> | string | null
    direccion?: StringNullableFilter<"PersonaClub"> | string | null
    municipio?: XOR<MunicipioScalarRelationFilter, MunicipioWhereInput>
    entrenador?: XOR<EntrenadorNullableScalarRelationFilter, EntrenadorWhereInput> | null
    deportista?: XOR<DeportistaNullableScalarRelationFilter, DeportistaWhereInput> | null
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }, "id" | "idMunicipio">

  export type PersonaClubOrderByWithAggregationInput = {
    id?: SortOrder
    numeroDocumento?: SortOrder
    tipoDocumento?: SortOrder
    idMunicipio?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    fechaNacimento?: SortOrderInput | SortOrder
    tipoRh?: SortOrderInput | SortOrder
    peso?: SortOrderInput | SortOrder
    altura?: SortOrderInput | SortOrder
    correo?: SortOrder
    numeroTelefono?: SortOrder
    tallaCamisa?: SortOrderInput | SortOrder
    tallaCalzado?: SortOrderInput | SortOrder
    tallaPantaloneta?: SortOrderInput | SortOrder
    genero?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    _count?: PersonaClubCountOrderByAggregateInput
    _avg?: PersonaClubAvgOrderByAggregateInput
    _max?: PersonaClubMaxOrderByAggregateInput
    _min?: PersonaClubMinOrderByAggregateInput
    _sum?: PersonaClubSumOrderByAggregateInput
  }

  export type PersonaClubScalarWhereWithAggregatesInput = {
    AND?: PersonaClubScalarWhereWithAggregatesInput | PersonaClubScalarWhereWithAggregatesInput[]
    OR?: PersonaClubScalarWhereWithAggregatesInput[]
    NOT?: PersonaClubScalarWhereWithAggregatesInput | PersonaClubScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PersonaClub"> | number
    numeroDocumento?: StringWithAggregatesFilter<"PersonaClub"> | string
    tipoDocumento?: StringWithAggregatesFilter<"PersonaClub"> | string
    idMunicipio?: IntWithAggregatesFilter<"PersonaClub"> | number
    nombres?: StringWithAggregatesFilter<"PersonaClub"> | string
    apellidos?: StringWithAggregatesFilter<"PersonaClub"> | string
    fechaNacimento?: DateTimeNullableWithAggregatesFilter<"PersonaClub"> | Date | string | null
    tipoRh?: StringNullableWithAggregatesFilter<"PersonaClub"> | string | null
    peso?: FloatNullableWithAggregatesFilter<"PersonaClub"> | number | null
    altura?: FloatNullableWithAggregatesFilter<"PersonaClub"> | number | null
    correo?: StringWithAggregatesFilter<"PersonaClub"> | string
    numeroTelefono?: StringWithAggregatesFilter<"PersonaClub"> | string
    tallaCamisa?: StringNullableWithAggregatesFilter<"PersonaClub"> | string | null
    tallaCalzado?: StringNullableWithAggregatesFilter<"PersonaClub"> | string | null
    tallaPantaloneta?: StringNullableWithAggregatesFilter<"PersonaClub"> | string | null
    genero?: StringNullableWithAggregatesFilter<"PersonaClub"> | string | null
    direccion?: StringNullableWithAggregatesFilter<"PersonaClub"> | string | null
  }

  export type ContactosEmergenciaWhereInput = {
    AND?: ContactosEmergenciaWhereInput | ContactosEmergenciaWhereInput[]
    OR?: ContactosEmergenciaWhereInput[]
    NOT?: ContactosEmergenciaWhereInput | ContactosEmergenciaWhereInput[]
    id?: IntFilter<"ContactosEmergencia"> | number
    tipoDocumento?: StringFilter<"ContactosEmergencia"> | string
    numeroDocumento?: StringNullableFilter<"ContactosEmergencia"> | string | null
    nombres?: StringNullableFilter<"ContactosEmergencia"> | string | null
    apellidos?: StringNullableFilter<"ContactosEmergencia"> | string | null
    correo?: StringNullableFilter<"ContactosEmergencia"> | string | null
    telefono?: StringNullableFilter<"ContactosEmergencia"> | string | null
    entrenador?: XOR<EntrenadorNullableScalarRelationFilter, EntrenadorWhereInput> | null
  }

  export type ContactosEmergenciaOrderByWithRelationInput = {
    id?: SortOrder
    tipoDocumento?: SortOrder
    numeroDocumento?: SortOrderInput | SortOrder
    nombres?: SortOrderInput | SortOrder
    apellidos?: SortOrderInput | SortOrder
    correo?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    entrenador?: EntrenadorOrderByWithRelationInput
    _relevance?: ContactosEmergenciaOrderByRelevanceInput
  }

  export type ContactosEmergenciaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContactosEmergenciaWhereInput | ContactosEmergenciaWhereInput[]
    OR?: ContactosEmergenciaWhereInput[]
    NOT?: ContactosEmergenciaWhereInput | ContactosEmergenciaWhereInput[]
    tipoDocumento?: StringFilter<"ContactosEmergencia"> | string
    numeroDocumento?: StringNullableFilter<"ContactosEmergencia"> | string | null
    nombres?: StringNullableFilter<"ContactosEmergencia"> | string | null
    apellidos?: StringNullableFilter<"ContactosEmergencia"> | string | null
    correo?: StringNullableFilter<"ContactosEmergencia"> | string | null
    telefono?: StringNullableFilter<"ContactosEmergencia"> | string | null
    entrenador?: XOR<EntrenadorNullableScalarRelationFilter, EntrenadorWhereInput> | null
  }, "id">

  export type ContactosEmergenciaOrderByWithAggregationInput = {
    id?: SortOrder
    tipoDocumento?: SortOrder
    numeroDocumento?: SortOrderInput | SortOrder
    nombres?: SortOrderInput | SortOrder
    apellidos?: SortOrderInput | SortOrder
    correo?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    _count?: ContactosEmergenciaCountOrderByAggregateInput
    _avg?: ContactosEmergenciaAvgOrderByAggregateInput
    _max?: ContactosEmergenciaMaxOrderByAggregateInput
    _min?: ContactosEmergenciaMinOrderByAggregateInput
    _sum?: ContactosEmergenciaSumOrderByAggregateInput
  }

  export type ContactosEmergenciaScalarWhereWithAggregatesInput = {
    AND?: ContactosEmergenciaScalarWhereWithAggregatesInput | ContactosEmergenciaScalarWhereWithAggregatesInput[]
    OR?: ContactosEmergenciaScalarWhereWithAggregatesInput[]
    NOT?: ContactosEmergenciaScalarWhereWithAggregatesInput | ContactosEmergenciaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContactosEmergencia"> | number
    tipoDocumento?: StringWithAggregatesFilter<"ContactosEmergencia"> | string
    numeroDocumento?: StringNullableWithAggregatesFilter<"ContactosEmergencia"> | string | null
    nombres?: StringNullableWithAggregatesFilter<"ContactosEmergencia"> | string | null
    apellidos?: StringNullableWithAggregatesFilter<"ContactosEmergencia"> | string | null
    correo?: StringNullableWithAggregatesFilter<"ContactosEmergencia"> | string | null
    telefono?: StringNullableWithAggregatesFilter<"ContactosEmergencia"> | string | null
  }

  export type EntrenadorWhereInput = {
    AND?: EntrenadorWhereInput | EntrenadorWhereInput[]
    OR?: EntrenadorWhereInput[]
    NOT?: EntrenadorWhereInput | EntrenadorWhereInput[]
    id?: IntFilter<"Entrenador"> | number
    idPersonaClub?: IntFilter<"Entrenador"> | number
    idContactoEmergencia?: IntNullableFilter<"Entrenador"> | number | null
    fechaIngreso?: DateTimeNullableFilter<"Entrenador"> | Date | string | null
    activo?: BoolNullableFilter<"Entrenador"> | boolean | null
    contactosEmergencia?: XOR<ContactosEmergenciaNullableScalarRelationFilter, ContactosEmergenciaWhereInput> | null
    personaClub?: XOR<PersonaClubScalarRelationFilter, PersonaClubWhereInput>
  }

  export type EntrenadorOrderByWithRelationInput = {
    id?: SortOrder
    idPersonaClub?: SortOrder
    idContactoEmergencia?: SortOrderInput | SortOrder
    fechaIngreso?: SortOrderInput | SortOrder
    activo?: SortOrderInput | SortOrder
    contactosEmergencia?: ContactosEmergenciaOrderByWithRelationInput
    personaClub?: PersonaClubOrderByWithRelationInput
  }

  export type EntrenadorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    idPersonaClub?: number
    idContactoEmergencia?: number
    AND?: EntrenadorWhereInput | EntrenadorWhereInput[]
    OR?: EntrenadorWhereInput[]
    NOT?: EntrenadorWhereInput | EntrenadorWhereInput[]
    fechaIngreso?: DateTimeNullableFilter<"Entrenador"> | Date | string | null
    activo?: BoolNullableFilter<"Entrenador"> | boolean | null
    contactosEmergencia?: XOR<ContactosEmergenciaNullableScalarRelationFilter, ContactosEmergenciaWhereInput> | null
    personaClub?: XOR<PersonaClubScalarRelationFilter, PersonaClubWhereInput>
  }, "id" | "idPersonaClub" | "idContactoEmergencia">

  export type EntrenadorOrderByWithAggregationInput = {
    id?: SortOrder
    idPersonaClub?: SortOrder
    idContactoEmergencia?: SortOrderInput | SortOrder
    fechaIngreso?: SortOrderInput | SortOrder
    activo?: SortOrderInput | SortOrder
    _count?: EntrenadorCountOrderByAggregateInput
    _avg?: EntrenadorAvgOrderByAggregateInput
    _max?: EntrenadorMaxOrderByAggregateInput
    _min?: EntrenadorMinOrderByAggregateInput
    _sum?: EntrenadorSumOrderByAggregateInput
  }

  export type EntrenadorScalarWhereWithAggregatesInput = {
    AND?: EntrenadorScalarWhereWithAggregatesInput | EntrenadorScalarWhereWithAggregatesInput[]
    OR?: EntrenadorScalarWhereWithAggregatesInput[]
    NOT?: EntrenadorScalarWhereWithAggregatesInput | EntrenadorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Entrenador"> | number
    idPersonaClub?: IntWithAggregatesFilter<"Entrenador"> | number
    idContactoEmergencia?: IntNullableWithAggregatesFilter<"Entrenador"> | number | null
    fechaIngreso?: DateTimeNullableWithAggregatesFilter<"Entrenador"> | Date | string | null
    activo?: BoolNullableWithAggregatesFilter<"Entrenador"> | boolean | null
  }

  export type TutorWhereInput = {
    AND?: TutorWhereInput | TutorWhereInput[]
    OR?: TutorWhereInput[]
    NOT?: TutorWhereInput | TutorWhereInput[]
    id?: IntFilter<"Tutor"> | number
    tipoDocumento?: StringFilter<"Tutor"> | string
    numeroDocumento?: StringNullableFilter<"Tutor"> | string | null
    nombres?: StringNullableFilter<"Tutor"> | string | null
    apellidos?: StringNullableFilter<"Tutor"> | string | null
    correo?: StringNullableFilter<"Tutor"> | string | null
    telefono?: StringNullableFilter<"Tutor"> | string | null
    deportista?: XOR<DeportistaNullableScalarRelationFilter, DeportistaWhereInput> | null
  }

  export type TutorOrderByWithRelationInput = {
    id?: SortOrder
    tipoDocumento?: SortOrder
    numeroDocumento?: SortOrderInput | SortOrder
    nombres?: SortOrderInput | SortOrder
    apellidos?: SortOrderInput | SortOrder
    correo?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    deportista?: DeportistaOrderByWithRelationInput
    _relevance?: TutorOrderByRelevanceInput
  }

  export type TutorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TutorWhereInput | TutorWhereInput[]
    OR?: TutorWhereInput[]
    NOT?: TutorWhereInput | TutorWhereInput[]
    tipoDocumento?: StringFilter<"Tutor"> | string
    numeroDocumento?: StringNullableFilter<"Tutor"> | string | null
    nombres?: StringNullableFilter<"Tutor"> | string | null
    apellidos?: StringNullableFilter<"Tutor"> | string | null
    correo?: StringNullableFilter<"Tutor"> | string | null
    telefono?: StringNullableFilter<"Tutor"> | string | null
    deportista?: XOR<DeportistaNullableScalarRelationFilter, DeportistaWhereInput> | null
  }, "id">

  export type TutorOrderByWithAggregationInput = {
    id?: SortOrder
    tipoDocumento?: SortOrder
    numeroDocumento?: SortOrderInput | SortOrder
    nombres?: SortOrderInput | SortOrder
    apellidos?: SortOrderInput | SortOrder
    correo?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    _count?: TutorCountOrderByAggregateInput
    _avg?: TutorAvgOrderByAggregateInput
    _max?: TutorMaxOrderByAggregateInput
    _min?: TutorMinOrderByAggregateInput
    _sum?: TutorSumOrderByAggregateInput
  }

  export type TutorScalarWhereWithAggregatesInput = {
    AND?: TutorScalarWhereWithAggregatesInput | TutorScalarWhereWithAggregatesInput[]
    OR?: TutorScalarWhereWithAggregatesInput[]
    NOT?: TutorScalarWhereWithAggregatesInput | TutorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tutor"> | number
    tipoDocumento?: StringWithAggregatesFilter<"Tutor"> | string
    numeroDocumento?: StringNullableWithAggregatesFilter<"Tutor"> | string | null
    nombres?: StringNullableWithAggregatesFilter<"Tutor"> | string | null
    apellidos?: StringNullableWithAggregatesFilter<"Tutor"> | string | null
    correo?: StringNullableWithAggregatesFilter<"Tutor"> | string | null
    telefono?: StringNullableWithAggregatesFilter<"Tutor"> | string | null
  }

  export type DeportistaWhereInput = {
    AND?: DeportistaWhereInput | DeportistaWhereInput[]
    OR?: DeportistaWhereInput[]
    NOT?: DeportistaWhereInput | DeportistaWhereInput[]
    id?: IntFilter<"Deportista"> | number
    idTutor?: IntNullableFilter<"Deportista"> | number | null
    idPersonaClub?: IntFilter<"Deportista"> | number
    categoria?: StringFilter<"Deportista"> | string
    activo?: BoolNullableFilter<"Deportista"> | boolean | null
    tutor?: XOR<TutorNullableScalarRelationFilter, TutorWhereInput> | null
    personaClub?: XOR<PersonaClubScalarRelationFilter, PersonaClubWhereInput>
    desercionDeportista?: XOR<DesercionDeportistaNullableScalarRelationFilter, DesercionDeportistaWhereInput> | null
    pagosDeportista?: PagoDeportistaListRelationFilter
  }

  export type DeportistaOrderByWithRelationInput = {
    id?: SortOrder
    idTutor?: SortOrderInput | SortOrder
    idPersonaClub?: SortOrder
    categoria?: SortOrder
    activo?: SortOrderInput | SortOrder
    tutor?: TutorOrderByWithRelationInput
    personaClub?: PersonaClubOrderByWithRelationInput
    desercionDeportista?: DesercionDeportistaOrderByWithRelationInput
    pagosDeportista?: PagoDeportistaOrderByRelationAggregateInput
    _relevance?: DeportistaOrderByRelevanceInput
  }

  export type DeportistaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    idTutor?: number
    idPersonaClub?: number
    AND?: DeportistaWhereInput | DeportistaWhereInput[]
    OR?: DeportistaWhereInput[]
    NOT?: DeportistaWhereInput | DeportistaWhereInput[]
    categoria?: StringFilter<"Deportista"> | string
    activo?: BoolNullableFilter<"Deportista"> | boolean | null
    tutor?: XOR<TutorNullableScalarRelationFilter, TutorWhereInput> | null
    personaClub?: XOR<PersonaClubScalarRelationFilter, PersonaClubWhereInput>
    desercionDeportista?: XOR<DesercionDeportistaNullableScalarRelationFilter, DesercionDeportistaWhereInput> | null
    pagosDeportista?: PagoDeportistaListRelationFilter
  }, "id" | "idTutor" | "idPersonaClub">

  export type DeportistaOrderByWithAggregationInput = {
    id?: SortOrder
    idTutor?: SortOrderInput | SortOrder
    idPersonaClub?: SortOrder
    categoria?: SortOrder
    activo?: SortOrderInput | SortOrder
    _count?: DeportistaCountOrderByAggregateInput
    _avg?: DeportistaAvgOrderByAggregateInput
    _max?: DeportistaMaxOrderByAggregateInput
    _min?: DeportistaMinOrderByAggregateInput
    _sum?: DeportistaSumOrderByAggregateInput
  }

  export type DeportistaScalarWhereWithAggregatesInput = {
    AND?: DeportistaScalarWhereWithAggregatesInput | DeportistaScalarWhereWithAggregatesInput[]
    OR?: DeportistaScalarWhereWithAggregatesInput[]
    NOT?: DeportistaScalarWhereWithAggregatesInput | DeportistaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Deportista"> | number
    idTutor?: IntNullableWithAggregatesFilter<"Deportista"> | number | null
    idPersonaClub?: IntWithAggregatesFilter<"Deportista"> | number
    categoria?: StringWithAggregatesFilter<"Deportista"> | string
    activo?: BoolNullableWithAggregatesFilter<"Deportista"> | boolean | null
  }

  export type DesercionDeportistaWhereInput = {
    AND?: DesercionDeportistaWhereInput | DesercionDeportistaWhereInput[]
    OR?: DesercionDeportistaWhereInput[]
    NOT?: DesercionDeportistaWhereInput | DesercionDeportistaWhereInput[]
    id?: IntFilter<"DesercionDeportista"> | number
    idDeportista?: IntFilter<"DesercionDeportista"> | number
    fechaDesercion?: DateTimeNullableFilter<"DesercionDeportista"> | Date | string | null
    razon?: StringNullableFilter<"DesercionDeportista"> | string | null
    descripcion?: StringNullableFilter<"DesercionDeportista"> | string | null
    deportista?: XOR<DeportistaScalarRelationFilter, DeportistaWhereInput>
  }

  export type DesercionDeportistaOrderByWithRelationInput = {
    id?: SortOrder
    idDeportista?: SortOrder
    fechaDesercion?: SortOrderInput | SortOrder
    razon?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    deportista?: DeportistaOrderByWithRelationInput
    _relevance?: DesercionDeportistaOrderByRelevanceInput
  }

  export type DesercionDeportistaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    idDeportista?: number
    AND?: DesercionDeportistaWhereInput | DesercionDeportistaWhereInput[]
    OR?: DesercionDeportistaWhereInput[]
    NOT?: DesercionDeportistaWhereInput | DesercionDeportistaWhereInput[]
    fechaDesercion?: DateTimeNullableFilter<"DesercionDeportista"> | Date | string | null
    razon?: StringNullableFilter<"DesercionDeportista"> | string | null
    descripcion?: StringNullableFilter<"DesercionDeportista"> | string | null
    deportista?: XOR<DeportistaScalarRelationFilter, DeportistaWhereInput>
  }, "id" | "idDeportista">

  export type DesercionDeportistaOrderByWithAggregationInput = {
    id?: SortOrder
    idDeportista?: SortOrder
    fechaDesercion?: SortOrderInput | SortOrder
    razon?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    _count?: DesercionDeportistaCountOrderByAggregateInput
    _avg?: DesercionDeportistaAvgOrderByAggregateInput
    _max?: DesercionDeportistaMaxOrderByAggregateInput
    _min?: DesercionDeportistaMinOrderByAggregateInput
    _sum?: DesercionDeportistaSumOrderByAggregateInput
  }

  export type DesercionDeportistaScalarWhereWithAggregatesInput = {
    AND?: DesercionDeportistaScalarWhereWithAggregatesInput | DesercionDeportistaScalarWhereWithAggregatesInput[]
    OR?: DesercionDeportistaScalarWhereWithAggregatesInput[]
    NOT?: DesercionDeportistaScalarWhereWithAggregatesInput | DesercionDeportistaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DesercionDeportista"> | number
    idDeportista?: IntWithAggregatesFilter<"DesercionDeportista"> | number
    fechaDesercion?: DateTimeNullableWithAggregatesFilter<"DesercionDeportista"> | Date | string | null
    razon?: StringNullableWithAggregatesFilter<"DesercionDeportista"> | string | null
    descripcion?: StringNullableWithAggregatesFilter<"DesercionDeportista"> | string | null
  }

  export type GestionAdminWhereInput = {
    AND?: GestionAdminWhereInput | GestionAdminWhereInput[]
    OR?: GestionAdminWhereInput[]
    NOT?: GestionAdminWhereInput | GestionAdminWhereInput[]
    id?: IntFilter<"GestionAdmin"> | number
    idTutor?: IntNullableFilter<"GestionAdmin"> | number | null
    idDeportista?: IntNullableFilter<"GestionAdmin"> | number | null
    idCargo?: IntNullableFilter<"GestionAdmin"> | number | null
    fechaInicio?: DateTimeNullableFilter<"GestionAdmin"> | Date | string | null
    fechaFin?: DateTimeNullableFilter<"GestionAdmin"> | Date | string | null
    activo?: BoolNullableFilter<"GestionAdmin"> | boolean | null
  }

  export type GestionAdminOrderByWithRelationInput = {
    id?: SortOrder
    idTutor?: SortOrderInput | SortOrder
    idDeportista?: SortOrderInput | SortOrder
    idCargo?: SortOrderInput | SortOrder
    fechaInicio?: SortOrderInput | SortOrder
    fechaFin?: SortOrderInput | SortOrder
    activo?: SortOrderInput | SortOrder
  }

  export type GestionAdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GestionAdminWhereInput | GestionAdminWhereInput[]
    OR?: GestionAdminWhereInput[]
    NOT?: GestionAdminWhereInput | GestionAdminWhereInput[]
    idTutor?: IntNullableFilter<"GestionAdmin"> | number | null
    idDeportista?: IntNullableFilter<"GestionAdmin"> | number | null
    idCargo?: IntNullableFilter<"GestionAdmin"> | number | null
    fechaInicio?: DateTimeNullableFilter<"GestionAdmin"> | Date | string | null
    fechaFin?: DateTimeNullableFilter<"GestionAdmin"> | Date | string | null
    activo?: BoolNullableFilter<"GestionAdmin"> | boolean | null
  }, "id">

  export type GestionAdminOrderByWithAggregationInput = {
    id?: SortOrder
    idTutor?: SortOrderInput | SortOrder
    idDeportista?: SortOrderInput | SortOrder
    idCargo?: SortOrderInput | SortOrder
    fechaInicio?: SortOrderInput | SortOrder
    fechaFin?: SortOrderInput | SortOrder
    activo?: SortOrderInput | SortOrder
    _count?: GestionAdminCountOrderByAggregateInput
    _avg?: GestionAdminAvgOrderByAggregateInput
    _max?: GestionAdminMaxOrderByAggregateInput
    _min?: GestionAdminMinOrderByAggregateInput
    _sum?: GestionAdminSumOrderByAggregateInput
  }

  export type GestionAdminScalarWhereWithAggregatesInput = {
    AND?: GestionAdminScalarWhereWithAggregatesInput | GestionAdminScalarWhereWithAggregatesInput[]
    OR?: GestionAdminScalarWhereWithAggregatesInput[]
    NOT?: GestionAdminScalarWhereWithAggregatesInput | GestionAdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GestionAdmin"> | number
    idTutor?: IntNullableWithAggregatesFilter<"GestionAdmin"> | number | null
    idDeportista?: IntNullableWithAggregatesFilter<"GestionAdmin"> | number | null
    idCargo?: IntNullableWithAggregatesFilter<"GestionAdmin"> | number | null
    fechaInicio?: DateTimeNullableWithAggregatesFilter<"GestionAdmin"> | Date | string | null
    fechaFin?: DateTimeNullableWithAggregatesFilter<"GestionAdmin"> | Date | string | null
    activo?: BoolNullableWithAggregatesFilter<"GestionAdmin"> | boolean | null
  }

  export type PagoDeportistaWhereInput = {
    AND?: PagoDeportistaWhereInput | PagoDeportistaWhereInput[]
    OR?: PagoDeportistaWhereInput[]
    NOT?: PagoDeportistaWhereInput | PagoDeportistaWhereInput[]
    id?: IntFilter<"PagoDeportista"> | number
    idDeportista?: IntFilter<"PagoDeportista"> | number
    fechaPago?: DateTimeNullableFilter<"PagoDeportista"> | Date | string | null
    valor?: DecimalNullableFilter<"PagoDeportista"> | Decimal | DecimalJsLike | number | string | null
    tipoPago?: StringNullableFilter<"PagoDeportista"> | string | null
    deportista?: XOR<DeportistaNullableScalarRelationFilter, DeportistaWhereInput> | null
  }

  export type PagoDeportistaOrderByWithRelationInput = {
    id?: SortOrder
    idDeportista?: SortOrder
    fechaPago?: SortOrderInput | SortOrder
    valor?: SortOrderInput | SortOrder
    tipoPago?: SortOrderInput | SortOrder
    deportista?: DeportistaOrderByWithRelationInput
    _relevance?: PagoDeportistaOrderByRelevanceInput
  }

  export type PagoDeportistaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PagoDeportistaWhereInput | PagoDeportistaWhereInput[]
    OR?: PagoDeportistaWhereInput[]
    NOT?: PagoDeportistaWhereInput | PagoDeportistaWhereInput[]
    idDeportista?: IntFilter<"PagoDeportista"> | number
    fechaPago?: DateTimeNullableFilter<"PagoDeportista"> | Date | string | null
    valor?: DecimalNullableFilter<"PagoDeportista"> | Decimal | DecimalJsLike | number | string | null
    tipoPago?: StringNullableFilter<"PagoDeportista"> | string | null
    deportista?: XOR<DeportistaNullableScalarRelationFilter, DeportistaWhereInput> | null
  }, "id">

  export type PagoDeportistaOrderByWithAggregationInput = {
    id?: SortOrder
    idDeportista?: SortOrder
    fechaPago?: SortOrderInput | SortOrder
    valor?: SortOrderInput | SortOrder
    tipoPago?: SortOrderInput | SortOrder
    _count?: PagoDeportistaCountOrderByAggregateInput
    _avg?: PagoDeportistaAvgOrderByAggregateInput
    _max?: PagoDeportistaMaxOrderByAggregateInput
    _min?: PagoDeportistaMinOrderByAggregateInput
    _sum?: PagoDeportistaSumOrderByAggregateInput
  }

  export type PagoDeportistaScalarWhereWithAggregatesInput = {
    AND?: PagoDeportistaScalarWhereWithAggregatesInput | PagoDeportistaScalarWhereWithAggregatesInput[]
    OR?: PagoDeportistaScalarWhereWithAggregatesInput[]
    NOT?: PagoDeportistaScalarWhereWithAggregatesInput | PagoDeportistaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PagoDeportista"> | number
    idDeportista?: IntWithAggregatesFilter<"PagoDeportista"> | number
    fechaPago?: DateTimeNullableWithAggregatesFilter<"PagoDeportista"> | Date | string | null
    valor?: DecimalNullableWithAggregatesFilter<"PagoDeportista"> | Decimal | DecimalJsLike | number | string | null
    tipoPago?: StringNullableWithAggregatesFilter<"PagoDeportista"> | string | null
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    usuario?: StringNullableFilter<"Usuario"> | string | null
    contrasenia?: StringNullableFilter<"Usuario"> | string | null
    activo?: BoolNullableFilter<"Usuario"> | boolean | null
    idPersona?: IntNullableFilter<"Usuario"> | number | null
    persona?: XOR<PersonaClubNullableScalarRelationFilter, PersonaClubWhereInput> | null
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    usuario?: SortOrderInput | SortOrder
    contrasenia?: SortOrderInput | SortOrder
    activo?: SortOrderInput | SortOrder
    idPersona?: SortOrderInput | SortOrder
    persona?: PersonaClubOrderByWithRelationInput
    _relevance?: UsuarioOrderByRelevanceInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    idPersona?: number
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    usuario?: StringNullableFilter<"Usuario"> | string | null
    contrasenia?: StringNullableFilter<"Usuario"> | string | null
    activo?: BoolNullableFilter<"Usuario"> | boolean | null
    persona?: XOR<PersonaClubNullableScalarRelationFilter, PersonaClubWhereInput> | null
  }, "id" | "idPersona">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    usuario?: SortOrderInput | SortOrder
    contrasenia?: SortOrderInput | SortOrder
    activo?: SortOrderInput | SortOrder
    idPersona?: SortOrderInput | SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    usuario?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    contrasenia?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    activo?: BoolNullableWithAggregatesFilter<"Usuario"> | boolean | null
    idPersona?: IntNullableWithAggregatesFilter<"Usuario"> | number | null
  }

  export type DepartamentoWhereInput = {
    AND?: DepartamentoWhereInput | DepartamentoWhereInput[]
    OR?: DepartamentoWhereInput[]
    NOT?: DepartamentoWhereInput | DepartamentoWhereInput[]
    id?: IntFilter<"Departamento"> | number
    nombre?: StringNullableFilter<"Departamento"> | string | null
    municipio?: XOR<MunicipioNullableScalarRelationFilter, MunicipioWhereInput> | null
  }

  export type DepartamentoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    municipio?: MunicipioOrderByWithRelationInput
    _relevance?: DepartamentoOrderByRelevanceInput
  }

  export type DepartamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DepartamentoWhereInput | DepartamentoWhereInput[]
    OR?: DepartamentoWhereInput[]
    NOT?: DepartamentoWhereInput | DepartamentoWhereInput[]
    nombre?: StringNullableFilter<"Departamento"> | string | null
    municipio?: XOR<MunicipioNullableScalarRelationFilter, MunicipioWhereInput> | null
  }, "id">

  export type DepartamentoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    _count?: DepartamentoCountOrderByAggregateInput
    _avg?: DepartamentoAvgOrderByAggregateInput
    _max?: DepartamentoMaxOrderByAggregateInput
    _min?: DepartamentoMinOrderByAggregateInput
    _sum?: DepartamentoSumOrderByAggregateInput
  }

  export type DepartamentoScalarWhereWithAggregatesInput = {
    AND?: DepartamentoScalarWhereWithAggregatesInput | DepartamentoScalarWhereWithAggregatesInput[]
    OR?: DepartamentoScalarWhereWithAggregatesInput[]
    NOT?: DepartamentoScalarWhereWithAggregatesInput | DepartamentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Departamento"> | number
    nombre?: StringNullableWithAggregatesFilter<"Departamento"> | string | null
  }

  export type MunicipioWhereInput = {
    AND?: MunicipioWhereInput | MunicipioWhereInput[]
    OR?: MunicipioWhereInput[]
    NOT?: MunicipioWhereInput | MunicipioWhereInput[]
    id?: IntFilter<"Municipio"> | number
    idDepartamento?: IntFilter<"Municipio"> | number
    nombre?: StringNullableFilter<"Municipio"> | string | null
    estado?: BoolNullableFilter<"Municipio"> | boolean | null
    personaClub?: PersonaClubListRelationFilter
    departamento?: XOR<DepartamentoScalarRelationFilter, DepartamentoWhereInput>
  }

  export type MunicipioOrderByWithRelationInput = {
    id?: SortOrder
    idDepartamento?: SortOrder
    nombre?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    personaClub?: PersonaClubOrderByRelationAggregateInput
    departamento?: DepartamentoOrderByWithRelationInput
    _relevance?: MunicipioOrderByRelevanceInput
  }

  export type MunicipioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    idDepartamento?: number
    AND?: MunicipioWhereInput | MunicipioWhereInput[]
    OR?: MunicipioWhereInput[]
    NOT?: MunicipioWhereInput | MunicipioWhereInput[]
    nombre?: StringNullableFilter<"Municipio"> | string | null
    estado?: BoolNullableFilter<"Municipio"> | boolean | null
    personaClub?: PersonaClubListRelationFilter
    departamento?: XOR<DepartamentoScalarRelationFilter, DepartamentoWhereInput>
  }, "id" | "idDepartamento">

  export type MunicipioOrderByWithAggregationInput = {
    id?: SortOrder
    idDepartamento?: SortOrder
    nombre?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    _count?: MunicipioCountOrderByAggregateInput
    _avg?: MunicipioAvgOrderByAggregateInput
    _max?: MunicipioMaxOrderByAggregateInput
    _min?: MunicipioMinOrderByAggregateInput
    _sum?: MunicipioSumOrderByAggregateInput
  }

  export type MunicipioScalarWhereWithAggregatesInput = {
    AND?: MunicipioScalarWhereWithAggregatesInput | MunicipioScalarWhereWithAggregatesInput[]
    OR?: MunicipioScalarWhereWithAggregatesInput[]
    NOT?: MunicipioScalarWhereWithAggregatesInput | MunicipioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Municipio"> | number
    idDepartamento?: IntWithAggregatesFilter<"Municipio"> | number
    nombre?: StringNullableWithAggregatesFilter<"Municipio"> | string | null
    estado?: BoolNullableWithAggregatesFilter<"Municipio"> | boolean | null
  }

  export type TipoDocumentoWhereInput = {
    AND?: TipoDocumentoWhereInput | TipoDocumentoWhereInput[]
    OR?: TipoDocumentoWhereInput[]
    NOT?: TipoDocumentoWhereInput | TipoDocumentoWhereInput[]
    id?: IntFilter<"TipoDocumento"> | number
    tipoDocumento?: StringNullableFilter<"TipoDocumento"> | string | null
    descripcion?: StringNullableFilter<"TipoDocumento"> | string | null
  }

  export type TipoDocumentoOrderByWithRelationInput = {
    id?: SortOrder
    tipoDocumento?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    _relevance?: TipoDocumentoOrderByRelevanceInput
  }

  export type TipoDocumentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TipoDocumentoWhereInput | TipoDocumentoWhereInput[]
    OR?: TipoDocumentoWhereInput[]
    NOT?: TipoDocumentoWhereInput | TipoDocumentoWhereInput[]
    tipoDocumento?: StringNullableFilter<"TipoDocumento"> | string | null
    descripcion?: StringNullableFilter<"TipoDocumento"> | string | null
  }, "id">

  export type TipoDocumentoOrderByWithAggregationInput = {
    id?: SortOrder
    tipoDocumento?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    _count?: TipoDocumentoCountOrderByAggregateInput
    _avg?: TipoDocumentoAvgOrderByAggregateInput
    _max?: TipoDocumentoMaxOrderByAggregateInput
    _min?: TipoDocumentoMinOrderByAggregateInput
    _sum?: TipoDocumentoSumOrderByAggregateInput
  }

  export type TipoDocumentoScalarWhereWithAggregatesInput = {
    AND?: TipoDocumentoScalarWhereWithAggregatesInput | TipoDocumentoScalarWhereWithAggregatesInput[]
    OR?: TipoDocumentoScalarWhereWithAggregatesInput[]
    NOT?: TipoDocumentoScalarWhereWithAggregatesInput | TipoDocumentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TipoDocumento"> | number
    tipoDocumento?: StringNullableWithAggregatesFilter<"TipoDocumento"> | string | null
    descripcion?: StringNullableWithAggregatesFilter<"TipoDocumento"> | string | null
  }

  export type CargosAdminCreateInput = {
    nombre?: string | null
  }

  export type CargosAdminUncheckedCreateInput = {
    id?: number
    nombre?: string | null
  }

  export type CargosAdminUpdateInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CargosAdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CargosAdminCreateManyInput = {
    id?: number
    nombre?: string | null
  }

  export type CargosAdminUpdateManyMutationInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CargosAdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PersonaClubCreateInput = {
    numeroDocumento: string
    tipoDocumento: string
    nombres: string
    apellidos: string
    fechaNacimento?: Date | string | null
    tipoRh?: string | null
    peso?: number | null
    altura?: number | null
    correo: string
    numeroTelefono: string
    tallaCamisa?: string | null
    tallaCalzado?: string | null
    tallaPantaloneta?: string | null
    genero?: string | null
    direccion?: string | null
    municipio: MunicipioCreateNestedOneWithoutPersonaClubInput
    entrenador?: EntrenadorCreateNestedOneWithoutPersonaClubInput
    deportista?: DeportistaCreateNestedOneWithoutPersonaClubInput
    usuario?: UsuarioCreateNestedOneWithoutPersonaInput
  }

  export type PersonaClubUncheckedCreateInput = {
    id?: number
    numeroDocumento: string
    tipoDocumento: string
    idMunicipio: number
    nombres: string
    apellidos: string
    fechaNacimento?: Date | string | null
    tipoRh?: string | null
    peso?: number | null
    altura?: number | null
    correo: string
    numeroTelefono: string
    tallaCamisa?: string | null
    tallaCalzado?: string | null
    tallaPantaloneta?: string | null
    genero?: string | null
    direccion?: string | null
    entrenador?: EntrenadorUncheckedCreateNestedOneWithoutPersonaClubInput
    deportista?: DeportistaUncheckedCreateNestedOneWithoutPersonaClubInput
    usuario?: UsuarioUncheckedCreateNestedOneWithoutPersonaInput
  }

  export type PersonaClubUpdateInput = {
    numeroDocumento?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    fechaNacimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoRh?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    correo?: StringFieldUpdateOperationsInput | string
    numeroTelefono?: StringFieldUpdateOperationsInput | string
    tallaCamisa?: NullableStringFieldUpdateOperationsInput | string | null
    tallaCalzado?: NullableStringFieldUpdateOperationsInput | string | null
    tallaPantaloneta?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    municipio?: MunicipioUpdateOneRequiredWithoutPersonaClubNestedInput
    entrenador?: EntrenadorUpdateOneWithoutPersonaClubNestedInput
    deportista?: DeportistaUpdateOneWithoutPersonaClubNestedInput
    usuario?: UsuarioUpdateOneWithoutPersonaNestedInput
  }

  export type PersonaClubUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroDocumento?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    idMunicipio?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    fechaNacimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoRh?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    correo?: StringFieldUpdateOperationsInput | string
    numeroTelefono?: StringFieldUpdateOperationsInput | string
    tallaCamisa?: NullableStringFieldUpdateOperationsInput | string | null
    tallaCalzado?: NullableStringFieldUpdateOperationsInput | string | null
    tallaPantaloneta?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    entrenador?: EntrenadorUncheckedUpdateOneWithoutPersonaClubNestedInput
    deportista?: DeportistaUncheckedUpdateOneWithoutPersonaClubNestedInput
    usuario?: UsuarioUncheckedUpdateOneWithoutPersonaNestedInput
  }

  export type PersonaClubCreateManyInput = {
    id?: number
    numeroDocumento: string
    tipoDocumento: string
    idMunicipio: number
    nombres: string
    apellidos: string
    fechaNacimento?: Date | string | null
    tipoRh?: string | null
    peso?: number | null
    altura?: number | null
    correo: string
    numeroTelefono: string
    tallaCamisa?: string | null
    tallaCalzado?: string | null
    tallaPantaloneta?: string | null
    genero?: string | null
    direccion?: string | null
  }

  export type PersonaClubUpdateManyMutationInput = {
    numeroDocumento?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    fechaNacimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoRh?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    correo?: StringFieldUpdateOperationsInput | string
    numeroTelefono?: StringFieldUpdateOperationsInput | string
    tallaCamisa?: NullableStringFieldUpdateOperationsInput | string | null
    tallaCalzado?: NullableStringFieldUpdateOperationsInput | string | null
    tallaPantaloneta?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PersonaClubUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroDocumento?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    idMunicipio?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    fechaNacimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoRh?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    correo?: StringFieldUpdateOperationsInput | string
    numeroTelefono?: StringFieldUpdateOperationsInput | string
    tallaCamisa?: NullableStringFieldUpdateOperationsInput | string | null
    tallaCalzado?: NullableStringFieldUpdateOperationsInput | string | null
    tallaPantaloneta?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactosEmergenciaCreateInput = {
    tipoDocumento: string
    numeroDocumento?: string | null
    nombres?: string | null
    apellidos?: string | null
    correo?: string | null
    telefono?: string | null
    entrenador?: EntrenadorCreateNestedOneWithoutContactosEmergenciaInput
  }

  export type ContactosEmergenciaUncheckedCreateInput = {
    id?: number
    tipoDocumento: string
    numeroDocumento?: string | null
    nombres?: string | null
    apellidos?: string | null
    correo?: string | null
    telefono?: string | null
    entrenador?: EntrenadorUncheckedCreateNestedOneWithoutContactosEmergenciaInput
  }

  export type ContactosEmergenciaUpdateInput = {
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    numeroDocumento?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    entrenador?: EntrenadorUpdateOneWithoutContactosEmergenciaNestedInput
  }

  export type ContactosEmergenciaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    numeroDocumento?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    entrenador?: EntrenadorUncheckedUpdateOneWithoutContactosEmergenciaNestedInput
  }

  export type ContactosEmergenciaCreateManyInput = {
    id?: number
    tipoDocumento: string
    numeroDocumento?: string | null
    nombres?: string | null
    apellidos?: string | null
    correo?: string | null
    telefono?: string | null
  }

  export type ContactosEmergenciaUpdateManyMutationInput = {
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    numeroDocumento?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactosEmergenciaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    numeroDocumento?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EntrenadorCreateInput = {
    fechaIngreso?: Date | string | null
    activo?: boolean | null
    contactosEmergencia?: ContactosEmergenciaCreateNestedOneWithoutEntrenadorInput
    personaClub: PersonaClubCreateNestedOneWithoutEntrenadorInput
  }

  export type EntrenadorUncheckedCreateInput = {
    id?: number
    idPersonaClub: number
    idContactoEmergencia?: number | null
    fechaIngreso?: Date | string | null
    activo?: boolean | null
  }

  export type EntrenadorUpdateInput = {
    fechaIngreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contactosEmergencia?: ContactosEmergenciaUpdateOneWithoutEntrenadorNestedInput
    personaClub?: PersonaClubUpdateOneRequiredWithoutEntrenadorNestedInput
  }

  export type EntrenadorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idPersonaClub?: IntFieldUpdateOperationsInput | number
    idContactoEmergencia?: NullableIntFieldUpdateOperationsInput | number | null
    fechaIngreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type EntrenadorCreateManyInput = {
    id?: number
    idPersonaClub: number
    idContactoEmergencia?: number | null
    fechaIngreso?: Date | string | null
    activo?: boolean | null
  }

  export type EntrenadorUpdateManyMutationInput = {
    fechaIngreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type EntrenadorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idPersonaClub?: IntFieldUpdateOperationsInput | number
    idContactoEmergencia?: NullableIntFieldUpdateOperationsInput | number | null
    fechaIngreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type TutorCreateInput = {
    tipoDocumento: string
    numeroDocumento?: string | null
    nombres?: string | null
    apellidos?: string | null
    correo?: string | null
    telefono?: string | null
    deportista?: DeportistaCreateNestedOneWithoutTutorInput
  }

  export type TutorUncheckedCreateInput = {
    id?: number
    tipoDocumento: string
    numeroDocumento?: string | null
    nombres?: string | null
    apellidos?: string | null
    correo?: string | null
    telefono?: string | null
    deportista?: DeportistaUncheckedCreateNestedOneWithoutTutorInput
  }

  export type TutorUpdateInput = {
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    numeroDocumento?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    deportista?: DeportistaUpdateOneWithoutTutorNestedInput
  }

  export type TutorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    numeroDocumento?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    deportista?: DeportistaUncheckedUpdateOneWithoutTutorNestedInput
  }

  export type TutorCreateManyInput = {
    id?: number
    tipoDocumento: string
    numeroDocumento?: string | null
    nombres?: string | null
    apellidos?: string | null
    correo?: string | null
    telefono?: string | null
  }

  export type TutorUpdateManyMutationInput = {
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    numeroDocumento?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TutorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    numeroDocumento?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeportistaCreateInput = {
    categoria: string
    activo?: boolean | null
    tutor?: TutorCreateNestedOneWithoutDeportistaInput
    personaClub: PersonaClubCreateNestedOneWithoutDeportistaInput
    desercionDeportista?: DesercionDeportistaCreateNestedOneWithoutDeportistaInput
    pagosDeportista?: PagoDeportistaCreateNestedManyWithoutDeportistaInput
  }

  export type DeportistaUncheckedCreateInput = {
    id?: number
    idTutor?: number | null
    idPersonaClub: number
    categoria: string
    activo?: boolean | null
    desercionDeportista?: DesercionDeportistaUncheckedCreateNestedOneWithoutDeportistaInput
    pagosDeportista?: PagoDeportistaUncheckedCreateNestedManyWithoutDeportistaInput
  }

  export type DeportistaUpdateInput = {
    categoria?: StringFieldUpdateOperationsInput | string
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tutor?: TutorUpdateOneWithoutDeportistaNestedInput
    personaClub?: PersonaClubUpdateOneRequiredWithoutDeportistaNestedInput
    desercionDeportista?: DesercionDeportistaUpdateOneWithoutDeportistaNestedInput
    pagosDeportista?: PagoDeportistaUpdateManyWithoutDeportistaNestedInput
  }

  export type DeportistaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTutor?: NullableIntFieldUpdateOperationsInput | number | null
    idPersonaClub?: IntFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    desercionDeportista?: DesercionDeportistaUncheckedUpdateOneWithoutDeportistaNestedInput
    pagosDeportista?: PagoDeportistaUncheckedUpdateManyWithoutDeportistaNestedInput
  }

  export type DeportistaCreateManyInput = {
    id?: number
    idTutor?: number | null
    idPersonaClub: number
    categoria: string
    activo?: boolean | null
  }

  export type DeportistaUpdateManyMutationInput = {
    categoria?: StringFieldUpdateOperationsInput | string
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type DeportistaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTutor?: NullableIntFieldUpdateOperationsInput | number | null
    idPersonaClub?: IntFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type DesercionDeportistaCreateInput = {
    fechaDesercion?: Date | string | null
    razon?: string | null
    descripcion?: string | null
    deportista: DeportistaCreateNestedOneWithoutDesercionDeportistaInput
  }

  export type DesercionDeportistaUncheckedCreateInput = {
    id?: number
    idDeportista: number
    fechaDesercion?: Date | string | null
    razon?: string | null
    descripcion?: string | null
  }

  export type DesercionDeportistaUpdateInput = {
    fechaDesercion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razon?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    deportista?: DeportistaUpdateOneRequiredWithoutDesercionDeportistaNestedInput
  }

  export type DesercionDeportistaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idDeportista?: IntFieldUpdateOperationsInput | number
    fechaDesercion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razon?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DesercionDeportistaCreateManyInput = {
    id?: number
    idDeportista: number
    fechaDesercion?: Date | string | null
    razon?: string | null
    descripcion?: string | null
  }

  export type DesercionDeportistaUpdateManyMutationInput = {
    fechaDesercion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razon?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DesercionDeportistaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idDeportista?: IntFieldUpdateOperationsInput | number
    fechaDesercion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razon?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GestionAdminCreateInput = {
    idTutor?: number | null
    idDeportista?: number | null
    idCargo?: number | null
    fechaInicio?: Date | string | null
    fechaFin?: Date | string | null
    activo?: boolean | null
  }

  export type GestionAdminUncheckedCreateInput = {
    id?: number
    idTutor?: number | null
    idDeportista?: number | null
    idCargo?: number | null
    fechaInicio?: Date | string | null
    fechaFin?: Date | string | null
    activo?: boolean | null
  }

  export type GestionAdminUpdateInput = {
    idTutor?: NullableIntFieldUpdateOperationsInput | number | null
    idDeportista?: NullableIntFieldUpdateOperationsInput | number | null
    idCargo?: NullableIntFieldUpdateOperationsInput | number | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type GestionAdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTutor?: NullableIntFieldUpdateOperationsInput | number | null
    idDeportista?: NullableIntFieldUpdateOperationsInput | number | null
    idCargo?: NullableIntFieldUpdateOperationsInput | number | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type GestionAdminCreateManyInput = {
    id?: number
    idTutor?: number | null
    idDeportista?: number | null
    idCargo?: number | null
    fechaInicio?: Date | string | null
    fechaFin?: Date | string | null
    activo?: boolean | null
  }

  export type GestionAdminUpdateManyMutationInput = {
    idTutor?: NullableIntFieldUpdateOperationsInput | number | null
    idDeportista?: NullableIntFieldUpdateOperationsInput | number | null
    idCargo?: NullableIntFieldUpdateOperationsInput | number | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type GestionAdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTutor?: NullableIntFieldUpdateOperationsInput | number | null
    idDeportista?: NullableIntFieldUpdateOperationsInput | number | null
    idCargo?: NullableIntFieldUpdateOperationsInput | number | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PagoDeportistaCreateInput = {
    fechaPago?: Date | string | null
    valor?: Decimal | DecimalJsLike | number | string | null
    tipoPago?: string | null
    deportista?: DeportistaCreateNestedOneWithoutPagosDeportistaInput
  }

  export type PagoDeportistaUncheckedCreateInput = {
    id?: number
    idDeportista: number
    fechaPago?: Date | string | null
    valor?: Decimal | DecimalJsLike | number | string | null
    tipoPago?: string | null
  }

  export type PagoDeportistaUpdateInput = {
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipoPago?: NullableStringFieldUpdateOperationsInput | string | null
    deportista?: DeportistaUpdateOneWithoutPagosDeportistaNestedInput
  }

  export type PagoDeportistaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idDeportista?: IntFieldUpdateOperationsInput | number
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipoPago?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PagoDeportistaCreateManyInput = {
    id?: number
    idDeportista: number
    fechaPago?: Date | string | null
    valor?: Decimal | DecimalJsLike | number | string | null
    tipoPago?: string | null
  }

  export type PagoDeportistaUpdateManyMutationInput = {
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipoPago?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PagoDeportistaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idDeportista?: IntFieldUpdateOperationsInput | number
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipoPago?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioCreateInput = {
    usuario?: string | null
    contrasenia?: string | null
    activo?: boolean | null
    persona?: PersonaClubCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    usuario?: string | null
    contrasenia?: string | null
    activo?: boolean | null
    idPersona?: number | null
  }

  export type UsuarioUpdateInput = {
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contrasenia?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    persona?: PersonaClubUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contrasenia?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    idPersona?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsuarioCreateManyInput = {
    id?: number
    usuario?: string | null
    contrasenia?: string | null
    activo?: boolean | null
    idPersona?: number | null
  }

  export type UsuarioUpdateManyMutationInput = {
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contrasenia?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contrasenia?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    idPersona?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DepartamentoCreateInput = {
    nombre?: string | null
    municipio?: MunicipioCreateNestedOneWithoutDepartamentoInput
  }

  export type DepartamentoUncheckedCreateInput = {
    id?: number
    nombre?: string | null
    municipio?: MunicipioUncheckedCreateNestedOneWithoutDepartamentoInput
  }

  export type DepartamentoUpdateInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    municipio?: MunicipioUpdateOneWithoutDepartamentoNestedInput
  }

  export type DepartamentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    municipio?: MunicipioUncheckedUpdateOneWithoutDepartamentoNestedInput
  }

  export type DepartamentoCreateManyInput = {
    id?: number
    nombre?: string | null
  }

  export type DepartamentoUpdateManyMutationInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DepartamentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MunicipioCreateInput = {
    nombre?: string | null
    estado?: boolean | null
    personaClub?: PersonaClubCreateNestedManyWithoutMunicipioInput
    departamento: DepartamentoCreateNestedOneWithoutMunicipioInput
  }

  export type MunicipioUncheckedCreateInput = {
    id?: number
    idDepartamento: number
    nombre?: string | null
    estado?: boolean | null
    personaClub?: PersonaClubUncheckedCreateNestedManyWithoutMunicipioInput
  }

  export type MunicipioUpdateInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    personaClub?: PersonaClubUpdateManyWithoutMunicipioNestedInput
    departamento?: DepartamentoUpdateOneRequiredWithoutMunicipioNestedInput
  }

  export type MunicipioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idDepartamento?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    personaClub?: PersonaClubUncheckedUpdateManyWithoutMunicipioNestedInput
  }

  export type MunicipioCreateManyInput = {
    id?: number
    idDepartamento: number
    nombre?: string | null
    estado?: boolean | null
  }

  export type MunicipioUpdateManyMutationInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type MunicipioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idDepartamento?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type TipoDocumentoCreateInput = {
    tipoDocumento?: string | null
    descripcion?: string | null
  }

  export type TipoDocumentoUncheckedCreateInput = {
    id?: number
    tipoDocumento?: string | null
    descripcion?: string | null
  }

  export type TipoDocumentoUpdateInput = {
    tipoDocumento?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TipoDocumentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoDocumento?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TipoDocumentoCreateManyInput = {
    id?: number
    tipoDocumento?: string | null
    descripcion?: string | null
  }

  export type TipoDocumentoUpdateManyMutationInput = {
    tipoDocumento?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TipoDocumentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoDocumento?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CargosAdminOrderByRelevanceInput = {
    fields: CargosAdminOrderByRelevanceFieldEnum | CargosAdminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CargosAdminCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CargosAdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CargosAdminMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CargosAdminMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CargosAdminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type MunicipioScalarRelationFilter = {
    is?: MunicipioWhereInput
    isNot?: MunicipioWhereInput
  }

  export type EntrenadorNullableScalarRelationFilter = {
    is?: EntrenadorWhereInput | null
    isNot?: EntrenadorWhereInput | null
  }

  export type DeportistaNullableScalarRelationFilter = {
    is?: DeportistaWhereInput | null
    isNot?: DeportistaWhereInput | null
  }

  export type UsuarioNullableScalarRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type PersonaClubOrderByRelevanceInput = {
    fields: PersonaClubOrderByRelevanceFieldEnum | PersonaClubOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PersonaClubCountOrderByAggregateInput = {
    id?: SortOrder
    numeroDocumento?: SortOrder
    tipoDocumento?: SortOrder
    idMunicipio?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    fechaNacimento?: SortOrder
    tipoRh?: SortOrder
    peso?: SortOrder
    altura?: SortOrder
    correo?: SortOrder
    numeroTelefono?: SortOrder
    tallaCamisa?: SortOrder
    tallaCalzado?: SortOrder
    tallaPantaloneta?: SortOrder
    genero?: SortOrder
    direccion?: SortOrder
  }

  export type PersonaClubAvgOrderByAggregateInput = {
    id?: SortOrder
    idMunicipio?: SortOrder
    peso?: SortOrder
    altura?: SortOrder
  }

  export type PersonaClubMaxOrderByAggregateInput = {
    id?: SortOrder
    numeroDocumento?: SortOrder
    tipoDocumento?: SortOrder
    idMunicipio?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    fechaNacimento?: SortOrder
    tipoRh?: SortOrder
    peso?: SortOrder
    altura?: SortOrder
    correo?: SortOrder
    numeroTelefono?: SortOrder
    tallaCamisa?: SortOrder
    tallaCalzado?: SortOrder
    tallaPantaloneta?: SortOrder
    genero?: SortOrder
    direccion?: SortOrder
  }

  export type PersonaClubMinOrderByAggregateInput = {
    id?: SortOrder
    numeroDocumento?: SortOrder
    tipoDocumento?: SortOrder
    idMunicipio?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    fechaNacimento?: SortOrder
    tipoRh?: SortOrder
    peso?: SortOrder
    altura?: SortOrder
    correo?: SortOrder
    numeroTelefono?: SortOrder
    tallaCamisa?: SortOrder
    tallaCalzado?: SortOrder
    tallaPantaloneta?: SortOrder
    genero?: SortOrder
    direccion?: SortOrder
  }

  export type PersonaClubSumOrderByAggregateInput = {
    id?: SortOrder
    idMunicipio?: SortOrder
    peso?: SortOrder
    altura?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ContactosEmergenciaOrderByRelevanceInput = {
    fields: ContactosEmergenciaOrderByRelevanceFieldEnum | ContactosEmergenciaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ContactosEmergenciaCountOrderByAggregateInput = {
    id?: SortOrder
    tipoDocumento?: SortOrder
    numeroDocumento?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
  }

  export type ContactosEmergenciaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactosEmergenciaMaxOrderByAggregateInput = {
    id?: SortOrder
    tipoDocumento?: SortOrder
    numeroDocumento?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
  }

  export type ContactosEmergenciaMinOrderByAggregateInput = {
    id?: SortOrder
    tipoDocumento?: SortOrder
    numeroDocumento?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
  }

  export type ContactosEmergenciaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ContactosEmergenciaNullableScalarRelationFilter = {
    is?: ContactosEmergenciaWhereInput | null
    isNot?: ContactosEmergenciaWhereInput | null
  }

  export type PersonaClubScalarRelationFilter = {
    is?: PersonaClubWhereInput
    isNot?: PersonaClubWhereInput
  }

  export type EntrenadorCountOrderByAggregateInput = {
    id?: SortOrder
    idPersonaClub?: SortOrder
    idContactoEmergencia?: SortOrder
    fechaIngreso?: SortOrder
    activo?: SortOrder
  }

  export type EntrenadorAvgOrderByAggregateInput = {
    id?: SortOrder
    idPersonaClub?: SortOrder
    idContactoEmergencia?: SortOrder
  }

  export type EntrenadorMaxOrderByAggregateInput = {
    id?: SortOrder
    idPersonaClub?: SortOrder
    idContactoEmergencia?: SortOrder
    fechaIngreso?: SortOrder
    activo?: SortOrder
  }

  export type EntrenadorMinOrderByAggregateInput = {
    id?: SortOrder
    idPersonaClub?: SortOrder
    idContactoEmergencia?: SortOrder
    fechaIngreso?: SortOrder
    activo?: SortOrder
  }

  export type EntrenadorSumOrderByAggregateInput = {
    id?: SortOrder
    idPersonaClub?: SortOrder
    idContactoEmergencia?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type TutorOrderByRelevanceInput = {
    fields: TutorOrderByRelevanceFieldEnum | TutorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TutorCountOrderByAggregateInput = {
    id?: SortOrder
    tipoDocumento?: SortOrder
    numeroDocumento?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
  }

  export type TutorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TutorMaxOrderByAggregateInput = {
    id?: SortOrder
    tipoDocumento?: SortOrder
    numeroDocumento?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
  }

  export type TutorMinOrderByAggregateInput = {
    id?: SortOrder
    tipoDocumento?: SortOrder
    numeroDocumento?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
  }

  export type TutorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TutorNullableScalarRelationFilter = {
    is?: TutorWhereInput | null
    isNot?: TutorWhereInput | null
  }

  export type DesercionDeportistaNullableScalarRelationFilter = {
    is?: DesercionDeportistaWhereInput | null
    isNot?: DesercionDeportistaWhereInput | null
  }

  export type PagoDeportistaListRelationFilter = {
    every?: PagoDeportistaWhereInput
    some?: PagoDeportistaWhereInput
    none?: PagoDeportistaWhereInput
  }

  export type PagoDeportistaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeportistaOrderByRelevanceInput = {
    fields: DeportistaOrderByRelevanceFieldEnum | DeportistaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DeportistaCountOrderByAggregateInput = {
    id?: SortOrder
    idTutor?: SortOrder
    idPersonaClub?: SortOrder
    categoria?: SortOrder
    activo?: SortOrder
  }

  export type DeportistaAvgOrderByAggregateInput = {
    id?: SortOrder
    idTutor?: SortOrder
    idPersonaClub?: SortOrder
  }

  export type DeportistaMaxOrderByAggregateInput = {
    id?: SortOrder
    idTutor?: SortOrder
    idPersonaClub?: SortOrder
    categoria?: SortOrder
    activo?: SortOrder
  }

  export type DeportistaMinOrderByAggregateInput = {
    id?: SortOrder
    idTutor?: SortOrder
    idPersonaClub?: SortOrder
    categoria?: SortOrder
    activo?: SortOrder
  }

  export type DeportistaSumOrderByAggregateInput = {
    id?: SortOrder
    idTutor?: SortOrder
    idPersonaClub?: SortOrder
  }

  export type DeportistaScalarRelationFilter = {
    is?: DeportistaWhereInput
    isNot?: DeportistaWhereInput
  }

  export type DesercionDeportistaOrderByRelevanceInput = {
    fields: DesercionDeportistaOrderByRelevanceFieldEnum | DesercionDeportistaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DesercionDeportistaCountOrderByAggregateInput = {
    id?: SortOrder
    idDeportista?: SortOrder
    fechaDesercion?: SortOrder
    razon?: SortOrder
    descripcion?: SortOrder
  }

  export type DesercionDeportistaAvgOrderByAggregateInput = {
    id?: SortOrder
    idDeportista?: SortOrder
  }

  export type DesercionDeportistaMaxOrderByAggregateInput = {
    id?: SortOrder
    idDeportista?: SortOrder
    fechaDesercion?: SortOrder
    razon?: SortOrder
    descripcion?: SortOrder
  }

  export type DesercionDeportistaMinOrderByAggregateInput = {
    id?: SortOrder
    idDeportista?: SortOrder
    fechaDesercion?: SortOrder
    razon?: SortOrder
    descripcion?: SortOrder
  }

  export type DesercionDeportistaSumOrderByAggregateInput = {
    id?: SortOrder
    idDeportista?: SortOrder
  }

  export type GestionAdminCountOrderByAggregateInput = {
    id?: SortOrder
    idTutor?: SortOrder
    idDeportista?: SortOrder
    idCargo?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    activo?: SortOrder
  }

  export type GestionAdminAvgOrderByAggregateInput = {
    id?: SortOrder
    idTutor?: SortOrder
    idDeportista?: SortOrder
    idCargo?: SortOrder
  }

  export type GestionAdminMaxOrderByAggregateInput = {
    id?: SortOrder
    idTutor?: SortOrder
    idDeportista?: SortOrder
    idCargo?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    activo?: SortOrder
  }

  export type GestionAdminMinOrderByAggregateInput = {
    id?: SortOrder
    idTutor?: SortOrder
    idDeportista?: SortOrder
    idCargo?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    activo?: SortOrder
  }

  export type GestionAdminSumOrderByAggregateInput = {
    id?: SortOrder
    idTutor?: SortOrder
    idDeportista?: SortOrder
    idCargo?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type PagoDeportistaOrderByRelevanceInput = {
    fields: PagoDeportistaOrderByRelevanceFieldEnum | PagoDeportistaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PagoDeportistaCountOrderByAggregateInput = {
    id?: SortOrder
    idDeportista?: SortOrder
    fechaPago?: SortOrder
    valor?: SortOrder
    tipoPago?: SortOrder
  }

  export type PagoDeportistaAvgOrderByAggregateInput = {
    id?: SortOrder
    idDeportista?: SortOrder
    valor?: SortOrder
  }

  export type PagoDeportistaMaxOrderByAggregateInput = {
    id?: SortOrder
    idDeportista?: SortOrder
    fechaPago?: SortOrder
    valor?: SortOrder
    tipoPago?: SortOrder
  }

  export type PagoDeportistaMinOrderByAggregateInput = {
    id?: SortOrder
    idDeportista?: SortOrder
    fechaPago?: SortOrder
    valor?: SortOrder
    tipoPago?: SortOrder
  }

  export type PagoDeportistaSumOrderByAggregateInput = {
    id?: SortOrder
    idDeportista?: SortOrder
    valor?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type PersonaClubNullableScalarRelationFilter = {
    is?: PersonaClubWhereInput | null
    isNot?: PersonaClubWhereInput | null
  }

  export type UsuarioOrderByRelevanceInput = {
    fields: UsuarioOrderByRelevanceFieldEnum | UsuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    usuario?: SortOrder
    contrasenia?: SortOrder
    activo?: SortOrder
    idPersona?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    idPersona?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario?: SortOrder
    contrasenia?: SortOrder
    activo?: SortOrder
    idPersona?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    usuario?: SortOrder
    contrasenia?: SortOrder
    activo?: SortOrder
    idPersona?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
    idPersona?: SortOrder
  }

  export type MunicipioNullableScalarRelationFilter = {
    is?: MunicipioWhereInput | null
    isNot?: MunicipioWhereInput | null
  }

  export type DepartamentoOrderByRelevanceInput = {
    fields: DepartamentoOrderByRelevanceFieldEnum | DepartamentoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DepartamentoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type DepartamentoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DepartamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type DepartamentoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type DepartamentoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PersonaClubListRelationFilter = {
    every?: PersonaClubWhereInput
    some?: PersonaClubWhereInput
    none?: PersonaClubWhereInput
  }

  export type DepartamentoScalarRelationFilter = {
    is?: DepartamentoWhereInput
    isNot?: DepartamentoWhereInput
  }

  export type PersonaClubOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MunicipioOrderByRelevanceInput = {
    fields: MunicipioOrderByRelevanceFieldEnum | MunicipioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MunicipioCountOrderByAggregateInput = {
    id?: SortOrder
    idDepartamento?: SortOrder
    nombre?: SortOrder
    estado?: SortOrder
  }

  export type MunicipioAvgOrderByAggregateInput = {
    id?: SortOrder
    idDepartamento?: SortOrder
  }

  export type MunicipioMaxOrderByAggregateInput = {
    id?: SortOrder
    idDepartamento?: SortOrder
    nombre?: SortOrder
    estado?: SortOrder
  }

  export type MunicipioMinOrderByAggregateInput = {
    id?: SortOrder
    idDepartamento?: SortOrder
    nombre?: SortOrder
    estado?: SortOrder
  }

  export type MunicipioSumOrderByAggregateInput = {
    id?: SortOrder
    idDepartamento?: SortOrder
  }

  export type TipoDocumentoOrderByRelevanceInput = {
    fields: TipoDocumentoOrderByRelevanceFieldEnum | TipoDocumentoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TipoDocumentoCountOrderByAggregateInput = {
    id?: SortOrder
    tipoDocumento?: SortOrder
    descripcion?: SortOrder
  }

  export type TipoDocumentoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TipoDocumentoMaxOrderByAggregateInput = {
    id?: SortOrder
    tipoDocumento?: SortOrder
    descripcion?: SortOrder
  }

  export type TipoDocumentoMinOrderByAggregateInput = {
    id?: SortOrder
    tipoDocumento?: SortOrder
    descripcion?: SortOrder
  }

  export type TipoDocumentoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MunicipioCreateNestedOneWithoutPersonaClubInput = {
    create?: XOR<MunicipioCreateWithoutPersonaClubInput, MunicipioUncheckedCreateWithoutPersonaClubInput>
    connectOrCreate?: MunicipioCreateOrConnectWithoutPersonaClubInput
    connect?: MunicipioWhereUniqueInput
  }

  export type EntrenadorCreateNestedOneWithoutPersonaClubInput = {
    create?: XOR<EntrenadorCreateWithoutPersonaClubInput, EntrenadorUncheckedCreateWithoutPersonaClubInput>
    connectOrCreate?: EntrenadorCreateOrConnectWithoutPersonaClubInput
    connect?: EntrenadorWhereUniqueInput
  }

  export type DeportistaCreateNestedOneWithoutPersonaClubInput = {
    create?: XOR<DeportistaCreateWithoutPersonaClubInput, DeportistaUncheckedCreateWithoutPersonaClubInput>
    connectOrCreate?: DeportistaCreateOrConnectWithoutPersonaClubInput
    connect?: DeportistaWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutPersonaInput = {
    create?: XOR<UsuarioCreateWithoutPersonaInput, UsuarioUncheckedCreateWithoutPersonaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPersonaInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EntrenadorUncheckedCreateNestedOneWithoutPersonaClubInput = {
    create?: XOR<EntrenadorCreateWithoutPersonaClubInput, EntrenadorUncheckedCreateWithoutPersonaClubInput>
    connectOrCreate?: EntrenadorCreateOrConnectWithoutPersonaClubInput
    connect?: EntrenadorWhereUniqueInput
  }

  export type DeportistaUncheckedCreateNestedOneWithoutPersonaClubInput = {
    create?: XOR<DeportistaCreateWithoutPersonaClubInput, DeportistaUncheckedCreateWithoutPersonaClubInput>
    connectOrCreate?: DeportistaCreateOrConnectWithoutPersonaClubInput
    connect?: DeportistaWhereUniqueInput
  }

  export type UsuarioUncheckedCreateNestedOneWithoutPersonaInput = {
    create?: XOR<UsuarioCreateWithoutPersonaInput, UsuarioUncheckedCreateWithoutPersonaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPersonaInput
    connect?: UsuarioWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MunicipioUpdateOneRequiredWithoutPersonaClubNestedInput = {
    create?: XOR<MunicipioCreateWithoutPersonaClubInput, MunicipioUncheckedCreateWithoutPersonaClubInput>
    connectOrCreate?: MunicipioCreateOrConnectWithoutPersonaClubInput
    upsert?: MunicipioUpsertWithoutPersonaClubInput
    connect?: MunicipioWhereUniqueInput
    update?: XOR<XOR<MunicipioUpdateToOneWithWhereWithoutPersonaClubInput, MunicipioUpdateWithoutPersonaClubInput>, MunicipioUncheckedUpdateWithoutPersonaClubInput>
  }

  export type EntrenadorUpdateOneWithoutPersonaClubNestedInput = {
    create?: XOR<EntrenadorCreateWithoutPersonaClubInput, EntrenadorUncheckedCreateWithoutPersonaClubInput>
    connectOrCreate?: EntrenadorCreateOrConnectWithoutPersonaClubInput
    upsert?: EntrenadorUpsertWithoutPersonaClubInput
    disconnect?: EntrenadorWhereInput | boolean
    delete?: EntrenadorWhereInput | boolean
    connect?: EntrenadorWhereUniqueInput
    update?: XOR<XOR<EntrenadorUpdateToOneWithWhereWithoutPersonaClubInput, EntrenadorUpdateWithoutPersonaClubInput>, EntrenadorUncheckedUpdateWithoutPersonaClubInput>
  }

  export type DeportistaUpdateOneWithoutPersonaClubNestedInput = {
    create?: XOR<DeportistaCreateWithoutPersonaClubInput, DeportistaUncheckedCreateWithoutPersonaClubInput>
    connectOrCreate?: DeportistaCreateOrConnectWithoutPersonaClubInput
    upsert?: DeportistaUpsertWithoutPersonaClubInput
    disconnect?: DeportistaWhereInput | boolean
    delete?: DeportistaWhereInput | boolean
    connect?: DeportistaWhereUniqueInput
    update?: XOR<XOR<DeportistaUpdateToOneWithWhereWithoutPersonaClubInput, DeportistaUpdateWithoutPersonaClubInput>, DeportistaUncheckedUpdateWithoutPersonaClubInput>
  }

  export type UsuarioUpdateOneWithoutPersonaNestedInput = {
    create?: XOR<UsuarioCreateWithoutPersonaInput, UsuarioUncheckedCreateWithoutPersonaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPersonaInput
    upsert?: UsuarioUpsertWithoutPersonaInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPersonaInput, UsuarioUpdateWithoutPersonaInput>, UsuarioUncheckedUpdateWithoutPersonaInput>
  }

  export type EntrenadorUncheckedUpdateOneWithoutPersonaClubNestedInput = {
    create?: XOR<EntrenadorCreateWithoutPersonaClubInput, EntrenadorUncheckedCreateWithoutPersonaClubInput>
    connectOrCreate?: EntrenadorCreateOrConnectWithoutPersonaClubInput
    upsert?: EntrenadorUpsertWithoutPersonaClubInput
    disconnect?: EntrenadorWhereInput | boolean
    delete?: EntrenadorWhereInput | boolean
    connect?: EntrenadorWhereUniqueInput
    update?: XOR<XOR<EntrenadorUpdateToOneWithWhereWithoutPersonaClubInput, EntrenadorUpdateWithoutPersonaClubInput>, EntrenadorUncheckedUpdateWithoutPersonaClubInput>
  }

  export type DeportistaUncheckedUpdateOneWithoutPersonaClubNestedInput = {
    create?: XOR<DeportistaCreateWithoutPersonaClubInput, DeportistaUncheckedCreateWithoutPersonaClubInput>
    connectOrCreate?: DeportistaCreateOrConnectWithoutPersonaClubInput
    upsert?: DeportistaUpsertWithoutPersonaClubInput
    disconnect?: DeportistaWhereInput | boolean
    delete?: DeportistaWhereInput | boolean
    connect?: DeportistaWhereUniqueInput
    update?: XOR<XOR<DeportistaUpdateToOneWithWhereWithoutPersonaClubInput, DeportistaUpdateWithoutPersonaClubInput>, DeportistaUncheckedUpdateWithoutPersonaClubInput>
  }

  export type UsuarioUncheckedUpdateOneWithoutPersonaNestedInput = {
    create?: XOR<UsuarioCreateWithoutPersonaInput, UsuarioUncheckedCreateWithoutPersonaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPersonaInput
    upsert?: UsuarioUpsertWithoutPersonaInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPersonaInput, UsuarioUpdateWithoutPersonaInput>, UsuarioUncheckedUpdateWithoutPersonaInput>
  }

  export type EntrenadorCreateNestedOneWithoutContactosEmergenciaInput = {
    create?: XOR<EntrenadorCreateWithoutContactosEmergenciaInput, EntrenadorUncheckedCreateWithoutContactosEmergenciaInput>
    connectOrCreate?: EntrenadorCreateOrConnectWithoutContactosEmergenciaInput
    connect?: EntrenadorWhereUniqueInput
  }

  export type EntrenadorUncheckedCreateNestedOneWithoutContactosEmergenciaInput = {
    create?: XOR<EntrenadorCreateWithoutContactosEmergenciaInput, EntrenadorUncheckedCreateWithoutContactosEmergenciaInput>
    connectOrCreate?: EntrenadorCreateOrConnectWithoutContactosEmergenciaInput
    connect?: EntrenadorWhereUniqueInput
  }

  export type EntrenadorUpdateOneWithoutContactosEmergenciaNestedInput = {
    create?: XOR<EntrenadorCreateWithoutContactosEmergenciaInput, EntrenadorUncheckedCreateWithoutContactosEmergenciaInput>
    connectOrCreate?: EntrenadorCreateOrConnectWithoutContactosEmergenciaInput
    upsert?: EntrenadorUpsertWithoutContactosEmergenciaInput
    disconnect?: EntrenadorWhereInput | boolean
    delete?: EntrenadorWhereInput | boolean
    connect?: EntrenadorWhereUniqueInput
    update?: XOR<XOR<EntrenadorUpdateToOneWithWhereWithoutContactosEmergenciaInput, EntrenadorUpdateWithoutContactosEmergenciaInput>, EntrenadorUncheckedUpdateWithoutContactosEmergenciaInput>
  }

  export type EntrenadorUncheckedUpdateOneWithoutContactosEmergenciaNestedInput = {
    create?: XOR<EntrenadorCreateWithoutContactosEmergenciaInput, EntrenadorUncheckedCreateWithoutContactosEmergenciaInput>
    connectOrCreate?: EntrenadorCreateOrConnectWithoutContactosEmergenciaInput
    upsert?: EntrenadorUpsertWithoutContactosEmergenciaInput
    disconnect?: EntrenadorWhereInput | boolean
    delete?: EntrenadorWhereInput | boolean
    connect?: EntrenadorWhereUniqueInput
    update?: XOR<XOR<EntrenadorUpdateToOneWithWhereWithoutContactosEmergenciaInput, EntrenadorUpdateWithoutContactosEmergenciaInput>, EntrenadorUncheckedUpdateWithoutContactosEmergenciaInput>
  }

  export type ContactosEmergenciaCreateNestedOneWithoutEntrenadorInput = {
    create?: XOR<ContactosEmergenciaCreateWithoutEntrenadorInput, ContactosEmergenciaUncheckedCreateWithoutEntrenadorInput>
    connectOrCreate?: ContactosEmergenciaCreateOrConnectWithoutEntrenadorInput
    connect?: ContactosEmergenciaWhereUniqueInput
  }

  export type PersonaClubCreateNestedOneWithoutEntrenadorInput = {
    create?: XOR<PersonaClubCreateWithoutEntrenadorInput, PersonaClubUncheckedCreateWithoutEntrenadorInput>
    connectOrCreate?: PersonaClubCreateOrConnectWithoutEntrenadorInput
    connect?: PersonaClubWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type ContactosEmergenciaUpdateOneWithoutEntrenadorNestedInput = {
    create?: XOR<ContactosEmergenciaCreateWithoutEntrenadorInput, ContactosEmergenciaUncheckedCreateWithoutEntrenadorInput>
    connectOrCreate?: ContactosEmergenciaCreateOrConnectWithoutEntrenadorInput
    upsert?: ContactosEmergenciaUpsertWithoutEntrenadorInput
    disconnect?: ContactosEmergenciaWhereInput | boolean
    delete?: ContactosEmergenciaWhereInput | boolean
    connect?: ContactosEmergenciaWhereUniqueInput
    update?: XOR<XOR<ContactosEmergenciaUpdateToOneWithWhereWithoutEntrenadorInput, ContactosEmergenciaUpdateWithoutEntrenadorInput>, ContactosEmergenciaUncheckedUpdateWithoutEntrenadorInput>
  }

  export type PersonaClubUpdateOneRequiredWithoutEntrenadorNestedInput = {
    create?: XOR<PersonaClubCreateWithoutEntrenadorInput, PersonaClubUncheckedCreateWithoutEntrenadorInput>
    connectOrCreate?: PersonaClubCreateOrConnectWithoutEntrenadorInput
    upsert?: PersonaClubUpsertWithoutEntrenadorInput
    connect?: PersonaClubWhereUniqueInput
    update?: XOR<XOR<PersonaClubUpdateToOneWithWhereWithoutEntrenadorInput, PersonaClubUpdateWithoutEntrenadorInput>, PersonaClubUncheckedUpdateWithoutEntrenadorInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DeportistaCreateNestedOneWithoutTutorInput = {
    create?: XOR<DeportistaCreateWithoutTutorInput, DeportistaUncheckedCreateWithoutTutorInput>
    connectOrCreate?: DeportistaCreateOrConnectWithoutTutorInput
    connect?: DeportistaWhereUniqueInput
  }

  export type DeportistaUncheckedCreateNestedOneWithoutTutorInput = {
    create?: XOR<DeportistaCreateWithoutTutorInput, DeportistaUncheckedCreateWithoutTutorInput>
    connectOrCreate?: DeportistaCreateOrConnectWithoutTutorInput
    connect?: DeportistaWhereUniqueInput
  }

  export type DeportistaUpdateOneWithoutTutorNestedInput = {
    create?: XOR<DeportistaCreateWithoutTutorInput, DeportistaUncheckedCreateWithoutTutorInput>
    connectOrCreate?: DeportistaCreateOrConnectWithoutTutorInput
    upsert?: DeportistaUpsertWithoutTutorInput
    disconnect?: DeportistaWhereInput | boolean
    delete?: DeportistaWhereInput | boolean
    connect?: DeportistaWhereUniqueInput
    update?: XOR<XOR<DeportistaUpdateToOneWithWhereWithoutTutorInput, DeportistaUpdateWithoutTutorInput>, DeportistaUncheckedUpdateWithoutTutorInput>
  }

  export type DeportistaUncheckedUpdateOneWithoutTutorNestedInput = {
    create?: XOR<DeportistaCreateWithoutTutorInput, DeportistaUncheckedCreateWithoutTutorInput>
    connectOrCreate?: DeportistaCreateOrConnectWithoutTutorInput
    upsert?: DeportistaUpsertWithoutTutorInput
    disconnect?: DeportistaWhereInput | boolean
    delete?: DeportistaWhereInput | boolean
    connect?: DeportistaWhereUniqueInput
    update?: XOR<XOR<DeportistaUpdateToOneWithWhereWithoutTutorInput, DeportistaUpdateWithoutTutorInput>, DeportistaUncheckedUpdateWithoutTutorInput>
  }

  export type TutorCreateNestedOneWithoutDeportistaInput = {
    create?: XOR<TutorCreateWithoutDeportistaInput, TutorUncheckedCreateWithoutDeportistaInput>
    connectOrCreate?: TutorCreateOrConnectWithoutDeportistaInput
    connect?: TutorWhereUniqueInput
  }

  export type PersonaClubCreateNestedOneWithoutDeportistaInput = {
    create?: XOR<PersonaClubCreateWithoutDeportistaInput, PersonaClubUncheckedCreateWithoutDeportistaInput>
    connectOrCreate?: PersonaClubCreateOrConnectWithoutDeportistaInput
    connect?: PersonaClubWhereUniqueInput
  }

  export type DesercionDeportistaCreateNestedOneWithoutDeportistaInput = {
    create?: XOR<DesercionDeportistaCreateWithoutDeportistaInput, DesercionDeportistaUncheckedCreateWithoutDeportistaInput>
    connectOrCreate?: DesercionDeportistaCreateOrConnectWithoutDeportistaInput
    connect?: DesercionDeportistaWhereUniqueInput
  }

  export type PagoDeportistaCreateNestedManyWithoutDeportistaInput = {
    create?: XOR<PagoDeportistaCreateWithoutDeportistaInput, PagoDeportistaUncheckedCreateWithoutDeportistaInput> | PagoDeportistaCreateWithoutDeportistaInput[] | PagoDeportistaUncheckedCreateWithoutDeportistaInput[]
    connectOrCreate?: PagoDeportistaCreateOrConnectWithoutDeportistaInput | PagoDeportistaCreateOrConnectWithoutDeportistaInput[]
    createMany?: PagoDeportistaCreateManyDeportistaInputEnvelope
    connect?: PagoDeportistaWhereUniqueInput | PagoDeportistaWhereUniqueInput[]
  }

  export type DesercionDeportistaUncheckedCreateNestedOneWithoutDeportistaInput = {
    create?: XOR<DesercionDeportistaCreateWithoutDeportistaInput, DesercionDeportistaUncheckedCreateWithoutDeportistaInput>
    connectOrCreate?: DesercionDeportistaCreateOrConnectWithoutDeportistaInput
    connect?: DesercionDeportistaWhereUniqueInput
  }

  export type PagoDeportistaUncheckedCreateNestedManyWithoutDeportistaInput = {
    create?: XOR<PagoDeportistaCreateWithoutDeportistaInput, PagoDeportistaUncheckedCreateWithoutDeportistaInput> | PagoDeportistaCreateWithoutDeportistaInput[] | PagoDeportistaUncheckedCreateWithoutDeportistaInput[]
    connectOrCreate?: PagoDeportistaCreateOrConnectWithoutDeportistaInput | PagoDeportistaCreateOrConnectWithoutDeportistaInput[]
    createMany?: PagoDeportistaCreateManyDeportistaInputEnvelope
    connect?: PagoDeportistaWhereUniqueInput | PagoDeportistaWhereUniqueInput[]
  }

  export type TutorUpdateOneWithoutDeportistaNestedInput = {
    create?: XOR<TutorCreateWithoutDeportistaInput, TutorUncheckedCreateWithoutDeportistaInput>
    connectOrCreate?: TutorCreateOrConnectWithoutDeportistaInput
    upsert?: TutorUpsertWithoutDeportistaInput
    disconnect?: TutorWhereInput | boolean
    delete?: TutorWhereInput | boolean
    connect?: TutorWhereUniqueInput
    update?: XOR<XOR<TutorUpdateToOneWithWhereWithoutDeportistaInput, TutorUpdateWithoutDeportistaInput>, TutorUncheckedUpdateWithoutDeportistaInput>
  }

  export type PersonaClubUpdateOneRequiredWithoutDeportistaNestedInput = {
    create?: XOR<PersonaClubCreateWithoutDeportistaInput, PersonaClubUncheckedCreateWithoutDeportistaInput>
    connectOrCreate?: PersonaClubCreateOrConnectWithoutDeportistaInput
    upsert?: PersonaClubUpsertWithoutDeportistaInput
    connect?: PersonaClubWhereUniqueInput
    update?: XOR<XOR<PersonaClubUpdateToOneWithWhereWithoutDeportistaInput, PersonaClubUpdateWithoutDeportistaInput>, PersonaClubUncheckedUpdateWithoutDeportistaInput>
  }

  export type DesercionDeportistaUpdateOneWithoutDeportistaNestedInput = {
    create?: XOR<DesercionDeportistaCreateWithoutDeportistaInput, DesercionDeportistaUncheckedCreateWithoutDeportistaInput>
    connectOrCreate?: DesercionDeportistaCreateOrConnectWithoutDeportistaInput
    upsert?: DesercionDeportistaUpsertWithoutDeportistaInput
    disconnect?: DesercionDeportistaWhereInput | boolean
    delete?: DesercionDeportistaWhereInput | boolean
    connect?: DesercionDeportistaWhereUniqueInput
    update?: XOR<XOR<DesercionDeportistaUpdateToOneWithWhereWithoutDeportistaInput, DesercionDeportistaUpdateWithoutDeportistaInput>, DesercionDeportistaUncheckedUpdateWithoutDeportistaInput>
  }

  export type PagoDeportistaUpdateManyWithoutDeportistaNestedInput = {
    create?: XOR<PagoDeportistaCreateWithoutDeportistaInput, PagoDeportistaUncheckedCreateWithoutDeportistaInput> | PagoDeportistaCreateWithoutDeportistaInput[] | PagoDeportistaUncheckedCreateWithoutDeportistaInput[]
    connectOrCreate?: PagoDeportistaCreateOrConnectWithoutDeportistaInput | PagoDeportistaCreateOrConnectWithoutDeportistaInput[]
    upsert?: PagoDeportistaUpsertWithWhereUniqueWithoutDeportistaInput | PagoDeportistaUpsertWithWhereUniqueWithoutDeportistaInput[]
    createMany?: PagoDeportistaCreateManyDeportistaInputEnvelope
    set?: PagoDeportistaWhereUniqueInput | PagoDeportistaWhereUniqueInput[]
    disconnect?: PagoDeportistaWhereUniqueInput | PagoDeportistaWhereUniqueInput[]
    delete?: PagoDeportistaWhereUniqueInput | PagoDeportistaWhereUniqueInput[]
    connect?: PagoDeportistaWhereUniqueInput | PagoDeportistaWhereUniqueInput[]
    update?: PagoDeportistaUpdateWithWhereUniqueWithoutDeportistaInput | PagoDeportistaUpdateWithWhereUniqueWithoutDeportistaInput[]
    updateMany?: PagoDeportistaUpdateManyWithWhereWithoutDeportistaInput | PagoDeportistaUpdateManyWithWhereWithoutDeportistaInput[]
    deleteMany?: PagoDeportistaScalarWhereInput | PagoDeportistaScalarWhereInput[]
  }

  export type DesercionDeportistaUncheckedUpdateOneWithoutDeportistaNestedInput = {
    create?: XOR<DesercionDeportistaCreateWithoutDeportistaInput, DesercionDeportistaUncheckedCreateWithoutDeportistaInput>
    connectOrCreate?: DesercionDeportistaCreateOrConnectWithoutDeportistaInput
    upsert?: DesercionDeportistaUpsertWithoutDeportistaInput
    disconnect?: DesercionDeportistaWhereInput | boolean
    delete?: DesercionDeportistaWhereInput | boolean
    connect?: DesercionDeportistaWhereUniqueInput
    update?: XOR<XOR<DesercionDeportistaUpdateToOneWithWhereWithoutDeportistaInput, DesercionDeportistaUpdateWithoutDeportistaInput>, DesercionDeportistaUncheckedUpdateWithoutDeportistaInput>
  }

  export type PagoDeportistaUncheckedUpdateManyWithoutDeportistaNestedInput = {
    create?: XOR<PagoDeportistaCreateWithoutDeportistaInput, PagoDeportistaUncheckedCreateWithoutDeportistaInput> | PagoDeportistaCreateWithoutDeportistaInput[] | PagoDeportistaUncheckedCreateWithoutDeportistaInput[]
    connectOrCreate?: PagoDeportistaCreateOrConnectWithoutDeportistaInput | PagoDeportistaCreateOrConnectWithoutDeportistaInput[]
    upsert?: PagoDeportistaUpsertWithWhereUniqueWithoutDeportistaInput | PagoDeportistaUpsertWithWhereUniqueWithoutDeportistaInput[]
    createMany?: PagoDeportistaCreateManyDeportistaInputEnvelope
    set?: PagoDeportistaWhereUniqueInput | PagoDeportistaWhereUniqueInput[]
    disconnect?: PagoDeportistaWhereUniqueInput | PagoDeportistaWhereUniqueInput[]
    delete?: PagoDeportistaWhereUniqueInput | PagoDeportistaWhereUniqueInput[]
    connect?: PagoDeportistaWhereUniqueInput | PagoDeportistaWhereUniqueInput[]
    update?: PagoDeportistaUpdateWithWhereUniqueWithoutDeportistaInput | PagoDeportistaUpdateWithWhereUniqueWithoutDeportistaInput[]
    updateMany?: PagoDeportistaUpdateManyWithWhereWithoutDeportistaInput | PagoDeportistaUpdateManyWithWhereWithoutDeportistaInput[]
    deleteMany?: PagoDeportistaScalarWhereInput | PagoDeportistaScalarWhereInput[]
  }

  export type DeportistaCreateNestedOneWithoutDesercionDeportistaInput = {
    create?: XOR<DeportistaCreateWithoutDesercionDeportistaInput, DeportistaUncheckedCreateWithoutDesercionDeportistaInput>
    connectOrCreate?: DeportistaCreateOrConnectWithoutDesercionDeportistaInput
    connect?: DeportistaWhereUniqueInput
  }

  export type DeportistaUpdateOneRequiredWithoutDesercionDeportistaNestedInput = {
    create?: XOR<DeportistaCreateWithoutDesercionDeportistaInput, DeportistaUncheckedCreateWithoutDesercionDeportistaInput>
    connectOrCreate?: DeportistaCreateOrConnectWithoutDesercionDeportistaInput
    upsert?: DeportistaUpsertWithoutDesercionDeportistaInput
    connect?: DeportistaWhereUniqueInput
    update?: XOR<XOR<DeportistaUpdateToOneWithWhereWithoutDesercionDeportistaInput, DeportistaUpdateWithoutDesercionDeportistaInput>, DeportistaUncheckedUpdateWithoutDesercionDeportistaInput>
  }

  export type DeportistaCreateNestedOneWithoutPagosDeportistaInput = {
    create?: XOR<DeportistaCreateWithoutPagosDeportistaInput, DeportistaUncheckedCreateWithoutPagosDeportistaInput>
    connectOrCreate?: DeportistaCreateOrConnectWithoutPagosDeportistaInput
    connect?: DeportistaWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DeportistaUpdateOneWithoutPagosDeportistaNestedInput = {
    create?: XOR<DeportistaCreateWithoutPagosDeportistaInput, DeportistaUncheckedCreateWithoutPagosDeportistaInput>
    connectOrCreate?: DeportistaCreateOrConnectWithoutPagosDeportistaInput
    upsert?: DeportistaUpsertWithoutPagosDeportistaInput
    disconnect?: DeportistaWhereInput | boolean
    delete?: DeportistaWhereInput | boolean
    connect?: DeportistaWhereUniqueInput
    update?: XOR<XOR<DeportistaUpdateToOneWithWhereWithoutPagosDeportistaInput, DeportistaUpdateWithoutPagosDeportistaInput>, DeportistaUncheckedUpdateWithoutPagosDeportistaInput>
  }

  export type PersonaClubCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<PersonaClubCreateWithoutUsuarioInput, PersonaClubUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: PersonaClubCreateOrConnectWithoutUsuarioInput
    connect?: PersonaClubWhereUniqueInput
  }

  export type PersonaClubUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<PersonaClubCreateWithoutUsuarioInput, PersonaClubUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: PersonaClubCreateOrConnectWithoutUsuarioInput
    upsert?: PersonaClubUpsertWithoutUsuarioInput
    disconnect?: PersonaClubWhereInput | boolean
    delete?: PersonaClubWhereInput | boolean
    connect?: PersonaClubWhereUniqueInput
    update?: XOR<XOR<PersonaClubUpdateToOneWithWhereWithoutUsuarioInput, PersonaClubUpdateWithoutUsuarioInput>, PersonaClubUncheckedUpdateWithoutUsuarioInput>
  }

  export type MunicipioCreateNestedOneWithoutDepartamentoInput = {
    create?: XOR<MunicipioCreateWithoutDepartamentoInput, MunicipioUncheckedCreateWithoutDepartamentoInput>
    connectOrCreate?: MunicipioCreateOrConnectWithoutDepartamentoInput
    connect?: MunicipioWhereUniqueInput
  }

  export type MunicipioUncheckedCreateNestedOneWithoutDepartamentoInput = {
    create?: XOR<MunicipioCreateWithoutDepartamentoInput, MunicipioUncheckedCreateWithoutDepartamentoInput>
    connectOrCreate?: MunicipioCreateOrConnectWithoutDepartamentoInput
    connect?: MunicipioWhereUniqueInput
  }

  export type MunicipioUpdateOneWithoutDepartamentoNestedInput = {
    create?: XOR<MunicipioCreateWithoutDepartamentoInput, MunicipioUncheckedCreateWithoutDepartamentoInput>
    connectOrCreate?: MunicipioCreateOrConnectWithoutDepartamentoInput
    upsert?: MunicipioUpsertWithoutDepartamentoInput
    disconnect?: MunicipioWhereInput | boolean
    delete?: MunicipioWhereInput | boolean
    connect?: MunicipioWhereUniqueInput
    update?: XOR<XOR<MunicipioUpdateToOneWithWhereWithoutDepartamentoInput, MunicipioUpdateWithoutDepartamentoInput>, MunicipioUncheckedUpdateWithoutDepartamentoInput>
  }

  export type MunicipioUncheckedUpdateOneWithoutDepartamentoNestedInput = {
    create?: XOR<MunicipioCreateWithoutDepartamentoInput, MunicipioUncheckedCreateWithoutDepartamentoInput>
    connectOrCreate?: MunicipioCreateOrConnectWithoutDepartamentoInput
    upsert?: MunicipioUpsertWithoutDepartamentoInput
    disconnect?: MunicipioWhereInput | boolean
    delete?: MunicipioWhereInput | boolean
    connect?: MunicipioWhereUniqueInput
    update?: XOR<XOR<MunicipioUpdateToOneWithWhereWithoutDepartamentoInput, MunicipioUpdateWithoutDepartamentoInput>, MunicipioUncheckedUpdateWithoutDepartamentoInput>
  }

  export type PersonaClubCreateNestedManyWithoutMunicipioInput = {
    create?: XOR<PersonaClubCreateWithoutMunicipioInput, PersonaClubUncheckedCreateWithoutMunicipioInput> | PersonaClubCreateWithoutMunicipioInput[] | PersonaClubUncheckedCreateWithoutMunicipioInput[]
    connectOrCreate?: PersonaClubCreateOrConnectWithoutMunicipioInput | PersonaClubCreateOrConnectWithoutMunicipioInput[]
    createMany?: PersonaClubCreateManyMunicipioInputEnvelope
    connect?: PersonaClubWhereUniqueInput | PersonaClubWhereUniqueInput[]
  }

  export type DepartamentoCreateNestedOneWithoutMunicipioInput = {
    create?: XOR<DepartamentoCreateWithoutMunicipioInput, DepartamentoUncheckedCreateWithoutMunicipioInput>
    connectOrCreate?: DepartamentoCreateOrConnectWithoutMunicipioInput
    connect?: DepartamentoWhereUniqueInput
  }

  export type PersonaClubUncheckedCreateNestedManyWithoutMunicipioInput = {
    create?: XOR<PersonaClubCreateWithoutMunicipioInput, PersonaClubUncheckedCreateWithoutMunicipioInput> | PersonaClubCreateWithoutMunicipioInput[] | PersonaClubUncheckedCreateWithoutMunicipioInput[]
    connectOrCreate?: PersonaClubCreateOrConnectWithoutMunicipioInput | PersonaClubCreateOrConnectWithoutMunicipioInput[]
    createMany?: PersonaClubCreateManyMunicipioInputEnvelope
    connect?: PersonaClubWhereUniqueInput | PersonaClubWhereUniqueInput[]
  }

  export type PersonaClubUpdateManyWithoutMunicipioNestedInput = {
    create?: XOR<PersonaClubCreateWithoutMunicipioInput, PersonaClubUncheckedCreateWithoutMunicipioInput> | PersonaClubCreateWithoutMunicipioInput[] | PersonaClubUncheckedCreateWithoutMunicipioInput[]
    connectOrCreate?: PersonaClubCreateOrConnectWithoutMunicipioInput | PersonaClubCreateOrConnectWithoutMunicipioInput[]
    upsert?: PersonaClubUpsertWithWhereUniqueWithoutMunicipioInput | PersonaClubUpsertWithWhereUniqueWithoutMunicipioInput[]
    createMany?: PersonaClubCreateManyMunicipioInputEnvelope
    set?: PersonaClubWhereUniqueInput | PersonaClubWhereUniqueInput[]
    disconnect?: PersonaClubWhereUniqueInput | PersonaClubWhereUniqueInput[]
    delete?: PersonaClubWhereUniqueInput | PersonaClubWhereUniqueInput[]
    connect?: PersonaClubWhereUniqueInput | PersonaClubWhereUniqueInput[]
    update?: PersonaClubUpdateWithWhereUniqueWithoutMunicipioInput | PersonaClubUpdateWithWhereUniqueWithoutMunicipioInput[]
    updateMany?: PersonaClubUpdateManyWithWhereWithoutMunicipioInput | PersonaClubUpdateManyWithWhereWithoutMunicipioInput[]
    deleteMany?: PersonaClubScalarWhereInput | PersonaClubScalarWhereInput[]
  }

  export type DepartamentoUpdateOneRequiredWithoutMunicipioNestedInput = {
    create?: XOR<DepartamentoCreateWithoutMunicipioInput, DepartamentoUncheckedCreateWithoutMunicipioInput>
    connectOrCreate?: DepartamentoCreateOrConnectWithoutMunicipioInput
    upsert?: DepartamentoUpsertWithoutMunicipioInput
    connect?: DepartamentoWhereUniqueInput
    update?: XOR<XOR<DepartamentoUpdateToOneWithWhereWithoutMunicipioInput, DepartamentoUpdateWithoutMunicipioInput>, DepartamentoUncheckedUpdateWithoutMunicipioInput>
  }

  export type PersonaClubUncheckedUpdateManyWithoutMunicipioNestedInput = {
    create?: XOR<PersonaClubCreateWithoutMunicipioInput, PersonaClubUncheckedCreateWithoutMunicipioInput> | PersonaClubCreateWithoutMunicipioInput[] | PersonaClubUncheckedCreateWithoutMunicipioInput[]
    connectOrCreate?: PersonaClubCreateOrConnectWithoutMunicipioInput | PersonaClubCreateOrConnectWithoutMunicipioInput[]
    upsert?: PersonaClubUpsertWithWhereUniqueWithoutMunicipioInput | PersonaClubUpsertWithWhereUniqueWithoutMunicipioInput[]
    createMany?: PersonaClubCreateManyMunicipioInputEnvelope
    set?: PersonaClubWhereUniqueInput | PersonaClubWhereUniqueInput[]
    disconnect?: PersonaClubWhereUniqueInput | PersonaClubWhereUniqueInput[]
    delete?: PersonaClubWhereUniqueInput | PersonaClubWhereUniqueInput[]
    connect?: PersonaClubWhereUniqueInput | PersonaClubWhereUniqueInput[]
    update?: PersonaClubUpdateWithWhereUniqueWithoutMunicipioInput | PersonaClubUpdateWithWhereUniqueWithoutMunicipioInput[]
    updateMany?: PersonaClubUpdateManyWithWhereWithoutMunicipioInput | PersonaClubUpdateManyWithWhereWithoutMunicipioInput[]
    deleteMany?: PersonaClubScalarWhereInput | PersonaClubScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type MunicipioCreateWithoutPersonaClubInput = {
    nombre?: string | null
    estado?: boolean | null
    departamento: DepartamentoCreateNestedOneWithoutMunicipioInput
  }

  export type MunicipioUncheckedCreateWithoutPersonaClubInput = {
    id?: number
    idDepartamento: number
    nombre?: string | null
    estado?: boolean | null
  }

  export type MunicipioCreateOrConnectWithoutPersonaClubInput = {
    where: MunicipioWhereUniqueInput
    create: XOR<MunicipioCreateWithoutPersonaClubInput, MunicipioUncheckedCreateWithoutPersonaClubInput>
  }

  export type EntrenadorCreateWithoutPersonaClubInput = {
    fechaIngreso?: Date | string | null
    activo?: boolean | null
    contactosEmergencia?: ContactosEmergenciaCreateNestedOneWithoutEntrenadorInput
  }

  export type EntrenadorUncheckedCreateWithoutPersonaClubInput = {
    id?: number
    idContactoEmergencia?: number | null
    fechaIngreso?: Date | string | null
    activo?: boolean | null
  }

  export type EntrenadorCreateOrConnectWithoutPersonaClubInput = {
    where: EntrenadorWhereUniqueInput
    create: XOR<EntrenadorCreateWithoutPersonaClubInput, EntrenadorUncheckedCreateWithoutPersonaClubInput>
  }

  export type DeportistaCreateWithoutPersonaClubInput = {
    categoria: string
    activo?: boolean | null
    tutor?: TutorCreateNestedOneWithoutDeportistaInput
    desercionDeportista?: DesercionDeportistaCreateNestedOneWithoutDeportistaInput
    pagosDeportista?: PagoDeportistaCreateNestedManyWithoutDeportistaInput
  }

  export type DeportistaUncheckedCreateWithoutPersonaClubInput = {
    id?: number
    idTutor?: number | null
    categoria: string
    activo?: boolean | null
    desercionDeportista?: DesercionDeportistaUncheckedCreateNestedOneWithoutDeportistaInput
    pagosDeportista?: PagoDeportistaUncheckedCreateNestedManyWithoutDeportistaInput
  }

  export type DeportistaCreateOrConnectWithoutPersonaClubInput = {
    where: DeportistaWhereUniqueInput
    create: XOR<DeportistaCreateWithoutPersonaClubInput, DeportistaUncheckedCreateWithoutPersonaClubInput>
  }

  export type UsuarioCreateWithoutPersonaInput = {
    usuario?: string | null
    contrasenia?: string | null
    activo?: boolean | null
  }

  export type UsuarioUncheckedCreateWithoutPersonaInput = {
    id?: number
    usuario?: string | null
    contrasenia?: string | null
    activo?: boolean | null
  }

  export type UsuarioCreateOrConnectWithoutPersonaInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPersonaInput, UsuarioUncheckedCreateWithoutPersonaInput>
  }

  export type MunicipioUpsertWithoutPersonaClubInput = {
    update: XOR<MunicipioUpdateWithoutPersonaClubInput, MunicipioUncheckedUpdateWithoutPersonaClubInput>
    create: XOR<MunicipioCreateWithoutPersonaClubInput, MunicipioUncheckedCreateWithoutPersonaClubInput>
    where?: MunicipioWhereInput
  }

  export type MunicipioUpdateToOneWithWhereWithoutPersonaClubInput = {
    where?: MunicipioWhereInput
    data: XOR<MunicipioUpdateWithoutPersonaClubInput, MunicipioUncheckedUpdateWithoutPersonaClubInput>
  }

  export type MunicipioUpdateWithoutPersonaClubInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    departamento?: DepartamentoUpdateOneRequiredWithoutMunicipioNestedInput
  }

  export type MunicipioUncheckedUpdateWithoutPersonaClubInput = {
    id?: IntFieldUpdateOperationsInput | number
    idDepartamento?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type EntrenadorUpsertWithoutPersonaClubInput = {
    update: XOR<EntrenadorUpdateWithoutPersonaClubInput, EntrenadorUncheckedUpdateWithoutPersonaClubInput>
    create: XOR<EntrenadorCreateWithoutPersonaClubInput, EntrenadorUncheckedCreateWithoutPersonaClubInput>
    where?: EntrenadorWhereInput
  }

  export type EntrenadorUpdateToOneWithWhereWithoutPersonaClubInput = {
    where?: EntrenadorWhereInput
    data: XOR<EntrenadorUpdateWithoutPersonaClubInput, EntrenadorUncheckedUpdateWithoutPersonaClubInput>
  }

  export type EntrenadorUpdateWithoutPersonaClubInput = {
    fechaIngreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contactosEmergencia?: ContactosEmergenciaUpdateOneWithoutEntrenadorNestedInput
  }

  export type EntrenadorUncheckedUpdateWithoutPersonaClubInput = {
    id?: IntFieldUpdateOperationsInput | number
    idContactoEmergencia?: NullableIntFieldUpdateOperationsInput | number | null
    fechaIngreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type DeportistaUpsertWithoutPersonaClubInput = {
    update: XOR<DeportistaUpdateWithoutPersonaClubInput, DeportistaUncheckedUpdateWithoutPersonaClubInput>
    create: XOR<DeportistaCreateWithoutPersonaClubInput, DeportistaUncheckedCreateWithoutPersonaClubInput>
    where?: DeportistaWhereInput
  }

  export type DeportistaUpdateToOneWithWhereWithoutPersonaClubInput = {
    where?: DeportistaWhereInput
    data: XOR<DeportistaUpdateWithoutPersonaClubInput, DeportistaUncheckedUpdateWithoutPersonaClubInput>
  }

  export type DeportistaUpdateWithoutPersonaClubInput = {
    categoria?: StringFieldUpdateOperationsInput | string
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tutor?: TutorUpdateOneWithoutDeportistaNestedInput
    desercionDeportista?: DesercionDeportistaUpdateOneWithoutDeportistaNestedInput
    pagosDeportista?: PagoDeportistaUpdateManyWithoutDeportistaNestedInput
  }

  export type DeportistaUncheckedUpdateWithoutPersonaClubInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTutor?: NullableIntFieldUpdateOperationsInput | number | null
    categoria?: StringFieldUpdateOperationsInput | string
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    desercionDeportista?: DesercionDeportistaUncheckedUpdateOneWithoutDeportistaNestedInput
    pagosDeportista?: PagoDeportistaUncheckedUpdateManyWithoutDeportistaNestedInput
  }

  export type UsuarioUpsertWithoutPersonaInput = {
    update: XOR<UsuarioUpdateWithoutPersonaInput, UsuarioUncheckedUpdateWithoutPersonaInput>
    create: XOR<UsuarioCreateWithoutPersonaInput, UsuarioUncheckedCreateWithoutPersonaInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPersonaInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPersonaInput, UsuarioUncheckedUpdateWithoutPersonaInput>
  }

  export type UsuarioUpdateWithoutPersonaInput = {
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contrasenia?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type UsuarioUncheckedUpdateWithoutPersonaInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contrasenia?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type EntrenadorCreateWithoutContactosEmergenciaInput = {
    fechaIngreso?: Date | string | null
    activo?: boolean | null
    personaClub: PersonaClubCreateNestedOneWithoutEntrenadorInput
  }

  export type EntrenadorUncheckedCreateWithoutContactosEmergenciaInput = {
    id?: number
    idPersonaClub: number
    fechaIngreso?: Date | string | null
    activo?: boolean | null
  }

  export type EntrenadorCreateOrConnectWithoutContactosEmergenciaInput = {
    where: EntrenadorWhereUniqueInput
    create: XOR<EntrenadorCreateWithoutContactosEmergenciaInput, EntrenadorUncheckedCreateWithoutContactosEmergenciaInput>
  }

  export type EntrenadorUpsertWithoutContactosEmergenciaInput = {
    update: XOR<EntrenadorUpdateWithoutContactosEmergenciaInput, EntrenadorUncheckedUpdateWithoutContactosEmergenciaInput>
    create: XOR<EntrenadorCreateWithoutContactosEmergenciaInput, EntrenadorUncheckedCreateWithoutContactosEmergenciaInput>
    where?: EntrenadorWhereInput
  }

  export type EntrenadorUpdateToOneWithWhereWithoutContactosEmergenciaInput = {
    where?: EntrenadorWhereInput
    data: XOR<EntrenadorUpdateWithoutContactosEmergenciaInput, EntrenadorUncheckedUpdateWithoutContactosEmergenciaInput>
  }

  export type EntrenadorUpdateWithoutContactosEmergenciaInput = {
    fechaIngreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    personaClub?: PersonaClubUpdateOneRequiredWithoutEntrenadorNestedInput
  }

  export type EntrenadorUncheckedUpdateWithoutContactosEmergenciaInput = {
    id?: IntFieldUpdateOperationsInput | number
    idPersonaClub?: IntFieldUpdateOperationsInput | number
    fechaIngreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ContactosEmergenciaCreateWithoutEntrenadorInput = {
    tipoDocumento: string
    numeroDocumento?: string | null
    nombres?: string | null
    apellidos?: string | null
    correo?: string | null
    telefono?: string | null
  }

  export type ContactosEmergenciaUncheckedCreateWithoutEntrenadorInput = {
    id?: number
    tipoDocumento: string
    numeroDocumento?: string | null
    nombres?: string | null
    apellidos?: string | null
    correo?: string | null
    telefono?: string | null
  }

  export type ContactosEmergenciaCreateOrConnectWithoutEntrenadorInput = {
    where: ContactosEmergenciaWhereUniqueInput
    create: XOR<ContactosEmergenciaCreateWithoutEntrenadorInput, ContactosEmergenciaUncheckedCreateWithoutEntrenadorInput>
  }

  export type PersonaClubCreateWithoutEntrenadorInput = {
    numeroDocumento: string
    tipoDocumento: string
    nombres: string
    apellidos: string
    fechaNacimento?: Date | string | null
    tipoRh?: string | null
    peso?: number | null
    altura?: number | null
    correo: string
    numeroTelefono: string
    tallaCamisa?: string | null
    tallaCalzado?: string | null
    tallaPantaloneta?: string | null
    genero?: string | null
    direccion?: string | null
    municipio: MunicipioCreateNestedOneWithoutPersonaClubInput
    deportista?: DeportistaCreateNestedOneWithoutPersonaClubInput
    usuario?: UsuarioCreateNestedOneWithoutPersonaInput
  }

  export type PersonaClubUncheckedCreateWithoutEntrenadorInput = {
    id?: number
    numeroDocumento: string
    tipoDocumento: string
    idMunicipio: number
    nombres: string
    apellidos: string
    fechaNacimento?: Date | string | null
    tipoRh?: string | null
    peso?: number | null
    altura?: number | null
    correo: string
    numeroTelefono: string
    tallaCamisa?: string | null
    tallaCalzado?: string | null
    tallaPantaloneta?: string | null
    genero?: string | null
    direccion?: string | null
    deportista?: DeportistaUncheckedCreateNestedOneWithoutPersonaClubInput
    usuario?: UsuarioUncheckedCreateNestedOneWithoutPersonaInput
  }

  export type PersonaClubCreateOrConnectWithoutEntrenadorInput = {
    where: PersonaClubWhereUniqueInput
    create: XOR<PersonaClubCreateWithoutEntrenadorInput, PersonaClubUncheckedCreateWithoutEntrenadorInput>
  }

  export type ContactosEmergenciaUpsertWithoutEntrenadorInput = {
    update: XOR<ContactosEmergenciaUpdateWithoutEntrenadorInput, ContactosEmergenciaUncheckedUpdateWithoutEntrenadorInput>
    create: XOR<ContactosEmergenciaCreateWithoutEntrenadorInput, ContactosEmergenciaUncheckedCreateWithoutEntrenadorInput>
    where?: ContactosEmergenciaWhereInput
  }

  export type ContactosEmergenciaUpdateToOneWithWhereWithoutEntrenadorInput = {
    where?: ContactosEmergenciaWhereInput
    data: XOR<ContactosEmergenciaUpdateWithoutEntrenadorInput, ContactosEmergenciaUncheckedUpdateWithoutEntrenadorInput>
  }

  export type ContactosEmergenciaUpdateWithoutEntrenadorInput = {
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    numeroDocumento?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactosEmergenciaUncheckedUpdateWithoutEntrenadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    numeroDocumento?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PersonaClubUpsertWithoutEntrenadorInput = {
    update: XOR<PersonaClubUpdateWithoutEntrenadorInput, PersonaClubUncheckedUpdateWithoutEntrenadorInput>
    create: XOR<PersonaClubCreateWithoutEntrenadorInput, PersonaClubUncheckedCreateWithoutEntrenadorInput>
    where?: PersonaClubWhereInput
  }

  export type PersonaClubUpdateToOneWithWhereWithoutEntrenadorInput = {
    where?: PersonaClubWhereInput
    data: XOR<PersonaClubUpdateWithoutEntrenadorInput, PersonaClubUncheckedUpdateWithoutEntrenadorInput>
  }

  export type PersonaClubUpdateWithoutEntrenadorInput = {
    numeroDocumento?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    fechaNacimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoRh?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    correo?: StringFieldUpdateOperationsInput | string
    numeroTelefono?: StringFieldUpdateOperationsInput | string
    tallaCamisa?: NullableStringFieldUpdateOperationsInput | string | null
    tallaCalzado?: NullableStringFieldUpdateOperationsInput | string | null
    tallaPantaloneta?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    municipio?: MunicipioUpdateOneRequiredWithoutPersonaClubNestedInput
    deportista?: DeportistaUpdateOneWithoutPersonaClubNestedInput
    usuario?: UsuarioUpdateOneWithoutPersonaNestedInput
  }

  export type PersonaClubUncheckedUpdateWithoutEntrenadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroDocumento?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    idMunicipio?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    fechaNacimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoRh?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    correo?: StringFieldUpdateOperationsInput | string
    numeroTelefono?: StringFieldUpdateOperationsInput | string
    tallaCamisa?: NullableStringFieldUpdateOperationsInput | string | null
    tallaCalzado?: NullableStringFieldUpdateOperationsInput | string | null
    tallaPantaloneta?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    deportista?: DeportistaUncheckedUpdateOneWithoutPersonaClubNestedInput
    usuario?: UsuarioUncheckedUpdateOneWithoutPersonaNestedInput
  }

  export type DeportistaCreateWithoutTutorInput = {
    categoria: string
    activo?: boolean | null
    personaClub: PersonaClubCreateNestedOneWithoutDeportistaInput
    desercionDeportista?: DesercionDeportistaCreateNestedOneWithoutDeportistaInput
    pagosDeportista?: PagoDeportistaCreateNestedManyWithoutDeportistaInput
  }

  export type DeportistaUncheckedCreateWithoutTutorInput = {
    id?: number
    idPersonaClub: number
    categoria: string
    activo?: boolean | null
    desercionDeportista?: DesercionDeportistaUncheckedCreateNestedOneWithoutDeportistaInput
    pagosDeportista?: PagoDeportistaUncheckedCreateNestedManyWithoutDeportistaInput
  }

  export type DeportistaCreateOrConnectWithoutTutorInput = {
    where: DeportistaWhereUniqueInput
    create: XOR<DeportistaCreateWithoutTutorInput, DeportistaUncheckedCreateWithoutTutorInput>
  }

  export type DeportistaUpsertWithoutTutorInput = {
    update: XOR<DeportistaUpdateWithoutTutorInput, DeportistaUncheckedUpdateWithoutTutorInput>
    create: XOR<DeportistaCreateWithoutTutorInput, DeportistaUncheckedCreateWithoutTutorInput>
    where?: DeportistaWhereInput
  }

  export type DeportistaUpdateToOneWithWhereWithoutTutorInput = {
    where?: DeportistaWhereInput
    data: XOR<DeportistaUpdateWithoutTutorInput, DeportistaUncheckedUpdateWithoutTutorInput>
  }

  export type DeportistaUpdateWithoutTutorInput = {
    categoria?: StringFieldUpdateOperationsInput | string
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    personaClub?: PersonaClubUpdateOneRequiredWithoutDeportistaNestedInput
    desercionDeportista?: DesercionDeportistaUpdateOneWithoutDeportistaNestedInput
    pagosDeportista?: PagoDeportistaUpdateManyWithoutDeportistaNestedInput
  }

  export type DeportistaUncheckedUpdateWithoutTutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    idPersonaClub?: IntFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    desercionDeportista?: DesercionDeportistaUncheckedUpdateOneWithoutDeportistaNestedInput
    pagosDeportista?: PagoDeportistaUncheckedUpdateManyWithoutDeportistaNestedInput
  }

  export type TutorCreateWithoutDeportistaInput = {
    tipoDocumento: string
    numeroDocumento?: string | null
    nombres?: string | null
    apellidos?: string | null
    correo?: string | null
    telefono?: string | null
  }

  export type TutorUncheckedCreateWithoutDeportistaInput = {
    id?: number
    tipoDocumento: string
    numeroDocumento?: string | null
    nombres?: string | null
    apellidos?: string | null
    correo?: string | null
    telefono?: string | null
  }

  export type TutorCreateOrConnectWithoutDeportistaInput = {
    where: TutorWhereUniqueInput
    create: XOR<TutorCreateWithoutDeportistaInput, TutorUncheckedCreateWithoutDeportistaInput>
  }

  export type PersonaClubCreateWithoutDeportistaInput = {
    numeroDocumento: string
    tipoDocumento: string
    nombres: string
    apellidos: string
    fechaNacimento?: Date | string | null
    tipoRh?: string | null
    peso?: number | null
    altura?: number | null
    correo: string
    numeroTelefono: string
    tallaCamisa?: string | null
    tallaCalzado?: string | null
    tallaPantaloneta?: string | null
    genero?: string | null
    direccion?: string | null
    municipio: MunicipioCreateNestedOneWithoutPersonaClubInput
    entrenador?: EntrenadorCreateNestedOneWithoutPersonaClubInput
    usuario?: UsuarioCreateNestedOneWithoutPersonaInput
  }

  export type PersonaClubUncheckedCreateWithoutDeportistaInput = {
    id?: number
    numeroDocumento: string
    tipoDocumento: string
    idMunicipio: number
    nombres: string
    apellidos: string
    fechaNacimento?: Date | string | null
    tipoRh?: string | null
    peso?: number | null
    altura?: number | null
    correo: string
    numeroTelefono: string
    tallaCamisa?: string | null
    tallaCalzado?: string | null
    tallaPantaloneta?: string | null
    genero?: string | null
    direccion?: string | null
    entrenador?: EntrenadorUncheckedCreateNestedOneWithoutPersonaClubInput
    usuario?: UsuarioUncheckedCreateNestedOneWithoutPersonaInput
  }

  export type PersonaClubCreateOrConnectWithoutDeportistaInput = {
    where: PersonaClubWhereUniqueInput
    create: XOR<PersonaClubCreateWithoutDeportistaInput, PersonaClubUncheckedCreateWithoutDeportistaInput>
  }

  export type DesercionDeportistaCreateWithoutDeportistaInput = {
    fechaDesercion?: Date | string | null
    razon?: string | null
    descripcion?: string | null
  }

  export type DesercionDeportistaUncheckedCreateWithoutDeportistaInput = {
    id?: number
    fechaDesercion?: Date | string | null
    razon?: string | null
    descripcion?: string | null
  }

  export type DesercionDeportistaCreateOrConnectWithoutDeportistaInput = {
    where: DesercionDeportistaWhereUniqueInput
    create: XOR<DesercionDeportistaCreateWithoutDeportistaInput, DesercionDeportistaUncheckedCreateWithoutDeportistaInput>
  }

  export type PagoDeportistaCreateWithoutDeportistaInput = {
    fechaPago?: Date | string | null
    valor?: Decimal | DecimalJsLike | number | string | null
    tipoPago?: string | null
  }

  export type PagoDeportistaUncheckedCreateWithoutDeportistaInput = {
    id?: number
    fechaPago?: Date | string | null
    valor?: Decimal | DecimalJsLike | number | string | null
    tipoPago?: string | null
  }

  export type PagoDeportistaCreateOrConnectWithoutDeportistaInput = {
    where: PagoDeportistaWhereUniqueInput
    create: XOR<PagoDeportistaCreateWithoutDeportistaInput, PagoDeportistaUncheckedCreateWithoutDeportistaInput>
  }

  export type PagoDeportistaCreateManyDeportistaInputEnvelope = {
    data: PagoDeportistaCreateManyDeportistaInput | PagoDeportistaCreateManyDeportistaInput[]
    skipDuplicates?: boolean
  }

  export type TutorUpsertWithoutDeportistaInput = {
    update: XOR<TutorUpdateWithoutDeportistaInput, TutorUncheckedUpdateWithoutDeportistaInput>
    create: XOR<TutorCreateWithoutDeportistaInput, TutorUncheckedCreateWithoutDeportistaInput>
    where?: TutorWhereInput
  }

  export type TutorUpdateToOneWithWhereWithoutDeportistaInput = {
    where?: TutorWhereInput
    data: XOR<TutorUpdateWithoutDeportistaInput, TutorUncheckedUpdateWithoutDeportistaInput>
  }

  export type TutorUpdateWithoutDeportistaInput = {
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    numeroDocumento?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TutorUncheckedUpdateWithoutDeportistaInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    numeroDocumento?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PersonaClubUpsertWithoutDeportistaInput = {
    update: XOR<PersonaClubUpdateWithoutDeportistaInput, PersonaClubUncheckedUpdateWithoutDeportistaInput>
    create: XOR<PersonaClubCreateWithoutDeportistaInput, PersonaClubUncheckedCreateWithoutDeportistaInput>
    where?: PersonaClubWhereInput
  }

  export type PersonaClubUpdateToOneWithWhereWithoutDeportistaInput = {
    where?: PersonaClubWhereInput
    data: XOR<PersonaClubUpdateWithoutDeportistaInput, PersonaClubUncheckedUpdateWithoutDeportistaInput>
  }

  export type PersonaClubUpdateWithoutDeportistaInput = {
    numeroDocumento?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    fechaNacimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoRh?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    correo?: StringFieldUpdateOperationsInput | string
    numeroTelefono?: StringFieldUpdateOperationsInput | string
    tallaCamisa?: NullableStringFieldUpdateOperationsInput | string | null
    tallaCalzado?: NullableStringFieldUpdateOperationsInput | string | null
    tallaPantaloneta?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    municipio?: MunicipioUpdateOneRequiredWithoutPersonaClubNestedInput
    entrenador?: EntrenadorUpdateOneWithoutPersonaClubNestedInput
    usuario?: UsuarioUpdateOneWithoutPersonaNestedInput
  }

  export type PersonaClubUncheckedUpdateWithoutDeportistaInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroDocumento?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    idMunicipio?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    fechaNacimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoRh?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    correo?: StringFieldUpdateOperationsInput | string
    numeroTelefono?: StringFieldUpdateOperationsInput | string
    tallaCamisa?: NullableStringFieldUpdateOperationsInput | string | null
    tallaCalzado?: NullableStringFieldUpdateOperationsInput | string | null
    tallaPantaloneta?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    entrenador?: EntrenadorUncheckedUpdateOneWithoutPersonaClubNestedInput
    usuario?: UsuarioUncheckedUpdateOneWithoutPersonaNestedInput
  }

  export type DesercionDeportistaUpsertWithoutDeportistaInput = {
    update: XOR<DesercionDeportistaUpdateWithoutDeportistaInput, DesercionDeportistaUncheckedUpdateWithoutDeportistaInput>
    create: XOR<DesercionDeportistaCreateWithoutDeportistaInput, DesercionDeportistaUncheckedCreateWithoutDeportistaInput>
    where?: DesercionDeportistaWhereInput
  }

  export type DesercionDeportistaUpdateToOneWithWhereWithoutDeportistaInput = {
    where?: DesercionDeportistaWhereInput
    data: XOR<DesercionDeportistaUpdateWithoutDeportistaInput, DesercionDeportistaUncheckedUpdateWithoutDeportistaInput>
  }

  export type DesercionDeportistaUpdateWithoutDeportistaInput = {
    fechaDesercion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razon?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DesercionDeportistaUncheckedUpdateWithoutDeportistaInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaDesercion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razon?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PagoDeportistaUpsertWithWhereUniqueWithoutDeportistaInput = {
    where: PagoDeportistaWhereUniqueInput
    update: XOR<PagoDeportistaUpdateWithoutDeportistaInput, PagoDeportistaUncheckedUpdateWithoutDeportistaInput>
    create: XOR<PagoDeportistaCreateWithoutDeportistaInput, PagoDeportistaUncheckedCreateWithoutDeportistaInput>
  }

  export type PagoDeportistaUpdateWithWhereUniqueWithoutDeportistaInput = {
    where: PagoDeportistaWhereUniqueInput
    data: XOR<PagoDeportistaUpdateWithoutDeportistaInput, PagoDeportistaUncheckedUpdateWithoutDeportistaInput>
  }

  export type PagoDeportistaUpdateManyWithWhereWithoutDeportistaInput = {
    where: PagoDeportistaScalarWhereInput
    data: XOR<PagoDeportistaUpdateManyMutationInput, PagoDeportistaUncheckedUpdateManyWithoutDeportistaInput>
  }

  export type PagoDeportistaScalarWhereInput = {
    AND?: PagoDeportistaScalarWhereInput | PagoDeportistaScalarWhereInput[]
    OR?: PagoDeportistaScalarWhereInput[]
    NOT?: PagoDeportistaScalarWhereInput | PagoDeportistaScalarWhereInput[]
    id?: IntFilter<"PagoDeportista"> | number
    idDeportista?: IntFilter<"PagoDeportista"> | number
    fechaPago?: DateTimeNullableFilter<"PagoDeportista"> | Date | string | null
    valor?: DecimalNullableFilter<"PagoDeportista"> | Decimal | DecimalJsLike | number | string | null
    tipoPago?: StringNullableFilter<"PagoDeportista"> | string | null
  }

  export type DeportistaCreateWithoutDesercionDeportistaInput = {
    categoria: string
    activo?: boolean | null
    tutor?: TutorCreateNestedOneWithoutDeportistaInput
    personaClub: PersonaClubCreateNestedOneWithoutDeportistaInput
    pagosDeportista?: PagoDeportistaCreateNestedManyWithoutDeportistaInput
  }

  export type DeportistaUncheckedCreateWithoutDesercionDeportistaInput = {
    id?: number
    idTutor?: number | null
    idPersonaClub: number
    categoria: string
    activo?: boolean | null
    pagosDeportista?: PagoDeportistaUncheckedCreateNestedManyWithoutDeportistaInput
  }

  export type DeportistaCreateOrConnectWithoutDesercionDeportistaInput = {
    where: DeportistaWhereUniqueInput
    create: XOR<DeportistaCreateWithoutDesercionDeportistaInput, DeportistaUncheckedCreateWithoutDesercionDeportistaInput>
  }

  export type DeportistaUpsertWithoutDesercionDeportistaInput = {
    update: XOR<DeportistaUpdateWithoutDesercionDeportistaInput, DeportistaUncheckedUpdateWithoutDesercionDeportistaInput>
    create: XOR<DeportistaCreateWithoutDesercionDeportistaInput, DeportistaUncheckedCreateWithoutDesercionDeportistaInput>
    where?: DeportistaWhereInput
  }

  export type DeportistaUpdateToOneWithWhereWithoutDesercionDeportistaInput = {
    where?: DeportistaWhereInput
    data: XOR<DeportistaUpdateWithoutDesercionDeportistaInput, DeportistaUncheckedUpdateWithoutDesercionDeportistaInput>
  }

  export type DeportistaUpdateWithoutDesercionDeportistaInput = {
    categoria?: StringFieldUpdateOperationsInput | string
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tutor?: TutorUpdateOneWithoutDeportistaNestedInput
    personaClub?: PersonaClubUpdateOneRequiredWithoutDeportistaNestedInput
    pagosDeportista?: PagoDeportistaUpdateManyWithoutDeportistaNestedInput
  }

  export type DeportistaUncheckedUpdateWithoutDesercionDeportistaInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTutor?: NullableIntFieldUpdateOperationsInput | number | null
    idPersonaClub?: IntFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pagosDeportista?: PagoDeportistaUncheckedUpdateManyWithoutDeportistaNestedInput
  }

  export type DeportistaCreateWithoutPagosDeportistaInput = {
    categoria: string
    activo?: boolean | null
    tutor?: TutorCreateNestedOneWithoutDeportistaInput
    personaClub: PersonaClubCreateNestedOneWithoutDeportistaInput
    desercionDeportista?: DesercionDeportistaCreateNestedOneWithoutDeportistaInput
  }

  export type DeportistaUncheckedCreateWithoutPagosDeportistaInput = {
    id?: number
    idTutor?: number | null
    idPersonaClub: number
    categoria: string
    activo?: boolean | null
    desercionDeportista?: DesercionDeportistaUncheckedCreateNestedOneWithoutDeportistaInput
  }

  export type DeportistaCreateOrConnectWithoutPagosDeportistaInput = {
    where: DeportistaWhereUniqueInput
    create: XOR<DeportistaCreateWithoutPagosDeportistaInput, DeportistaUncheckedCreateWithoutPagosDeportistaInput>
  }

  export type DeportistaUpsertWithoutPagosDeportistaInput = {
    update: XOR<DeportistaUpdateWithoutPagosDeportistaInput, DeportistaUncheckedUpdateWithoutPagosDeportistaInput>
    create: XOR<DeportistaCreateWithoutPagosDeportistaInput, DeportistaUncheckedCreateWithoutPagosDeportistaInput>
    where?: DeportistaWhereInput
  }

  export type DeportistaUpdateToOneWithWhereWithoutPagosDeportistaInput = {
    where?: DeportistaWhereInput
    data: XOR<DeportistaUpdateWithoutPagosDeportistaInput, DeportistaUncheckedUpdateWithoutPagosDeportistaInput>
  }

  export type DeportistaUpdateWithoutPagosDeportistaInput = {
    categoria?: StringFieldUpdateOperationsInput | string
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tutor?: TutorUpdateOneWithoutDeportistaNestedInput
    personaClub?: PersonaClubUpdateOneRequiredWithoutDeportistaNestedInput
    desercionDeportista?: DesercionDeportistaUpdateOneWithoutDeportistaNestedInput
  }

  export type DeportistaUncheckedUpdateWithoutPagosDeportistaInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTutor?: NullableIntFieldUpdateOperationsInput | number | null
    idPersonaClub?: IntFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    desercionDeportista?: DesercionDeportistaUncheckedUpdateOneWithoutDeportistaNestedInput
  }

  export type PersonaClubCreateWithoutUsuarioInput = {
    numeroDocumento: string
    tipoDocumento: string
    nombres: string
    apellidos: string
    fechaNacimento?: Date | string | null
    tipoRh?: string | null
    peso?: number | null
    altura?: number | null
    correo: string
    numeroTelefono: string
    tallaCamisa?: string | null
    tallaCalzado?: string | null
    tallaPantaloneta?: string | null
    genero?: string | null
    direccion?: string | null
    municipio: MunicipioCreateNestedOneWithoutPersonaClubInput
    entrenador?: EntrenadorCreateNestedOneWithoutPersonaClubInput
    deportista?: DeportistaCreateNestedOneWithoutPersonaClubInput
  }

  export type PersonaClubUncheckedCreateWithoutUsuarioInput = {
    id?: number
    numeroDocumento: string
    tipoDocumento: string
    idMunicipio: number
    nombres: string
    apellidos: string
    fechaNacimento?: Date | string | null
    tipoRh?: string | null
    peso?: number | null
    altura?: number | null
    correo: string
    numeroTelefono: string
    tallaCamisa?: string | null
    tallaCalzado?: string | null
    tallaPantaloneta?: string | null
    genero?: string | null
    direccion?: string | null
    entrenador?: EntrenadorUncheckedCreateNestedOneWithoutPersonaClubInput
    deportista?: DeportistaUncheckedCreateNestedOneWithoutPersonaClubInput
  }

  export type PersonaClubCreateOrConnectWithoutUsuarioInput = {
    where: PersonaClubWhereUniqueInput
    create: XOR<PersonaClubCreateWithoutUsuarioInput, PersonaClubUncheckedCreateWithoutUsuarioInput>
  }

  export type PersonaClubUpsertWithoutUsuarioInput = {
    update: XOR<PersonaClubUpdateWithoutUsuarioInput, PersonaClubUncheckedUpdateWithoutUsuarioInput>
    create: XOR<PersonaClubCreateWithoutUsuarioInput, PersonaClubUncheckedCreateWithoutUsuarioInput>
    where?: PersonaClubWhereInput
  }

  export type PersonaClubUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: PersonaClubWhereInput
    data: XOR<PersonaClubUpdateWithoutUsuarioInput, PersonaClubUncheckedUpdateWithoutUsuarioInput>
  }

  export type PersonaClubUpdateWithoutUsuarioInput = {
    numeroDocumento?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    fechaNacimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoRh?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    correo?: StringFieldUpdateOperationsInput | string
    numeroTelefono?: StringFieldUpdateOperationsInput | string
    tallaCamisa?: NullableStringFieldUpdateOperationsInput | string | null
    tallaCalzado?: NullableStringFieldUpdateOperationsInput | string | null
    tallaPantaloneta?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    municipio?: MunicipioUpdateOneRequiredWithoutPersonaClubNestedInput
    entrenador?: EntrenadorUpdateOneWithoutPersonaClubNestedInput
    deportista?: DeportistaUpdateOneWithoutPersonaClubNestedInput
  }

  export type PersonaClubUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroDocumento?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    idMunicipio?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    fechaNacimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoRh?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    correo?: StringFieldUpdateOperationsInput | string
    numeroTelefono?: StringFieldUpdateOperationsInput | string
    tallaCamisa?: NullableStringFieldUpdateOperationsInput | string | null
    tallaCalzado?: NullableStringFieldUpdateOperationsInput | string | null
    tallaPantaloneta?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    entrenador?: EntrenadorUncheckedUpdateOneWithoutPersonaClubNestedInput
    deportista?: DeportistaUncheckedUpdateOneWithoutPersonaClubNestedInput
  }

  export type MunicipioCreateWithoutDepartamentoInput = {
    nombre?: string | null
    estado?: boolean | null
    personaClub?: PersonaClubCreateNestedManyWithoutMunicipioInput
  }

  export type MunicipioUncheckedCreateWithoutDepartamentoInput = {
    id?: number
    nombre?: string | null
    estado?: boolean | null
    personaClub?: PersonaClubUncheckedCreateNestedManyWithoutMunicipioInput
  }

  export type MunicipioCreateOrConnectWithoutDepartamentoInput = {
    where: MunicipioWhereUniqueInput
    create: XOR<MunicipioCreateWithoutDepartamentoInput, MunicipioUncheckedCreateWithoutDepartamentoInput>
  }

  export type MunicipioUpsertWithoutDepartamentoInput = {
    update: XOR<MunicipioUpdateWithoutDepartamentoInput, MunicipioUncheckedUpdateWithoutDepartamentoInput>
    create: XOR<MunicipioCreateWithoutDepartamentoInput, MunicipioUncheckedCreateWithoutDepartamentoInput>
    where?: MunicipioWhereInput
  }

  export type MunicipioUpdateToOneWithWhereWithoutDepartamentoInput = {
    where?: MunicipioWhereInput
    data: XOR<MunicipioUpdateWithoutDepartamentoInput, MunicipioUncheckedUpdateWithoutDepartamentoInput>
  }

  export type MunicipioUpdateWithoutDepartamentoInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    personaClub?: PersonaClubUpdateManyWithoutMunicipioNestedInput
  }

  export type MunicipioUncheckedUpdateWithoutDepartamentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    personaClub?: PersonaClubUncheckedUpdateManyWithoutMunicipioNestedInput
  }

  export type PersonaClubCreateWithoutMunicipioInput = {
    numeroDocumento: string
    tipoDocumento: string
    nombres: string
    apellidos: string
    fechaNacimento?: Date | string | null
    tipoRh?: string | null
    peso?: number | null
    altura?: number | null
    correo: string
    numeroTelefono: string
    tallaCamisa?: string | null
    tallaCalzado?: string | null
    tallaPantaloneta?: string | null
    genero?: string | null
    direccion?: string | null
    entrenador?: EntrenadorCreateNestedOneWithoutPersonaClubInput
    deportista?: DeportistaCreateNestedOneWithoutPersonaClubInput
    usuario?: UsuarioCreateNestedOneWithoutPersonaInput
  }

  export type PersonaClubUncheckedCreateWithoutMunicipioInput = {
    id?: number
    numeroDocumento: string
    tipoDocumento: string
    nombres: string
    apellidos: string
    fechaNacimento?: Date | string | null
    tipoRh?: string | null
    peso?: number | null
    altura?: number | null
    correo: string
    numeroTelefono: string
    tallaCamisa?: string | null
    tallaCalzado?: string | null
    tallaPantaloneta?: string | null
    genero?: string | null
    direccion?: string | null
    entrenador?: EntrenadorUncheckedCreateNestedOneWithoutPersonaClubInput
    deportista?: DeportistaUncheckedCreateNestedOneWithoutPersonaClubInput
    usuario?: UsuarioUncheckedCreateNestedOneWithoutPersonaInput
  }

  export type PersonaClubCreateOrConnectWithoutMunicipioInput = {
    where: PersonaClubWhereUniqueInput
    create: XOR<PersonaClubCreateWithoutMunicipioInput, PersonaClubUncheckedCreateWithoutMunicipioInput>
  }

  export type PersonaClubCreateManyMunicipioInputEnvelope = {
    data: PersonaClubCreateManyMunicipioInput | PersonaClubCreateManyMunicipioInput[]
    skipDuplicates?: boolean
  }

  export type DepartamentoCreateWithoutMunicipioInput = {
    nombre?: string | null
  }

  export type DepartamentoUncheckedCreateWithoutMunicipioInput = {
    id?: number
    nombre?: string | null
  }

  export type DepartamentoCreateOrConnectWithoutMunicipioInput = {
    where: DepartamentoWhereUniqueInput
    create: XOR<DepartamentoCreateWithoutMunicipioInput, DepartamentoUncheckedCreateWithoutMunicipioInput>
  }

  export type PersonaClubUpsertWithWhereUniqueWithoutMunicipioInput = {
    where: PersonaClubWhereUniqueInput
    update: XOR<PersonaClubUpdateWithoutMunicipioInput, PersonaClubUncheckedUpdateWithoutMunicipioInput>
    create: XOR<PersonaClubCreateWithoutMunicipioInput, PersonaClubUncheckedCreateWithoutMunicipioInput>
  }

  export type PersonaClubUpdateWithWhereUniqueWithoutMunicipioInput = {
    where: PersonaClubWhereUniqueInput
    data: XOR<PersonaClubUpdateWithoutMunicipioInput, PersonaClubUncheckedUpdateWithoutMunicipioInput>
  }

  export type PersonaClubUpdateManyWithWhereWithoutMunicipioInput = {
    where: PersonaClubScalarWhereInput
    data: XOR<PersonaClubUpdateManyMutationInput, PersonaClubUncheckedUpdateManyWithoutMunicipioInput>
  }

  export type PersonaClubScalarWhereInput = {
    AND?: PersonaClubScalarWhereInput | PersonaClubScalarWhereInput[]
    OR?: PersonaClubScalarWhereInput[]
    NOT?: PersonaClubScalarWhereInput | PersonaClubScalarWhereInput[]
    id?: IntFilter<"PersonaClub"> | number
    numeroDocumento?: StringFilter<"PersonaClub"> | string
    tipoDocumento?: StringFilter<"PersonaClub"> | string
    idMunicipio?: IntFilter<"PersonaClub"> | number
    nombres?: StringFilter<"PersonaClub"> | string
    apellidos?: StringFilter<"PersonaClub"> | string
    fechaNacimento?: DateTimeNullableFilter<"PersonaClub"> | Date | string | null
    tipoRh?: StringNullableFilter<"PersonaClub"> | string | null
    peso?: FloatNullableFilter<"PersonaClub"> | number | null
    altura?: FloatNullableFilter<"PersonaClub"> | number | null
    correo?: StringFilter<"PersonaClub"> | string
    numeroTelefono?: StringFilter<"PersonaClub"> | string
    tallaCamisa?: StringNullableFilter<"PersonaClub"> | string | null
    tallaCalzado?: StringNullableFilter<"PersonaClub"> | string | null
    tallaPantaloneta?: StringNullableFilter<"PersonaClub"> | string | null
    genero?: StringNullableFilter<"PersonaClub"> | string | null
    direccion?: StringNullableFilter<"PersonaClub"> | string | null
  }

  export type DepartamentoUpsertWithoutMunicipioInput = {
    update: XOR<DepartamentoUpdateWithoutMunicipioInput, DepartamentoUncheckedUpdateWithoutMunicipioInput>
    create: XOR<DepartamentoCreateWithoutMunicipioInput, DepartamentoUncheckedCreateWithoutMunicipioInput>
    where?: DepartamentoWhereInput
  }

  export type DepartamentoUpdateToOneWithWhereWithoutMunicipioInput = {
    where?: DepartamentoWhereInput
    data: XOR<DepartamentoUpdateWithoutMunicipioInput, DepartamentoUncheckedUpdateWithoutMunicipioInput>
  }

  export type DepartamentoUpdateWithoutMunicipioInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DepartamentoUncheckedUpdateWithoutMunicipioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PagoDeportistaCreateManyDeportistaInput = {
    id?: number
    fechaPago?: Date | string | null
    valor?: Decimal | DecimalJsLike | number | string | null
    tipoPago?: string | null
  }

  export type PagoDeportistaUpdateWithoutDeportistaInput = {
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipoPago?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PagoDeportistaUncheckedUpdateWithoutDeportistaInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipoPago?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PagoDeportistaUncheckedUpdateManyWithoutDeportistaInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipoPago?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PersonaClubCreateManyMunicipioInput = {
    id?: number
    numeroDocumento: string
    tipoDocumento: string
    nombres: string
    apellidos: string
    fechaNacimento?: Date | string | null
    tipoRh?: string | null
    peso?: number | null
    altura?: number | null
    correo: string
    numeroTelefono: string
    tallaCamisa?: string | null
    tallaCalzado?: string | null
    tallaPantaloneta?: string | null
    genero?: string | null
    direccion?: string | null
  }

  export type PersonaClubUpdateWithoutMunicipioInput = {
    numeroDocumento?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    fechaNacimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoRh?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    correo?: StringFieldUpdateOperationsInput | string
    numeroTelefono?: StringFieldUpdateOperationsInput | string
    tallaCamisa?: NullableStringFieldUpdateOperationsInput | string | null
    tallaCalzado?: NullableStringFieldUpdateOperationsInput | string | null
    tallaPantaloneta?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    entrenador?: EntrenadorUpdateOneWithoutPersonaClubNestedInput
    deportista?: DeportistaUpdateOneWithoutPersonaClubNestedInput
    usuario?: UsuarioUpdateOneWithoutPersonaNestedInput
  }

  export type PersonaClubUncheckedUpdateWithoutMunicipioInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroDocumento?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    fechaNacimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoRh?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    correo?: StringFieldUpdateOperationsInput | string
    numeroTelefono?: StringFieldUpdateOperationsInput | string
    tallaCamisa?: NullableStringFieldUpdateOperationsInput | string | null
    tallaCalzado?: NullableStringFieldUpdateOperationsInput | string | null
    tallaPantaloneta?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    entrenador?: EntrenadorUncheckedUpdateOneWithoutPersonaClubNestedInput
    deportista?: DeportistaUncheckedUpdateOneWithoutPersonaClubNestedInput
    usuario?: UsuarioUncheckedUpdateOneWithoutPersonaNestedInput
  }

  export type PersonaClubUncheckedUpdateManyWithoutMunicipioInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroDocumento?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    fechaNacimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoRh?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    correo?: StringFieldUpdateOperationsInput | string
    numeroTelefono?: StringFieldUpdateOperationsInput | string
    tallaCamisa?: NullableStringFieldUpdateOperationsInput | string | null
    tallaCalzado?: NullableStringFieldUpdateOperationsInput | string | null
    tallaPantaloneta?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
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