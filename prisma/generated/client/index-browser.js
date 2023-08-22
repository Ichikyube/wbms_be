
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.1.1
 * Query Engine version: 6a3747c37ff169c90047725a05a6ef02e32ac97e
 */
Prisma.prismaVersion = {
  client: "5.1.1",
  engine: "6a3747c37ff169c90047725a05a6ef02e32ac97e"
}


const runtimeDescription = (() => {
  // https://edge-runtime.vercel.app/features/available-apis#addressing-the-runtime
  if ("EdgeRuntime" in globalThis && typeof globalThis.EdgeRuntime === "string") {
    return "under the Vercel Edge Runtime";
  }
  // Deno
  if ("Deno" in globalThis && typeof globalThis.Deno === "object") {
    return "under the Deno runtime";
  }
  // Default to assuming browser
  return "in the browser";
})();


Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ProvinceScalarFieldEnum = {
  id: 'id',
  name: 'name',
  isDeleted: 'isDeleted',
  userCreated: 'userCreated',
  userModified: 'userModified',
  dtCreated: 'dtCreated',
  dtModified: 'dtModified'
};

exports.Prisma.CityScalarFieldEnum = {
  id: 'id',
  provinceId: 'provinceId',
  name: 'name',
  isDeleted: 'isDeleted',
  userCreated: 'userCreated',
  userModified: 'userModified',
  dtCreated: 'dtCreated',
  dtModified: 'dtModified'
};

exports.Prisma.ImageScalarFieldEnum = {
  id: 'id',
  path: 'path',
  dtCreated: 'dtCreated',
  dtModified: 'dtModified'
};

exports.Prisma.CompanyScalarFieldEnum = {
  id: 'id',
  refType: 'refType',
  refId: 'refId',
  code: 'code',
  codeSap: 'codeSap',
  name: 'name',
  shortName: 'shortName',
  address: 'address',
  addressExt: 'addressExt',
  postalCode: 'postalCode',
  country: 'country',
  province: 'province',
  city: 'city',
  phone: 'phone',
  url: 'url',
  contactName: 'contactName',
  contactEmail: 'contactEmail',
  contactPhone: 'contactPhone',
  isMillOperator: 'isMillOperator',
  isTransporter: 'isTransporter',
  isSiteOperator: 'isSiteOperator',
  isEstate: 'isEstate',
  isDeleted: 'isDeleted',
  userCreated: 'userCreated',
  userModified: 'userModified',
  dtCreated: 'dtCreated',
  dtModified: 'dtModified'
};

exports.Prisma.CustomerScalarFieldEnum = {
  id: 'id',
  customerTypeId: 'customerTypeId',
  customerGroupId: 'customerGroupId',
  cityId: 'cityId',
  code: 'code',
  codeSap: 'codeSap',
  name: 'name',
  shortName: 'shortName',
  address: 'address',
  addressExt: 'addressExt',
  postalCode: 'postalCode',
  phone: 'phone',
  url: 'url',
  contactName: 'contactName',
  contactEmail: 'contactEmail',
  contactPhone: 'contactPhone',
  sortasi: 'sortasi',
  isDeleted: 'isDeleted',
  userCreated: 'userCreated',
  userModified: 'userModified',
  dtCreated: 'dtCreated',
  dtModified: 'dtModified'
};

exports.Prisma.CustomerTypeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  shortDesc: 'shortDesc',
  description: 'description',
  isDeleted: 'isDeleted',
  userCreated: 'userCreated',
  userModified: 'userModified',
  dtCreated: 'dtCreated',
  dtModified: 'dtModified'
};

exports.Prisma.CustomerGroupScalarFieldEnum = {
  id: 'id',
  name: 'name',
  shortDesc: 'shortDesc',
  description: 'description',
  isDeleted: 'isDeleted',
  userCreated: 'userCreated',
  userModified: 'userModified',
  dtCreated: 'dtCreated',
  dtModified: 'dtModified'
};

