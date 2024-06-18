import { Page } from "./page";

export interface SharedPageProps {
    page: Page;
    draftMode: boolean;
    token?: string;
  }