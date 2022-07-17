import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateDisciplineInput {
    @Field()
    name: string;
}