exports.Prisma.BarcodeTypeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  shortDesc: 'shortDesc',
  description: 'description',
  isDeleted: 'isDeleted',
  userCreated: 'userCreated',
  userModified: 'userModified',
  dtCreated: 'dtCreated',
  dtModified: 'dtModified'
};

exports.Prisma.SiteScalarFieldEnum = {
  id: 'id',
  refType: 'refType',
  refId: 'refId',
  sourceSiteId: 'sourceSiteId',
  sourceSiteRefId: 'sourceSiteRefId',
  sourceSiteName: 'sourceSiteName',
  companyId: 'companyId',
  companyRefId: 'companyRefId',
  companyName: 'companyName',
  cityId: 'cityId',
  code: 'code',
  codeSap: 'codeSap',
  name: 'name',
  shortName: 'shortName',
  description: 'description',
  latitude: 'latitude',
  longitude: 'longitude',
  solarCalibration: 'solarCalibration',
  isMill: 'isMill',
  isDeleted: 'isDeleted',
  userCreated: 'userCreated',
  userModified: 'userModified',
  dtCreated: 'dtCreated',
  dtModified: 'dtModified'
};

exports.Prisma.MillScalarFieldEnum = {
  id: 'id',
  siteId: 'siteId',
  companyId: 'companyId',
  code: 'code',
  name: 'name',
  isDeleted: 'isDeleted',
  userCreated: 'userCreated',
  userModified: 'userModified',
  dtCreated: 'dtCreated',
  dtModified: 'dtModified'
};

exports.Prisma.WeighbridgeScalarFieldEnum = {
  id: 'id',
  siteId: 'siteId',
  code: 'code',
  name: 'name',
  isDeleted: 'isDeleted',
  userCreated: 'userCreated',
  userModified: 'userModified',
  dtCreated: 'dtCreated',
  dtModified: 'dtModified'
};

exports.Prisma.ApproverScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  name: 'name',
  lvl: 'lvl',
  active: 'active',
  isDeleted: 'isDeleted',
  userCreated: 'userCreated',
  userModified: 'userModified',
  dtCreated: 'dtCreated',
  dtModified: 'dtModified'
};

exports.Prisma.ConfigApprovalScalarFieldEnum = {
  id: 'id',
  requestId: 'requestId',
  lvl1Signed: 'lvl1Signed',
  lvl2Signed: 'lvl2Signed',
  lvl3Signed: 'lvl3Signed',
  isDeleted: 'isDeleted',
  userCreated: 'userCreated',
  userModified: 'userModified',
  dtCreated: 'dtCreated',
  dtModified: 'dtModified'
};

exports.Prisma.ConfigRequestScalarFieldEnum = {
  id: 'id',
  configId: 'configId',
  editedValue: 'editedValue',
  status: 'status',
  start: 'start',
  end: 'end',
  isDeleted: 'isDeleted',
  userCreated: 'userCreated',
  userModified: 'userModified',
  dtCreated: 'dtCreated',
  dtModified: 'dtModified'
};

exports.Prisma.ConfigScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  type: 'type',
  value: 'value',
  lvlOfApprvl: 'lvlOfApprvl',
  status: 'status',
  start: 'start',
  end: 'end',
  isDeleted: 'isDeleted',
  userCreated: 'userCreated',
  userModified: 'userModified',
  dtCreated: 'dtCreated',
  dtModified: 'dtModified'
};

exports.Prisma.ProfileScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  name: 'name',
  profilePic: 'profilePic',
  phone: 'phone',
  division: 'division',
  position: 'position',
  doB: 'doB',
  alamat: 'alamat',
  userCreated: 'userCreated',
  userModified: 'userModified',
  dtCreated: 'dtCreated',
  dtModified: 'dtModified'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  username: 'username',
  email: 'email',
  nik: 'nik',
  roleId: 'roleId',
  role: 'role',
  hashedPassword: 'hashedPassword',
  hashedRT: 'hashedRT',
  isEmailVerified: 'isEmailVerified',
  isLDAPUser: 'isLDAPUser',
  isDisabled: 'isDisabled',
  isDeleted: 'isDeleted',
  userCreated: 'userCreated',
  userModified: 'userModified',
  dtCreated: 'dtCreated',
  dtModified: 'dtModified'
};

