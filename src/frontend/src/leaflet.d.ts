// Ambient type declarations for leaflet and react-leaflet
// These packages are loaded at runtime; this prevents typecheck errors.
declare module "leaflet" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const L: any;
  export default L;
  export * from "leaflet";
}
declare module "leaflet/dist/leaflet.css" {}
declare module "leaflet/dist/images/marker-icon.png" {
  const src: string;
  export default src;
}
declare module "leaflet/dist/images/marker-icon-2x.png" {
  const src: string;
  export default src;
}
declare module "leaflet/dist/images/marker-shadow.png" {
  const src: string;
  export default src;
}
declare module "react-leaflet" {
  import type React from "react";
  export function MapContainer(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props: Record<string, any> & { children?: React.ReactNode },
  ): React.JSX.Element;
  export function TileLayer(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props: Record<string, any>,
  ): React.JSX.Element;
  export function Marker(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props: Record<string, any> & { children?: React.ReactNode },
  ): React.JSX.Element;
  export function CircleMarker(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props: Record<string, any> & { children?: React.ReactNode },
  ): React.JSX.Element;
  export function Popup(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props: Record<string, any> & { children?: React.ReactNode },
  ): React.JSX.Element;
  export function LayersControl(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props: Record<string, any> & { children?: React.ReactNode },
  ): React.JSX.Element;
  export function useMap(): unknown;
}
