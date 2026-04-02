import { k as createLucideIcon, bd as IC_REQUEST_DOMAIN_SEPARATOR, be as IC_RESPONSE_DOMAIN_SEPARATOR, bf as IC_REQUEST_AUTH_DELEGATION_DOMAIN_SEPARATOR, bg as Actor, bh as ACTOR_METHOD_WITH_HTTP_DETAILS, bi as ACTOR_METHOD_WITH_CERTIFICATE, bj as ReplicaRejectCode, bk as QueryResponseStatus, bl as isV2ResponseBody, bm as isV3ResponseBody, bn as RequestStatusResponseStatus, bo as IC_ROOT_KEY, bp as HttpAgent, bq as calculateIngressExpiry, br as makeNonce, bs as JSON_KEY_EXPIRY, bt as Expiry, bu as makeNonceTransform, bv as httpHeadersTransform, bw as Endpoint, bx as SubmitRequestType, by as ReadRequestType, bz as SignIdentity, bA as AnonymousIdentity, bB as NodeType, bC as Certificate, bD as lookupResultToBuffer, bE as reconstruct, bF as domain_sep, bG as LookupPathStatus, bH as LookupSubtreeStatus, bI as LookupLabelStatus, bJ as lookup_path, bK as lookup_subtree, bL as flatten_forks, bM as find_label, bN as check_canister_ranges, bO as encodeLenBytes, bP as encodeLen, bQ as decodeLenBytes, bR as decodeLen, bS as ED25519_OID, bT as wrapDER, bU as unwrapDER, bV as ErrorKindEnum, bW as AgentError, bX as TrustError, bY as ProtocolError, bZ as RejectError, b_ as TransportError, b$ as ExternalError, c0 as InputError, c1 as UnknownError, c2 as CertificateVerificationErrorCode, c3 as CertificateTimeErrorCode, c4 as CertificateHasTooManyDelegationsErrorCode, c5 as CertificateNotAuthorizedErrorCode, c6 as LookupErrorCode, c7 as MalformedLookupFoundValueErrorCode, c8 as MissingLookupValueErrorCode, c9 as DerKeyLengthMismatchErrorCode, ca as DerPrefixMismatchErrorCode, cb as DerDecodeLengthMismatchErrorCode, cc as DerDecodeErrorCode, cd as DerEncodeErrorCode, ce as CborDecodeErrorCode, cf as CborEncodeErrorCode, cg as TimeoutWaitingForResponseErrorCode, ch as CertificateOutdatedErrorCode, ci as CertifiedRejectErrorCode, cj as UncertifiedRejectErrorCode, ck as UncertifiedRejectUpdateErrorCode, cl as RequestStatusDoneNoReplyErrorCode, cm as MissingRootKeyErrorCode, cn as HashValueErrorCode, co as HttpDefaultFetchErrorCode, cp as IdentityInvalidErrorCode, cq as IngressExpiryInvalidErrorCode, cr as CreateHttpAgentErrorCode, cs as MalformedSignatureErrorCode, ct as MissingSignatureErrorCode, cu as MalformedPublicKeyErrorCode, cv as QuerySignatureVerificationFailedErrorCode, cw as UnexpectedErrorCode, cx as HashTreeDecodeErrorCode, cy as HttpErrorCode, cz as HttpV3ApiNotSupportedErrorCode, cA as HttpFetchErrorCode, cB as MissingCanisterIdErrorCode, cC as InvalidReadStateRequestErrorCode, cD as ExpiryJsonDeserializeErrorCode, cE as UNREACHABLE_ERROR, cF as Observable, cG as ObservableLog, cH as Ed25519PublicKey, cI as hashValue, cJ as requestIdOf, cK as hashOfMap, cL as blsVerify, cM as uint8FromBufLike, cN as uint8Equals, cO as randomNumber, cP as DEFAULT_POLLING_OPTIONS, cQ as pollForResponse, cR as constructRequest, cS as defaultStrategy } from "./index-BUwiR49K.js";
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
