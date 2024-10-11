import { PartialType } from '@nestjs/mapped-types';
import { CreateRegisterContractorsWorkDto } from './create-register_contractors_work.dto';

export class UpdateRegisterContractorsWorkDto extends PartialType(CreateRegisterContractorsWorkDto) {}
