import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType('Base')
export class BaseDTO {
    @FilterableField()
    id: number;

    @FilterableField()
    createdAt: Date;

    @FilterableField()
    updatedAt: Date;

    @FilterableField()
    deletedAt: Date;
}
