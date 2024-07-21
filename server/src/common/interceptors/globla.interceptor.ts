import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class GlobalInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    Logger.log(request.path, request.method);

    const now = Date.now();
    return next.handle().pipe(tap(() => Logger.log(`${request.path} ... ${Date.now() - now}ms`)));
  }
}
