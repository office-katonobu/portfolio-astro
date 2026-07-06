interface ImportMetaEnv {
  readonly VITE_ENV: string;
  readonly VITE_BUILD_TIME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}