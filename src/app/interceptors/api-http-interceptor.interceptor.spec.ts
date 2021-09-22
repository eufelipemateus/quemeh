import { TestBed } from '@angular/core/testing';

import { ApiHttpInterceptorInterceptor } from './api-http-interceptor.interceptor';

describe('ApiHttpInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApiHttpInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApiHttpInterceptorInterceptor = TestBed.inject(ApiHttpInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
