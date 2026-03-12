import { o as createLucideIcon, aV as IC_REQUEST_DOMAIN_SEPARATOR, aW as IC_RESPONSE_DOMAIN_SEPARATOR, aX as IC_REQUEST_AUTH_DELEGATION_DOMAIN_SEPARATOR, aY as Actor, aZ as ACTOR_METHOD_WITH_HTTP_DETAILS, a_ as ACTOR_METHOD_WITH_CERTIFICATE, a$ as ReplicaRejectCode, b0 as QueryResponseStatus, b1 as isV2ResponseBody, b2 as isV3ResponseBody, b3 as RequestStatusResponseStatus, b4 as IC_ROOT_KEY, b5 as HttpAgent, b6 as calculateIngressExpiry, b7 as makeNonce, b8 as JSON_KEY_EXPIRY, b9 as Expiry, ba as makeNonceTransform, bb as httpHeadersTransform, bc as Endpoint, bd as SubmitRequestType, be as ReadRequestType, bf as SignIdentity, bg as AnonymousIdentity, bh as NodeType, bi as Certificate, bj as lookupResultToBuffer, bk as reconstruct, bl as domain_sep, bm as LookupPathStatus, bn as LookupSubtreeStatus, bo as LookupLabelStatus, bp as lookup_path, bq as lookup_subtree, br as flatten_forks, bs as find_label, bt as check_canister_ranges, bu as encodeLenBytes, bv as encodeLen, bw as decodeLenBytes, bx as decodeLen, by as ED25519_OID, bz as wrapDER, bA as unwrapDER, bB as ErrorKindEnum, bC as AgentError, bD as TrustError, bE as ProtocolError, bF as RejectError, bG as TransportError, bH as ExternalError, bI as InputError, bJ as UnknownError, bK as CertificateVerificationErrorCode, bL as CertificateTimeErrorCode, bM as CertificateHasTooManyDelegationsErrorCode, bN as CertificateNotAuthorizedErrorCode, bO as LookupErrorCode, bP as MalformedLookupFoundValueErrorCode, bQ as MissingLookupValueErrorCode, bR as DerKeyLengthMismatchErrorCode, bS as DerPrefixMismatchErrorCode, bT as DerDecodeLengthMismatchErrorCode, bU as DerDecodeErrorCode, bV as DerEncodeErrorCode, bW as CborDecodeErrorCode, bX as CborEncodeErrorCode, bY as TimeoutWaitingForResponseErrorCode, bZ as CertificateOutdatedErrorCode, b_ as CertifiedRejectErrorCode, b$ as UncertifiedRejectErrorCode, c0 as UncertifiedRejectUpdateErrorCode, c1 as RequestStatusDoneNoReplyErrorCode, c2 as MissingRootKeyErrorCode, c3 as HashValueErrorCode, c4 as HttpDefaultFetchErrorCode, c5 as IdentityInvalidErrorCode, c6 as IngressExpiryInvalidErrorCode, c7 as CreateHttpAgentErrorCode, c8 as MalformedSignatureErrorCode, c9 as MissingSignatureErrorCode, ca as MalformedPublicKeyErrorCode, cb as QuerySignatureVerificationFailedErrorCode, cc as UnexpectedErrorCode, cd as HashTreeDecodeErrorCode, ce as HttpErrorCode, cf as HttpV3ApiNotSupportedErrorCode, cg as HttpFetchErrorCode, ch as MissingCanisterIdErrorCode, ci as InvalidReadStateRequestErrorCode, cj as ExpiryJsonDeserializeErrorCode, ck as UNREACHABLE_ERROR, cl as Observable, cm as ObservableLog, cn as Ed25519PublicKey, co as hashValue, cp as requestIdOf, cq as hashOfMap, cr as blsVerify, cs as uint8FromBufLike, ct as uint8Equals, cu as randomNumber, cv as DEFAULT_POLLING_OPTIONS, cw as pollForResponse, cx as constructRequest, cy as defaultStrategy } from "./index-Daa_jkDV.js";
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
