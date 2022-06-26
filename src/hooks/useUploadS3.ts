import { useMutation } from 'react-query';


interface UploadS3Payload {
  url: string;
  file: any;
}

interface UploadResponse {
  url: string;
  status: number;
}

async function upload(payload: UploadS3Payload): Promise<UploadResponse> {
  const { url, file } = payload;

  try {
    const option = {
      method: "PUT",
      body: file,
      headers: {
        'Content-Type': file.type as string,
      }
    }

    const data = await fetch(url, option) as UploadResponse;

    return data;

  } catch (error) {
    console.error(error);
    // throw error;
    throw error;
  }
}

export function useUploadS3() {
  return useMutation(
    (payload: UploadS3Payload) => upload(payload),
  )
}
