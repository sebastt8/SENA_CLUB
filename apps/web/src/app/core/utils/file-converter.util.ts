export function fileToBase64(
  file: File | null,
  config?: { onlyBase64?: boolean }
): Promise<string> {
  if (!file) return Promise.resolve('');

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      resolve(config?.onlyBase64 ? result.split(',')[1] : result);
    };
    reader.onerror = (error) => reject(error);
  });
}
