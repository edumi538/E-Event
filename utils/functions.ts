import { ChangeEvent } from "react";

export function GenerateBlobUrl(e: ChangeEvent<HTMLInputElement>): {
  objectUrl: string | undefined;
  selectedFile: Blob | undefined;
} {
  if (e.target.files && e.target.files.length > 0) {
    const selectedFile: Blob = e.target.files[0];
    const objectUrl = window.URL.createObjectURL(selectedFile);
    return { objectUrl: objectUrl, selectedFile: selectedFile };
  } else {
    return { objectUrl: "", selectedFile: undefined };
  }
}

export function truncate(str?: string, maxlength?: number) {
  if (maxlength) {
    if (str && str.length > maxlength) {
      return str.slice(0, maxlength - 1) + "…";
    }
    return str;
  }
}
