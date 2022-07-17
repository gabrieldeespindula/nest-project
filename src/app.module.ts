import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsModule } from './modules/students/students.module';
import { Student } from './modules/students/entities/student.entity';
import { DisciplinesModule } from './modules/disciplines/disciplines.module';
import { Discipline } from './modules/disciplines/entities/discipline.entity';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            sortSchema: true,
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '1234',
            database: 'postgres',
            entities: [Student, Discipline],
            synchronize: true,
        }),
        StudentsModule,
        DisciplinesModule,
    ],
    providers: [AppService],
})
export class AppModule {}
