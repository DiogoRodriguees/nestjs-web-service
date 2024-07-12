import { JoiPipe } from 'nestjs-joi';

export class JoiPipeCustom {
  static useGroup(group: any) {
    return new JoiPipe({ group: group });
  }
}
