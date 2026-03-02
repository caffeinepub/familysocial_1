import { useCallback, useState } from "react";
import { loadConfig } from "../config";
import { StorageClient } from "../utils/StorageClient";
import { useActor } from "./useActor";
import { useInternetIdentity } from "./useInternetIdentity";

export function useBlobStorage() {
  const { actor } = useActor();
  const { identity } = useInternetIdentity();
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const uploadFile = useCallback(
    async (file: File): Promise<string> => {
      if (!actor || !identity) throw new Error("Not authenticated");

      const config = await loadConfig();
      const { HttpAgent } = await import("@icp-sdk/core/agent");

      const agent = await HttpAgent.create({
        identity,
        host: "https://ic0.app",
      });

      const storageClient = new StorageClient(
        "profile-photos",
        config.storage_gateway_url || "",
        config.backend_canister_id || "",
        config.project_id || "",
        agent,
      );

      setIsUploading(true);
      setUploadProgress(0);

      try {
        const bytes = new Uint8Array(await file.arrayBuffer());
        const { hash } = await storageClient.putFile(bytes, (pct) => {
          setUploadProgress(pct);
        });
        const url = await storageClient.getDirectURL(hash);
        return url;
      } finally {
        setIsUploading(false);
        setUploadProgress(0);
      }
    },
    [actor, identity],
  );

  return { uploadFile, uploadProgress, isUploading };
}
