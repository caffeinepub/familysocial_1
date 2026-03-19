import { h as createLucideIcon, b1 as IC_REQUEST_DOMAIN_SEPARATOR, b2 as IC_RESPONSE_DOMAIN_SEPARATOR, b3 as IC_REQUEST_AUTH_DELEGATION_DOMAIN_SEPARATOR, b4 as Actor, b5 as ACTOR_METHOD_WITH_HTTP_DETAILS, b6 as ACTOR_METHOD_WITH_CERTIFICATE, b7 as ReplicaRejectCode, b8 as QueryResponseStatus, b9 as isV2ResponseBody, ba as isV3ResponseBody, bb as RequestStatusResponseStatus, bc as IC_ROOT_KEY, bd as HttpAgent, be as calculateIngressExpiry, bf as makeNonce, bg as JSON_KEY_EXPIRY, bh as Expiry, bi as makeNonceTransform, bj as httpHeadersTransform, bk as Endpoint, bl as SubmitRequestType, bm as ReadRequestType, bn as SignIdentity, bo as AnonymousIdentity, bp as NodeType, bq as Certificate, br as lookupResultToBuffer, bs as reconstruct, bt as domain_sep, bu as LookupPathStatus, bv as LookupSubtreeStatus, bw as LookupLabelStatus, bx as lookup_path, by as lookup_subtree, bz as flatten_forks, bA as find_label, bB as check_canister_ranges, bC as encodeLenBytes, bD as encodeLen, bE as decodeLenBytes, bF as decodeLen, bG as ED25519_OID, bH as wrapDER, bI as unwrapDER, bJ as ErrorKindEnum, bK as AgentError, bL as TrustError, bM as ProtocolError, bN as RejectError, bO as TransportError, bP as ExternalError, bQ as InputError, bR as UnknownError, bS as CertificateVerificationErrorCode, bT as CertificateTimeErrorCode, bU as CertificateHasTooManyDelegationsErrorCode, bV as CertificateNotAuthorizedErrorCode, bW as LookupErrorCode, bX as MalformedLookupFoundValueErrorCode, bY as MissingLookupValueErrorCode, bZ as DerKeyLengthMismatchErrorCode, b_ as DerPrefixMismatchErrorCode, b$ as DerDecodeLengthMismatchErrorCode, c0 as DerDecodeErrorCode, c1 as DerEncodeErrorCode, c2 as CborDecodeErrorCode, c3 as CborEncodeErrorCode, c4 as TimeoutWaitingForResponseErrorCode, c5 as CertificateOutdatedErrorCode, c6 as CertifiedRejectErrorCode, c7 as UncertifiedRejectErrorCode, c8 as UncertifiedRejectUpdateErrorCode, c9 as RequestStatusDoneNoReplyErrorCode, ca as MissingRootKeyErrorCode, cb as HashValueErrorCode, cc as HttpDefaultFetchErrorCode, cd as IdentityInvalidErrorCode, ce as IngressExpiryInvalidErrorCode, cf as CreateHttpAgentErrorCode, cg as MalformedSignatureErrorCode, ch as MissingSignatureErrorCode, ci as MalformedPublicKeyErrorCode, cj as QuerySignatureVerificationFailedErrorCode, ck as UnexpectedErrorCode, cl as HashTreeDecodeErrorCode, cm as HttpErrorCode, cn as HttpV3ApiNotSupportedErrorCode, co as HttpFetchErrorCode, cp as MissingCanisterIdErrorCode, cq as InvalidReadStateRequestErrorCode, cr as ExpiryJsonDeserializeErrorCode, cs as UNREACHABLE_ERROR, ct as Observable, cu as ObservableLog, cv as Ed25519PublicKey, cw as hashValue, cx as requestIdOf, cy as hashOfMap, cz as blsVerify, cA as uint8FromBufLike, cB as uint8Equals, cC as randomNumber, cD as DEFAULT_POLLING_OPTIONS, cE as pollForResponse, cF as constructRequest, cG as defaultStrategy } from "./index-BYT7ZeT6.js";
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
