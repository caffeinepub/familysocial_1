import { g as createLucideIcon, b0 as IC_REQUEST_DOMAIN_SEPARATOR, b1 as IC_RESPONSE_DOMAIN_SEPARATOR, b2 as IC_REQUEST_AUTH_DELEGATION_DOMAIN_SEPARATOR, b3 as Actor, b4 as ACTOR_METHOD_WITH_HTTP_DETAILS, b5 as ACTOR_METHOD_WITH_CERTIFICATE, b6 as ReplicaRejectCode, b7 as QueryResponseStatus, b8 as isV2ResponseBody, b9 as isV3ResponseBody, ba as RequestStatusResponseStatus, bb as IC_ROOT_KEY, bc as HttpAgent, bd as calculateIngressExpiry, be as makeNonce, bf as JSON_KEY_EXPIRY, bg as Expiry, bh as makeNonceTransform, bi as httpHeadersTransform, bj as Endpoint, bk as SubmitRequestType, bl as ReadRequestType, bm as SignIdentity, bn as AnonymousIdentity, bo as NodeType, bp as Certificate, bq as lookupResultToBuffer, br as reconstruct, bs as domain_sep, bt as LookupPathStatus, bu as LookupSubtreeStatus, bv as LookupLabelStatus, bw as lookup_path, bx as lookup_subtree, by as flatten_forks, bz as find_label, bA as check_canister_ranges, bB as encodeLenBytes, bC as encodeLen, bD as decodeLenBytes, bE as decodeLen, bF as ED25519_OID, bG as wrapDER, bH as unwrapDER, bI as ErrorKindEnum, bJ as AgentError, bK as TrustError, bL as ProtocolError, bM as RejectError, bN as TransportError, bO as ExternalError, bP as InputError, bQ as UnknownError, bR as CertificateVerificationErrorCode, bS as CertificateTimeErrorCode, bT as CertificateHasTooManyDelegationsErrorCode, bU as CertificateNotAuthorizedErrorCode, bV as LookupErrorCode, bW as MalformedLookupFoundValueErrorCode, bX as MissingLookupValueErrorCode, bY as DerKeyLengthMismatchErrorCode, bZ as DerPrefixMismatchErrorCode, b_ as DerDecodeLengthMismatchErrorCode, b$ as DerDecodeErrorCode, c0 as DerEncodeErrorCode, c1 as CborDecodeErrorCode, c2 as CborEncodeErrorCode, c3 as TimeoutWaitingForResponseErrorCode, c4 as CertificateOutdatedErrorCode, c5 as CertifiedRejectErrorCode, c6 as UncertifiedRejectErrorCode, c7 as UncertifiedRejectUpdateErrorCode, c8 as RequestStatusDoneNoReplyErrorCode, c9 as MissingRootKeyErrorCode, ca as HashValueErrorCode, cb as HttpDefaultFetchErrorCode, cc as IdentityInvalidErrorCode, cd as IngressExpiryInvalidErrorCode, ce as CreateHttpAgentErrorCode, cf as MalformedSignatureErrorCode, cg as MissingSignatureErrorCode, ch as MalformedPublicKeyErrorCode, ci as QuerySignatureVerificationFailedErrorCode, cj as UnexpectedErrorCode, ck as HashTreeDecodeErrorCode, cl as HttpErrorCode, cm as HttpV3ApiNotSupportedErrorCode, cn as HttpFetchErrorCode, co as MissingCanisterIdErrorCode, cp as InvalidReadStateRequestErrorCode, cq as ExpiryJsonDeserializeErrorCode, cr as UNREACHABLE_ERROR, cs as Observable, ct as ObservableLog, cu as Ed25519PublicKey, cv as hashValue, cw as requestIdOf, cx as hashOfMap, cy as blsVerify, cz as uint8FromBufLike, cA as uint8Equals, cB as randomNumber, cC as DEFAULT_POLLING_OPTIONS, cD as pollForResponse, cE as constructRequest, cF as defaultStrategy } from "./index-BfRdVjGV.js";
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
