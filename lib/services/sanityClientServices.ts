import {
  SanityClient,
  SanityDocument,
  SanityDocumentStub,
} from "@sanity/client";
export type SanityClientServiceResponse<P> = Partial<P> & {
  clientError?: unknown;
};
export class SanityClientService {
  public static async createMessageSendRequest({
    doc,
    client,
  }: {
    doc: Record<string, unknown>;
    client: SanityClient;
  }): Promise<
    SanityClientServiceResponse<SanityDocument<Record<string, any>>>
  > {
    const document: SanityDocumentStub = {
      _type: "messageSendRequest",
      ...doc,
    };
    try {
      const res = await client.create(document);
      return res;
    } catch (error) {
      return { clientError: error };
    }
  }
}
