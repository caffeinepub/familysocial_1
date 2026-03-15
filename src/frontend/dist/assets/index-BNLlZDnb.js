import { s as createLucideIcon, aZ as IC_REQUEST_DOMAIN_SEPARATOR, a_ as IC_RESPONSE_DOMAIN_SEPARATOR, a$ as IC_REQUEST_AUTH_DELEGATION_DOMAIN_SEPARATOR, b0 as Actor, b1 as ACTOR_METHOD_WITH_HTTP_DETAILS, b2 as ACTOR_METHOD_WITH_CERTIFICATE, b3 as ReplicaRejectCode, b4 as QueryResponseStatus, b5 as isV2ResponseBody, b6 as isV3ResponseBody, b7 as RequestStatusResponseStatus, b8 as IC_ROOT_KEY, b9 as HttpAgent, ba as calculateIngressExpiry, bb as makeNonce, bc as JSON_KEY_EXPIRY, bd as Expiry, be as makeNonceTransform, bf as httpHeadersTransform, bg as Endpoint, bh as SubmitRequestType, bi as ReadRequestType, bj as SignIdentity, bk as AnonymousIdentity, bl as NodeType, bm as Certificate, bn as lookupResultToBuffer, bo as reconstruct, bp as domain_sep, bq as LookupPathStatus, br as LookupSubtreeStatus, bs as LookupLabelStatus, bt as lookup_path, bu as lookup_subtree, bv as flatten_forks, bw as find_label, bx as check_canister_ranges, by as encodeLenBytes, bz as encodeLen, bA as decodeLenBytes, bB as decodeLen, bC as ED25519_OID, bD as wrapDER, bE as unwrapDER, bF as ErrorKindEnum, bG as AgentError, bH as TrustError, bI as ProtocolError, bJ as RejectError, bK as TransportError, bL as ExternalError, bM as InputError, bN as UnknownError, bO as CertificateVerificationErrorCode, bP as CertificateTimeErrorCode, bQ as CertificateHasTooManyDelegationsErrorCode, bR as CertificateNotAuthorizedErrorCode, bS as LookupErrorCode, bT as MalformedLookupFoundValueErrorCode, bU as MissingLookupValueErrorCode, bV as DerKeyLengthMismatchErrorCode, bW as DerPrefixMismatchErrorCode, bX as DerDecodeLengthMismatchErrorCode, bY as DerDecodeErrorCode, bZ as DerEncodeErrorCode, b_ as CborDecodeErrorCode, b$ as CborEncodeErrorCode, c0 as TimeoutWaitingForResponseErrorCode, c1 as CertificateOutdatedErrorCode, c2 as CertifiedRejectErrorCode, c3 as UncertifiedRejectErrorCode, c4 as UncertifiedRejectUpdateErrorCode, c5 as RequestStatusDoneNoReplyErrorCode, c6 as MissingRootKeyErrorCode, c7 as HashValueErrorCode, c8 as HttpDefaultFetchErrorCode, c9 as IdentityInvalidErrorCode, ca as IngressExpiryInvalidErrorCode, cb as CreateHttpAgentErrorCode, cc as MalformedSignatureErrorCode, cd as MissingSignatureErrorCode, ce as MalformedPublicKeyErrorCode, cf as QuerySignatureVerificationFailedErrorCode, cg as UnexpectedErrorCode, ch as HashTreeDecodeErrorCode, ci as HttpErrorCode, cj as HttpV3ApiNotSupportedErrorCode, ck as HttpFetchErrorCode, cl as MissingCanisterIdErrorCode, cm as InvalidReadStateRequestErrorCode, cn as ExpiryJsonDeserializeErrorCode, co as UNREACHABLE_ERROR, cp as Observable, cq as ObservableLog, cr as Ed25519PublicKey, cs as hashValue, ct as requestIdOf, cu as hashOfMap, cv as blsVerify, cw as uint8FromBufLike, cx as uint8Equals, cy as randomNumber, cz as DEFAULT_POLLING_OPTIONS, cA as pollForResponse, cB as constructRequest, cC as defaultStrategy } from "./index-DVrwA8ch.js";
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
