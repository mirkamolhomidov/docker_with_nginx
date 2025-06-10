import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Nginx sahifamga xush kelibsiz'
  }
}