exports.Prisma.RoleScalarFieldEnum = {
  id: 'id',
  name: 'name',
  userCreated: 'userCreated',
  userModified: 'userModified',
  dtCreated: 'dtCreated',
  dtModified: 'dtModified'
};

exports.Prisma.PermissionScalarFieldEnum = {
  id: 'id',
  resource: 'resource',
  roleId: 'roleId',
  userCreated: 'userCreated',
  userModified: 'userModified',
  dtCreated: 'dtCreated',
  dtModified: 'dtModified'
};

exports.Prisma.GrantScalarFieldEnum = {
  id: 'id',
  action: 'action',
  possession: 'possession',
  permissionId: 'permissionId',
  userCreated: 'userCreated',
  userModified: 'userModified',
  dtCreated: 'dtCreated',
  dtModified: 'dtModified'
};

exports.Prisma.AttributeScalarFieldEnum = {
  id: 'id',
  attr: 'attr',
  grantId: 'grantId'
};

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  refType: 'refType',
  refId: 'refId',
  productGroupName: 'productGroupName',
  code: 'code',
  codeSap: 'codeSap',
  name: 'name',
  shortName: 'shortName',
  description: 'description',
  certification: 'certification',
  isDeleted: 'isDeleted',
  userCreated: 'userCreated',
  userModified: 'userModified',
  dtCreated: 'dtCreated',
  dtModified: 'dtModified'
};

exports.Prisma.ProductGroupScalarFieldEnum = {
  id: 'id',
  name: 'name',
  shortDesc: 'shortDesc',
  description: 'description',
  isDeleted: 'isDeleted',
  userCreated: 'userCreated',
  userModified: 'userModified',
  dtCreated: 'dtCreated',
  dtModified: 'dtModified'
};

exports.Prisma.StorageTankScalarFieldEnum = {
  id: 'id',
  refType: 'refType',
  refId: 'refId',
  siteId: 'siteId',
  siteRefId: 'siteRefId',
  siteName: 'siteName',
  stockOwnerId: 'stockOwnerId',
  stockOwnerRefId: 'stockOwnerRefId',
  stockOwnerName: 'stockOwnerName',
  productId: 'productId',
  productRefId: 'productRefId',
  productName: 'productName',
  code: 'code',
  codeSap: 'codeSap',
  name: 'name',
  shortName: 'shortName',
  description: 'description',
  capacity: 'capacity',
  height: 'height',
  sccModel: 'sccModel',
  isDeleted: 'isDeleted',
  userCreated: 'userCreated',
  userModified: 'userModified',
  dtCreated: 'dtCreated',
  dtModified: 'dtModified'
};

exports.Prisma.DriverScalarFieldEnum = {
  id: 'id',
  refType: 'refType',
  refId: 'refId',
  codeSap: 'codeSap',
  companyId: 'companyId',
  companyRefId: 'companyRefId',
  companyName: 'companyName',
  nik: 'nik',
  name: 'name',
  address: 'address',
  email: 'email',
  phone: 'phone',
  licenseNo: 'licenseNo',
  licenseED: 'licenseED',
  isDeleted: 'isDeleted',
  userCreated: 'userCreated',
  userModified: 'userModified',
  dtCreated: 'dtCreated',
  dtModified: 'dtModified'
};

