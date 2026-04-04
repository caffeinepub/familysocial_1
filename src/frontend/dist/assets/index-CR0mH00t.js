import { k as createLucideIcon, be as IC_REQUEST_DOMAIN_SEPARATOR, bf as IC_RESPONSE_DOMAIN_SEPARATOR, bg as IC_REQUEST_AUTH_DELEGATION_DOMAIN_SEPARATOR, bh as Actor, bi as ACTOR_METHOD_WITH_HTTP_DETAILS, bj as ACTOR_METHOD_WITH_CERTIFICATE, bk as ReplicaRejectCode, bl as QueryResponseStatus, bm as isV2ResponseBody, bn as isV3ResponseBody, bo as RequestStatusResponseStatus, bp as IC_ROOT_KEY, bq as HttpAgent, br as calculateIngressExpiry, bs as makeNonce, bt as JSON_KEY_EXPIRY, bu as Expiry, bv as makeNonceTransform, bw as httpHeadersTransform, bx as Endpoint, by as SubmitRequestType, bz as ReadRequestType, bA as SignIdentity, bB as AnonymousIdentity, bC as NodeType, bD as Certificate, bE as lookupResultToBuffer, bF as reconstruct, bG as domain_sep, bH as LookupPathStatus, bI as LookupSubtreeStatus, bJ as LookupLabelStatus, bK as lookup_path, bL as lookup_subtree, bM as flatten_forks, bN as find_label, bO as check_canister_ranges, bP as encodeLenBytes, bQ as encodeLen, bR as decodeLenBytes, bS as decodeLen, bT as ED25519_OID, bU as wrapDER, bV as unwrapDER, bW as ErrorKindEnum, bX as AgentError, bY as TrustError, bZ as ProtocolError, b_ as RejectError, b$ as TransportError, c0 as ExternalError, c1 as InputError, c2 as UnknownError, c3 as CertificateVerificationErrorCode, c4 as CertificateTimeErrorCode, c5 as CertificateHasTooManyDelegationsErrorCode, c6 as CertificateNotAuthorizedErrorCode, c7 as LookupErrorCode, c8 as MalformedLookupFoundValueErrorCode, c9 as MissingLookupValueErrorCode, ca as DerKeyLengthMismatchErrorCode, cb as DerPrefixMismatchErrorCode, cc as DerDecodeLengthMismatchErrorCode, cd as DerDecodeErrorCode, ce as DerEncodeErrorCode, cf as CborDecodeErrorCode, cg as CborEncodeErrorCode, ch as TimeoutWaitingForResponseErrorCode, ci as CertificateOutdatedErrorCode, cj as CertifiedRejectErrorCode, ck as UncertifiedRejectErrorCode, cl as UncertifiedRejectUpdateErrorCode, cm as RequestStatusDoneNoReplyErrorCode, cn as MissingRootKeyErrorCode, co as HashValueErrorCode, cp as HttpDefaultFetchErrorCode, cq as IdentityInvalidErrorCode, cr as IngressExpiryInvalidErrorCode, cs as CreateHttpAgentErrorCode, ct as MalformedSignatureErrorCode, cu as MissingSignatureErrorCode, cv as MalformedPublicKeyErrorCode, cw as QuerySignatureVerificationFailedErrorCode, cx as UnexpectedErrorCode, cy as HashTreeDecodeErrorCode, cz as HttpErrorCode, cA as HttpV3ApiNotSupportedErrorCode, cB as HttpFetchErrorCode, cC as MissingCanisterIdErrorCode, cD as InvalidReadStateRequestErrorCode, cE as ExpiryJsonDeserializeErrorCode, cF as UNREACHABLE_ERROR, cG as Observable, cH as ObservableLog, cI as Ed25519PublicKey, cJ as hashValue, cK as requestIdOf, cL as hashOfMap, cM as blsVerify, cN as uint8FromBufLike, cO as uint8Equals, cP as randomNumber, cQ as DEFAULT_POLLING_OPTIONS, cR as pollForResponse, cS as constructRequest, cT as defaultStrategy } from "./index-DYjHhAAJ.js";
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
