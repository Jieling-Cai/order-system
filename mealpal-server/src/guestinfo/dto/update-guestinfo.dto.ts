import { PartialType } from '@nestjs/mapped-types';
import { CreateGuestinfoDto } from './create-guestinfo.dto';

export class UpdateGuestinfoDto extends PartialType(CreateGuestinfoDto) {}
