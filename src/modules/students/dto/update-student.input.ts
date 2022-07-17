import { CreateStudentInput } from './create-student.input';
import { InputType, Field, PartialType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateStudentInput extends PartialType(CreateStudentInput) {
    @Field(() => Int)
    id: number;
}
