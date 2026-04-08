import { useActor, useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useCallback, useState } from "react";
import { createActor } from "../backend";

export function useBlobStorage() {
  const { actor } = useActor(createActor);
  const { identity } = useInternetIdentity();
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const uploadFile = useCallback(
    async (file: File): Promise<string> => {
      if (!actor || !identity) throw new Error("Not authenticated");
      // Base64 fallback for environments without StorageClient
      setIsUploading(true);
      setUploadProgress(0);
      try {
        return await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            setUploadProgress(100);
            resolve(e.target?.result as string);
          };
          reader.onerror = () => reject(new Error("Failed to read file"));
          reader.readAsDataURL(file);
        });
      } finally {
        setIsUploading(false);
        setUploadProgress(0);
      }
    },
    [actor, identity],
  );

  return { uploadFile, uploadProgress, isUploading };
}