exports.Prisma.TransportVehicleScalarFieldEnum = {
  id: 'id',
  refType: 'refType',
  refId: 'refId',
  codeSap: 'codeSap',
  companyId: 'companyId',
  companyRefId: 'companyRefId',
  companyName: 'companyName',
  productId: 'productId',
  productRefId: 'productRefId',
  productName: 'productName',
  productCode: 'productCode',
  plateNo: 'plateNo',
  capacity: 'capacity',
  brand: 'brand',
  model: 'model',
  sccModel: 'sccModel',
  notes: 'notes',
  licenseED: 'licenseED',
  keurED: 'keurED',
  isDeleted: 'isDeleted',
  userCreated: 'userCreated',
  userModified: 'userModified',
  dtCreated: 'dtCreated',
  dtModified: 'dtModified'
};

exports.Prisma.TransactionScalarFieldEnum = {
  id: 'id',
  tType: 'tType',
  bonTripNo: 'bonTripNo',
  vehicleStatus: 'vehicleStatus',
  deliveryStatus: 'deliveryStatus',
  progressStatus: 'progressStatus',
  deliveryOrderId: 'deliveryOrderId',
  deliveryOrderNo: 'deliveryOrderNo',
  deliveryDate: 'deliveryDate',
  productId: 'productId',
  productCode: 'productCode',
  productName: 'productName',
  customerId: 'customerId',
  customerCode: 'customerCode',
  customerName: 'customerName',
  rspoSccModel: 'rspoSccModel',
  rspoUniqueNumber: 'rspoUniqueNumber',
  isccSccModel: 'isccSccModel',
  isccUniqueNumber: 'isccUniqueNumber',
  isccGhgValue: 'isccGhgValue',
  isccEeeValue: 'isccEeeValue',
  transporterId: 'transporterId',
  transporterCompanyCode: 'transporterCompanyCode',
  transporterCompanyName: 'transporterCompanyName',
  transporterCompanyShortName: 'transporterCompanyShortName',
  driverId: 'driverId',
  driverNik: 'driverNik',
  driverName: 'driverName',
  driverLicenseNo: 'driverLicenseNo',
  transportVehicleId: 'transportVehicleId',
  transportVehiclePlateNo: 'transportVehiclePlateNo',
  transportVehicleProductCode: 'transportVehicleProductCode',
  transportVehicleProductName: 'transportVehicleProductName',
  transportVehicleSccModel: 'transportVehicleSccModel',
  originSiteId: 'originSiteId',
  originSiteCode: 'originSiteCode',
  originSiteName: 'originSiteName',
  originSourceStorageTankId: 'originSourceStorageTankId',
  originSourceStorageTankCode: 'originSourceStorageTankCode',
  originSourceStorageTankName: 'originSourceStorageTankName',
  destinationSiteId: 'destinationSiteId',
  destinationSiteCode: 'destinationSiteCode',
  destinationSiteName: 'destinationSiteName',
  destinationSinkStorageTankId: 'destinationSinkStorageTankId',
  destinationSinkStorageTankCode: 'destinationSinkStorageTankCode',
  destinationSinkStorageTankName: 'destinationSinkStorageTankName',
  originFfaPercentage: 'originFfaPercentage',
  originMoistPercentage: 'originMoistPercentage',
  originDirtPercentage: 'originDirtPercentage',
  originWeighInKg: 'originWeighInKg',
  originWeighInRemark: 'originWeighInRemark',
  originWeighInOperatorName: 'originWeighInOperatorName',
  originWeighInTimestamp: 'originWeighInTimestamp',
  originWeighOutKg: 'originWeighOutKg',
  originWeighOutRemark: 'originWeighOutRemark',
  originWeighOutOperatorName: 'originWeighOutOperatorName',
  originWeighOutTimestamp: 'originWeighOutTimestamp',
  potonganWajib: 'potonganWajib',
  potonganLain: 'potonganLain',
  destinationWeighInKg: 'destinationWeighInKg',
  destinationWeighInRemark: 'destinationWeighInRemark',
  destinationWeighInOperatorName: 'destinationWeighInOperatorName',
  destinationWeighInTimestamp: 'destinationWeighInTimestamp',
  destinationWeighOutKg: 'destinationWeighOutKg',
  destinationWeighOutRemark: 'destinationWeighOutRemark',
  destinationWeighOutOperatorName: 'destinationWeighOutOperatorName',
  destinationWeighOutTimestamp: 'destinationWeighOutTimestamp',
  returnWeighInKg: 'returnWeighInKg',
  returnWeighInRemark: 'returnWeighInRemark',
  returnWeighInOperatorName: 'returnWeighInOperatorName',
  returnWeighInTimestamp: 'returnWeighInTimestamp',
  returnWeighOutKg: 'returnWeighOutKg',
  returnWeighOutRemark: 'returnWeighOutRemark',
  returnWeighOutOperatorName: 'returnWeighOutOperatorName',
  returnWeighOutTimestamp: 'returnWeighOutTimestamp',
  currentSeal1: 'currentSeal1',
  currentSeal2: 'currentSeal2',
  currentSeal3: 'currentSeal3',
  currentSeal4: 'currentSeal4',
  loadedSeal1: 'loadedSeal1',
  loadedSeal2: 'loadedSeal2',
  loadedSeal3: 'loadedSeal3',
  loadedSeal4: 'loadedSeal4',
  loadingRemark: 'loadingRemark',
  loadingOperatorName: 'loadingOperatorName',
  loadingTimestamp: 'loadingTimestamp',
  unloadedSeal1: 'unloadedSeal1',
  unloadedSeal2: 'unloadedSeal2',
  unloadedSeal3: 'unloadedSeal3',
  unloadedSeal4: 'unloadedSeal4',
  unloadingRemark: 'unloadingRemark',
  unloadingOperatorName: 'unloadingOperatorName',
  unloadingTimestamp: 'unloadingTimestamp',
  returnUnloadedSeal1: 'returnUnloadedSeal1',
  returnUnloadedSeal2: 'returnUnloadedSeal2',
  returnUnloadedSeal3: 'returnUnloadedSeal3',
  returnUnloadedSeal4: 'returnUnloadedSeal4',
  returnUnloadingRemark: 'returnUnloadingRemark',
  returnUnloadingOperatorName: 'returnUnloadingOperatorName',
  returnUnloadingTimestamp: 'returnUnloadingTimestamp',
  qtyTbs: 'qtyTbs',
  qtyTbsDikirim: 'qtyTbsDikirim',
  qtyTbsDikembalikan: 'qtyTbsDikembalikan',
  jsonData: 'jsonData',
  isDeleted: 'isDeleted',
  userCreated: 'userCreated',
  userModified: 'userModified',
  dtCreated: 'dtCreated',
  dtModified: 'dtModified'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.Status = exports.$Enums.Status = {
  ACTIVE: 'ACTIVE',
  DISABLED: 'DISABLED',
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

exports.ConfigType = exports.$Enums.ConfigType = {
  boolean: 'boolean',
  string: 'string',
  number: 'number',
  bigint: 'bigint',
  array: 'array',
  object: 'object'
};

exports.Prisma.ModelName = {
  Province: 'Province',
  City: 'City',
  Image: 'Image',
  Company: 'Company',
  Customer: 'Customer',
  CustomerType: 'CustomerType',
  CustomerGroup: 'CustomerGroup',
  BarcodeType: 'BarcodeType',
  Site: 'Site',
  Mill: 'Mill',
  Weighbridge: 'Weighbridge',
  Approver: 'Approver',
  ConfigApproval: 'ConfigApproval',
  ConfigRequest: 'ConfigRequest',
  Config: 'Config',
  Profile: 'Profile',
  User: 'User',
  Role: 'Role',
  Permission: 'Permission',
  Grant: 'Grant',
  Attribute: 'Attribute',
  Product: 'Product',
  ProductGroup: 'ProductGroup',
  StorageTank: 'StorageTank',
  Driver: 'Driver',
  TransportVehicle: 'TransportVehicle',
  Transaction: 'Transaction'
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
