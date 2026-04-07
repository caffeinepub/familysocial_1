import { l as createLucideIcon, bf as IC_REQUEST_DOMAIN_SEPARATOR, bg as IC_RESPONSE_DOMAIN_SEPARATOR, bh as IC_REQUEST_AUTH_DELEGATION_DOMAIN_SEPARATOR, bi as Actor, bj as ACTOR_METHOD_WITH_HTTP_DETAILS, bk as ACTOR_METHOD_WITH_CERTIFICATE, bl as ReplicaRejectCode, bm as QueryResponseStatus, bn as isV2ResponseBody, bo as isV3ResponseBody, bp as RequestStatusResponseStatus, bq as IC_ROOT_KEY, br as HttpAgent, bs as calculateIngressExpiry, bt as makeNonce, bu as JSON_KEY_EXPIRY, bv as Expiry, bw as makeNonceTransform, bx as httpHeadersTransform, by as Endpoint, bz as SubmitRequestType, bA as ReadRequestType, bB as SignIdentity, bC as AnonymousIdentity, bD as NodeType, bE as Certificate, bF as lookupResultToBuffer, bG as reconstruct, bH as domain_sep, bI as LookupPathStatus, bJ as LookupSubtreeStatus, bK as LookupLabelStatus, bL as lookup_path, bM as lookup_subtree, bN as flatten_forks, bO as find_label, bP as check_canister_ranges, bQ as encodeLenBytes, bR as encodeLen, bS as decodeLenBytes, bT as decodeLen, bU as ED25519_OID, bV as wrapDER, bW as unwrapDER, bX as ErrorKindEnum, bY as AgentError, bZ as TrustError, b_ as ProtocolError, b$ as RejectError, c0 as TransportError, c1 as ExternalError, c2 as InputError, c3 as UnknownError, c4 as CertificateVerificationErrorCode, c5 as CertificateTimeErrorCode, c6 as CertificateHasTooManyDelegationsErrorCode, c7 as CertificateNotAuthorizedErrorCode, c8 as LookupErrorCode, c9 as MalformedLookupFoundValueErrorCode, ca as MissingLookupValueErrorCode, cb as DerKeyLengthMismatchErrorCode, cc as DerPrefixMismatchErrorCode, cd as DerDecodeLengthMismatchErrorCode, ce as DerDecodeErrorCode, cf as DerEncodeErrorCode, cg as CborDecodeErrorCode, ch as CborEncodeErrorCode, ci as TimeoutWaitingForResponseErrorCode, cj as CertificateOutdatedErrorCode, ck as CertifiedRejectErrorCode, cl as UncertifiedRejectErrorCode, cm as UncertifiedRejectUpdateErrorCode, cn as RequestStatusDoneNoReplyErrorCode, co as MissingRootKeyErrorCode, cp as HashValueErrorCode, cq as HttpDefaultFetchErrorCode, cr as IdentityInvalidErrorCode, cs as IngressExpiryInvalidErrorCode, ct as CreateHttpAgentErrorCode, cu as MalformedSignatureErrorCode, cv as MissingSignatureErrorCode, cw as MalformedPublicKeyErrorCode, cx as QuerySignatureVerificationFailedErrorCode, cy as UnexpectedErrorCode, cz as HashTreeDecodeErrorCode, cA as HttpErrorCode, cB as HttpV3ApiNotSupportedErrorCode, cC as HttpFetchErrorCode, cD as MissingCanisterIdErrorCode, cE as InvalidReadStateRequestErrorCode, cF as ExpiryJsonDeserializeErrorCode, cG as UNREACHABLE_ERROR, cH as Observable, cI as ObservableLog, cJ as Ed25519PublicKey, cK as hashValue, cL as requestIdOf, cM as hashOfMap, cN as blsVerify, cO as uint8FromBufLike, cP as uint8Equals, cQ as randomNumber, cR as DEFAULT_POLLING_OPTIONS, cS as pollForResponse, cT as constructRequest, cU as defaultStrategy } from "./index-DaHNgtHM.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
];
const Database = createLucideIcon("database", __iconNode);
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ACTOR_METHOD_WITH_CERTIFICATE,
  ACTOR_METHOD_WITH_HTTP_DETAILS,
  Actor,
  AgentError,
  AnonymousIdentity,
  CborDecodeErrorCode,
  CborEncodeErrorCode,
  Certificate,
  CertificateHasTooManyDelegationsErrorCode,
  CertificateNotAuthorizedErrorCode,
  CertificateOutdatedErrorCode,
  CertificateTimeErrorCode,
  CertificateVerificationErrorCode,
  CertifiedRejectErrorCode,
  CreateHttpAgentErrorCode,
  DEFAULT_POLLING_OPTIONS,
  DerDecodeErrorCode,
  DerDecodeLengthMismatchErrorCode,
  DerEncodeErrorCode,
  DerKeyLengthMismatchErrorCode,
  DerPrefixMismatchErrorCode,
  ED25519_OID,
  Ed25519PublicKey,
  get Endpoint() {
    return Endpoint;
  },
  get ErrorKindEnum() {
    return ErrorKindEnum;
  },
  Expiry,
  ExpiryJsonDeserializeErrorCode,
  ExternalError,
  HashTreeDecodeErrorCode,
  HashValueErrorCode,
  HttpAgent,
  HttpDefaultFetchErrorCode,
  HttpErrorCode,
  HttpFetchErrorCode,
  HttpV3ApiNotSupportedErrorCode,
  IC_REQUEST_AUTH_DELEGATION_DOMAIN_SEPARATOR,
  IC_REQUEST_DOMAIN_SEPARATOR,
  IC_RESPONSE_DOMAIN_SEPARATOR,
  IC_ROOT_KEY,
  IdentityInvalidErrorCode,
  IngressExpiryInvalidErrorCode,
  InputError,
  InvalidReadStateRequestErrorCode,
  JSON_KEY_EXPIRY,
  LookupErrorCode,
  get LookupLabelStatus() {
    return LookupLabelStatus;
  },
  get LookupPathStatus() {
    return LookupPathStatus;
  },
  get LookupSubtreeStatus() {
    return LookupSubtreeStatus;
  },
  MalformedLookupFoundValueErrorCode,
  MalformedPublicKeyErrorCode,
  MalformedSignatureErrorCode,
  MissingCanisterIdErrorCode,
  MissingLookupValueErrorCode,
  MissingRootKeyErrorCode,
  MissingSignatureErrorCode,
  get NodeType() {
    return NodeType;
  },
  Observable,
  ObservableLog,
  ProtocolError,
  get QueryResponseStatus() {
    return QueryResponseStatus;
  },
  QuerySignatureVerificationFailedErrorCode,
  get ReadRequestType() {
    return ReadRequestType;
  },
  RejectError,
  get ReplicaRejectCode() {
    return ReplicaRejectCode;
  },
  RequestStatusDoneNoReplyErrorCode,
  get RequestStatusResponseStatus() {
    return RequestStatusResponseStatus;
  },
  SignIdentity,
  get SubmitRequestType() {
    return SubmitRequestType;
  },
  TimeoutWaitingForResponseErrorCode,
  TransportError,
  TrustError,
  UNREACHABLE_ERROR,
  UncertifiedRejectErrorCode,
  UncertifiedRejectUpdateErrorCode,
  UnexpectedErrorCode,
  UnknownError,
  blsVerify,
  calculateIngressExpiry,
  check_canister_ranges,
  constructRequest,
  decodeLen,
  decodeLenBytes,
  defaultStrategy,
  domain_sep,
  encodeLen,
  encodeLenBytes,
  find_label,
  flatten_forks,
  hashOfMap,
  hashValue,
  httpHeadersTransform,
  isV2ResponseBody,
  isV3ResponseBody,
  lookupResultToBuffer,
  lookup_path,
  lookup_subtree,
  makeNonce,
  makeNonceTransform,
  pollForResponse,
  randomNumber,
  reconstruct,
  requestIdOf,
  uint8Equals,
  uint8FromBufLike,
  unwrapDER,
  wrapDER
}, Symbol.toStringTag, { value: "Module" }));
export {
  Database as D,
  index as i
};
