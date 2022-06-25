import { Module } from '@nestjs/common';
import { AuthRequest } from './auth.request';

@Module({
    providers:[AuthRequest],
    exports:[AuthRequest]
})
export class HelperModule {}
