import { k as createLucideIcon, b8 as IC_REQUEST_DOMAIN_SEPARATOR, b9 as IC_RESPONSE_DOMAIN_SEPARATOR, ba as IC_REQUEST_AUTH_DELEGATION_DOMAIN_SEPARATOR, bb as Actor, bc as ACTOR_METHOD_WITH_HTTP_DETAILS, bd as ACTOR_METHOD_WITH_CERTIFICATE, be as ReplicaRejectCode, bf as QueryResponseStatus, bg as isV2ResponseBody, bh as isV3ResponseBody, bi as RequestStatusResponseStatus, bj as IC_ROOT_KEY, bk as HttpAgent, bl as calculateIngressExpiry, bm as makeNonce, bn as JSON_KEY_EXPIRY, bo as Expiry, bp as makeNonceTransform, bq as httpHeadersTransform, br as Endpoint, bs as SubmitRequestType, bt as ReadRequestType, bu as SignIdentity, bv as AnonymousIdentity, bw as NodeType, bx as Certificate, by as lookupResultToBuffer, bz as reconstruct, bA as domain_sep, bB as LookupPathStatus, bC as LookupSubtreeStatus, bD as LookupLabelStatus, bE as lookup_path, bF as lookup_subtree, bG as flatten_forks, bH as find_label, bI as check_canister_ranges, bJ as encodeLenBytes, bK as encodeLen, bL as decodeLenBytes, bM as decodeLen, bN as ED25519_OID, bO as wrapDER, bP as unwrapDER, bQ as ErrorKindEnum, bR as AgentError, bS as TrustError, bT as ProtocolError, bU as RejectError, bV as TransportError, bW as ExternalError, bX as InputError, bY as UnknownError, bZ as CertificateVerificationErrorCode, b_ as CertificateTimeErrorCode, b$ as CertificateHasTooManyDelegationsErrorCode, c0 as CertificateNotAuthorizedErrorCode, c1 as LookupErrorCode, c2 as MalformedLookupFoundValueErrorCode, c3 as MissingLookupValueErrorCode, c4 as DerKeyLengthMismatchErrorCode, c5 as DerPrefixMismatchErrorCode, c6 as DerDecodeLengthMismatchErrorCode, c7 as DerDecodeErrorCode, c8 as DerEncodeErrorCode, c9 as CborDecodeErrorCode, ca as CborEncodeErrorCode, cb as TimeoutWaitingForResponseErrorCode, cc as CertificateOutdatedErrorCode, cd as CertifiedRejectErrorCode, ce as UncertifiedRejectErrorCode, cf as UncertifiedRejectUpdateErrorCode, cg as RequestStatusDoneNoReplyErrorCode, ch as MissingRootKeyErrorCode, ci as HashValueErrorCode, cj as HttpDefaultFetchErrorCode, ck as IdentityInvalidErrorCode, cl as IngressExpiryInvalidErrorCode, cm as CreateHttpAgentErrorCode, cn as MalformedSignatureErrorCode, co as MissingSignatureErrorCode, cp as MalformedPublicKeyErrorCode, cq as QuerySignatureVerificationFailedErrorCode, cr as UnexpectedErrorCode, cs as HashTreeDecodeErrorCode, ct as HttpErrorCode, cu as HttpV3ApiNotSupportedErrorCode, cv as HttpFetchErrorCode, cw as MissingCanisterIdErrorCode, cx as InvalidReadStateRequestErrorCode, cy as ExpiryJsonDeserializeErrorCode, cz as UNREACHABLE_ERROR, cA as Observable, cB as ObservableLog, cC as Ed25519PublicKey, cD as hashValue, cE as requestIdOf, cF as hashOfMap, cG as blsVerify, cH as uint8FromBufLike, cI as uint8Equals, cJ as randomNumber, cK as DEFAULT_POLLING_OPTIONS, cL as pollForResponse, cM as constructRequest, cN as defaultStrategy } from "./index-C-O55065.js";
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
