import { AuthenticationParams } from '../../../domain/usecases/authentication';
import { HttpPostClient } from '../../protocols/http/http-post-client';

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient,
  ) {}

  async auth(params: AuthenticationParams): Promise<void> {
    this.httpPostClient.post({
      url: this.url,
      body: params,
    });
  }
}
