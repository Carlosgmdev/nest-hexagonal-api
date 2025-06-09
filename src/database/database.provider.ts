import { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';

export const PG_CONNECTION: string = 'PG_CONNECTION';

export const databaseProvider: Provider = {
    provide: PG_CONNECTION,
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => {
        return new Pool({
            host: configService.get<string>('DB_HOST'),
            port: configService.get<number>('DB_PORT'),
            user: configService.get<string>('DB_USER'),
            password: configService.get<string>('DB_PASSWORD'),
            // database: configService.get<string>('DB_DATABASE'),
        });
    },
};
