export interface GlobalFrontend {
  nextFetch(
    action: string,
    data?: {},
    options?: PosFetchOption = {},
  ): Promise<any>;
}

// extend Window definition
declare global {
  interface Window {
    frontend: GlobalFrontend;
  }
}
