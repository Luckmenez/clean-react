import { describe, test, expect } from 'vitest';

interface HttpPostClient {
    post(url: string): Promise<void>;
}

class RemoteAuthentication {
    constructor(
        private readonly url: string,
        private readonly httpPostClient: HttpPostClient,
    ) {}

    auth(): void {
        this.httpPostClient.post(this.url);
    }
}

describe('RemoteAuthentication', () => {
    test('Should call HttpPostClient with correct URL', () => {
        class HttpPostClientSpy implements HttpPostClient {
            url?: string;

            async post(url: string): Promise<void> {
                this.url = url;
                return Promise.resolve();
            }
        }
        const url = 'any_url';
        const httpPostClientSpy = new HttpPostClientSpy();
        const sut = new RemoteAuthentication(url, httpPostClientSpy);
        sut.auth();
        expect(httpPostClientSpy.url).toBe(url);
    });
});
